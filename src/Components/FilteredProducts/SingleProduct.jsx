import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";
import { Link } from "react-router-dom";

function SingleProduct() {
  const product = useSelector((state) => state.products.singleProduct);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="p-4">
        <Link to="/">
          <button className="border bg-green-400 text-white p-4 mr-14 rounded-md hover:bg-green-300 hover:text-white duration-300 ease-in-out ">
            Home
          </button>
        </Link>
      </div>
      <div className=" flex justify-center p2-5">
        {product.map((item, index) => {
          return (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="h-[350px]">
                <img
                  src={item.img}
                  className="rounded-t-lg h-full w-full object-cover"
                  alt={item.name}
                />
              </div>
              <div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    15% Off
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.text}
                  </p>
                </div>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        totalPrice: item.totalPrice,
                        amount: 1,
                        img: item.img,
                        text: item.text,
                      })
                    )
                  }
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  ADD TO CARD
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SingleProduct;
