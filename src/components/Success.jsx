import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Success = () => {
  const [searchParams] = useSearchParams(); // Destructure correctly
  const refnum = searchParams.get("reference"); // Ensure correct parameter name
  
  return (
    <div>
      <h1>Payment Done</h1>
      <p>Reference Number: {refnum ? refnum : "Not Available"}</p>
    </div>
  );
};

export default Success;
