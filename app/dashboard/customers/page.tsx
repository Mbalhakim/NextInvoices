// pages/customers.tsx
'use client';
import { useEffect, useState } from 'react';

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await fetch('/api/customers');
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    }

    fetchCustomers();
  }, []);

  return (
    <div>
      <h1>Customers Page</h1>
      <pre>
        {JSON.stringify(customers, null, 2)}
      </pre>
    </div>
  );
}
