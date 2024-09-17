import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singleProduct } from "../../features/slices/ProductsSlice";

function ProductCard({ img, id, text, name, color, price }) {
  const { type } = useParams();
  const dispatch = useDispatch();
  console.log(type);

  return (
    <Link to={id}>
      <div
        // className="mt-6 w-96 px-10"
        onClick={() => dispatch(singleProduct(id))}
      >
        <div color="blue-gray" className="relative h-56 pb-4">
          <img
            src={img}
            alt="card-image"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="text-center">
          <p variant="h5" color="blue-gray" className="mb-2 font-bold">
            {name}
          </p>
          <p className="text-gray-600 text-sm">{text}</p>
        </div>
        <div className="flex items-center justify-between py-2 shadow-md">
          <p>{price}$</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
