import PropTypes from "prop-types";

const posterDetails = [
  {
    imageUrl: "/public/assets/poster.jpg",
    title: "Project 1",
    price: 10.99,
    discount: 10,
    rating: 4.5,
    category: "Wedding",
  },
  {
    imageUrl: "/public/assets/poster.jpg",
    title: "Project 2",
    price: 15.99,
    discount: 2,
    rating: 4.2,
    category: "Birthday",
  },
  {
    imageUrl: "/public/assets/poster.jpg",
    title: "Project 3",
    price: 20.99,
    discount: 30,
    rating: 4.8,
    category: "Couple",
  },
  {
    imageUrl: "/public/assets/poster.jpg",
    title: "Project 4",
    price: 25.99,
    discount: 40,
    rating: 4.9,
    category: "Family",
  },
  {
    imageUrl: "/public/assets/poster.jpg",
    title: "Project 5",
    price: 25.99,
    discount: 20,
    rating: 4.9,
    category: "More",
  },
  {
    imageUrl: "/public/assets/poster.jpg",
    title: "Project 6",
    price: 25.99,
    discount: 0.4,
    rating: 4.9,
    category: "More",
  },
];

const PosterCard = ({ poster }) => {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl mx-2 mt-3 relative">
        <img
          src={poster.imageUrl}
          alt="Poster Image"
          className="w-full h-60 rounded-t-2xl object-fill"
        />
        <span className="text-xs text-center p-1 px-3 absolute top-2 left-2 text-white rounded bg-red-600">
          {poster.discount}%
        </span>
        <span className="text-xs text-center p-1 px-2 absolute top-2 right-2 text-blue-400 rounded-lg bg-white">
          <div className="flex space-x-2 items-center">
            <img
              src="/public/assets/icons/star.png"
              alt="Star"
              className="w-3 h-3 inline-block"
            />
            {poster.rating}
          </div>
        </span>
        <div className="flex justify-between flex-wrap lg:flex-nowrap   w-full overflow-hidden">
          <div className="flex space-x-2 p-3  py-3">
            <p className="text-gray-600 font-inter font-semibold text-sm">
              {poster.price}
            </p>
            <span
              className={`${
                poster.discount > 0 ? "line-through" : ""
              } text-gray-600 font-inter font-semibold text-sm`}
            >
              ${poster.price}
            </span>
          </div>
          <div className="flex items-center mr-2">
            <button
              className="text-blue-300 border border-blue-100 p-1 rounded-lg font-quanta text-sm"
              type="button"
            >
              Customize
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const PosterDetails = ({ category }) => {
  const filteredPosters =
    category === "All"
      ? posterDetails
      : posterDetails.filter((poster) => poster.category === category);

  return (
    <>
      {filteredPosters.map((poster, index) => (
        <PosterCard key={index} poster={poster} />
      ))}
    </>
  );
};

export default PosterDetails;

PosterCard.propTypes = {
  poster: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
PosterDetails.propTypes = {
  category: PropTypes.string.isRequired,
};
