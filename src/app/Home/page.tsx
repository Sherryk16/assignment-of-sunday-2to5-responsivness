import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-8 ">
      
    <div className="border-2 border-black ">
     
     <div className="flex justify-center my-9"><Image
        src={"/hsh.jpeg"}
        width={200}
        height={200}
        alt="headshd"
      />
      </div>
      <p className="text-2xl font-bold flex justify-center my-11">Rs.500</p>
      <div className="flex justify-center items-center my-4">
        <button className="bg-blue-600 h-6 font-bold px-2 mx-5 rounded-md">
          Buy Now
        </button>
      </div>
    </div>
  
    <div className="border-2 border-black ">
    <div className="flex justify-center my-9"> <Image
        className="flex justify-center my-9"
        src={"/hsh.jpeg"}
        width={200}
        height={200}
        alt="headshd"
      />
      </div>
      <p className="text-2xl font-bold flex justify-center my-11">Rs.500</p>
      <div className="flex justify-center items-center my-4">
        <button className="bg-blue-600 h-6 font-bold px-2 mx-5 rounded-md">
          Buy Now
        </button>
      </div>
    </div>
  
    <div className="border-2 border-black">
     
    <div className="flex justify-center my-9"> <Image
        className="flex justify-center my-9"
        src={"/hsh.jpeg"}
        width={200}
        height={200}
        alt="headshd"
      />
      </div>
      <p className="text-2xl font-bold flex justify-center my-11">Rs.500</p>
      <div className="flex justify-center items-center my-4">
        <button className="bg-blue-600 h-6 font-bold px-2 mx-5 rounded-md">
          Buy Now
        </button>
      </div>
    </div>
    
  </div>
  
  );
};

export default page;
