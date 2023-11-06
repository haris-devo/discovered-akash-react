import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { items } from "../../constants/ConfiguratorConstant";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";


const AccordionDataDesign = () => {
  const [expanded, setExpanded] = React.useState({
    panel1: false,
    panel2: false,
    panel3: false,
    panel4: false,
    panel5: false,
  });
  const [birthdayItems, setBirthdayItems] = React.useState(items);
  const [lovedOneItems, setLovedOneItems] = React.useState(items);
  const [parentItems, setParentItems] = React.useState(items);
  const [anniversaryItems, setAnniversaryItems] = React.useState(items);
  const [familyItems, setFamilyItems] = React.useState(items);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded({...expanded,
     [panel]: isExpanded ? true : false});
  };

  return (
    <>
      <div className="flex flex-col p-2">
        <Accordion
          id="panel1"
          expanded={expanded["panel1"]}
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
                width: "10%",
                flexShrink: 0,
                marginRight: "10px",
              }}
              className="text-blue-300 mr-3"
            >
              <img
                src={window.location.origin+"/assets/icons/birthday.png"}
                alt="..."
                className="h-5 w-5  "
              />
            </Typography>
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
              {/* show only 4 small cards  */}
              <div className="grid grid-cols-4 gap-2 py-2 w-full max-h-auto h-40 overflow-y-auto ">
                {birthdayItems.map((item, index) => (
                  <button
                    key={index}
                    className="flex flex-col gap-2 items-center justify-center"
                    onClick={() => {
                      const newItems = [...birthdayItems];
                      newItems[index].selected = !newItems[index].selected;
                      setBirthdayItems(newItems);
                    }}
                  >
                    <img
                      src={window.location.origin+"/assets/icons/circle.png"
 }                     alt="..."
                      className="h-8 w-8"
                    />
                    <span className="text-center text-blue-200 font-sm">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="flex flex-col p-2">
        <Accordion
          id="panel2"
          expanded={expanded["panel2"]}
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
                width: "10%",
                flexShrink: 0,
                marginRight: "10px",
              }}
              className="text-blue-300"
            >
              <img
                src={window.location.origin+"/assets/icons/heart.svg"
  }              alt="..."
                className="h-5 w-5 "
              />
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                fontSize: "14px",
                width: "95%",
              }}
            >
              For Loved One
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-0 shadow-none">
            <Typography sx={{ wordWrap: "break-word" }}>
              <div className="grid grid-cols-4 gap-2 py-2 w-full max-h-auto h-auto overflow-y-auto ">
                {lovedOneItems.map((item, index) => (
                  <button
                    key={index}
                    className="flex flex-col gap-2 items-center justify-center"
                    onClick={() => {
                      const newItems = [...lovedOneItems];
                      newItems[index].selected = !newItems[index].selected;
                      setLovedOneItems(newItems);
                    }}
                  >
                    <img
                      src={window.location.origin+"/assets/icons/circle.png"
 }                     alt="..."
                      className="h-8 w-8"
                    />
                    <span className="text-center text-blue-200 font-sm">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="flex flex-col p-2">
        <Accordion
          id="panel3"
          expanded={expanded["panel3"]}
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
                width: "10%",
                flexShrink: 0,
                marginRight: "10px",
              }}
              className="text-blue-300"
            >
              <img
                src={window.location.origin+"/assets/icons/parents.png"
}                alt="..."
                className="h-5 w-5 "
              />
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                fontSize: "14px",
                width: "95%",
              }}
            >
              For Parents
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-0 shadow-none">
            <Typography sx={{ wordWrap: "break-word" }}>
              <div className="grid grid-cols-4 gap-2 py-2 w-full max-h-auto h-36 overflow-y-auto ">
                {parentItems.map((item, index) => (
                  <button
                    key={index}
                    className="flex flex-col gap-2 items-center justify-center"
                    onClick={() => {
                      const newItems = [...parentItems];
                      newItems[index].selected = !newItems[index].selected;
                      setParentItems(newItems);
                    }}
                  >
                    <img
                      src={window.location.origin+"/assets/icons/circle.png"
 }                     alt="..."
                      className="h-8 w-8"
                    />
                    <span className="text-center text-blue-200 font-sm">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="flex flex-col p-2">
        <Accordion
          id="panel4"
          expanded={expanded["panel4"]}
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
                width: "10%",
                flexShrink: 0,
                marginRight: "10px",
              }}
              className="text-blue-300"
            >
              <img
                src={window.location.origin+"/assets/icons/wedding.png"
}                alt="..."
                className="h-5 w-5 "
              />
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                fontSize: "14px",
                width: "95%",
              }}
            >
              Anniversary & Wedding
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-0 shadow-none">
            <Typography sx={{ wordWrap: "break-word" }}>
              <div className="grid grid-cols-4 gap-2 py-2 w-full max-h-auto h-36 overflow-y-auto ">
                {anniversaryItems.map((item, index) => (
                  <button
                    key={index}
                    className="flex flex-col gap-2 items-center justify-center"
                    onClick={() => {
                      const newItems = [...anniversaryItems];
                      newItems[index].selected = !newItems[index].selected;
                      setAnniversaryItems(newItems);
                    }}
                  >
                    <img
                      src={window.location.origin+"/assets/icons/circle.png"
 }                     alt="..."
                      className="h-8 w-8"
                    />
                    <span className="text-center text-blue-200 font-sm">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="flex flex-col p-2">
        <Accordion
          id="panel5"
          expanded={expanded["panel5"]}
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
                width: "10%",
                flexShrink: 0,
                marginRight: "10px",
              }}
              className="text-blue-300"
            >
              <img
                src={window.location.origin+"/assets/icons/family.png"
 }               alt="..."
                className="h-5 w-5 "
              />
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                fontSize: "14px",
                width: "95%",
              }}
            >
              Family
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-0 shadow-none">
            <Typography sx={{ wordWrap: "break-word" }}>
              <div className="grid grid-cols-4 gap-2 py-2 w-full max-h-auto h-36 overflow-y-auto ">
                {familyItems.map((item, index) => (
                  <button
                    key={index}
                    className="flex flex-col gap-2 items-center justify-center"
                    onClick={() => {
                      const newItems = [...familyItems];
                      newItems[index].selected = !newItems[index].selected;
                      setFamilyItems(newItems);
                    }}
                  >
                    <img
                      src={window.location.origin+"/assets/icons/circle.png"
 }                     alt="..."
                      className="h-8 w-8"
                    />
                    <span className="text-center text-blue-200 font-sm">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default AccordionDataDesign;
