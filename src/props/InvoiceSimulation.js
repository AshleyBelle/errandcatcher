import React, { useState } from 'react';
import Invoice from './Invoice'; // Assuming Invoice component is in a separate file

const InvoiceSimulation = () => {
  const [open, setOpen] = useState(false);

  // Simulated invoice data
  const simulatedInvoice = {
    address: "123 Main Street",
    description: "Services rendered",
    attributes: {
      line_items: [
        { name: "Service 1", quantity: 1, amount: 5000 }, // Assuming amount is in cents
        { name: "Service 2", quantity: 2, amount: 3000 }
      ]
    },
    merchant: "Your Business",
    payment_method_types: ["Credit Card", "PayPal"],
    success_url: "http://example.com/success",
    cancel_url: "http://example.com/cancel",
    payment_intent: { id: "payment_intent_123" }
  };

  // Function to handle opening and closing the modal
  const handleToggleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleToggleModal}>Open Invoice</button>
      <Invoice open={open} onClose={handleToggleModal} invoice={simulatedInvoice} />
    </div>
  );
};

export default InvoiceSimulation;
