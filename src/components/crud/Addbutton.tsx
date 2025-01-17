import React from 'react';

interface AddbuttonProps {
  showInput: () => void; // Function with no parameters and no return value
}

const Addbutton: React.FC<AddbuttonProps> = ({ showInput }) => {
  return (
    <div>
      <button
        className="px-8 py-2 rounded-xl bg-AddColor text-white hover:bg-blue-600 active:bg-blue-800"
        type="button"
        onClick={showInput}
      >
        Add new product
      </button>
    </div>
  );
};

export default Addbutton;
