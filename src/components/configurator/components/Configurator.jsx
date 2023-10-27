import { useReducer, useCallback, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { images } from "../../../constants/RandomURL";
import DesigningConfigurator from "./DesigningConfigurator";

const initialState = {
  designFor: "",
  location: "",
  date: "",
  selectedImage: images[0].url,
  showDiv: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DESIGN_FOR":
      return { ...state, designFor: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "SET_SELECTED_IMAGE":
      return { ...state, selectedImage: action.payload };
    case "SET_SHOW_DIV":
      return { ...state, showDiv: action.payload };
    default:
      return state;
  }
};

const Configurator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDesignForChange = useCallback((event) => {
    dispatch({ type: "SET_DESIGN_FOR", payload: event.target.value });
  }, []);

  const handleLocationChange = useCallback((event) => {
    dispatch({ type: "SET_LOCATION", payload: event.target.value });
  }, []);

  const handleDateChange = useCallback((event) => {
    dispatch({ type: "SET_DATE", payload: event.target.value });
  }, []);

  const handleImageClick = useCallback((image) => {
    dispatch({ type: "SET_SELECTED_IMAGE", payload: image.url });
  }, []);

  useEffect(() => {
    document.title = `Configurator - ${state.selectedImage}`;
  }, [state.selectedImage]);

  const { designFor, location, date, selectedImage, showDiv } = state;

  return (
    <>
      <div className="container mx-auto px-4 md:px-28 max-h-auto h-[140vh] py-10 font-inter">
        <h1 className="text-4xl font-bold">Name Template</h1>
        <div className="flex flex-col md:flex-row space-x-6 my-10 h-5/6">
          <div className={`w-full md:w-2/3   ${showDiv ? "mt-2" : "mt-20"}`}>
            {/* image template  */}
            <div className="flex flex-col md:flex-row space-x-3">
              <div className="flex flex-col gap-2 py-4">
                {images.map((image) => (
                  <div
                    className={` h-20 w-20 rounded-2xl cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all border-2 border-blue-200 ${
                      selectedImage === image.url ? "shadow-xl" : "p-1"
                    }`}
                    key={image.id}
                    onClick={() => handleImageClick(image)}
                  >
                    <img
                      src={image.url}
                      alt="..."
                      className="h-full w-full rounded-2xl"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full md:w-full h-[30rem] max-h-auto">
                <div className="bg-black h-full w-full rounded-2xl">
                  <img
                    src={selectedImage}
                    alt="..."
                    className="h-full w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          {showDiv ? (
            <div className="w-full md:w-[518px] rounded-xl bg-[#313942] h-[30rem] py-3 mt-6 md:mt-0">
              <div className="flex flex-col h-full gap-3">
                <div className=" h-1/4">
                  <div className="flex flex-col text-center justify-center h-full items-center gap-2">
                    <h1 className="text-white text-xl font-bold">
                      Welcome To Our Configurator
                    </h1>
                    <p className="text-white text-sm px-10">
                      Let’s start customizing the poster by answering these
                      questions
                    </p>
                  </div>
                </div>
                <div className=" h-2/4">
                  <div className="flex flex-col">
                    {/* Give me 3 input fields  */}
                    <form action="" className="flex flex-col px-10 gap-3">
                      <FormControl
                        // set the design
                        className="bg-white border-b border-white  focus:outline-none p-3 rounded-2xl"
                      >
                        <InputLabel className="text-white">
                          Who Are You Designing For
                        </InputLabel>
                        <Select
                          value={designFor}
                          onChange={handleDesignForChange}
                          key="designFor"
                        >
                          <MenuItem value="Option 1" key="Option 1">
                            Option 1
                          </MenuItem>
                          <MenuItem value="Option 2" key="Option 2">
                            Option 2
                          </MenuItem>
                          <MenuItem value="Option 3" key="Option 3">
                            Option 3
                          </MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl
                        // set the design
                        className="bg-white border-b border-white  focus:outline-none p-3 rounded-2xl"
                      >
                        <InputLabel className="text-white">Location</InputLabel>
                        <Select
                          value={location}
                          onChange={handleLocationChange}
                          key="location"
                        >
                          <MenuItem value="Option 1" key="Option 1">
                            Option 1
                          </MenuItem>
                          <MenuItem value="Option 2" key="Option 2">
                            Option 2
                          </MenuItem>
                          <MenuItem value="Option 3" key="Option 3">
                            Option 3
                          </MenuItem>
                        </Select>
                      </FormControl>
                      {/* create a date picker input field */}
                      <div>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          className="bg-white border-b border-white text-black focus:outline-none p-3 rounded-2xl w-full"
                          value={date}
                          onChange={handleDateChange}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className=" h-1/4 mb-6">
                  <div className="flex flex-col justify-between items-center h-full ">
                    <button className="bg-[#6A93A5] text-white px-10 py-3 rounded-2xl">
                      Start Designing
                    </button>
                    <button
                      className=" underline text-white font-light"
                      onClick={() =>
                        dispatch({ type: "SET_SHOW_DIV", payload: false })
                      }
                    >
                      Skip this process
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <DesigningConfigurator />
          )}
        </div>
      </div>
    </>
  );
};

export default Configurator;
