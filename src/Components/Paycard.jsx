import { useState } from "react";

function Paycard() {
  const [open, isOpen] = useState(false);
  return (
    <div>
      <h2>{"NAME CARD"}</h2>
      <button onClick={() => isOpen(!open)}>show more</button>
      {open && (
        <div>
          <p>{"NUMBER CARD"}</p>
          <p>{"DATE"}</p>
          <p>{"CVC"}</p>
        </div>
      )}
    </div>
  );
}

export default Paycard;
