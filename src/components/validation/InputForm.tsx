"use client";
import React, { useState, useEffect } from 'react';

interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  dateAdded: string;
}

interface InputFormProps {
  closeInput: () => void;
  setMessage: (message: string) => void;
  initialData?: Product | null;
  onSubmit: (formData: Product) => void;
}

const InputForm: React.FC<InputFormProps> = ({ closeInput, setMessage, initialData, onSubmit }) => {
  const [formData, setFormData] = useState<Product>({
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    dateAdded: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
      if (!initialData) {
        setMessage("Product added successfully!");
        console.log("Document written with ID: ", formData.id);
      }
      closeInput();
    } catch (e) {
      setMessage("Error adding/updating product. Please try again.");
      console.error("Error adding/updating document: ", e);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-50 max-sm:px-5">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{initialData ? "Edit Product" : "Add New Product"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateAdded" className="block text-sm font-medium mb-1">Date Added</label>
            <input
              type="date"
              id="dateAdded"
              name="dateAdded"
              value={formData.dateAdded}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={closeInput}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;