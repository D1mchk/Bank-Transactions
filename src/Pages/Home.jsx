import { useSelector } from "react-redux";
import { AccountCard } from "../Components/AccountCard";

function Home() {
  const accounts = useSelector((state) => state.accounts.items);

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Accounts</h1>
        <p className="text-neutral-500 text-sm mt-1">Your financial overview</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
}

export default Home;
