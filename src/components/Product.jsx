import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { BsDash, BsPlus } from "react-icons/bs";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added successfully");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="relative flex flex-col items-center justify-between bg-[#E8DAD7]  
      hover:scale-105 transition duration-300 ease-in-out gap-3 p-4 mt-10 ml-5 rounded-xl group">

      <div>
        <p className="text-[#1E1F26] font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full rounded-md" alt="" />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-red font-semibold">${post.price}</p>
        </div>
        <div className="absolute right-6 top-98 transform -translate-y-1/2 opacity-0 translate-x-6 
          group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out
          flex flex-col items-center ">
         
          <button
            className=" bg-[#FF033E] text-gray-700  border-gray-700  rounded-t-md font-semibold 
            text-[12px] p-2 px-3 uppercase "
            onClick={addToCart}
          >
            <BsPlus className="text-xl" />
          </button>
          <button
            className="bg-white text-gray-700  border-gray-700  rounded-b-md font-semibold 
            text-[12px] p-2 px-3 uppercase "
            onClick={removeFromCart}
          >
            <BsDash className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
