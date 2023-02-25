import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import burger from "../../assets/burger.png";
import { menuAction } from "../store/menu-slice";


const HeaderLeft = () => {
    const dispatch = useDispatch()
    
    const openVisible = () => {
      dispatch(menuAction.toggleMenu())
    }
  return (
    <>
      <div className="flex items-center gap-2">
        <button onClick={openVisible}>
          <AiOutlineMenu />
        </button>
        <h1 className="text-2xl font-medium">
          App <span className="font-bold">Food</span>
        </h1>
        <img src={burger} alt="" className="w-[25px]" />
      </div>
    </>
  );
};

export default HeaderLeft;
