import React, { useContext } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Switch,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Resizer from 'react-image-file-resizer';
import { Image } from "@mui/icons-material";
import { ConfiguratorContext } from "../Configurator";
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

  const handleChange = (panel,isMoment,index) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    if(isMoment){
      console.log(index)
      window.localStorage.setItem('index',index)
      updateState({type:'SELECTED_MOMENT',payload:index})
    }
  };
  const {state,updateState}=useContext(ConfiguratorContext)
  const updateMomentDate=(index,e)=>{
      const copystate=state.moments
      copystate[index].date=(e.target.value)
      updateState({type:'UPDATE_MOMENTS_VALUE',payload:[...copystate]})
  }
  const updateMomentTime=(index,e)=>{
    const copystate=state.moments
    copystate[index].time= e.target.value
    updateState({type:'UPDATE_MOMENTS_VALUE',payload:[...copystate]})
}
const uploadFile=(e,index)=>{
  const file = e.target.files[0]
  Resizer.imageFileResizer(
      file,
      700, // New width (adjust as needed)
      700, // New height (adjust as needed)
      'png', // Format (JPEG, PNG, etc.)
      100, // Quality (adjust as needed)
      0, // Rotation (0 for no rotation)
      (uri) => {
          console.log(uri)
          // selected.ref.target.setAttribute('xlink:href',uri)
          state.uploadedImages[index].ref.setAttribute('xlink:href',uri)
          state.uploadedImages[index].ref.setAttribute('width',1000)
          state.uploadedImages[index].ref.setAttribute('height',1000)
          
   
      },
      'base64' // Output format (base64 or blob)
    );
}
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
               {
                state.uploadedImages.map((i,index)=>{
                  return (
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
                      onChange={(e)=>uploadFile(e,index)}
                      style={{ display: "none" }}
                    />
                  </div>
                  )
                })
               }
               
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
{
  state.moments.map((s,index)=>{
    return (
      <div className="flex flex-col p-2">
      <Accordion
        id="panel2"
        expanded={expanded === "panel"+index+2}
        onChange={handleChange("panel"+index+2,true,index)}
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
            Moment {index+1}
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
                value={state.moments[index].date}
                onChange={(e) => updateMomentDate(index,e)}
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
                    value={state.moments[index].time}
                    onChange={(e) => updateMomentTime(index,e)}
                  />
                )}
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    )
  })
}
     

      
    </>
  );
};

export default AccordionDataMoment;
