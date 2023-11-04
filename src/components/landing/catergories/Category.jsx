const CategoryButton = ({ iconSrc, altText, buttonText }) => {
  return (
    <button className="text-gray-600 flex items-center justify-center h-[130px] w-[130px] border-2 border-blue-200  rounded-2xl shadow-lg">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={iconSrc} alt={altText} className="w-5 h-5" />
        <p className="font-medium text-lg">{buttonText}</p>
      </div>
    </button>
  );
};

const Category = () => {
  return (
    <>
      <div className="p-20 max-h-auto h-[60vh]">
        <h1 className="text-5xl font-bold py-4 pb-8 font-quanta">
          Explore by Category
        </h1>
        <div className="flex justify-center my-2 mb-12 items-center ">
          <div className="flex space-x-4 container items-center ">
            {/* back button  */}
            <button
              className="text-gray-600 flex items-center justify-center h-[130px] w-[130px] "
              onClick={() => {
                window.history.back();
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <img
                  src="/public/assets/icons/back.png"
                  alt="Back"
                  className="w-5 h-5"
                />
                <p className="font-medium text-lg">Back</p>
              </div>
            </button>

            <CategoryButton
              iconSrc="/public/assets/icons/wedding.png"
              altText="Wedding"
              buttonText="Weddings"
            />
            <CategoryButton
              iconSrc="/public/assets/icons/birthday.png"
              altText="Birthday"
              buttonText="Birthday"
            />
            <CategoryButton
              iconSrc="/public/assets/icons/couple.png"
              altText="Couple"
              buttonText="Couple"
            />
            <CategoryButton
              iconSrc="/public/assets/icons/family.png"
              altText="Family"
              buttonText="Family"
            />
            <CategoryButton
              iconSrc="/public/assets/icons/more.png"
              altText="More"
              buttonText="More"
            />
            <button
              className="text-gray-600 flex items-center justify-center h-[130px] w-[130px] "
              onClick={() => {
                window.history.back();
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <img
                  src="/public/assets/icons/back.png"
                  alt="Back"
                  className="w-5 h-5"
                />
                <p className="font-medium text-lg">Next</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
