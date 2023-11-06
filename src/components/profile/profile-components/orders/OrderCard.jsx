// Card.jsx
import PropTypes from "prop-types";

const OrderCard = ({
  imgSrc,
  templateName,
  category,
  size,
  price,
  onClick,
}) => {
  return (
    <div
      className="flex bg-white w-full rounded-2xl p-5 pb-3 justify-center  space-x-3 hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer duration-200"
      onClick={onClick}
    >
      <div className="w-2/4">
        <img src={imgSrc} alt="" className="w-28 h-32 rounded" />
      </div>
      <div className="w-2/3 flex flex-col gap-1">
        <h1 className=" font-bold">{templateName}</h1>
        <h2 className="text-sm">
          Category:
          <span className="text-xs  ml-1">{category}</span>
        </h2>
        <h2 className="text-sm">
          Size:
          <span className="text-xs  ml-1">{size}</span>
        </h2>
        <h2 className="text-sm">
          Price:
          <span className="text-xs  ml-1">{price}</span>
        </h2>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  templateName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OrderCard;
