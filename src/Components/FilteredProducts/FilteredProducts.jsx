import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filteredProducts } from "../../features/slices/ProductsSlice";

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

function FilteredProducts() {
  const products = useSelector((state) => state.products.filteredProducts);
  console.log(products);
  const { type } = useParams();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="pt-16">
        <div className="pl-14 flex justify-between">
          <h1 className="text-4xl text-gray-600 font-bold">{type}</h1>
          <Link to="/">
            <button className="border bg-green-400 text-white p-4 mr-14 rounded-md hover:bg-green-300 hover:text-white duration-300 ease-in-out ">
              Home
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center mt-3 mb-5 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {buttons.map((button, index) => {
            return (
              <div className="mr-4">
                <Link to={"/FilteredProducts/" + button}>
                  <button
                    onClick={() => dispatch(filteredProducts(button))}
                    className="border border-gray-400 p-4 mt-4 rounded-md hover:bg-green-300 hover:text-white duration-300 ease-in-out "
                  >
                    {button}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => {
            return (
              <div>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  price={product.price}
                  color={product.color}
                ></ProductCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FilteredProducts;
