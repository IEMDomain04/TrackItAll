import React from 'react';
import Updatebutton from '../crud/Updatebutton';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  dateAdded: string;
}

interface DataTableProps {
  products: Product[];
  selectedProducts: string[];
  handleCheckboxChange: (id: string) => void;
  handleUpdateClick: (product: Product) => void;
  searchQuery: string;
}

const DataTable: React.FC<DataTableProps> = ({ products, selectedProducts, handleCheckboxChange, handleUpdateClick, searchQuery }) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="w-5 px-4 border-b"></th>
            <th className="py-2 px-4 border-b border-l">Name</th>
            <th className="py-2 px-4 border-b border-l">Description</th>
            <th className="py-2 px-4 border-b border-l">Price</th>
            <th className="py-2 px-4 border-b border-l">Quantity</th>
            <th className="py-2 px-4 border-b border-l">Date Added</th>
            <th className="w-20 px-4 border-b border-l"></th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b">
                <input className='cursor-pointer'
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleCheckboxChange(product.id)}
                />
              </td>
              <td className="py-2 px-4 border-b border-l">{product.name}</td>
              <td className="py-2 px-4 border-b border-l">{product.description}</td>
              <td className="py-2 px-4 border-b border-l">{product.price}</td>
              <td className="py-2 px-4 border-b border-l">{product.quantity}</td>
              <td className="py-2 px-4 border-b border-l">{product.dateAdded}</td>
              <td className="flex justify-center py-2 px-1 border-b border-l">
                <Updatebutton onClick={() => handleUpdateClick(product)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;