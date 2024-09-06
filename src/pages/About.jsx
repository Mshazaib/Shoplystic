import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <>
      <div>
        <div className="text-2xl text-center pt-8 border-t">
          <Title text1={"ABOUT"} text2={"US"} />
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img className="w-full md:w-[450px]" src={assets.about_img} alt="" />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores dicta inventore in, eos magnam voluptate omnis,
              dignissimos quibusdam officiis debitis, voluptas sit! Fugiat
              suscipit, placeat ullam odio reiciendis recusandae quibusdam?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              porro eum, soluta temporibus, architecto ipsum minus voluptate quo
              necessitatibus magni, repudiandae laboriosam hic explicabo iure
              nisi asperiores corrupti? Reprehenderit, odio.
            </p>
            <b className="text-gray-800">Our Mission</b>
            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
        <div className="text-4xl py-4 ">
          <Title text1={"WHY"} text2={"CHOOSE"} />
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              ratione quidem ea, pariatur repellat nulla illo, quae dolores
              magnam eveniet tenetur debitis et magni numquam harum, veritatis
              esse corporis consequatur.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              ratione quidem ea, pariatur repellat nulla illo, quae dolores
              magnam eveniet tenetur debitis et magni numquam harum, veritatis
              esse corporis consequatur.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              ratione quidem ea, pariatur repellat nulla illo, quae dolores
              magnam eveniet tenetur debitis et magni numquam harum, veritatis
              esse corporis consequatur.
            </p>
          </div>
        </div>
        <NewsLetterBox />
      </div>
    </>
  );
};
export default About;
