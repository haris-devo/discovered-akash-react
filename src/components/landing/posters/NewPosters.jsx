import { useState } from "react";
import PosterDetails from "./PosterCard";

const NewPosters = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = ["All", "Wedding", "Birthday", "Couple", "Family", "More"];

  return (
    <div className=" p-20 max-h-auto h-[130vh]">
      <h1 className="text-5xl font-bold py-4 pb-8 font-quanta">New Posters</h1>
      <p className="text-gray-600 font-inter mb-5">
        Choose a ready-made template or create your own poster
      </p>
      <div className="flex justify-between my-2 mb-12 items-center">
        <div className="flex space-x-4 items-center ">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-${
                selectedCategory === category ? "white" : "gray-600"
              } ${
                selectedCategory === category
                  ? "bg-gradient-new"
                  : "border border-blue-200"
              } py-1 px-4 rounded-lg`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <button className="button-text-color font-quanta text-xl py-2 border border-blue-200 px-4 rounded-2xl">
          Explore More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:md-grid-cols-4  xl:grid-cols-5 gap-4 mx-10">
        <PosterDetails category={selectedCategory} />
        <button className=" rounded-2xl  mx-2 border-2 border-dashed border-blue-200 mt-3">
          <div className="flex justify-center items-center h-full w-full overflow-hidden">
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                src="/public/assets/icons/guide.png"
                alt="Poster Image"
                className="w-12 h-12 rounded-t-2xl object-fill"
              />
              <span className={`text-gray-600 font-inter text-sm`}>
                Create Your Design
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NewPosters;
