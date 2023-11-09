import { buttons } from "../constants/ConfiguratorConstant";
import { useState } from "react";
import AccordionDataDesign from "./accordion-data/AccordionDataDesign";
import AccordionDataMoment from "./accordion-data/AccordionDataMoment";
import AccordionDataCustomize from "./accordion-data/AccordionDataCustomize";

const DesigningConfigurator = ({download}) => {
  const [showDiv, setShowDiv] = useState("Design");

  const handleButtonClick = (buttonName) => {
    setShowDiv(buttonName);
  };

  const renderDiv = () => {
    switch (showDiv) {
      case "Moment":
        return (
          <div className="h-full design-div">
            <div className="flex flex-col md:space-x-3 h-full gap-5" style={{height: '44vh',overflow: 'scroll',}}>
              <h1 className="font-semibold my-6 mb-3  ">
                Select your favorite design:{" "}
              </h1>
              <div className="flex flex-col  bg-white shadow-lg rounded-lg h-auto ">
                <AccordionDataMoment />
              </div>
            </div>
            <div className="my-4 flex w-full flex-col gap-2 ">
            <button
                    className="text-black border-2 px-6 py-4 rounded-2xl flex items-center space-x-2" style={{justifyContent:'center'}}
                    onClick={() => setShowDiv("Customize")}
                  >
                    Next
                    <span className="ml-2">
                      <img
                        src={window.location.origin + "/assets/icons/arrow.png"}
                        alt="..."
                        className="h-4 w-4"
                      />
                    </span>
                  </button>
                <div className="flex justify-between w-full px-2">
                  <span>To Pay:</span>
                  <span>2000</span>
                </div>
                <div className="flex justify-between">
                  {/* add to cart button  */}
                  <button
                    className="text-black border-2 px-6 py-4 rounded-2xl flex items-center space-x-2"
                    // onClick={() => setShowDiv("Size")}
                    onClick={download}
                  >
                    Save
                    {/* <span className="ml-2">
                      <img
                        src={window.location.origin + "/assets/icons/arrow.png"}
                        alt="..."
                        className="h-4 w-4"
                      />
                    </span> */}
                  </button>
                  <button className=" text-white px-10 py-3 rounded-2xl bg-gradient-new">
                    Add to Cart
                  </button>
                 
                </div>
            </div>
          </div>
        );
      case "Customize":
        return (
          <div className="h-full design-div">
            <div className="flex flex-col space-x-3 ">
            <div className="flex flex-col md:space-x-3 h-full gap-5" style={{height: '44vh',overflow: 'scroll',}}>
              <h1 className="font-semibold my-6 mb-3">
                Select your favorite design:{" "}
              </h1>
              <div className="flex flex-col  bg-white shadow-lg rounded-lg ">
                <AccordionDataCustomize />
              </div>
              </div>
              <div className="my-4 flex w-full flex-col gap-2">
                <button
                    className="text-black border-2 px-6 py-4 rounded-2xl flex items-center space-x-2" style={{justifyContent:'center'}}
                    onClick={() => setShowDiv("Size")}
                  >
                    Next
                    <span className="ml-2">
                      <img
                        src={window.location.origin + "/assets/icons/arrow.png"}
                        alt="..."
                        className="h-4 w-4"
                      />
                    </span>
                  </button>
                <div className="flex justify-between w-full px-2">
                  <span>To Pay:</span>
                  <span>2000</span>
                </div>
                <div className="flex justify-between">
                  {/* add to cart button  */}
                  <button
                    className="text-black border-2 px-6 py-4 rounded-2xl flex items-center space-x-2"
                    // onClick={() => setShowDiv("Size")}
                    onClick={download}
                  >
                    Save
                    {/* <span className="ml-2">
                      <img
                        src={window.location.origin + "/assets/icons/arrow.png"}
                        alt="..."
                        className="h-4 w-4"
                      />
                    </span> */}
                  </button>
                  <button className=" text-white px-10 py-3 rounded-2xl bg-gradient-new">
                    Add to Cart
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        );
      case "Size":
        return (
          <div className="h-full design-div">
            <div className="flex flex-col space-x-3 ">
            <div className="flex flex-col md:space-x-3 h-full gap-5" style={{height: '44vh',overflow: 'scroll',}}>
              <h1 className="font-semibold my-6 mb-3">
                Select your favorite design:{" "}
              </h1>
              <div className="flex flex-col  bg-white shadow-lg rounded-lg ">
                <div className="flex flex-col gap-2 px-4 py-2 mt-3">
                  {/* add three radio button and there labels  */}
                  <div className="flex items-center space-x-4 px-2  ">
                    <input type="radio" name="size" id="size1" />
                    <div className="flex justify-between w-full">
                      <label htmlFor="size1" className="text-xs">
                        12 * 16 in
                      </label>
                      <div className="flex space-x-2 items-center ">
                        <span className="text-gray-400 text-xs line-through">
                          1595
                        </span>
                        <span className="text-gray-400 text-xs">Rs. 1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 px-2  ">
                    <input type="radio" name="size" id="size1" />
                    <div className="flex justify-between w-full">
                      <label htmlFor="size1" className="text-xs">
                        12 * 16 in
                      </label>
                      <div className="flex space-x-2 items-center ">
                        <span className="text-gray-400 text-xs line-through">
                          1595
                        </span>
                        <span className="text-gray-400 text-xs">Rs. 1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 px-2  ">
                    <input type="radio" name="size" id="size1" />
                    <div className="flex justify-between w-full">
                      <label htmlFor="size1" className="text-xs">
                        12 * 16 in
                      </label>
                      <div className="flex space-x-2 items-center ">
                        <span className="text-gray-400 text-xs line-through">
                          1595
                        </span>
                        <span className="text-gray-400 text-xs">Rs. 1000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex py-2 border-t border-blue-200 mx-3">
                  <h1 className="text-xs font-thin text-gray-400">
                    Choose frame
                  </h1>
                </div>
                <div className="flex w-full space-x-2 py-2 pb-5 px-2 ">
                  <button className=" rounded-lg py-2 px-5 bg-gradient-new text-white text-xs font-500 shadow-xl">
                    Standard
                  </button>
                  <button className=" rounded-lg py-2 px-5  text-black text-xs font-500 shadow-xl">
                    Metal
                  </button>
                  <button className=" rounded-lg py-2 px-5  text-black text-xs font-500 shadow-xl">
                    Wood
                  </button>
                </div>
              </div>
              </div>
              <div className="my-4 flex w-full flex-col gap-2">
                <div className="flex justify-between w-full px-2">
                  <span>To Pay:</span>
                  <span>2000</span>
                </div>
                <div className="flex justify-between">
                  {/* add to cart button  */}
                  <button
                    className="text-black border-2 px-6 py-4 rounded-2xl flex items-center space-x-2"
                    // onClick={() => setShowDiv("Size")}
                    onClick={download}
                  >
                    Save
                    {/* <span className="ml-2">
                      <img
                        src={window.location.origin + "/assets/icons/arrow.png"}
                        alt="..."
                        className="h-4 w-4"
                      />
                    </span> */}
                  </button>
                  <button className=" text-white px-10 py-3 rounded-2xl bg-gradient-new">
                    Add to Cart
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="h-full design-div">
            <div className="flex flex-col space-x-3 ">
            <div className="flex flex-col md:space-x-3 h-full gap-5" style={{height: '44vh',overflow: 'scroll',}}>
              <h1 className="font-semibold my-6 mb-3">
                Select your favorite design:{" "}
              </h1>
              <div className="flex flex-col  bg-white shadow-lg rounded-lg ">
                <AccordionDataDesign />
              </div>
              </div>
              <div className="my-4 flex w-full flex-col gap-2">
              <button
                    className="text-black border-2 px-6 py-4 rounded-2xl flex items-center space-x-2" style={{justifyContent:'center'}}
                    onClick={() => setShowDiv("Moment")}
                  >
                    Next
                    <span className="ml-2">
                      <img
                        src={window.location.origin + "/assets/icons/arrow.png"}
                        alt="..."
                        className="h-4 w-4"
                      />
                    </span>
                  </button>
                <div className="flex justify-between w-full px-2">
                  <span>To Pay:</span>
                  <span>2000</span>
                </div>
                <div className="flex justify-between">
                  {/* add to cart button  */}
                  <button
                    className="text-black border-2 px-6 py-4 rounded-2xl flex items-center space-x-2"
                    // onClick={() => setShowDiv("Size")}
                    onClick={download}
                  >
                    Save
                    {/* <span className="ml-2">
                      <img
                        src={window.location.origin + "/assets/icons/arrow.png"}
                        alt="..."
                        className="h-4 w-4"
                      />
                    </span> */}
                  </button>
                  <button className=" text-white px-10 py-3 rounded-2xl bg-gradient-new">
                    Add to Cart
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  const renderButton = (button) => {
    return (
      <button
        key={button.name}
        className={`bg-white text-black px-2 py-1 w-full rounded-lg shadow-lg ${
          showDiv === button.name ? "bg-gradient-new text-white" : ""
        }`}
        onClick={() => handleButtonClick(button.name)}
      >
        {button.label}
      </button>
    );
  };

  return (
    <div className="w-full md:w-1/3 rounded-xl bg-gray-50 h-[30rem] py-3 mt-6 md:mt-0">
      {/* <div className="flex justify-between m-4">
        <img
          src={window.location.origin + "/assets/icons/guide.png"}
          alt="..."
          className="h-10 w-10 rounded-full"
        />
        <button
          className="text-black underline "
          onClick={() => setShowDiv("Design")}
        >
          Save
        </button>
      </div> */}
      <div className="flex w-full gap-2 px-4 pt-4">
        {buttons.map((button) => renderButton(button))}
      </div>
      {renderDiv()}
    </div>
  );
};

export default DesigningConfigurator;
