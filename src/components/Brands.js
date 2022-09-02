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
    <div className=" container mx-auto">
      <div className=" flex flex-wrap p-6">
        {brands.map((brand) => {
          return (
            <div
              key={brand.id}
              className="flex flex-col justify-center items-center w-1/2 sm:w-1/3 md:w-1/3 xl:w-1/5 p-4 mx-auto "
            >
              <img
                src={`${brand.image}`}
                className="h-48 w-full object-fit "
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
