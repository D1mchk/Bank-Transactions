import { useDispatch, useSelector } from "react-redux";
import { AccountCard } from "../Components/AccountCard";
import CardInfo from "../UI/CardInfo";
import { selectAccount } from "../States/slices/accountsSlice";
import { useNavigate } from "react-router-dom";

function Accounts() {
  const accounts = useSelector((state) => state.accounts.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(account) {
    dispatch(selectAccount(account.id));
    navigate("/accounts");
  }

  const balance = accounts.reduce((sum, account) => sum + account.balance, 0);
  const positiveBalance = accounts
    .filter((account) => account.type != "credit")
    .reduce((sum, account) => sum + account.balance, 0);

  const creditCard = accounts.filter((account) => account.type == "credit");

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Accounts</h1>
        <p className="text-neutral-500 text-sm mt-1">Your financial overview</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
        <CardInfo>
          <div className="text-xs uppercase tracking-wider text-neutral-500">
            new worth
          </div>

          <div className={`text-3xl font-bold font-mono text-purple-400`}>
            ${balance}
          </div>
          <div className="text-xs tracking-wider text-neutral-500">
            Across all accounts
          </div>
        </CardInfo>

        <CardInfo>
          <div className="text-xs uppercase tracking-wider text-neutral-500">
            total assets
          </div>
          <div className={`text-3xl font-bold font-mono text-cyan-400`}>
            ${positiveBalance}
          </div>
          <div className="text-xs tracking-wider text-neutral-500">
            Liquid + investments
          </div>
        </CardInfo>

        <CardInfo>
          <div className="text-xs uppercase tracking-wider text-neutral-500">
            credit balance
          </div>
          <div className={`text-3xl font-bold font-mono text-red-400`}>
            ${creditCard[0].balance * -1}
          </div>
          <div className="text-xs tracking-wider text-neutral-500">
            Outstanding debt
          </div>
        </CardInfo>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map((account) => (
          <AccountCard
            onClick={() => handleClick(account)}
            key={account.id}
            account={account}
          />
        ))}
      </div>
    </div>
  );
}

export default Accounts;
