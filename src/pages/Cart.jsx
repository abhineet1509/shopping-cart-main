import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
  }, [cart]);

  return (
    <div className="w-full">
      {cart.length > 0 ? (
        <div className="w-full flex flex-col items-center">
          {/* Cart Items Section - Arranged in a Row */}
          <div className="w-[80%] flex flex-col gap-6 justify-center items-center">
            {cart.map((item) => (
              <div className="w-[30%] flex justify-center" key={item.id}>
                <CartItem item={item} />
              </div>
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="mt-10 text-center w-[80%]">
            <p className="text-xl text-[#070b09] uppercase font-[600]">Your Cart</p>
            <p className="text-5xl font-[600] text-[#aaaaaa] uppercase mb-4">Summary</p>
            <p className="font-[600] text-xl text-[#000000] text-slate-700">
              Total Items: <span className="font-normal">{cart.reduce((acc, curr) => acc + curr.quantity, 0)}</span>
            </p>
          </div>

          {/* Total Amount & Checkout Button */}
          <div className="mb-10 text-center">
            <p className="text-slate-700 text-xl font-[600] mb-5">
              Total Amount: <span className="font-bold ml-2 text-black">${totalAmount.toFixed(2)}</span>
            </p>
            <button className="w-40 py-3 text-sm font-medium text-white rounded-lg bg-[#FF033E] hover:opacity-75">
              <span className="font-[400] text-l">Proceed</span>
            </button>
          </div>
        </div>
      ) : (
        // Empty Cart Section
        <div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
          <h1 className="font-[600] text-xl">Your Cart is Empty!</h1>
          <Link to={"/"}>
            <button className="w-40 py-2.5 text-sm font-medium text-white rounded-lg bg-[#ffa896] hover:opacity-75">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
