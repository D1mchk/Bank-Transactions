# 💳 Personal Banking Dashboard

A modern and responsive personal banking dashboard built to help users manage their accounts, track transactions, filter spending, and analyze financial activity.

The application follows a clean fintech design inspired by products like Revolut, N26, and Linear, with a strong focus on readability, simplicity, and financial data visualization.

---

## ✨ Features

### 🏦 Accounts Overview

* View all bank accounts in a clean card-based layout
* Display account name, type, and current balance
* Card-inspired visual design
* Quickly navigate to individual account details

### 💸 Transaction History

* View a complete list of transactions
* Display merchant, date, category, transaction type, and amount
* Clear visual distinction between:

  * 🟢 Credits
  * 🔴 Debits
* Category-based transaction organization

### 🔍 Transaction Filters

Users can filter transactions by:

* Date range
* Category
* Transaction amount
* Transaction type

### 📊 Analytics

Visualize financial activity with interactive charts:

* Spending breakdown by category
* Balance trend over time
* Financial summary cards
* Clear and readable data visualization

---

## 🎨 Design

The UI follows a modern dark fintech aesthetic with:

* Dark mode interface
* Clean and minimal layout
* Rounded cards and components
* Soft borders and shadows
* Generous spacing
* Clear typography hierarchy
* Accent colors for important actions and financial data
* Responsive desktop and mobile layouts

---

## 🛠️ Tech Stack

* **React**
* **Vite**
* **Tailwind CSS**
* **JavaScript**
* **Lucide React** — icons
* **Recharts** — data visualization
* **React Router** — navigation
* **Redux Toolkit** — state management

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── AccountCard.jsx
│   ├── TransactionItem.jsx
│   ├── TransactionList.jsx
│   ├── FilterDropdown.jsx
│   ├── SummaryCard.jsx
│   └── charts/
│
├── pages/
│   ├── Accounts.jsx
│   ├── AccountDetails.jsx
│   └── Analytics.jsx
│
├── store/
│   ├── accounts.js
│   ├── transactions.js
│   └── categories.js
│
├── layouts/
│   └── DashboardLayout.jsx
│
├── App.jsx
└── main.jsx
```

---

## 📸 Main Pages

### Accounts Overview

The main dashboard displays all available accounts with their current balances and account information.

Users can quickly navigate between their bank accounts and get an overview of their finances.

### Account Details

Each account has its own transaction history.

Transactions include:

* Merchant name
* Date
* Category
* Transaction type
* Amount

Users can filter transactions to quickly find specific financial operations.

### Analytics

The analytics page provides an overview of spending habits and financial trends.

It includes:

* Spending by category
* Balance history
* Financial statistics
* Visual charts and summaries

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/personal-banking-dashboard.git
```

Navigate to the project directory:

```bash
cd personal-banking-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

---

## 🧩 Example Transaction

Transactions are stored as objects containing all the necessary information:

```js
{
  id: 1,
  accountId: 1,
  merchant: "Stripe Inc",
  date: "2026-08-05",
  categoryId: null,
  type: "credit",
  amount: 4200.0,
}
```

Example transaction types:

```text
credit → money received
debit  → money spent
```

---

## 🎯 Project Goals

The main goal of this project is to practice building a realistic financial dashboard while working with:

* Component-based architecture
* Reusable UI components
* State management
* Data filtering
* Dynamic rendering with `map()`
* Routing between pages
* Financial data visualization
* Responsive design
* Modern UI development with Tailwind CSS

---

## 📱 Responsive Design

The application is designed primarily for desktop use but adapts to smaller screen sizes.

The layout adjusts dynamically for:

* Desktop
* Tablet
* Mobile devices

---

## 🔮 Future Improvements

Possible future features include:

* [ ] Add new transactions
* [ ] Edit and delete transactions
* [ ] Real authentication
* [ ] Backend integration
* [ ] Persistent database storage
* [ ] Real bank API integration
* [ ] Export transactions to CSV
* [ ] Multi-currency support
* [ ] Light mode
* [ ] Advanced analytics
* [ ] Budget planning

---

## 👤 Author

Created by **Dmitry**

---

⭐ If you like this project, consider giving it a star!
