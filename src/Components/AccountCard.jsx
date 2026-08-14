import { CardDots } from "./CardDots";
import { ChangeIndicator } from "./ChangeIndicator";

export function AccountCard({ account }) {
  const isCredit = account.type === "credit";
  const balanceColor = isCredit ? "text-red-400" : "text-white";
  const balanceDisplay = isCredit
    ? `-$${Math.abs(account.balance).toLocaleString()}`
    : `$${account.balance.toLocaleString()}`;

  return (
    <div className="bg-brand-dark border border-neutral-800 rounded-2xl p-5 flex flex-col gap-4 hover:border-white transition-colors">
      <div className="text-xs uppercase tracking-wider text-neutral-500">
        {account.type}
      </div>

      <div className="text-white font-semibold text-lg -mt-2">
        {account.name}
      </div>

      <div className={`text-3xl font-bold font-mono ${balanceColor}`}>
        {balanceDisplay}
      </div>

      <div className="flex items-center justify-between mt-1">
        <ChangeIndicator value={account.changePercent} />
        <CardDots last4={account.last4} />
      </div>
    </div>
  );
}
