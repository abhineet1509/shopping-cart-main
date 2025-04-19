
import { useDispatch } from "react-redux";
import { remove, decreaseQuantity, add } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed");
  };

  const decreaseItemQuantity = () => {
    dispatch(decreaseQuantity(item.id));
    toast.success("Item quantity decreased");
  };

  const increaseItemQuantity = () => {
    dispatch(add(item));
    toast.success("Item quantity increased");
  };

  return (
    <div className="p-4 border-b-2 last:border-none border-slate-700">
      <div className="flex flex-row justify-between py-3.5 px-2.5 gap-14 md:flex-row bg-[#E8DAD7] rounded-lg">
          <div className="md:w-[30%] w-full flex flex-col justify-center items-center">
          <img src={item.image} alt="" className="w-[40%] md:w-[50%] lg:w-full rounded-sm" />
        </div>

      
        <div className="md:w-[70%] w-full flex flex-col gap-5">
          <h1 className="text-xl font-[600] text-slate-700">{item.title}</h1>

          <div className="flex justify-between items-center">
            
            <p className="font-bold text-lg text-blue-600">${(item.price * item.quantity).toFixed(2)}</p>

           
            <div className="flex items-center space-x-2">
              <button
                onClick={decreaseItemQuantity}
                className="px-2 py-1  rounded "
              >
                -
              </button>
              <span className="font-bold text-lg">{item.quantity}</span>
              <button
                onClick={increaseItemQuantity}
                className="px-2 py-1  rounded "
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
