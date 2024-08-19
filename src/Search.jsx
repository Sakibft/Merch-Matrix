import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "./Hooks/useAxiosPublic";

const Search = () => {
  const searchValue = useParams();
  const axiosPublic = useAxiosPublic();
//   console.log(searchValue);

  const { data } = useQuery({
    queryKey: ["searchData", searchValue],
    queryFn: async () => {
      const {data} = await axiosPublic.get(`/search/${searchValue?.search}`);
      return data;
    },
  });
console.log(data);
  return (
    <div>
      <h1>inside the search component </h1>
    </div>
  );
};

export default Search;
