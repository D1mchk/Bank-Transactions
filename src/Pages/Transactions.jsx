import { useDispatch, useSelector } from "react-redux";
import CardInfo from "../UI/CardInfo";
import CardButton from "../UI/CardButton";
import { selectAccount } from "../States/slices/accountsSlice";
import TransactionItem from "../Components/TransactionItem";

function Transactions() {
  const dispatch = useDispatch();

  const transactions = useSelector((state) => state.transactions.items);
  const accounts = useSelector((state) => state.accounts.items);
  const selectedAccountId = useSelector(
    (state) => state.accounts.selectedAccountId
  );

  const selectedTransactions = transactions.filter(
    (transaction) => selectedAccountId == transaction.accountId
  );
  const selectedAccount = accounts.find(
    (account) => selectedAccountId == account.id
  );

  const positiveTransactions = selectedTransactions.filter(
    (transaction) => transaction.type == "debit"
  );
  const negativeTransactions = selectedTransactions.filter(
    (transaction) => transaction.type == "credit"
  );

  const sumPositiveTransactions = positiveTransactions.reduce(
    (sum, account) => sum + account.amount,
    0
  );
  const sumNegativeTransactions = negativeTransactions.reduce(
    (sum, account) => sum + account.amount,
    0
  );

  return (
    <div className="my-6">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
        <CardInfo>
          <div className="text-xs uppercase tracking-wider text-neutral-500">
            current balance
          </div>

          <div className={`text-3xl font-bold font-mono text-purple-400`}>
            $
            {selectedAccount
              ? selectedAccount.balance < 0
                ? selectedAccount.balance * -1
                : selectedAccount.balance
              : "0.00"}
          </div>
        </CardInfo>
        <CardInfo>
          <div className="text-xs uppercase tracking-wider text-neutral-500">
            money in
          </div>
          <div className={`text-3xl font-bold font-mono text-cyan-400`}>
            ${sumPositiveTransactions}
          </div>
          <div className="text-xs tracking-wider text-neutral-500">
            {positiveTransactions.length} transactions
          </div>
        </CardInfo>
        <CardInfo>
          <div className="text-xs uppercase tracking-wider text-neutral-500">
            money out
          </div>
          <div className={`text-3xl font-bold font-mono text-red-400`}>
            ${sumNegativeTransactions}
          </div>
          <div className="text-xs tracking-wider text-neutral-500">
            {negativeTransactions.length} transactions
          </div>
        </CardInfo>
      </section>
      <section className="mb-5">
        {accounts.map((account) => (
          <CardButton
            key={account.id}
            onClick={() => dispatch(selectAccount(account.id))}
          >
            {account.last4}
          </CardButton>
        ))}
      </section>
      <section>
        {selectedTransactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </section>
    </div>
  );
}

export default Transactions;
