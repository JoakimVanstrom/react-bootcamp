import { useState } from "react";

function ShowMe() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <button onClick={() => setFlag(!flag)}>Toggla mig</button>
      {flag && <p>Titta på mig</p>}
    </div>
  );
}

export default ShowMe;
