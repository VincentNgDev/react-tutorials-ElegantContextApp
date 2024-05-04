import HeaderCart from "./components/header-cart";
import Shop from "./components/shop";
import CartContextProvider from "./stores/cart-context";

export default function HomePage() {
  return (
    <CartContextProvider>
      <HeaderCart />
      <main>
        <section>
          <Shop></Shop>
        </section>
      </main>
    </CartContextProvider>
  );
}
