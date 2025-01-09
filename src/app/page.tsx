import Searchbar from "@/components/Searchbar";
import TopNav from "./Section/TopNav";
import Addbutton from "@/components/Addbutton";
import Removebutton from "@/components/Removebutton";
import Filterbutton from "@/components/Filterbutton";
import DataTable from "@/components/DataTable";
import DataRows from "@/components/DataRows";

export default function Home() {
  return (
    <main>
      <section>
        <TopNav />

        <section>
          <div>
            <Searchbar />
            <Addbutton />
            <Removebutton />
          </div>

          <Filterbutton />
        </section>

        <DataTable />
        <DataRows />
      </section>
    </main>
  );
}
