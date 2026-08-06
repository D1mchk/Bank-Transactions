// mockData.js
// Фейковые данные для банковского дашборда.
// Позже эти же структуры будут приходить с реального API — просто замени
// импорт из этого файла на fetch/axios запрос с тем же форматом ответа.

export const user = {
  id: 1,
  name: "Alex Morgan",
  plan: "Premium",
  avatarUrl: null,
};

// ---------------------------------------------------------------
// Счета/карты
// type: "checking" | "savings" | "investment" | "credit"
// balance: для credit — отрицательное число (долг)
// changePercent: изменение баланса за месяц, может быть отрицательным
// ---------------------------------------------------------------
export const accounts = [
  {
    id: 1,
    type: "checking",
    name: "Main Account",
    balance: 12847.5,
    changePercent: 2.3,
    last4: "4291",
  },
  {
    id: 2,
    type: "savings",
    name: "Savings Vault",
    balance: 34210.0,
    changePercent: 0.8,
    last4: "7830",
  },
  {
    id: 3,
    type: "investment",
    name: "Portfolio",
    balance: 68430.75,
    changePercent: 5.1,
    last4: "2156",
  },
  {
    id: 4,
    type: "credit",
    name: "Platinum Card",
    balance: -2340.2,
    changePercent: -1.2,
    last4: "9914",
  },
];

// ---------------------------------------------------------------
// Категории трат — используются в transactions.categoryId
// и в легенде графика на странице Analytics
// ---------------------------------------------------------------
export const categories = [
  { id: 1, name: "Food & Dining", color: "#6366F1" },
  { id: 2, name: "Shopping", color: "#22D3EE" },
  { id: 3, name: "Transport", color: "#A855F7" },
  { id: 4, name: "Entertainment", color: "#F59E0B" },
  { id: 5, name: "Bills", color: "#22C55E" },
  { id: 6, name: "Health", color: "#F43F5E" },
];

// ---------------------------------------------------------------
// Транзакции
// accountId  — ссылка на accounts.id (с какого счёта операция)
// categoryId — ссылка на categories.id (null для дохода/переводов)
// type       — "credit" (деньги пришли) | "debit" (деньги ушли)
// amount     — всегда положительное число, знак приходит из type
// ---------------------------------------------------------------
export const transactions = [
  // --- Main Account (id: 1) ---
  {
    id: 1,
    accountId: 1,
    merchant: "Stripe Inc",
    date: "2026-08-05",
    categoryId: null,
    type: "credit",
    amount: 4200.0,
  },
  {
    id: 2,
    accountId: 1,
    merchant: "Whole Foods Market",
    date: "2026-08-05",
    categoryId: 1,
    type: "debit",
    amount: 87.42,
  },
  {
    id: 3,
    accountId: 1,
    merchant: "Netflix",
    date: "2026-08-04",
    categoryId: 4,
    type: "debit",
    amount: 17.99,
  },
  {
    id: 4,
    accountId: 1,
    merchant: "Uber",
    date: "2026-08-04",
    categoryId: 3,
    type: "debit",
    amount: 23.5,
  },
  {
    id: 5,
    accountId: 1,
    merchant: "ZARA Online",
    date: "2026-08-03",
    categoryId: 2,
    type: "debit",
    amount: 134.0,
  },
  {
    id: 6,
    accountId: 1,
    merchant: "ConEdison",
    date: "2026-08-03",
    categoryId: 5,
    type: "debit",
    amount: 112.8,
  },
  {
    id: 7,
    accountId: 1,
    merchant: "Starbucks",
    date: "2026-08-02",
    categoryId: 1,
    type: "debit",
    amount: 6.75,
  },
  {
    id: 8,
    accountId: 1,
    merchant: "Lyft",
    date: "2026-08-02",
    categoryId: 3,
    type: "debit",
    amount: 15.2,
  },
  {
    id: 9,
    accountId: 1,
    merchant: "Amazon",
    date: "2026-08-01",
    categoryId: 2,
    type: "debit",
    amount: 58.99,
  },
  {
    id: 10,
    accountId: 1,
    merchant: "CVS Pharmacy",
    date: "2026-08-01",
    categoryId: 6,
    type: "debit",
    amount: 32.1,
  },
  {
    id: 11,
    accountId: 1,
    merchant: "Payroll Inc",
    date: "2026-07-20",
    categoryId: null,
    type: "credit",
    amount: 1800.0,
  },
  {
    id: 12,
    accountId: 1,
    merchant: "Spotify",
    date: "2026-07-18",
    categoryId: 4,
    type: "debit",
    amount: 10.99,
  },

  // --- Savings Vault (id: 2) ---
  {
    id: 13,
    accountId: 2,
    merchant: "Transfer from Main Account",
    date: "2026-08-01",
    categoryId: null,
    type: "credit",
    amount: 500.0,
  },
  {
    id: 14,
    accountId: 2,
    merchant: "Interest Payment",
    date: "2026-07-31",
    categoryId: null,
    type: "credit",
    amount: 42.15,
  },

  // --- Portfolio (id: 3) ---
  {
    id: 15,
    accountId: 3,
    merchant: "Dividend Payout",
    date: "2026-08-02",
    categoryId: null,
    type: "credit",
    amount: 214.6,
  },
  {
    id: 16,
    accountId: 3,
    merchant: "Buy Order - ETF",
    date: "2026-07-28",
    categoryId: null,
    type: "debit",
    amount: 1000.0,
  },

  // --- Platinum Card (id: 4) ---
  {
    id: 17,
    accountId: 4,
    merchant: "Delta Airlines",
    date: "2026-08-04",
    categoryId: 3,
    type: "debit",
    amount: 420.0,
  },
  {
    id: 18,
    accountId: 4,
    merchant: "Best Buy",
    date: "2026-08-01",
    categoryId: 2,
    type: "debit",
    amount: 899.99,
  },
  {
    id: 19,
    accountId: 4,
    merchant: "Card Payment",
    date: "2026-07-25",
    categoryId: null,
    type: "credit",
    amount: 300.0,
  },
];

// ---------------------------------------------------------------
// Простые хелперы (пригодятся и напрямую, и как черновик
// будущих Redux-селекторов)
// ---------------------------------------------------------------

export function getAccountById(id) {
  return accounts.find((a) => a.id === id);
}

export function getCategoryById(id) {
  return categories.find((c) => c.id === id) || null;
}

export function getTransactionsByAccount(accountId) {
  return transactions.filter((t) => t.accountId === accountId);
}

// Net Worth / Total Assets / Credit Balance для страницы Accounts
export function getAccountsSummary() {
  const totalAssets = accounts
    .filter((a) => a.type !== "credit")
    .reduce((sum, a) => sum + a.balance, 0);

  const creditAccount = accounts.find((a) => a.type === "credit");
  const creditBalance = creditAccount ? creditAccount.balance : 0;

  const netWorth = totalAssets + creditBalance;

  return {
    netWorth,
    totalAssets,
    creditBalance: Math.abs(creditBalance),
  };
}

// Money In / Money Out для страницы Transactions (по конкретному счёту)
export function getMoneyInOut(accountId) {
  const accTx = getTransactionsByAccount(accountId);

  const moneyIn = accTx
    .filter((t) => t.type === "credit")
    .reduce((sum, t) => sum + t.amount, 0);

  const moneyOut = accTx
    .filter((t) => t.type === "debit")
    .reduce((sum, t) => sum + t.amount, 0);

  return {
    moneyIn,
    moneyOut,
    inCount: accTx.filter((t) => t.type === "credit").length,
    outCount: accTx.filter((t) => t.type === "debit").length,
  };
}

// Траты по категориям (для donut chart на Analytics)
export function getSpendingByCategory() {
  const debitTx = transactions.filter((t) => t.type === "debit" && t.categoryId);

  return categories
    .map((cat) => {
      const total = debitTx
        .filter((t) => t.categoryId === cat.id)
        .reduce((sum, t) => sum + t.amount, 0);
      return { ...cat, total };
    })
    .filter((cat) => cat.total > 0);
}
