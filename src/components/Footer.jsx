import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_3fr_3fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img src={assets.logo} className="mb-5 w-32" alt="" />
        <p className="w-full md:w-2/3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque
          consectetur, amet exercitationem qui dolorum.
        </p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+1-111-343-4325</li>
          <li>contact@foreverforyou.com</li>
        </ul>
      </div>

      <div className="col-span-full flex flex-col items-center">
        <hr className="w-full" />
        <p className="py-5 text-center">
          Copyright 2024@ forever.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
