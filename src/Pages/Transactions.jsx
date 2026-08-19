import { useDispatch, useSelector } from "react-redux";
import CardInfo from "../Components/CardInfo";
import CardButton from "../Components/CardButton";
import { selectAccount } from "../States/slices/accountsSlice";

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

  console.log(selectedTransactions);

  return (
    <div className="my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardInfo>qwerty</CardInfo>
        <CardInfo>123</CardInfo>
        <CardInfo>1234567890</CardInfo>
      </div>
      <div>
        {accounts.map((account) => (
          <CardButton
            key={account.id}
            onClick={() => dispatch(selectAccount(account.id))}
          >
            {account.last4}
          </CardButton>
        ))}
        <div>
          {selectedTransactions.map((transaction) => (
            <CardInfo>{transaction.merchant}</CardInfo>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transactions;
