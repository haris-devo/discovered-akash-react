import PropTypes from "prop-types";

const PosterCard = ({ imageUrl, title, price, discount, rating }) => {
  return (
    <>
      <div
        className="h-52 bg-yellow-100"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="text-black">
        <h1 className="text-lg">{title}</h1>
        <div className="flex justify-between">
          <span className="text-sm">{price}</span>
          <span className="text-sm">{discount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">{rating}</span>
          <span className="text-sm">Add to Cart</span>
        </div>
      </div>
    </>
  );
};

PosterCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default PosterCard;
