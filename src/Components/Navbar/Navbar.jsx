import { useState } from "react";
import logo from "../../assets/images/logo.png";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/slices/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  function handelOpen() {
    setOpen(!open);
  }

  const amount = useSelector((state) => state.cart.totalAmount);
  return (
    <>
      <div className="bg-black p-2 w-full">
        <h3 className="text-white text-2xl text-center font-bold">
          Welcome All
        </h3>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <img className="h-28 w-full" src={logo} alt="store"></img>
        </div>
        <div className="flex items-center">
          <div className="relative flex flex-row items-center cursor-pointer">
            <span className="absolute bottom-4 left-1 rounded-full bg-red-600 text-white px-1 text-sm mr-1 ">
              {amount}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            <p
              onClick={handelOpen}
              className="font-inter text-base font-medium mr-2 text-center cursor-pointer"
            >
              Shopping bag
            </p>
            <div>{open && <Cart handelOpen={handelOpen} />}</div>
          </div>
          <button
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
      </div>
      {/* <div className="bg-black p-4 w-full flex justify-around">
        <div className="text-white text-center font-medium">50% OFF</div>
        <div className="text-white text-center font-medium">
          Free shipping returnes
        </div>
        <div className="text-white text-center font-medium">
          Diffrent payment methods
        </div>
      </div> */}
    </>
  );
}

export default Navbar;
