export default function Product({ img, title, price, description, AddItemToCart }) {
  function handleAddToCart() {
    AddItemToCart();
  }

  return (
    <div className="min-h-600px w-300px bg-product-card-bg-color rounded-md flex flex-col shadow-product-card">
      <img className="rounded-md w-full" src={img} alt="Not Found" />

      <div className="flex-1 flex pt-2 pr-4 pb-2 pl-4 flex-col">
        <h3 className="text-product-card-title-color text-lg mb-0.15rem">
          {title}
        </h3>
        <p className="text-base text-product-card-price-color m-0">{price}</p>
        <p className="max-h-100px w-auto  line-clamp-4">{description}</p>
      </div>

      <div className="text-right p-4">
        <button
          className="bg-product-card-add2cart-button-bg-color border-none rounded-5px py-2 px-4 text-product-card-add2cart-button-text-color text-base cursor-pointer hover:bg-product-card-add2cart-button-hover-bg-color"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
