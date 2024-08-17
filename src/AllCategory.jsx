import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllCategory = () => {

const  [categorys,setCategory ] = useState()

  useEffect(()=>{
        fetch('/public/category.json')
        .then(res => res.json())
        .then(data => {
            setCategory(data)
        })
    },[])

console.log(categorys);
    return (
        <div className="flex md:flex-col md:justify-around  gap-x-1  md:mr-1 md:m-0 ml-8 mr-8 mt-2 h-full">
          {
            categorys && categorys.map(category => (
               <Link  key={category.category}  to={`category/${category.category}`}>
                <div  className="border hover:border-green-400 hover:bg-base-200 rounded-xl md:h-28 h-20 md:w-44 w-32  flex  flex-col justify-center items-center cursor-pointer">
                <img src={category.image} alt="" />
                <h1 className='text-sm font-semibold'>{category.category}</h1>
               </div>
               </Link>
            ))
          }  
        </div>
    );
};

export default AllCategory;