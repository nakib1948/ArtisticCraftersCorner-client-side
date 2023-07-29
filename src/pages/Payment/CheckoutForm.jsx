import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
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
      <button className="btn  bg-deepred text-white font-bold mt-5 w-1/3" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  </div>
</div>
    
  );
};

export default CheckoutForm;
