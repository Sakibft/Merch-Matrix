import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useAxiosPublic from "./Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const BestSellsProducts = () => {
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["bestSellsProducts"],
    queryFn: async () => {
      const { data } = await axiosPublic("/allProducts");
      console.log(data?.allProducts);
      return data;
    },
  });
 
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-8 mb-2">
        Best Sells Products{" "}
      </h1 >
    
      <div>
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2  gap-3 mb-10 ">
          {data &&
            data.allProducts.slice(6, 18).map((singleProduct) => (
              <div key={singleProduct._id}>
                {/* card */}
                <div className="md:flex  md:justify-center  md:items-center bg-base-100 shadow-xl border-2 md:h-40 cursor-pointer">
                  <figure>
                    <img
                      className="md:h-36 md:w-48 flex justify-center items-center"
                      src={singleProduct?.productImage}
                      alt="Movie"
                    />
                  </figure>
                  <div className="md:card-body">
                    <h2 className="md:card-title">{singleProduct?.productName?.slice(0, 24)}.</h2>
                    <p>
                      <p>{singleProduct?.description?.slice(0, 45)}...</p>
                    </p>
                    {/* price */}
                     <div className="flex w-36">
                     <p className="flex text-orange-500">{singleProduct?.specialPrice} <FaBangladeshiTakaSign className="text-sm mt-1" />

                      
                      </p> 
                      <del className="flex">{singleProduct?.regularPrice} <FaBangladeshiTakaSign className="text-sm mt-1" /> </del>
                     </div>
                   {/* rating */}
                   <Rating
      style={{ maxWidth: 80 }}
      value={3}
      readOnly
    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellsProducts;
