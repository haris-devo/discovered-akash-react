/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { Rating, Tooltip } from "@mui/material";
import OrderCard from "./OrderCard";
import Faq from "./Faq";

const Orders = () => {
  const [copied, setCopied] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [selectedOrderType, setSelectedOrderType] = useState("All");
  const [selectedOrderTitle, setSelectedOrderTitle] = useState(""); // New state variable

  const handleCardClick = useCallback((card, title) => {
    console.log(title); // Add this line
    setSelectedCard({
      imgSrc: card.imgSrc,
      templateName: card.templateName,
      category: card.category,
      size: card.size,
      price: card.price,
      orderStatus: title,
    });
    setSelectedOrderTitle(title);
    setIsCardSelected(true);
  }, []);

  const handleBackClick = useCallback(() => {
    setSelectedCard(null);
    setIsCardSelected(false);
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText("123234");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide tooltip after 2 seconds
  }, []);

  const buttonClasses = (orderType) =>
    `rounded-lg px-5 py-1.5 my-3 ${
      selectedOrderType === orderType
        ? "bg-gradient-new text-white"
        : "bg-white"
    }`;

  const buttons = [
    { name: "All", count: 3 },
    { name: "Ongoing Orders", count: 1 },
    { name: "Delivered", count: 1 },
    { name: "Pending Reviewed", count: 1 },
  ];

  useEffect(() => {
    console.log("Selected card is: ", selectedCard);
  }, [selectedCard]);

  const OrderSection = ({
    title,
    orderNumber,
    cards,
    showReviewButton = false,
  }) => (
    <div className="flex flex-col h-auto bg-[#EFF2F3] rounded-2xl p-3  px-4 gap-3">
      <div className="flex space-x-3  ">
        <h1 className="text-lg font-bold ">{title}</h1>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-sm">№ {orderNumber}</span>
        <Tooltip title={copied ? "Copied!" : ""}>
          <button className=" text-sm" onClick={handleCopy}>
            <img
              src="/public/assets/icons/copy.png"
              alt=""
              className="w-4 h-4 rounded"
            />
          </button>
        </Tooltip>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 space-x-3">
        {cards.map((card, index) => (
          <OrderCard
            key={index}
            imgSrc={card.imgSrc}
            templateName={card.templateName}
            category={card.category}
            size={card.size}
            price={card.price}
            cardStatus={title}
            onClick={() => handleCardClick(card, title)}
          />
        ))}
      </div>
      <div className="w-full ml-2">
        To pay:
        <span className="text-lg font-bold  ml-1">$ 100</span>
      </div>
      {showReviewButton && (
        <div className="flex">
          <button className=" bg-gradient-to-t from-[#4388EE] to-[#39BFF9]  text-white px-5 py-2 rounded-2xl">
            Add a Review
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {!isCardSelected && (
        <div className="flex flex-col gap-4 w-5/6 pb-10">
          {/* Your orders section  */}
          <div className="flex flex-col h-40 bg-[#EFF2F3] rounded-2xl p-3 px-4">
            <div className="flex space-x-3  ">
              <img
                src="/public/assets/icons/order.png"
                alt=""
                className="w-6 h-6 rounded-full"
              />
              <h1 className="text-xl font-bold ">Your orders</h1>
            </div>
            <div className="flex flex-start space-x-3 mt-2">
              {buttons.map((button) => (
                <button
                  key={button.name}
                  className={buttonClasses(button.name)}
                  onClick={() => setSelectedOrderType(button.name)}
                >
                  {button.name}
                  <span className="ml-3">{button.count}</span>
                </button>
              ))}
            </div>
            <div className="w-full">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search by order number or name"
                className="w-full px-3 py-2 rounded-md  text-black focus:border-violet-200"
              />
            </div>
          </div>
          {/* Show all the sections  */}
          {selectedOrderType === "All" && (
            <>
              <OrderSection
                title="Ongoing Order"
                orderNumber="234654785"
                cards={[
                  {
                    imgSrc: "https://source.unsplash.com/100x100/?portrait",
                    templateName: "Template Name",
                    category: "Wedding",
                    size: "A3",
                    price: "$ 100",
                  },

                  // Add more cards as needed
                ]}
              />
              <OrderSection
                title="Pending Review"
                orderNumber="234654785"
                cards={[
                  {
                    imgSrc: "https://source.unsplash.com/100x100/?portrait",
                    templateName: "Template Name",
                    category: "Wedding",
                    size: "A3",
                    price: "$ 100",
                  },
                  // Add more cards as needed
                ]}
                showReviewButton
              />
              <OrderSection
                title="Delivered"
                orderNumber="234654785"
                cards={[
                  {
                    imgSrc: "https://source.unsplash.com/100x100/?portrait",
                    templateName: "Template Name",
                    category: "Wedding",
                    size: "A3",
                    price: "$ 100",
                  },
                  // Add more cards as needed
                ]}
              />
            </>
          )}
          {selectedOrderType === "Ongoing Orders" && (
            <OrderSection
              title="Delivered"
              orderNumber="234654785"
              cards={[
                {
                  imgSrc: "https://source.unsplash.com/100x100/?portrait",
                  templateName: "Template Name",
                  category: "Wedding",
                  size: "A3",
                  price: "$ 100",
                },
                // Add more cards as needed
              ]}
            />
          )}
          {selectedOrderType === "Pending Reviewed" && (
            <OrderSection
              title="Pending Review"
              orderNumber="234654785"
              cards={[
                {
                  imgSrc: "https://source.unsplash.com/100x100/?portrait",
                  templateName: "Template Name",
                  category: "Wedding",
                  size: "A3",
                  price: "$ 100",
                },
                // Add more cards as needed
              ]}
              showReviewButton
            />
          )}
          {selectedOrderType === "Delivered" && (
            <OrderSection
              title="Delivered"
              orderNumber="234654785"
              cards={[
                {
                  imgSrc: "https://source.unsplash.com/100x100/?portrait",
                  templateName: "Template Name",
                  category: "Wedding",
                  size: "A3",
                  price: "$ 100",
                },
                // Add more cards as needed
              ]}
            />
          )}
        </div>
      )}
      {selectedCard && (
        <>
          <div className="flex space-x-5 font-inter">
            <div className="flex flex-col gap-5 w-4/6 pb-2 font-inter">
              <div className="flex flex-col h-auto bg-[#EFF2F3] rounded-2xl p-3 px-4 gap-3">
                <button
                  className="flex space-x-3 my-2"
                  onClick={handleBackClick}
                >
                  <img
                    src="/public/assets/icons/arrowLeft.png"
                    alt=""
                    className="w-6 h-6 rounded-full"
                  />
                  <span>Back To All Orders</span>
                </button>
                <div className="flex p-1 px-3 bg-white rounded-2xl space-x-4 w-full">
                  <span className=" text-sm  text-black font-bold ">
                    № 234654785
                  </span>
                  <Tooltip title={copied ? "Copied!" : ""}>
                    <button className=" text-sm" onClick={handleCopy}>
                      <img
                        src="/public/assets/icons/copy.png"
                        alt=""
                        className="w-4 h-4 rounded"
                      />
                    </button>
                  </Tooltip>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between px-2">
                    <span>Order status:</span>
                    <span>{selectedOrderTitle}</span>
                  </div>{" "}
                  <div className="flex justify-between px-2">
                    <span>Order price:</span>
                    <span>{selectedCard.price}</span>
                  </div>
                  <div className="flex justify-between px-2">
                    <span>Discount:</span>
                    <span>-2345</span>
                  </div>
                  <div className="flex justify-between px-2">
                    <span className="font-bold">To Pay:</span>
                    <span className=" font-extrabold">
                      {selectedOrderTitle}
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex bg-white w-2/4 rounded-2xl p-5 pb-3 justify-center  space-x-3 hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer duration-200">
                    <div className="w-2/4">
                      <img
                        src="
                      https://source.unsplash.com/100x100/?portrait"
                        alt=""
                        className="w-28 h-32 rounded"
                      />
                    </div>
                    <div className="w-2/3 flex flex-col gap-1">
                      <h1 className=" font-bold">
                        {selectedCard.templateName}
                      </h1>
                      <h2 className="text-sm">
                        Category:
                        <span className="text-xs  ml-1">abc</span>
                      </h2>
                      <h2 className="text-sm">
                        Size:
                        <span className="text-xs  ml-1">123</span>
                      </h2>
                      <h2 className="text-sm">
                        Price:
                        <span className="text-xs  ml-1">
                          {selectedCard.price}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <div className="flex mx-2 items-center space-x-3">
                  <img
                    src="/public/assets/icons/delivery.png"
                    alt=""
                    className="w-6 h-6 rounded"
                  />
                  <h1 className=" font-bold text-xl">Delivery</h1>
                </div>
                <div className="flex flex-col h-auto bg-[#EFF2F3] rounded-2xl p-5 px-6 gap-3">
                  <div className="flex items-center space-x-4">
                    <span className="w-6 h-6 bg-[#D9D9D9]"></span>
                    <h1 className={`font-bold`}>Delivery service name</h1>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1>Dhaka, Bangladesh</h1>
                    <h1>7/9, west hajeepara, rampura, 1219</h1>
                    <h1>
                      Zip Code:
                      <span className="ml-1">1219</span>
                    </h1>
                    <h1>
                      Phone Number:
                      <span className="ml-1">+880 123456789</span>
                    </h1>
                    <h1 className="mt-2">Order Number</h1>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm">№ 11111</span>
                      <Tooltip title={copied ? "Copied!" : ""}>
                        <button className=" text-sm" onClick={handleCopy}>
                          <img
                            src="/public/assets/icons/copy.png"
                            alt=""
                            className="w-4 h-4 rounded"
                          />
                        </button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-2 ">
                <div className="flex mx-2 items-center space-x-3">
                  <img
                    src="/public/assets/icons/card.png"
                    alt=""
                    className="w-6 h-6 rounded"
                  />
                  <h1 className=" font-semibold text-xl">Payment</h1>
                </div>
                <div className="flex flex-col h-auto bg-[#EFF2F3] rounded-2xl p-5 px-6 gap-3">
                  <div className="flex items-center space-x-4">
                    <span className="">0000 00** **** 0000</span>
                    <h1 className={`font-bold`}>Visa</h1>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button className="py-3 px-6 text-lg font-semibold rounded-2xl  border-2 font-quanta button-text-color border-blue-300">
                      Download payment receipt
                    </button>
                  </div>
                </div>
              </div>
              {selectedOrderTitle === "Delivered" && (
                <>
                  <div className="flex flex-col gap-2 ">
                    <div className="flex mx-2 items-center space-x-3">
                      <img
                        src="/public/assets/icons/message.png"
                        alt=""
                        className="w-6 h-6 rounded"
                      />
                      <h1 className=" font-extrabold text-2xl">Your Review</h1>
                    </div>
                    <div className="flex flex-col h-auto bg-[#EFF2F3] rounded-2xl p-4 px-4 gap-3">
                      <div className="bg-white rounded-xl p-4 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <span className="w-8 h-8 bg-[#D9D9D9] rounded-full"></span>
                            <h1 className={`font-bold`}>John Smith</h1>
                          </div>
                          <div className="flex mr-2">
                            <span className="text-sm text-blue-300">
                              № 11111
                            </span>
                          </div>
                        </div>
                        <div className="flex">
                          <Rating name="read-only" value={4} readOnly />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className={`text-sm text-gray-500 font-thin`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt obcaecati numquam vel earum culpa
                            molestias quos molestiae corrupti iste nisi repellat
                            voluptas ad tempora, repellendus, corporis deserunt,
                            eos maiores aspernatur.
                          </p>
                        </div>
                        <div className="flex">
                          <img
                            //portrait
                            src="https://source.unsplash.com/100x100/?portrait"
                            alt=""
                            className="w-28 h-32 rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {selectedOrderTitle === "Pending Review" && (
                <>
                  <div className="flex flex-col gap-2 ">
                    <div className="flex mx-2 items-center space-x-3">
                      <img
                        src="/public/assets/icons/cart.png"
                        alt=""
                        className="w-4 h-4 rounded"
                      />
                      <h1 className=" font-extrabold text-2xl">Your Review</h1>
                    </div>
                    <div className="flex flex-col h-auto bg-[#EFF2F3] rounded-2xl p-4 px-4 gap-3">
                      <button className="py-3 px-6 text-lg font-semibold rounded-2xl  border-2 font-quanta text-white background-color border-blue-300">
                        Add a Review
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* second div  */}
            <div className="flex flex-col gap-6 w-2/6 font-inter ">
              <div className="flex flex-col gap-3 mt-2 ">
                <div className="flex mx-2 items-center space-x-3">
                  <img
                    src="/public/assets/icons/status.png"
                    alt=""
                    className="w-6 h-6 rounded"
                  />
                  <h1 className=" font-bold text-xl">Order Status</h1>
                </div>
                <div className="flex flex-col h-auto bg-[#EFF2F3] rounded-2xl p-3 px-4 gap-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/public/assets/icons/status-done.png"
                      alt=""
                      className="w-6 h-6 rounded"
                    />
                    <div className="flex flex-col gap-1">
                      <h1 className={`text-sm`}>Issued</h1>
                      <h1 className={`text-blue-400 text-xs font-thin`}>
                        01.01.2023 00:00
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/public/assets/icons/status-done.png"
                      alt=""
                      className="w-6 h-6 rounded"
                    />
                    <div className="flex flex-col gap-1">
                      <h1 className={`text-sm`}>Paid</h1>
                      <h1 className={`text-blue-400 text-xs font-thin`}>
                        01.01.2023 00:00
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/public/assets/icons/status-done.png"
                      alt=""
                      className="w-6 h-6 rounded"
                    />
                    <div className="flex flex-col gap-1">
                      <h1 className={`text-sm`}>Sent</h1>
                      <h1 className={`text-blue-400 text-xs font-thin`}>
                        01.01.2023 00:00
                      </h1>
                    </div>
                  </div>
                  {selectedOrderTitle === "Delivered" ||
                  selectedOrderTitle === "Pending Review" ? (
                    <>
                      <div className="flex items-center space-x-4">
                        <img
                          src="/public/assets/icons/status-done.png"
                          alt=""
                          className="w-6 h-6 rounded"
                        />
                        <div className="flex flex-col gap-1">
                          <h1 className={`font-thin text-sm`}>Delivered</h1>
                          <h1 className={`text-blue-400 text-xs font-thin`}>
                            01.01.2023 00:00
                          </h1>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <img
                          src="/public/assets/icons/status-done.png"
                          alt=""
                          className="w-6 h-6 rounded"
                        />
                        <div className="flex flex-col gap-1">
                          <h1 className={`text-sm`}>Received</h1>
                          <h1 className={`text-blue-400 text-xs font-thin`}>
                            01.01.2023 00:00
                          </h1>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>

              {/* Faqs  */}
              <div className="flex flex-col h-auto bg-[#EFF2F3] rounded-2xl p-3 px-4">
                <h1 className=" font-bold pb-3">FAQ</h1>
                <Faq />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Orders;
