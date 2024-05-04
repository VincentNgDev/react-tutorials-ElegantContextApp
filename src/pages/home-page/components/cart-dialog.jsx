import { createPortal } from "react-dom";
import { useRef, useImperativeHandle, forwardRef, useContext } from "react";
import { CartContext } from "../stores/cart-context";

const CartDialog = forwardRef(function CartDialog({ props }, ref) {
  const cartDialogRef = useRef();
  const CartCtx = useContext(CartContext);

  const closeBtnStyle =
    CartCtx.cartItem.length === 0
      ? "rounded-md bg-black text-white py-2 px-4 mr-1"
      : "mr-1 py-2 px-4";

  useImperativeHandle(ref, () => ({
    open: () => {
      cartDialogRef.current.showModal();
    },
  }));

  const totalPrice = CartCtx.cartItem.reduce((acc, item) => {
    return (acc + item.price * item.quantity).toFixed(2);
  }, 0);

  function AddItem(id, quantity) {
    CartCtx.updateItem(id, quantity);
  }

  function RemoveItem(id, quantity) {
    if (quantity >= 0) {
      CartCtx.updateItem(id, quantity);
    }
  }

  return createPortal(
    <dialog
      ref={cartDialogRef}
      className="rounded-lg border-none p-8 backdrop:bg-black/90 w-1/3 animate-cart-dialog-open-animation shadow-cart-dialog bg-cart-dialog-bg-color"
    >
      <h1 className="text-3xl font-bold text-cart-title-text-color mb-4">
        Your cart
      </h1>
      <div>
        {CartCtx.cartItem.length === 0 && <h3>No Item in cart!</h3>}
        {CartCtx.cartItem.length > 0 && (
          <ul className="list-none m-0 p-0 grid grid-cols-shop gap-4">
            {CartCtx.cartItem.map((item) => {
              return (
                <li key={item.id}>
                  <div className="flex justify-between items-center bg-cart-item-bg-color rounded-md px-4 py-3 text-2xl font-bold">
                    <div>
                      <span>{item.title}</span>
                      <span className="mx-4">{"($" + item.price + ")"}</span>
                    </div>
                    <div className="w-28 flex justify-end">
                      <button
                        onClick={() => {
                          RemoveItem(item.id, item.quantity - 1);
                        }}
                      >
                        -
                      </button>
                      <span className="w-10 flex justify-center">{item.quantity}</span>
                      <button
                        onClick={() => {
                          AddItem(item.id, item.quantity + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="text-right m-0">
        <div className="text-2xl font-bold my-4">
          <span>Total: </span>
          <span>{"$" + totalPrice}</span>
        </div>
        <form method="dialog">
          <button className={closeBtnStyle}>Close</button>
          {CartCtx.cartItem.length > 0 && (
            <button className="rounded-md bg-black text-white py-2 px-4 ml-1">
              Checkout
            </button>
          )}
        </form>
      </div>
    </dialog>,
    document.getElementById("cart-dialog")
  );
});

export default CartDialog;
