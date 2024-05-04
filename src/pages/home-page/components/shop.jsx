import { DUMMY_PRODUCTS } from "../../../data/dummy-data";
import Product from "./product";
import { useContext, useState } from "react";
import { CartContext } from "../stores/cart-context";

export default function Shop() {
  const CartCtx = useContext(CartContext);
  
  return (
    <div className="px-3/20">
      <h2 className="uppercase text-2xl text-shop-title mb-4">
        Elegant Clothing for everyone
      </h2>
      <ul className="list-none m-0 p-0 grid grid-cols-shop gap-4">
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Product
                img={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                AddItemToCart={() => {
                  CartCtx.addItem(product.id);
                }}
              ></Product>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
