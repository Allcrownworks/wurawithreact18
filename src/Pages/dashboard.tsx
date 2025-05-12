import { DashboardHub } from "../Component/dashboard/dashboardHub/dashboardHub";
import { Orders } from "../Component/dashboard/orders/orders";
import { Transaction } from "../Component/dashboard/transaction";


export function Dashboard() {
  return (
    <main className=" p-6 overflow-y-auto">
      <Transaction />
      <Orders />
      <DashboardHub />
 
      

  </main>
  );
}


