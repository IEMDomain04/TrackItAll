"use client"
import React, { useState } from 'react';
import TopNav from "./Section/TopNav";
import Searchbar from "@/components/crud/Searchbar";
import Addbutton from "@/components/crud/Addbutton";
import Removebutton from "@/components/crud/Removebutton";
import InputForm from "@/components/validation/InputForm";

export default function Home() {
  const [showInputForm, setShowInputForm] = useState(false);

  const handleAddButtonClick = () => {
    setShowInputForm(true);
  };

  const closeInputForm = () => {
    setShowInputForm(false);
  }

  return (
    <main>
      <section>
        <TopNav />

        <section className="flex space-x-8 items-center pt-10 pl-10">
          <Searchbar />
          <Addbutton showInput={handleAddButtonClick} />
          <Removebutton />
        </section>

        {showInputForm && <InputForm closeInput={closeInputForm} />}
        
      </section>
    </main>
  );
}