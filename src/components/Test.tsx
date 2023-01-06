import React, { useState } from "react";

function Test() {
  const [data, setData] = useState(0);
  return (
    <div>
      <button onClick={() => setData((prevData) => (prevData += 1))}>
        Test: {data}
      </button>
    </div>
  );
}

export default Test;
