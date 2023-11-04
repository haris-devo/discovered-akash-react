import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { items } from "../../constants/ConfiguratorConstant";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useContext, useRef } from "react";
import { ConfiguratorContext } from "../Configurator";

const AccordionDataCustomize = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedFill,setSelectedFill]=React.useState(0)
  const [selectedStarFill,setSelectedStarFill]=React.useState(0)
  const [selectedText,setSelectedText]=React.useState(0)
  const [selectedStreetFill,setSelectedStreetFill]=React.useState(0)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const {state,updateState}=useContext(ConfiguratorContext)
  const starColorRef=useRef()
  const bgColorRef=useRef()
  const updateText=(e,index)=>{
    // const copystate=state.texts
    // copystate[index].value=e.target.value;
    // updateState({type:'UPDATE_TEXTS_VALUE',payload:[...copystate]})
    state.texts[index].ref.innerHTML=e.target.value;
  }
  const updateTextStyle=(style)=>{
    state.texts[selectedText].ref.style.fontFamily=style;
  
  }
  const updateFill=(color)=>{
    console.log(state.shapes[selectedFill])
    state.shapes[selectedFill].ref.style.fill=color
  }
  const updateStarMapFill=(color,type)=>{
    console.log(type)
    updateState({type:"STAR_MAP_COLORS",payload:{ctype:type,cvalue:color}})
  }
  const updateStreetMap=(type,value,type2,type3)=>{
      const copystate=state.streetmap
      const index=copystate.findIndex(s=>s[type2]==type)
      console.log(type2,type)
      copystate[index].stylers[0][type3]=value
      updateState({type:"UPDATE_STREETMAP",payload:[...copystate]})
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
              Text
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-0 shadow-none">
            <Typography sx={{ wordWrap: "break-word" }}>
              <div className="flex flex-col gap-3 py-2 w-full max-h-auto h-28 overflow-y-auto ">
                {/* add two textarea fields */}
                {
                  state.texts && state.texts.map((t,index)=>{
                    return (
                      <textarea
                      placeholder={index==0?"Main text":"Text "+index+2}
                      className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
                      value={t.value}
                      onChange={(e)=>updateText(e,index)}
                      maxLength={index==0?15:80}
                      title={index==0?"Main text can't be longer then 15 characters":"Description can't be longer then 50 characters"}
                      />
                    )
                  })
                }
               
           
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
                  {
                    state.texts.map((t,index)=>{
                        return (
                          <button onClick={()=>setSelectedText(index)}  className={selectedText==index?" rounded-lg py-1.5 px-5 bg-gradient-new text-white text-xs font-thin shadow-xl":" rounded-lg py-1.5 px-5 text-black text-xs font-thin shadow-xl"}>
                            {index==0?"Main text":"Text "+index+2}
                          </button>
                        )
                    })
                  }
                </div>
                <div className="flex w-full justify-around px-10 py-2">
                  <button onClick={()=>updateTextStyle('Georgia')} className=" rounded-lg py-1.5 px-2  text-black text-xs font-bold font-sans">
                  Georgia
                  </button>
                  <button onClick={()=>updateTextStyle('Arial')} className=" rounded-lg py-1.5 px-2  text-black text-xs font-bold font-inter">
                    Arial
                  </button>
                  <button onClick={()=>updateTextStyle('Monaco')} className=" rounded-lg py-1.5 px-2  text-black text-xs font-bold font-serif">
                  Monaco
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
                        defaultChecked
                        name="Constellation"
                        onClick={()=>updateState({type:'STAR_MAP',type2:'checked',payload:'constellation'})}
                        className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
                      />
                      <label htmlFor="Constellation">Constellation</label>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <input
                        type="checkbox"
                        id="Constellation Names"
                        name="Constellation Names"
                        defaultChecked
                        onClick={()=>updateState({type:'STAR_MAP',type2:'checked',payload:'ctype'})}
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
                        value={state.starmap.pname}
                        onClick={()=>updateState({type:'STAR_MAP',type2:'checked',payload:'pname'})}
                        className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
                      />
                      <label htmlFor="Planet Names">Planet Names</label>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <input
                        type="checkbox"
                        id="Star Name"
                        name="Star Name"
                        defaultChecked
                        onClick={()=>updateState({type:'STAR_MAP',type2:'checked',payload:'sname'})}
                        className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
                      />
                      <label htmlFor="Star Name">Star Name</label>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <input
                        type="checkbox"
                        defaultChecked
                        id="Graticule Line"
                        name="Graticule Line"
                        onClick={()=>updateState({type:'STAR_MAP',type2:'checked',payload:'gline'})}
                        className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
                      />
                      <label htmlFor="Graticule Line">Graticule Line</label>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-center mt-2">
                  {/* <button className=" rounded-lg py-2 px-5 bg-gradient-new text-white text-xs font-500 shadow-xl">
                    Background Color
                  </button> */}
                  <button  onClick={()=>setSelectedStarFill(0)} className={selectedStarFill==0?" rounded-lg py-2 px-5 bg-gradient-new  text-black text-xs font-500 shadow-xl":" rounded-lg py-2 px-5   text-black text-xs font-500 shadow-xl"}>
                    Background Color
                    {/* <input  ref={bgColorRef} type="color" name="color" id="color" value={state.starmap.colorValue} style={{width:0,height:0}} /> */}
                  </button>
                  <button onClick={()=>setSelectedStarFill(1)} className={selectedStarFill==1?" rounded-lg py-2 px-5 bg-gradient-new  text-black text-xs font-500 shadow-xl":" rounded-lg py-2 px-5   text-black text-xs font-500 shadow-xl"}>
                    Star Color
                    {/* <input onChange={(e)=>updateState({type:"STAR_MAP_COLORS",payload:{ctype:'starcolor',cvalue:e.target.value}})} ref={starColorRef} type="color" name="color" id="color" value={state.starmap.colorValue} style={{width:0,height:0}} /> */}
               
                  </button>
                </div>
                <div className="flex w-full space-x-2">
                  <button onClick={()=>updateStarMapFill('#21618C',selectedStarFill==0?'bgcolor':'starcolor')} className=" rounded-lg p-5 px-10 bg-blue-300 border border-blue-700 text-white text-xs font-thin shadow-xl"></button>
                  <button onClick={()=>updateStarMapFill('#922B21',selectedStarFill==0?'bgcolor':'starcolor')} className=" rounded-lg p-5 px-10 bg-red-700  text-black text-xs font-thin shadow-xl"></button>
                  <button onClick={()=>updateStarMapFill('black',selectedStarFill==0?'bgcolor':'starcolor')} className=" rounded-lg p-5 px-10 bg-black  text-black text-xs font-thin shadow-xl"></button>
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
              <div className="flex w-full space-x-2">
                  {/* add 5 radio button and when button is selected give it button color  */}
                  <div className="flex flex-col gap-2 pl-10">
                    <div className="flex space-x-2 items-center">
                      <input
                        type="checkbox"
                        id="Label"
                        defaultChecked
                        name="Label"
                        onClick={()=>updateStreetMap('labels',state.streetmap[0].stylers[0].visibility=="on"?"off":"on",'elementType','visibility')}
                        className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
                      />
                      <label htmlFor="Label">Label</label>
                    </div>
                    {/* <div className="flex space-x-2 items-center">
                      <input
                        type="checkbox"
                        id="Roads"
                        name="Roads"
                        defaultChecked
                        onClick={()=>updateStreetMap('road',state.streetmap[2].stylers[0].visibility=="on"?"off":"on",'featureType','visibility')}
                        className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
                      />
                      <label htmlFor="Roads">
                        Roads
                      </label>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <input
                        type="checkbox"
                        id="Water"
                        name="Water"
                        value={state.starmap.pname}
                        onClick={()=>updateStreetMap('water',state.streetmap[3].stylers[0].visibility=="on"?"off":"on",'featureType','visibility')}
                        className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
                      />
                      <label htmlFor="Water">Water</label>
                    </div> */}
                   <div className="flex w-full justify-center mt-2">
                  {
                    state.streetmap.map((s,index)=>{
                      if(s.elementType.includes('fill'))
                        return (
                          <button  onClick={()=>setSelectedStreetFill(index)} className={selectedStreetFill==index?" rounded-lg py-2 px-5 bg-gradient-new  text-black text-xs font-500 shadow-xl":" rounded-lg py-2 px-5   text-black text-xs font-500 shadow-xl"}>
                            {s.featureType}
                          </button>
                        )
                    })
                  }
                  
                </div>
                <div className="flex w-full space-x-2">
                  <button onClick={()=>updateStreetMap(state.streetmap[selectedStreetFill].featureType,'#21618C','featureType','color')} className=" rounded-lg p-5 px-10 bg-blue-300 border border-blue-700 text-white text-xs font-thin shadow-xl"></button>
                  <button onClick={()=>updateStreetMap(state.streetmap[selectedStreetFill].featureType,'#922B21','featureType','color')} className=" rounded-lg p-5 px-10 bg-red-700  text-black text-xs font-thin shadow-xl"></button>
                  <button onClick={()=>updateStreetMap(state.streetmap[selectedStreetFill].featureType,'#000000','featureType','color')} className=" rounded-lg p-5 px-10 bg-black  text-black text-xs font-thin shadow-xl"></button>
                </div>
                  
                  </div>
                </div>
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
                  {
                    state.shapes.map((s,index)=>{
                      return (
                        <button
                        className={selectedFill===index?"rounded-lg py-2 px-5 bg-gradient-new text-white text-xs font-thin shadow-xl mx-2":"rounded-lg py-2 px-5 text-black text-xs font-thin shadow-xl mx-2"}
                        style={{ width: "100px" }}
                        onClick={()=>setSelectedFill(index)}
                     >

                        Fill Color {index+1}
                      </button>
                      )
                    })
                  }
                 
          
                </div>
                <div className="flex w-full space-x-2">
                  <button onClick={()=>updateFill('blue')} className=" rounded-lg p-5 px-10 bg-blue-800 border border-blue-100 text-white text-xs font-thin shadow-xl"></button>
                  <button onClick={()=>updateFill('red')} className=" rounded-lg p-5 px-10 bg-red-900  text-black text-xs font-thin shadow-xl"></button>
                  <button onClick={()=>updateFill('green')} className=" rounded-lg p-5 px-10 bg-green-900  text-black text-xs font-thin shadow-xl"></button>
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
