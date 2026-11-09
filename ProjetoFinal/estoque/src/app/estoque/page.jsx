import { columns } from "../columns"
import { DataTable } from "../data-table"
import { AppDrawer } from "@/components/app-drawer"
import { readData } from "../../actions/actions"

export default async function Home() {
  const data = await readData();

  return (
    <div>
      <div className="flex justify-end my-2">
        <AppDrawer />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
