import React from "react";

const Newsletter = () => {
  return (
    <>
<div className="container mx-auto px-4">
  <div className="text-left mb-8">
    <h1 className="text-5xl">Juice Producer</h1>
    <h1 className="text-5xl">in Ohio Growing</h1>
  </div>
  <div className="relative mb-4">
    <img
      src="https://demo2.strongtheme.com/juice/wp-content/uploads/sites/12/2021/10/homiuce017.jpg"
      alt="Juice Image"
      className="w-full h-[600px] rounded-lg"
    />
    <div className="absolute inset-y-0 right-0 w-1/2 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-white text-xl font-bold">
        Your Text Here
      </div>
    </div>
  </div>
</div>


      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="centered">
            <h2 className="text-2xl md:text-5xl font-bold text-white">
              Join Our Outlet
            </h2>
            <h2 className="text-2xl md:text-5xl font-bold text-white">
              With Juice.
            </h2>
            <button className="" type="primary">
              Join Now
            </button>
            <img
              src="https://demo2.strongtheme.com/juice/wp-content/uploads/sites/12/2021/10/homej022.png"
              className="hidden lg:block absolute top-[8px] left-[-120px] news-letter-weidget"
            />
          </div>
          <img
            src="https://demo2.strongtheme.com/juice/wp-content/uploads/sites/12/2021/10/homiuce015.jpg"
            className="object-cover w-[100%] max-h-[400px]"
          />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
