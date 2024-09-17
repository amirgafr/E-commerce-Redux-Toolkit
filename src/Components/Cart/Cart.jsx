import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

function Cart({ handelOpen }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div className="relative z-10">
      <div
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <button
              onClick={handelOpen}
              type="button"
              data-autofocus
              className="mt-3 float-right inline-flex w-full justify-center rounded-md bg-red-600 px-2 py-1 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-400 sm:mt-0 sm:w-auto "
            >
              x
            </button>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Shopping Cart</p>
                    <div className="flex flex-col justify-center items-start">
                      {cart.map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="grid grid-cols-2 py-4">
                              <div>
                                <img
                                  src={item.img}
                                  className="h-[125px] rounded-md"
                                  alt={item.name}
                                />
                                <div className="flex flex-col items-start">
                                  <h4 className="text-black font-bold pt-2">
                                    {item.name}
                                  </h4>
                                </div>
                              </div>
                              <div>
                                <p className="tetxt-black pt-2 text-sm">
                                  Amount:
                                  <span className="ml-2">{item.amount}</span>
                                </p>
                                <p className="tetxt-black pt-2 text-sm">
                                  Single Item Price:
                                  <span className="ml-2">{item.price}$</span>
                                </p>
                                <p className="tetxt-black pt-2 text-sm">
                                  Total Item Price:
                                  <span className="ml-2">
                                    {item.totalPrice}$
                                  </span>
                                </p>
                                <div className="pt-4">
                                  <button
                                    onClick={() =>
                                      dispatch(removeFromCart(item))
                                    }
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <footer className="flex justify-start items-center border-t-2 border-gray-600">
                      <p className="text-black text-sm pt-2">
                        Total Price All Products :<span>{totalPrice}$</span>
                      </p>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
