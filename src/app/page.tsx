"use client";
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, deleteDoc, doc, updateDoc, addDoc, DocumentData } from "firebase/firestore";
import { db } from '../database/firebaseConfig';
import TopNav from "./Section/TopNav";
import Searchbar from "@/components/crud/Searchbar";
import Addbutton from "@/components/crud/Addbutton";
import Removebutton from "@/components/crud/Removebutton";
import InputForm from "@/components/validation/InputForm";
import DataTable from '@/components/Table/DataTable';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  dateAdded: string;
};

export default function Home() {
  const [showInputForm, setShowInputForm] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddButtonClick = () => {
    setShowInputForm(true);
    setSelectedProduct(null);
  };

  const closeInputForm = () => {
    setShowInputForm(false);
    setSelectedProduct(null);
  };

  // Fetch products from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const productsList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }) as Product);
      setProducts(productsList);
    });

    return () => unsubscribe();
  }, []);

  const handleCheckboxChange = (id: string) => {
    setSelectedProducts(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(productId => productId !== id)
        : [...prevSelected, id]
    );
  };

  const handleRemoveSelected = async () => {
    try {
      const promises = selectedProducts.map(id => deleteDoc(doc(db, "products", id)));
      await Promise.all(promises);
      setSelectedProducts([]);
      setMessage("Successfully removed selected products.");
    } catch (e) {
      const error = e as Error;
      setMessage("Error removing selected products: " + error.message);
    }
  };

  const handleUpdateClick = (product: Product) => {
    setSelectedProduct(product);
    setShowInputForm(true);
  };

  const handleFormSubmit = async (formData: Partial<Product>) => {
    try {
      if (selectedProduct) {
        const docRef = doc(db, "products", selectedProduct.id);
        await updateDoc(docRef, formData as DocumentData);
        setMessage("Product updated successfully!");
      } else {
        const docRef = await addDoc(collection(db, "products"), formData);
        setMessage("Product added successfully!");
        console.log("Document written with ID: ", docRef.id);
      }
      closeInputForm();
    } catch (e) {
      setMessage("Error adding/updating product. Please try again.");
      console.error("Error adding/updating document: ", e);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <main>
      <section>
        <TopNav />

        <section className="flex space-x-8 items-center pt-10 pl-10">
          <Searchbar onSearch={setSearchQuery} />
          <Addbutton showInput={handleAddButtonClick} />
          <Removebutton handleRemoveSelected={handleRemoveSelected} isDisabled={selectedProducts.length === 0} />
          {message && (
            <div className={`${message.includes("successfully") ? "w-fit py-2 px-20 text-center bg-green-200 text-green-800 border-green-400" : "w-fit py-2 px-20 bg-red-200 text-red-800 border-red-400"} border rounded`}>
              {message}
            </div>
          )}
        </section>

        {showInputForm && (
          <InputForm
            closeInput={closeInputForm}
            setMessage={setMessage}
            initialData={selectedProduct}
            onSubmit={handleFormSubmit}
          />
        )}

        <DataTable
          products={products}
          selectedProducts={selectedProducts}
          handleCheckboxChange={handleCheckboxChange}
          handleUpdateClick={handleUpdateClick}
          searchQuery={searchQuery} // Pass search query to DataTable
        />
      </section>
    </main>
  );
}