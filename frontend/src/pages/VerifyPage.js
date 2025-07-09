import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VerifyPage() {
  const { token } = useParams();
  const [message, setMessage] = useState("Verifying...");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_API}/verify/${token}`)
      .then(res => res.json())
      .then(data => {
        setMessage(data.msg);
      });
  }, [token]);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{message}</p>
    </div>
  );
}
