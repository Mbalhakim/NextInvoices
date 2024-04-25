import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';

interface CustomersTableProps {
  customers: FormattedCustomersTable[];
}

export default function CustomersTable({ customers }: CustomersTableProps) {


  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
  {customers.map((customer) => (
    <div
      key={customer.id}
      className="mb-2 w-full rounded-md bg-white p-4"
    >
      <div className="flex items-center justify-between border-b pb-4">
  <div className="flex items-center">
    
    <div>
      <p><strong>Name:</strong> {customer.name}</p>
      <p className="text-sm"><strong>Email:</strong> {customer.email}</p>
    </div>
    
  </div>
  <Image
      src={customer.image_url}
      className="mr-2 rounded-full"
      width={28}
      height={28}
      alt={`${customer.name}'s profile picture`}
    />
</div>

      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <p className="text-sm font-medium">
            <strong>Total Paid:</strong> {formatCurrency(customer.total_paid)}
          </p>                
        </div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <p><strong>Total Pending:</strong> {formatCurrency(customer.total_pending)}</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <p><strong>Total Invoices:</strong> {customer.total_invoices}</p>
        </div>
      </div>
    </div>
  ))}
</div>



          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Invoices
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Pending
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Paid
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap mb-2 flex items-center py-3 pl-6 pr-3">
                  <Image
                        src={customer.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${customer.name}'s profile picture`}
                      />
                    <p>{customer.name}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.total_invoices}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(customer.total_pending)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(customer.total_paid)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
