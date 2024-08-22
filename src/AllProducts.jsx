import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./Hooks/useAxiosPublic";
import { useState } from "react";

const AllProducts = () => {
  const axiosPublic = useAxiosPublic();
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["AllProducts", currentPage, itemsPerPage],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/allProducts?page=${currentPage}&size=${itemsPerPage}`
      );
      return data;
    },
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error fetching data</p>;

  // Get the total number of products and calculate the number of pages
  const totalProducts = data.totalProducts || 0;
  const numberOfPages = Math.ceil(totalProducts / itemsPerPage);
  console.log(numberOfPages);
  const pages = [...Array(numberOfPages).keys()];

  // const handleItemsPerPage = (e) => {
  //   const val = parseInt(e.target.value);
  //   setItemsPerPage(val);
  //   setCurrentPage(0);
  // };

  
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mt-4 mb-4">Collections</h1>
      <div className="container mx-auto grid lg:grid-cols-5 md:grid-cols-3 justify-around gap-2 ">
        {data &&
          data.allProducts.map((singleProduct) => (
            <div key={singleProduct._id}>
              {/* card */}
              <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-2 shadow-lg dark:bg-[#18181B] border hover:border-1 hover:border-black ">
                <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                    {/* love  */}
                    <div className="flex items-center">
                      <svg
                        width={30}
                        className="cursor-pointer fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
                      </svg>
                    </div>
                    <button className="rounded-xl bg-black px-3 py-1 font-medium text-white duration-200 hover:bg-white hover:text-black hover:border border-black">
                      save : {singleProduct?.saveAmount}
                    </button>
                  </div>
                  <img
                    width={400}
                    height={400}
                    className="rounded-lg bg-black/40 object-cover"
                    src={singleProduct?.productImage}
                    alt="card navigate ui"
                  />
                </div>
                <div className="space-y-2 font-semibold">
                  <p>{singleProduct?.category}</p>
                  <h6 className="text-sm md:text-base lg:text-lg">
                    {singleProduct?.productName}
                  </h6>

                  <p className="text-sm">Regular Price : {singleProduct?.regularPrice}</p>
                  < p className="text-sm">Special price : {singleProduct?.specialPrice}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
                  <button className="rounded-lg bg-black px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">
                    View Details
                  </button>
                  <button className="rounded-lg bg-gray-400 px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:bg-gray-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="  mt-10 mb-10 container mx-auto flex justify-center items-center gap-x-4">
        <button className="border border-black rounded-xl p-1"  onClick={handlePrev}>Prev</button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page
                ? "border bg-black rounded-lg p-2 text-white"
                : "rounded-lg p-2 border border-black"
            }
          >
            {page + 1 }
          </button>
        ))}
        <button className="border border-black rounded-xl p-1" onClick={handleNext}>Next</button>
        {/* <select name="" id="" onChange={handleItemsPerPage}>
          <option value="10">10</option>
          <option value="5">5</option>
          <option value="15">15</option>
        </select> */}
      </div>
    </div>
  );
};

export default AllProducts;
