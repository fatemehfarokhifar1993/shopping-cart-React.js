const blogs = [
  {
    author:"Lorem1",
    image:
      "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    title: "Lorem ipsum dolor sit amet ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {  author:"Lorem2",
    image:
      "https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "Lorem ipsum dolor sit amet ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {  author:"Lorem3",
    image:
      "https://images.unsplash.com/photo-1615653868225-ce1d35288ec3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    title: "Lorem ipsum dolor sit amet ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Blogs = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-wrap p-6">
        {blogs.map((blog) => {
          return (
            <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/3 p-6" key={blog.title}>
              <div className="block bg-white shadow-md  rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img className=" h-60 w-full object-cover" src={blog.image} alt="" />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 leading-none  text-gray-500  font-semibold uppercase tracking-wide text-lg">
                   {blog.author}
                  </span>
                  <h2 className="mt-2 mb-2 font-bold">
                    {blog.title}
                  </h2>
                  <p className="text-gray-700 text-base">
                    {blog.desc}
                  </p>
                  <div className="mt-3 pt-4 pb-2">
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-amber-300 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                    >
                      read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
