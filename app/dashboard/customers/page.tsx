
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { fetchAllCustomers } from '@/app/lib/data';
export default async function Page() {

  
    const customers = await fetchAllCustomers();
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
     
        <Table customers = {customers}  />
      
    
      
    </div>
  );
}