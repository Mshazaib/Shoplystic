import { assets } from "../assets/frontend_assets/assets";

function Hero() {
  return (
    <>
      <div
        className="flex flex-row items-end bg-cover h-[600px] w-full rounded-2xl "
        style={{ backgroundImage: `url(${assets.hero_img})` }}
      >
        <div className="flex flex-col items-start p-6 w-full">
          <h1 className="font-bold text-3xl lg:text-5xl leading-relaxed py-4 md:text-base text-white uppercase">
            shoplystic Spring Collection
          </h1>
          <div className="flex items-center justify-between w-full pr-5">
            <p className="flex text-base text-white">
              Find our best spring collection offering our best quality products
              in a shoplystic spring collection.
            </p>
            <button className="flex text-base bg-white py-2 px-6 rounded-full">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
