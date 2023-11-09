import React, { useReducer, useCallback, useEffect, useState,useRef } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { images } from "../../../constants/RandomURL";
import DesigningConfigurator from "./DesigningConfigurator";
import SVGEdit from "../../svg/SVGEdit";
export const ConfiguratorContext = React.createContext();

const initialState = {
  designFor: "",
  location: "",
  date: "",
  selectedImage: images[0].url,
  showDiv: true,
  uploadedImages: [],
  heading: "",
  subHeading: "",
  moments: [],
  starmap: {
    checked: null,
    colorType: null,
    colorValue: null,
  },
  texts: [],
  selectedMoment: -1,
  shapes: [],
  streetmap: [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [{ visibility: "on" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [{ color: "#FFFFFF", visibility: "on" }],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [{ color: "#21618C", visibility: "on" }],
    },

    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [{ color: "#CBEFEF", visibility: "on" }],
    },
  ],
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
    case "STAR_MAP":
      return { ...state, starmap: { [action.type2]: action.payload } };
    case "STAR_MAP_RESET":
      return {
        ...state,
        starmap: { checked: null, colorType: null, colorValue: null },
      };
    case "STAR_MAP_COLORS":
      return {
        ...state,
        starmap: {
          colorType: action.payload.ctype,
          colorValue: action.payload.cvalue,
        },
      };
    case "UPDATE_MOMENTS_ARRAY":
      return { ...state, moments: [...state.moments, action.payload] };
    case "UPDATE_MOMENTS_VALUE":
      return { ...state, moments: action.payload };
    case "UPDATE_IMAGES":
      return {
        ...state,
        uploadedImages: [...state.uploadedImages, action.payload],
      };
    case "UPDATE_TEXTS":
      return { ...state, texts: [...state.texts, action.payload] };
    case "UPDATE_TEXTS_VALUE":
      return { ...state, texts: action.payload };
    case "SELECTED_MOMENT":
      return { ...state, selectedMoment: action.payload };
    case "UPDATE_SHAPES":
      return { ...state, shapes: [...state.shapes, action.payload] };
    case "UPDATE_STREETMAP":
      return { ...state, streetmap: action.payload };
    default:
      return state;
  }
};

const Configurator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isHovered, setIsHovered] = useState(false);
  const SVGref=useRef()
  const downloadPoster=()=>{
    SVGref.current.download()
  }
  useEffect(() => {
    console.log(state);
  }, [state]);
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
    <ConfiguratorContext.Provider value={{ state, updateState: dispatch }}>
      <div className="container mx-auto px-4 md:px-28 max-h-auto h-auto md:py-14 py-2 font-inter">
        <h1 className="text-4xl font-bold">Name Template</h1>

        <div className="flex flex-col md:flex-row md:space-x-6 my-10 h-5/6 md:justify-center">
          <div
            className={`w-full md:w-2/4   ${
              showDiv ? "mt-2" : "mt-2 md:mt-20"
            }`}
          >
            {/* image template  */}
            <div className="flex flex-col-reverse md:flex-row md:space-x-3">
              <div className="flex md:flex-col overflow-x-scroll md:overflow-x-hidden gap-2 py-4 md:w-1/5 items-center">
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
              <div className="w-full md:w-4/5 h-[30rem] max-h-auto relative">
                <div className="bg-white h-full w-full rounded-2xl svg-div">
                  <div style={{ position: "absolute", right: "5%", top: -42 }}>
                    <img
                      src={window.location.origin + "/assets/icons/guide.png"}
                      className="w-8 h-8 cursor-pointer"
                      alt="Guide"
                      width={30}
                      height={30}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    />
                    {isHovered && (
                      <div className="absolute right-0 -top-24 md:-left-32 mt-12 p-2 bg-gray-700 text-white text-xs rounded shadow-lg w-72">
                        <ul className="list-disc list-inside">
                          <li>To adjust the image after upload, click on it</li>
                          <li>Use mouse wheel to zoom in and zoom out</li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <SVGEdit
                    selectedImage={selectedImage}
                    showDiv={showDiv}
                    dispatch={dispatch}
                    ref={SVGref}
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
                    <h1 className="text-white md:text-xl font-bold pt-2">
                      Welcome To Our Configurator
                    </h1>
                    <p className="text-white text-xs md:text-sm md:px-10 px-4">
                      Let’s start customizing the poster by answering these
                      questions
                    </p>
                  </div>
                </div>
                <div className=" h-2/4">
                  <div className="flex flex-col">
                    {/* Give me 3 input fields  */}
                    <form
                      action=""
                      className="flex flex-col md:px-10 px-4 gap-4 my-4"
                    >
                      <FormControl
                        // set the design
                        className="bg-white border-white p-3 rounded-2xl "
                      >
                        <InputLabel
                          className="text-white"
                          style={{ backgroundColor: "#eaeaea" }}
                          id="designFor"
                        >
                          Who Are You Designing For
                        </InputLabel>
                        <Select
                          value={designFor}
                          onChange={handleDesignForChange}
                          key="designFor"
                          variant="filled"
                          labelId="designFor"
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
                        className="bg-white pb-2 rounded-2xl "
                        style={{ border: "1px solid black" }}
                      >
                        <InputLabel
                          className="text-white"
                          style={{ backgroundColor: "#eaeaea" }}
                          id="location"
                        >
                          Location
                        </InputLabel>
                        <Select
                          value={location}
                          onChange={handleLocationChange}
                          key="location"
                          labelId="location"
                          variant="filled"
                          // className="bg-white"
                          // variant="standard"
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
                    <button className="bg-[#6A93A5] text-white px-10 py-3 rounded-2xl my-3">
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
            <DesigningConfigurator download={downloadPoster}/>
          )}
        </div>
      </div>
    </ConfiguratorContext.Provider>
  );
};

export default Configurator;
