// Import necessary functions and types
import { sql } from '@vercel/postgres';
import { FormattedCustomersTable, CustomerField, CustomersTableType } from './definitions';
import { formatCurrency } from './utils';

// Define the fetchAllCustomers function
async function fetchAllCustomers() {
    try {
        const data = await sql<FormattedCustomersTable>`
          SELECT
            customers.id,
            customers.name,
            customers.email,
            customers.image_url,
            COUNT(invoices.id) AS total_invoices,
            SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
            SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
          FROM customers
          LEFT JOIN invoices ON customers.id = invoices.customer_id
          GROUP BY customers.id, customers.name, customers.email, customers.image_url
          ORDER BY customers.name ASC
        `;
    
        const customers = data.rows.map((customer) => ({
          ...customer,
          total_pending: customer.total_pending,
          total_paid: customer.total_paid,
        }));
    
        console.log('All Customers:', customers); // Add this debug log
    
        return customers;
      } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to fetch all customers.');
      }
}

// Call the fetchAllCustomers function and log the output
async function testFetchAllCustomers() {
  try {
    const customers = await fetchAllCustomers();
    console.log('All Customers:', customers);
  } catch (error) {
    console.error('Error fetching all customers:', error);
  }
}

// Call the test function to execute the fetchAllCustomers function
testFetchAllCustomers();
