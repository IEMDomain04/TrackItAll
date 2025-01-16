import TopNav from "./Section/TopNav";
import Searchbar from "@/components/crud/Searchbar";
import Addbutton from "@/components/crud/Addbutton";
import Removebutton from "@/components/crud/Removebutton"
import InputForm from "@/components/validation/InputForm";

export default function Home() {
  return (
    <main>
      <section>
        <TopNav />

        <section className="flex space-x-8 items-center pt-10 pl-10">
          <Searchbar />
          <Addbutton />
          <Removebutton />
        </section>
        
      </section>
    </main>
  );
}
