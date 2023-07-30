import React from 'react';
import shipping from "./../../Images/shipping.png";
import refund from  "./../../Images/refund.png";
import support from  "./../../Images/support.png";
import "./../Styles/policy.css";

const Policy = () => {
  return (
    <div className="shippringContainer">
        <div className="shippingContainerItems">
          <img src={`${shipping}`} alt="Shipping Logo" />
          <h3>FREE SHIPPING</h3>
          <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your credit card (or original method of payment).You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>
        </div>
        <div className="shippingContainerItems">
          <img src={`${refund}`} alt="Shipping Logo" />
          <h3>100% REFUND</h3>
          <p>All orders are processed within 2–3 business days of receipt. Orders are not processed or shipped from Friday, 12 pm EST through Sunday, or holidays.

If we are experiencing a high volume of orders, shipments may be delayed by a few days. You will receive a Shipment Confirmation email with your tracking number once your order has shipped. The tracking number will be active within 24 hours.</p>
        </div>
        <div className="shippingContainerItems">
          <img src={`${support}`} alt="Shipping Logo" />
          <h3>SUPPORT 24/7</h3>
          <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your credit card (or original method of payment).You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>
        </div>
      </div>
  )
}

export default Policy