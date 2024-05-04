import logo from "../../../assets/logo.png";
import { useContext, useState, useRef } from "react";
import { CartContext } from "../stores/cart-context";
import CartDialog from "./cart-dialog";

export default function HeaderCart() {
  const CartCtx = useContext(CartContext);
  const cartDialogRef = useRef();
  
  function handleOpenCartDialog() {
    cartDialogRef.current.open();
  }

  return (
    <header className="flex justify-center items-center py-12 px-3/20">
      <div className="flex items-center mr-auto">
        <img className="w-20 mr-6" src={logo} alt="Not Fount"></img>
        <h1 className="text-center uppercase text-shadow-elegant-context text-2.5rem m-0">
          Elegant Context
        </h1>
      </div>
      <CartDialog ref={cartDialogRef}></CartDialog>
      <button
        className="bg-cart-button border-none rounded-5px py-2 px-6 text-cart-button-text-color text-xl cursor-pointer ml-auto"
        onClick={handleOpenCartDialog}
      >
        Cart ({CartCtx.cartItem.length})
      </button>
    </header>
  );
}
