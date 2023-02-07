import axios from "axios";
import { useState } from "react";

interface BalanceData {
  id: number;
  user_id: number;
  current_balance: string;
  savings: string;
}

interface HomePageProps {
  userID: number | undefined;
}
function HomePage(props: HomePageProps): JSX.Element {
  const [balances, setBalances] = useState<BalanceData>();
  const url =
    process.env.NODE_ENV === "production"
      ? "https://lbm-banking-sia-demo.onrender.com"
      : "http://localhost:4000";
  async function fetchBalances() {
    const balanceData = await axios.get(`${url}/balances/${props.userID}`);
    console.log(balanceData);
    setBalances(balanceData.data[0]);
    console.log(balances);
  }
  function triggerAlert() {
    alert("Funds transferred!");
  }
  function triggerAltAlert() {
    alert("All funds transferred to LBM, thanks!");
  }
  return (
    <>
      <button className="homepage-btn" onClick={fetchBalances}>
        See Balances
      </button>
      {balances && (
        <>
          <p>Current Account:</p>
          <span>{balances.current_balance}</span>
          <p>Savings Account:</p>
          <span>{balances.savings}</span>
          <br />
          <br />
          <h4>Transfer Funds</h4>
          <p>Amount:</p>
          <input type="text" />
          <p>Sort Code:</p>
          <input type="text" />
          <p>Account Number:</p>
          <input type="text" />
          <p>*All data is safely secured in our impenetrable database!*</p>
          <button className="homepage-btn" onClick={triggerAlert}>
            Transfer
          </button>
        </>
      )}
      {props.userID === 3 && (
        <button className="bad-btn" onClick={triggerAltAlert}>
          GIVE ALL MONEY TO LBM
        </button>
      )}
    </>
  );
}

export default HomePage;
