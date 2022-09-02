const offerProducts = [
  {
    image:
      "https://images.unsplash.com/photo-1588444650733-d0767b753fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80",
    title: "lorem1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1502652023201-a16bde8138d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    title: "lorem2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Offers = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap p-6 ">
        {offerProducts.map((product) => {
          return (
            <div
              className="w-full sm:w-1/2 md:w-1/2 xl:w-1/2 p-4"
              key={product.name}
            >
              <div
                className=" block shadow-lg  rounded overflow-hidden p-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="p-6 backdrop-brightness-90 bg-white/30 rounded">
                  <h5 className="text-white text-2xl leading-tight font-bold mb-2">
                    {product.title}
                  </h5>
                  <p className="text-gray-800 text-medium mb-4 text-lg">
                    {product.desc}
                  </p>
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-amber-300 text-white font-medium text-sm leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 hover:bg-amber-500 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
