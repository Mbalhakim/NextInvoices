// pages/api/customers.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { fetchAllCustomers } from '@/app/lib/data';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const customers = await fetchAllCustomers();
    res.status(200).json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
