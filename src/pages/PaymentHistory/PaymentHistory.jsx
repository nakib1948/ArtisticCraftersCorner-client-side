import usePayment from "../../hooks/usePayment";
import HeaderTitle from "../Shared/HeaderTitle/HeaderTitle";
import Loader from "../Shared/Loader/Loader";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const [data, isLoading, error, refetch] = usePayment();

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data.length)
    return <HeaderTitle title="You have no payment history"></HeaderTitle>;

  return (
    <div className="card">
      <Helmet>
        <title>ArtisticCraftersCorner | PaymentHistory</title>
      </Helmet>
      <HeaderTitle title="Payment History"></HeaderTitle>

      <div className="overflow-x-auto mt-10 card-body bg-slate-300 rounded-xl">
        <table className="table">
          <thead>
            <tr className="text-base">
              <th className="text-base text-purple ">NO.</th>
              <th className="text-base text-purple ">TransactionId</th>
              <th className="text-base text-purple ">Date</th>
              <th className="text-base text-purple ">Price</th>
              <th className="text-base text-purple ">Payment Medium</th>
              <th className="text-base text-purple ">status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((payment, index) => (
              <tr key={index} className="text-base">
                <td className="font-bold">{index + 1}</td>
                <td className="font-semibold">{payment.transactionId}</td>
                <td className="font-semibold">{payment.date}</td>
                <td className="font-semibold">{payment.price}$</td>
                <td className="font-semibold">Stripe</td>
                <td className="font-semibold text-green-500">paid</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
