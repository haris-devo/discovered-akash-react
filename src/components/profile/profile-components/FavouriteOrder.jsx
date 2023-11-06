import PosterDetails from "../../landing/posters/PosterCard";

const FavouriteOrder = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-5/6 pb-10 font-inter">
        {/* Your orders section  */}
        <div className=" h-auto bg-[#EFF2F3] rounded-2xl p-4 px-7">
          <div className="flex space-x-3 items-center">
            <img
              src="/public/assets/icons/favourite.png"
              alt="Saved Icon"
              className="w-6 h-6"
            />

            <h1 className="text-2xl font-bold ">Favourites</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:md-grid-cols-2  xl:grid-cols-3 gap-4 mt-3 mx-10 ">
            <PosterDetails category={"All"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouriteOrder;
