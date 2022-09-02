const images = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583484370773-c1af4e528d5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1618667074051-8da183ae7e32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1564623788399-b75405a129a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1625516152414-8f33eef3d660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
];
const ScrollImages = () => {
  return (
    <div className="container mx-auto flex justify-center p-6">
      <div className="flex overflow-x-auto  space-x-1 w-full">
        {images.map((item) => {
          return (
            <div
              className="flex flex-shrink-0 overflow-hidden cursor-pointer"
              key={item.id}
            >
              <img
                src={item.image}
                className=" h-60 w-48  hover:scale-110 transition duration-300 ease-in-out"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollImages;
