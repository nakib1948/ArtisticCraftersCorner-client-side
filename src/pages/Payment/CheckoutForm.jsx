import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const CheckoutForm = ({price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const {user}=useContext(AuthContext)
  const [axiosSecure]=useAxiosSecure()
  const [cardError,setCardError]=useState('')
  const [clientSecret, setClientSecret] = useState("");
  const [processing,setProcessing]=useState(false)
  const [transactionId,setTransactionId]=useState('')
  useEffect(()=>{
    axiosSecure.post('/create-payment-intent',{price})
    .then(res=>{
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
    })
  },[price,axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    setProcessing(true)

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        setCardError(error.message)
      } else {
        setCardError('')
      }

      const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
             email:user?.email || 'unknown',
             name:user?.displayName || 'anonymous'
            },
          },
        },
      );

     if(confirmError){
        console.log(confirmError)
     }
     console.log(paymentIntent)
     setProcessing(false)
     if(paymentIntent.status=='succeeded')
     {
        setTransactionId(paymentIntent.id)
     }


  };

  return (
    

<div className="card mt-10 w-96 bg-base-300 text-neutral-content">
  <div className="card-body text-center">
  <form  onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#FFFFFF",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn  bg-deepred text-white font-bold mt-5 w-1/3" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
  </div>
  {cardError && <p className="text-red-500 p-2">{cardError}</p> }
  {transactionId && <p className="text-green-500 p-2">Transaction complete: {transactionId}</p> }
</div>
    
  );
};

export default CheckoutForm;
