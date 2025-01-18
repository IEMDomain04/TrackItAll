import React from 'react';
import Image from 'next/image';

interface updateButtonProp {
  onClick: () => void;
}

const Updatebutton: React.FC<updateButtonProp> = ({ onClick }) => {
  return (
    <div
      className="flex p-1 rounded cursor-pointer hover:bg-slate-300 hover:scale-95 active:bg-slate-400"
      onClick={onClick}
    >
      <Image src="/edit-icon.svg" width={30} height={30} alt='Edit Icon' />
    </div>
  );
};

export default Updatebutton;