import { useDispatch, useSelector } from "react-redux";
import { nextSlider, prevSlider } from "../../features/slices/slidbarSlice";
import { sliderData } from "../../assets/data/dummyData";

function Slidbar() {
  const slideIndex = useSelector((state) => state.slider.value);

  console.log(slideIndex);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="pb-4 relative">
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-75"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img
                    className="h-[550px] w-full object-cover"
                    src={item.img}
                    alt="shoes"
                  />
                )}
              </div>
              <div className="top-44 absolute mx-auto inset-x-1/4">
                <p className="text-white text-xl font-bold sm:text-3xl">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-10 left-[30%] md:left-[45%]">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4">
              <div
                className={
                  index === slideIndex
                    ? " bg-green-300 rounded-full p-4 cursor-pointer"
                    : "bg-white rounded-full p-4 cursor-pointer"
                }
              ></div>
            </div>
          );
        })}
      </div>
      <button
        className="absolute top-[50%] right-4 bg-white rounded-full p-4"
        onClick={() => dispatch(nextSlider(slideIndex + 1))}
      >
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
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
      <button
        className="absolute top-[50%] left-4 bg-white rounded-full p-4"
        onClick={() => dispatch(prevSlider(slideIndex - 1))}
      >
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
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
    </div>
  );
}

export default Slidbar;
