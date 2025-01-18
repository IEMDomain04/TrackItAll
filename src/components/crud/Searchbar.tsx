import Image from 'next/image';
import React, { useState } from 'react';

interface SearchbarProps {
  onSearch: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="flex">
      <div className="flex items-center border bg-white rounded-xl shadow">
        <input
          className="flex-grow px-4 py-2 outline-none rounded-xl"
          type="text"
          placeholder="Search place..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <span className="px-3">
          <Image className='cursor-pointer m-1' src="/search-icon.svg" width={15} height={15} alt="Search Icon" />
        </span>
      </div>
    </div>
  );
};

export default Searchbar;