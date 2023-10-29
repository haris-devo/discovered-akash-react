import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { items } from "../../constants/ConfiguratorConstant";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const AccordionDataCustomize = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="flex flex-col p-2">
        <Accordion
          id="panel1"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className="border-0 outline-0 shadow-none "
          sx={{
            // remove the shadow
            boxShadow: "none",
            borderRadius: "0px !important",
            position: "initial",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-blue-300 " />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="h-12 rounded "
            sx={{
              position: "initial",
              // remove the shadow
              boxShadow: "none",
            }}
          >
            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                fontSize: "14px",
                width: "95%",
              }}
            >
              Birthday
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-0 shadow-none">
            <Typography sx={{ wordWrap: "break-word" }}>
              <div className="flex flex-col gap-3 py-2 w-full max-h-auto h-28 overflow-y-auto ">
                {/* add two textarea fields */}
                <textarea
                  placeholder="Main text"
                  className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
                />
                <textarea
                  placeholder="2nd text"
                  className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
                />
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="flex flex-col p-2">
        <Accordion
          id="panel2"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          className="border-0 outline-0 shadow-none "
          sx={{
            // remove the shadow
            boxShadow: "none",
            borderRadius: "0px !important",
            position: "initial",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-blue-300 " />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            className="h-12 rounded "
            sx={{
              position: "initial",
              // remove the shadow
              boxShadow: "none",
            }}
          >
            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                fontSize: "14px",
                width: "95%",
              }}
            >
              Font style
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-0 shadow-none">
            <Typography sx={{ wordWrap: "break-word" }}>
              <div className="flex flex-col gap-3 py-2 w-full max-h-auto h-28 overflow-y-auto ">
                <div className="flex w-full justify-around px-2">
                  <button className=" rounded-lg py-1.5 px-5 bg-gradient-new text-white text-xs font-thin shadow-xl">
                    Main text
                  </button>
                  <button className=" rounded-lg py-1.5 px-5  text-black text-xs font-thin shadow-xl">
                    2nd text
                  </button>
                  <button className=" rounded-lg py-1.5 px-5  text-black text-xs font-thin shadow-xl">
                    3rd text
                  </button>
                </div>
                <div className="flex w-full justify-around px-10 py-2">
                  <button className=" rounded-lg py-1.5 px-2  text-black text-xs font-bold font-sans">
                    Font 1
                  </button>
                  <button className=" rounded-lg py-1.5 px-2  text-black text-xs font-bold font-inter">
                    Font 2
                  </button>
                  <button className=" rounded-lg py-1.5 px-2  text-black text-xs font-bold font-serif">
                    Font 3
                  </button>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="flex flex-col p-2">
        <Accordion
          id="panel3"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          className="border-0 outline-0 shadow-none "
          sx={{
            // remove the shadow
            boxShadow: "none",
            borderRadius: "0px !important",
            position: "initial",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-blue-300 " />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            className="h-12 rounded "
            sx={{
              position: "initial",
              // remove the shadow
              boxShadow: "none",
            }}
          >
            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                fontSize: "14px",
                width: "95%",
              }}
            >
              Starmap
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-0 shadow-none">
            <Typography sx={{ wordWrap: "break-word" }}>
              <div className="flex flex-col gap-3 py-2 w-full max-h-auto h-72 overflow-y-auto ">
                <div className="flex w-full space-x-2">
                  {/* add 5 radio button and when button is selected give it button color  */}
                  <div className="flex flex-col gap-2 pl-10">
                    <div className="flex space-x-2 items-center">
                      <input
                        type="checkbox"
                        id="Constellation"
                        name="Constellation"
                        value="Constellation"
                        className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
                      />
                      <label htmlFor="Constellation">Constellation</label>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <input
                        type="checkbox"
                        id="Constellation Names"
                        name="Constellation Names"
                        value="Constellation Names"
                        className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
                      />
                      <label htmlFor="Constellation Names">
                        Constellation Names
                      </label>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <input
                        type="checkbox"
                        id="Planet Names"
                        name="Planet Names"
                        value="Planet Names"
                        className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
                      />
                      <label htmlFor="Planet Names">Planet Names</label>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <input
                        type="checkbox"
                        id="Star Name"
                        name="Star Name"
                        value="Star Name"
                        className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
                      />
                      <label htmlFor="Star Name">Star Name</label>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <input
                        type="checkbox"
                        id="Graticule Line"
                        name="Graticule Line"
                        value="Graticule Line"
                        className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
                      />
                      <label htmlFor="Graticule Line">Graticule Line</label>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between mt-2">
                  <button className=" rounded-lg py-2 px-5 bg-gradient-new text-white text-xs font-500 shadow-xl">
                    Background Color
                  </button>
                  <button className=" rounded-lg py-2 px-5  text-black text-xs font-500 shadow-xl">
                    Star Color
                  </button>
                  <button className=" rounded-lg py-2 px-5  text-black text-xs font-500 shadow-xl">
                    Constilation Color
                  </button>
                </div>
                <div className="flex w-full space-x-2">
                  <button className=" rounded-lg p-5 px-10 bg-white border border-blue-100 text-white text-xs font-thin shadow-xl"></button>
                  <button className=" rounded-lg p-5 px-10 bg-slate-700  text-black text-xs font-thin shadow-xl"></button>
                  <button className=" rounded-lg p-5 px-10 bg-slate-300  text-black text-xs font-thin shadow-xl"></button>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="flex flex-col p-2">
        <Accordion
          id="panel4"
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          className="border-0 outline-0 shadow-none "
          sx={{
            // remove the shadow
            boxShadow: "none",
            borderRadius: "0px !important",
            position: "initial",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-blue-300 " />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            className="h-12 rounded "
            sx={{
              position: "initial",
              // remove the shadow
              boxShadow: "none",
            }}
          >
            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                fontSize: "14px",
                width: "95%",
              }}
            >
              Streetmap
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-0 shadow-none">
            <Typography sx={{ wordWrap: "break-word" }}>
              <div className="grid grid-cols-4 gap-2 py-2 w-full max-h-auto h-36 overflow-y-auto ">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 items-center justify-center"
                  >
                    <img
                      src="../../../../public/assets/icons/circle.png"
                      alt="..."
                      className="h-8 w-8"
                    />
                    <span className="text-center text-blue-200 font-sm">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="flex flex-col p-2">
        <Accordion
          id="panel5"
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          className="border-0 outline-0 shadow-none "
          sx={{
            // remove the shadow
            boxShadow: "none",
            borderRadius: "0px !important",
            position: "initial",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-blue-300 " />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
            className="h-12 rounded "
            sx={{
              position: "initial",
              // remove the shadow
              boxShadow: "none",
            }}
          >
            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                fontSize: "14px",
                width: "95%",
              }}
            >
              Color
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-0 shadow-none">
            <Typography sx={{ wordWrap: "break-word" }}>
              <div className="flex flex-col gap-3 py-2 w-full max-h-auto h-44 overflow-y-auto ">
                <div className="flex w-full space-x-2 flex-wrap px-2 gap-2 my-2">
                  <button
                    className="rounded-lg py-2 px-5 bg-gradient-new text-white text-xs font-thin shadow-xl mx-2"
                    style={{ width: "100px" }}
                  >
                    Fill Color 1
                  </button>
                  <button
                    className="rounded-lg py-2 px-5 text-black text-xs font-thin shadow-xl mx-2"
                    style={{ width: "100px" }}
                  >
                    Fill Color 2
                  </button>
                  <button
                    className="rounded-lg py-2 px-5 text-black text-xs font-thin shadow-xl mx-2"
                    style={{ width: "100px" }}
                  >
                    Fill Color 3
                  </button>
                  <button
                    className="rounded-lg py-2 px-5 text-black text-xs font-thin shadow-xl mx-2"
                    style={{ width: "100px" }}
                  >
                    Fill Color 4
                  </button>
                </div>
                <div className="flex w-full space-x-2">
                  <button className=" rounded-lg p-5 px-10 bg-white border border-blue-100 text-white text-xs font-thin shadow-xl"></button>
                  <button className=" rounded-lg p-5 px-10 bg-slate-700  text-black text-xs font-thin shadow-xl"></button>
                  <button className=" rounded-lg p-5 px-10 bg-slate-300  text-black text-xs font-thin shadow-xl"></button>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default AccordionDataCustomize;
