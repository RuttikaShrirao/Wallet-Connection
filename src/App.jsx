import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wallet-banner" >
      <img src="walletconnect-logo.png" alt="logo-img"  className="wallet-logo"/>
      <w3m-button />
      <div  className="wallet-details">
      <p>Your Balance is:</p>
      <w3m-account-button balance="show"/>
      </div>
      <div  className="wallet-details">
      <p>You can Switch your Network from here:</p>
      <w3m-network-button />
      </div>
      </div>
    </>
  );
}

export default App;
