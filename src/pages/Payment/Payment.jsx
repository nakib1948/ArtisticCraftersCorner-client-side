import React from "react";
import HeaderTitle from "../Shared/HeaderTitle/HeaderTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import MyclassCart from "../../hooks/MyclassCart";
import Loader from "../Shared/Loader/Loader";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);

const Payment = () => {
  const [data, isLoading, error, refetch] = MyclassCart();

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const total = data.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div>
      <Helmet>
        <title>ArtisticCraftersCorner | Payments</title>
      </Helmet>
      <HeaderTitle title="Complete Your Payment"></HeaderTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm data={data} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
