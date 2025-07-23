// Example: src/components/PayUForm.jsx
import React, { useState } from "react";
import axios from "axios";

const PayUForm = () => {
  const [form, setForm] = useState({
    key: "YOUR_MERCHANT_KEY",
    txnid: "txn" + Date.now(),
    amount: "100.00",
    productinfo: "AnimxStore Product",
    firstname: "otaku",
    email: "sayko3233@gmail.com",
    phone: "8010126180",
    surl: "http://localhost:3000/payment-success", // Success URL
    furl: "http://localhost:3000/payment-fail",    // Failure URL
    salt: "YOUR_MERCHANT_SALT",
  });
  const [hash, setHash] = useState("");

  const getHash = async () => {
    const res = await axios.post("http://localhost:5000/generate-hash", form);
    setHash(res.data.hash);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getHash();
    setTimeout(() => {
      document.getElementById("payuForm").submit();
    }, 500);
  };

  return (
    <form
      id="payuForm"
      method="post"
      action="https://secure.payu.in/_payment"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="key" value={form.key} />
      <input type="hidden" name="txnid" value={form.txnid} />
      <input type="hidden" name="amount" value={form.amount} />
      <input type="hidden" name="productinfo" value={form.productinfo} />
      <input type="hidden" name="firstname" value={form.firstname} />
      <input type="hidden" name="email" value={form.email} />
      <input type="hidden" name="phone" value={form.phone} />
      <input type="hidden" name="surl" value={form.surl} />
      <input type="hidden" name="furl" value={form.furl} />
      <input type="hidden" name="hash" value={hash} />
      <button type="submit">Pay with PayU</button>
    </form>
  );
};

export default PayUForm;