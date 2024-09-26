import React from "react";

const Newsletter = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="relative">
        <div className="centered">
            <h2 className="text-2xl md:text-5xl font-bold text-white">Join Our Outlet</h2>
            <h2 className="text-2xl md:text-5xl font-bold text-white">With Juice.</h2>
            <button className="" type="primary">Join Now</button>
            <img src="https://demo2.strongtheme.com/juice/wp-content/uploads/sites/12/2021/10/homej022.png" className="hidden lg:block absolute top-[8px] left-[-120px] news-letter-weidget"/>
        </div>
        <img src="https://demo2.strongtheme.com/juice/wp-content/uploads/sites/12/2021/10/homiuce015.jpg" className="object-cover w-[100%] max-h-[400px]"/>
      </div>
    </div>
  );
};

export default Newsletter;
