import { useEffect, useRef, useState } from "react";
import { MdChevronRight, MdOutlineChevronLeft } from "react-icons/md";
const featuredProducts = [
  {
    image:
      "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
    title: "lorem1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588444650700-fd887f15a9e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "lorem2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    image:
      "https://images.unsplash.com/photo-1592317295760-5c1f677dfc78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80",
    title: "lorem3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];
let count = 0;
let sliderInterval;
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };
  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);
  const startSlider = () => {
    sliderInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };
  const pauseSlider = () => {
    clearInterval(sliderInterval);
  };
  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  return (
    <div className="container mx-auto mt-20">
      <section
        ref={slideRef}
        className="w-full select-none mx-auto h-[32rem] flex flex-col "
      >
        <div className="w-full h-full p-4  mx-auto ">
          <div
            className="h-full flex flex-col items-left justify-between bg-white shadow-lg hover:shadow-xl rounded overflow-hidden   bg-cover bg-center"
            style={{
              backgroundImage: `url(${featuredProducts[currentIndex].image})`,
            }}
          >
            <div className=" h-3/4 p-20 flex flex-col items-left justify-between">
              <h5 className="text-white text-2xl leading-tight font-bold">
                {featuredProducts[currentIndex].title}
              </h5>
              <p className="text-white text-medium text-lg">
                {featuredProducts[currentIndex].desc}
              </p>
              <div>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-amber-300 text-white font-medium text-sm leading-tight uppercase rounded shadow-md  hover:shadow-lg hover:bg-amber-500  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                >
                  Button
                </button>
              </div>
            </div>

            <div className="w-full px-3 flex justify-left items-center ">
              <button
                className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                onClick={handleOnPrevClick}
              >
                <MdOutlineChevronLeft size={30} />
              </button>
              <button
                className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                onClick={handleOnNextClick}
              >
                <MdChevronRight size={30} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
