import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width , any}) => {
  const { setIsClicked } = useStateContext();

  return (
    <button
      type={"submit"}
      onClick={() => setIsClicked(false)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor} ${any}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
