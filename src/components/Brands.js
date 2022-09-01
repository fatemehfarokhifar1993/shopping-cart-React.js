const brands = [
  {
    id: 1,
    image: "/images/1.png",
  },
  {
    id: 2,
    image: "/images/2.png",
  },
  {
    id: 3,
    image: "/images/3.png",
  },
  {
    id: 4,
    image: "/images/4.png",
  },
  {
    id: 5,
    image: "/images/5.png",
  },
];
const Brands = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-wrap -mx-4 p-10 ">
        {brands.map((brand) => {
          return (
            <div
              className="w-1/2 sm:w-1/3 md:w-1/3 xl:w-1/5 p-4"
              key={brand.id}
            >
              <div className="block bg-white  overflow-hidden">
                <div className="relative pb-48 md:pb-36 sm:pb-32 overflow-hidden">
                  <img
                    src={`${brand.image}`}
                    className="absolute inset-0 h-full w-full object-fill opacity-30"
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
