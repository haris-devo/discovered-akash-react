import { useCallback, useState } from "react";
import PropTypes from "prop-types";

const CartItem = ({ imgSrc, name, category, size, price, originalPrice }) => (
  <div className="h-auto bg-[#EFF2F3] rounded-2xl px-7">
    <div className="flex space-x-2 items-center">
      <img
        src="/public/assets/icons/delete.png"
        alt="Saved Icon"
        className="w-7 h-7 p-1 rounded-full hover:bg-gray-200 cursor-pointer"
      />
      <div className="flex w-full rounded-2xl px-5 justify-center space-x-3">
        <div className="w-1/3">
          <img src={imgSrc} alt="" className="w-28 h-32 rounded" />
        </div>
        <div className="w-2/3 flex flex-col gap-2 py-3">
          <h1 className="text-lg font-bold">{name}</h1>
          <h2 className="text-sm">
            Category:
            <span className="text-xs ml-1">{category}</span>
          </h2>
          <h2 className="text-sm">
            Size:
            <span className="text-xs ml-1">{size}</span>
          </h2>
          <h2 className="text-sm">
            <div className="flex space-x-1 items-center">
              <span className="text-lg font-bold">{price}</span>
              <span className="text-xs ml-1 mt-1">
                <del>{originalPrice}</del>
              </span>
            </div>
          </h2>
        </div>
      </div>
    </div>
  </div>
);
const Input = ({ label, placeholder, value, setValue, name }) => (
  <div className="flex flex-col gap-1 mt-2">
    <label className="text-xs ml-1 ">{label}</label>
    <input
      type="text"
      className="rounded-xl p-2 px-4 bg-white text-sm "
      placeholder={placeholder}
      onClick={(e) => e.stopPropagation()}
      value={value}
      onChange={(e) => setValue(e)}
      name={name}
    />
  </div>
);

const Cart = () => {
  const [formData, setFormData] = useState({
    // State to manage the form data for adding/editing an address
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = useCallback(
    (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  const submitForm = useCallback(
    (event) => {
      event.preventDefault();
      console.log(formData);
    },
    [formData]
  );
  //add new handle function

  return (
    <>
      <div className="flex flex-col md:flex-row  justify-center space-x-4 mx-auto px-20 w-5/6 container py-4 font-inter">
        <div className="flex justify-center w-3/6">
          <div className="flex flex-col gap-3 w-full pb-10 font-inter">
            <div className="h-auto bg-[#EFF2F3] rounded-2xl p-2 px-7">
              <h1 className="text-lg font-semibold">
                Fill out the form to complete your order
              </h1>
            </div>
            <div className="h-auto bg-[#EFF2F3] rounded-2xl p-4 px-7">
              <div className="flex space-x-3 items-center">
                <img
                  src="/public/assets/icons/address.png"
                  alt="Saved Icon"
                  className="w-6 h-6"
                />
                <h1 className="text-xl font-bold">Your contacts</h1>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <Input
                  label="Your Name"
                  placeholder="John"
                  value={formData.name}
                  setValue={handleChange}
                  name="name"
                />
                <Input
                  label="Your Surname"
                  placeholder="Smith"
                  value={formData.surname}
                  setValue={handleChange}
                  name="surname"
                />
                <Input
                  label="Your Phone Number"
                  placeholder="+880 __-____-____"
                  value={formData.phone}
                  setValue={handleChange}
                  name="phone"
                />
                <Input
                  label="Enter your email"
                  placeholder="johnsmith@gmail.com"
                  value={formData.email}
                  setValue={handleChange}
                  name="email"
                />
              </div>
            </div>
            <div className="h-auto bg-[#EFF2F3] rounded-2xl p-4 px-7">
              <div className="flex space-x-3 items-center">
                <img
                  src="/public/assets/icons/address.png"
                  alt="Saved Icon"
                  className="w-6 h-6"
                />
                <h1 className="text-xl font-bold">Billing Address</h1>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <Input
                  label="Street"
                  placeholder="joydevpur, gazipur, gazipur, 1700"
                  value={formData.street}
                  setValue={handleChange}
                  name="street"
                />
                <Input
                  label="City"
                  placeholder="Dhaka"
                  value={formData.city}
                  setValue={handleChange}
                  name="city"
                />
                <Input
                  label="State/province/area"
                  placeholder="Dhaka"
                  value={formData.area}
                  setValue={handleChange}
                  name="area"
                />
                <Input
                  label="Zip Code"
                  placeholder="0000"
                  value={formData.zip}
                  setValue={handleChange}
                  name="zip"
                />
              </div>
            </div>
            <div className="h-auto bg-[#EFF2F3] rounded-2xl p-4 px-7">
              <div className="flex space-x-3 items-center">
                <img
                  src="/public/assets/icons/card.png"
                  alt="Saved Icon"
                  className="w-6 h-6"
                />
                <h1 className="text-xl font-bold">Payment</h1>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <Input
                  type="number"
                  label=""
                  placeholder="Enter your card number"
                  value={formData.cardNumber}
                  setValue={handleChange}
                  name="cardNumber"
                />
                <div className="grid grid-cols-2 gap-5">
                  <Input
                    label=""
                    placeholder="DD/MM"
                    value={formData.expireMonth}
                    setValue={handleChange}
                    name="expireMonth"
                  />
                  <Input
                    label=""
                    placeholder="CVC"
                    value={formData.cvv}
                    setValue={handleChange}
                    name="cvv"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <button
                onClick={submitForm}
                className="text-sm bg-gradient-to-t from-[#4388EE] to-[#39BFF9] text-white px-5 py-3 rounded-xl my-2 w-full"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-3/6">
          <div className="flex flex-col gap-3 w-full pb-10 font-inter">
            <div className="h-auto bg-[#EFF2F3] rounded-2xl p-2 px-7">
              <div className="flex justify-between items-center">
                <h1 className=" font-semibold">Order Number</h1>
                <div className="flex space-x-2 items-center">
                  <h1 className="text-sm">№ 234654785</h1>
                  <img
                    src="/public/assets/icons/copy.png"
                    alt="Saved Icon"
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
            {/* // Use the CartItem component */}
            <CartItem
              imgSrc="https://source.unsplash.com/100x100/?portrait"
              name="Template Name"
              category="For Loved One"
              size="24 * 36 in"
              price="৳1,299"
              originalPrice="৳1,499"
            />
            <CartItem
              imgSrc="https://source.unsplash.com/100x100/?portrait"
              name="Template Name"
              category="For Loved One"
              size="24 * 36 in"
              price="৳1,299"
              originalPrice="৳1,499"
            />
            <div className="h-auto bg-[#EFF2F3] rounded-2xl p-2 px-7">
              <div className="flex justify-between items-center">
                <h1 className=" font-semibold">
                  To Pay:
                  <span className="text-lg  ml-2"> ৳2,598</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

CartItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  originalPrice: PropTypes.string.isRequired,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
