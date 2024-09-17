import { useDispatch } from "react-redux";
import clothes from "../../assets/images/clothes.jpg";
import { filteredProducts } from "../../features/slices/ProductsSlice";
import { Link } from "react-router-dom";
function NavigateButton() {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center mt-3 mb-5 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        {buttons.map((button, index) => {
          return (
            <div className="mr-4">
              <Link to={"/FilteredProducts/" + button}>
                <button
                  className="border border-gray-400 p-4 mt-4 rounded-md hover:bg-green-300 hover:text-white duration-300 ease-in-out "
                  onClick={() => dispatch(filteredProducts(button))}
                >
                  {button}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-black p-2 w-[55%] mx-auto rounded">
        <h3 className="text-white text-center text-lg">SALE UP TO 55%</h3>
      </div>
      <div className="flex items-center justify-center py-4 ">
        <img
          src={clothes}
          className="h-[600px] w-[70%] rounded-md shadow-lg object-cover"
          alt="clothes"
        />
      </div>
    </div>
  );
}

export default NavigateButton;
