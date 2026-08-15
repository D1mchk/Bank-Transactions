import CardInfo from "../Components/CardInfo";

function Transactions() {
  return (
    <div className="my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardInfo>qwerty</CardInfo>
        <CardInfo>123</CardInfo>
        <CardInfo>1234567890</CardInfo>
      </div>
    </div>
  );
}

export default Transactions;
