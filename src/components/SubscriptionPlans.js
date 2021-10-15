import TableHead from "./SubscriptionTable.js/TableHead";
import TableBody from "./SubscriptionTable.js/TableBody";
import TableFooter from "./SubscriptionTable.js/TableFooter";

const SubscriptionPlans = () => {
  return (
    <table className="subscription-plan-table" cellspacing="0" cellpadding="1">
      <label className="label">Limited Time Offer</label>
      <TableHead />
      <TableBody />
      <TableFooter />
    </table>
  );
};

export default SubscriptionPlans;
