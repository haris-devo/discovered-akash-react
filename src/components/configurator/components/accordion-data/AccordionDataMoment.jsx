import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Switch,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Image } from "@mui/icons-material";
const AccordionDataMoment = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [location1, setLocation1] = React.useState("");
  const [date1, setDate1] = React.useState("");
  const [useDefaultTime1, setUseDefaultTime1] = React.useState(true);
  const [time1, setTime1] = React.useState("");
  const [location2, setLocation2] = React.useState("");
  const [date2, setDate2] = React.useState("");
  const [useDefaultTime2, setUseDefaultTime2] = React.useState(true);
  const [time2, setTime2] = React.useState("");

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
              Upload Photo
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-0 shadow-none">
            <Typography sx={{ wordWrap: "break-word" }}>
              <div className="grid grid-cols-4 gap-2 py-2 w-full max-h-auto h-36 overflow-y-auto">
                <div className="flex flex-col">
                  <label
                    htmlFor="file-input"
                    className="flex flex-col items-center p-2 hover:bg-blue-100 cursor-pointer"
                  >
                    <Image />
                    <span className="text-center text-blue-400 text-xs">
                      Add Photo
                    </span>
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="file-input"
                    className="flex flex-col items-center p-2 hover:bg-blue-100 cursor-pointer"
                  >
                    <Image />
                    <span className="text-center text-blue-400 text-xs">
                      Add Photo
                    </span>
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    style={{ display: "none" }}
                  />
                </div>
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
              Moment 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-0 shadow-none">
            <Typography sx={{ wordWrap: "break-word" }}>
              <div className="flex flex-col gap-3 py-2 w-full max-h-auto h-44 overflow-y-auto ">
                <input
                  type="text"
                  placeholder="Location"
                  className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
                  value={location1}
                  onChange={(e) => setLocation1(e.target.value)}
                />
                <input
                  type="Date"
                  placeholder="Date"
                  className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
                  value={date1}
                  onChange={(e) => setDate1(e.target.value)}
                />
                <div className="flex flex-col gap-2">
                  {/* toggle button  */}

                  <div className="flex items-center justify-between">
                    <p>
                      <span className="text-black text-xs ">
                        Use default time
                      </span>
                    </p>
                    <Switch
                      defaultChecked
                      className="border p-0.5 rounded-3xl"
                      checked={useDefaultTime1}
                      onChange={(e) => setUseDefaultTime1(e.target.checked)}
                    />
                  </div>
                  {!useDefaultTime1 && (
                    <input
                      type="time"
                      placeholder="Date"
                      className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
                      value={time1}
                      onChange={(e) => setTime1(e.target.value)}
                    />
                  )}
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
              Moment 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-0 shadow-none">
            <Typography sx={{ wordWrap: "break-word" }}>
              <div className="flex flex-col gap-3 py-2 w-full max-h-auto h-44 overflow-y-auto ">
                <input
                  type="text"
                  placeholder="Location"
                  className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
                  value={location2}
                  onChange={(e) => setLocation2(e.target.value)}
                />
                <input
                  type="Date"
                  placeholder="Date"
                  className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
                  value={date2}
                  onChange={(e) => setDate2(e.target.value)}
                />
                <div className="flex flex-col gap-2">
                  {/* toggle button  */}

                  <div className="flex items-center justify-between">
                    <p>
                      <span className="text-black text-xs ">
                        Use default time
                      </span>
                    </p>
                    <Switch
                      defaultChecked
                      className="border p-0.5 rounded-3xl"
                      checked={useDefaultTime2}
                      onChange={(e) => setUseDefaultTime2(e.target.checked)}
                    />
                  </div>
                  {!useDefaultTime2 && (
                    <input
                      type="time"
                      placeholder="Date"
                      className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
                      value={time2}
                      onChange={(e) => setTime2(e.target.value)}
                    />
                  )}
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default AccordionDataMoment;
