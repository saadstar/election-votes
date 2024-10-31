import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import { CgAddR } from "react-icons/cg";


const Header = ({ category, title, bgHoverColor, size, text, width , any,navi }) => {
  const navigate = useNavigate();
    const { currentColor } = useStateContext();

  return (
  <div className='flex justify-between'>
  <div className=" mb-10">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
      </p>      
    </div>
   <button
      type={"submit"}
      onClick={()=>navigate(navi)}
      style={{ backgroundColor: currentColor, color:"white",borderRadius: "10px",display:"flex",alignItems:"center" ,gap:"7px" }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor} ${any} `}
    >
        <CgAddR />
        {text}
    </button>
  </div>
)
};

export default Header;
