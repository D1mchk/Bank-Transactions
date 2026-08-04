import Paycard from "../Components/Paycard";

function Accounts() {
  return (
    <div>
      <h1>You have {"N"} cards</h1>
      <Paycard />
      <Paycard />
    </div>
  );
}

export default Accounts;
