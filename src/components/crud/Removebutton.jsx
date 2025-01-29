import React from 'react';
import Image from 'next/image';

function deleteConfirm() {
  return confirm("Do you really want to delete?");
}

const Removebutton = ({ handleRemoveSelected, isDisabled }) => {
  const handleClick = () => {
    if (deleteConfirm()) {
      handleRemoveSelected();
    }
  };

  return (
    <div 
      className={`flex p-2 rounded cursor-pointer hover:bg-slate-300 hover:scale-95 active:bg-slate-400 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={!isDisabled ? handleClick : undefined}
    >
      <Image src="/trash-icon.svg" width={30} height={30} alt='Trash Icon' />
    </div>
  );
};

export default Removebutton;