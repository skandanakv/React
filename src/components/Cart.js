import { useSelector } from "react-redux";
import { CDN_FALLBACK } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeItem,clearCart } from "../utils/cartSlice";


const Cart = () => {

    const dispatch = useDispatch();


  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart=()=>{
    dispatch(clearCart());
  }

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h2 className="text-2xl font-bold mb-6">🛒 Cart</h2>
      <button
  className="border border-red-500 text-red-500 px-3 py-1 rounded-md hover:bg-red-500 hover:text-white transition"
  onClick={handleClearCart}>
  Clear Cart
</button>

      {cartItems.length === 0 ? (
        <h3 className="text-gray-500 p-1.5" >Your cart is empty 😢</h3>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">

          {cartItems.map((item) => {
            const {
              id,
              name,
              description,
              price,
              defaultPrice,
              imageId
            } = item;

            return (
              <div
                key={id}
                className="flex justify-between items-center border-b py-4"
              >

                {/* LEFT SIDE */}
                <div className="w-2/3">
                  <h3 className="font-semibold text-lg">{name}</h3>

                  <p className="text-gray-700 font-medium">
                    ₹{((price || defaultPrice) / 100).toFixed(2)}
                  </p>

                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                    {description}
                  </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col items-center gap-2">

                  <img
                    className="w-24 h-24 object-cover rounded-md"
                    src={CDN_FALLBACK}
                    alt={name}
                  />

<button
  className="border border-red-500 text-red-500 px-3 py-1 rounded-md hover:bg-red-500 hover:text-white transition"
  onClick={() => dispatch(removeItem(item.id))}
>
  Remove
</button>


                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
};

export default Cart;
