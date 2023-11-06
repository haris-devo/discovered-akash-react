import React, { memo, useContext, useEffect, useRef, useState } from "react";
import StreetMap from "./StreetMap";
import { ConfiguratorContext } from "../configurator/components/Configurator";
import AutocompleteInput from "./Autocomplete";
import { Backdrop, CircularProgress } from "@mui/material";
const ids = {
  sname: "stars-propername",
  pname: "planets-names",
  gline: "lines-graticule-show",
  constellation: "constellations-lines",
  cname: "constellations-names",
  scolor: "stars-style-fill",
  bgcolor: "background-fill",
};
const SVGEdit = () => {
  const [svgContent, setSvgContent] = useState(null);
  const svgref = useRef();
  const { state, updateState } = useContext(ConfiguratorContext);
  const [isDragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [starMapLoaded,setStarMapLoaded]=useState(false)
  const [streetMapLoaded,setStreetMapLoaded]=useState(false)
  
  const [components, setComponents] = useState({
    images: [],
    circles: [],
    rects: [],
    paths: [],
    texts: [],
  });

  const onWheel = (e) => {
    // Prevent the page from scrolling
    e.preventDefault();

    // Set the resize factor (adjust as needed)
    const resizeFactor = 10;
    // Calculate new dimension
    const newWidth =
      selected.width + (e.deltaY < 0 ? resizeFactor : -resizeFactor);
    const newHeight =
      selected.height + (e.deltaY < 0 ? resizeFactor : -resizeFactor);
    // console.log(selected.scaleX,e.deltaY)
    // Update dimensions (you might want to add minimum and maximum limits)
    selected.ref.target.setAttribute(
      "width",
      newWidth > 0 ? newWidth : selected.width
    );
    selected.ref.target.setAttribute(
      "height",
      newHeight > 0 ? newHeight : selected.height
    );
    setSelected({ ...selected, width: newWidth, height: newHeight });
  };
  const [selected, setSelected] = useState({
    type: null,
    ref: null,
    id: null,
    isDragging: false,
  });

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging || !selected.ref) return;
      console.log(dragStart,e.clientX,e.clientY)
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      const conX = dx < 0 ? -1 : 1;
      const conY = dy < 0 ? -1 : 1;

      const newX = selected.x + dx  ;
      const newY = selected.y + dy ;

      selected.ref.target.setAttribute("x", newX);
      selected.ref.target.setAttribute("y", newY);

      // setDragStart({ x: e.clientX, y: e.clientY });
      setSelected({ ...selected, x: newX, y: newY });
    };

    const onMouseUp = () => {
      setDragStart(null)
      setDragging(false);
    };
    if (selected.ref) {
      selected.ref.target.addEventListener("mousemove", onMouseMove);
    }
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      if (selected.ref) {
        selected.ref.target.removeEventListener("mousemove", onMouseMove);

      }
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging]);
  useEffect(()=>{
    if(selected.ref)
    selected.ref.target.addEventListener("wheel", onWheel);
    return ()=>
    {
      if(selected.ref)
      selected.ref.target.removeEventListener("wheel", onWheel);
    }
  },[selected])

  useEffect(() => {
    fetch(window.location.origin + "/assets/poster3.svg")
      .then((response) => response.text())
      .then((data) => setSvgContent(data))
      .catch((error) => console.error("Error fetching the SVG:", error));
  }, []);
  const fileref = useRef();
  // console.log(svgContent)
  // const [selected,setSelected]=useState(null)
  useEffect(() => {
    if (svgContent) {
      const circles = document.getElementsByTagName("circle");
      const texts = document.getElementsByTagName("text");
      const images = document.getElementsByTagName("image");
      const rects = document.getElementsByTagName("rect");

      for (const text of texts) {
        updateState({
          type: "UPDATE_TEXTS",
          payload: {
            type: "text",
            ref: text.localName !== "text" ? text.parentElement : text,
            id: text.getAttribute("id"),
          },
        });
      }
      var idspassed=[]
      for (const circle of circles){
        
        if(circle.getAttribute("id")?.toUpperCase().includes('COLOR')){
          if(idspassed.indexOf(circle.getAttribute("id"))===-1)
            {
              updateState({
              type: "UPDATE_SHAPES",
              payload: {
                type: "shape",
                ref: circle,
                id: circle,
              },
            });
          }
          idspassed.push(circle.getAttribute("id"))
        }
      }
      idspassed=[]
      for (const circle of rects){
        if(circle.getAttribute("id")?.toUpperCase().includes('COLOR')){
          if(idspassed.indexOf(circle.getAttribute("id"))===-1)
            {
              updateState({
              type: "UPDATE_SHAPES",
              payload: {
                type: "shape",
                ref: circle,
                id: circle,
              },
            });
          }
          idspassed.push(circle.getAttribute("id"))
        }
      }
      // console.log(images)
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      for (const image of images) {
        // sendMessageToIframe()
        // setComponents({
        //     ...components,
        //     images:[...components.images,{image:{
        //         ref:image,
        //         type:image.getAttribute('id'),
        //     }}]
        // })
        if (image.getAttribute("id").includes("map"))
          updateState({
            type: "UPDATE_MOMENTS_ARRAY",
            payload: {
              type: image.getAttribute("id"),
              location: {
                lat: 0,
                lon: 0,
              },
              date: new Date(),
              time: hours + ":" + minutes,
              ref: image,
            },
          });
        else
          updateState({
            type: "UPDATE_IMAGES",
            payload: {
              type: "image",
              ref: image,
            },
          });
        if (!image.getAttribute("id").includes("map"))
          image.addEventListener("mousedown", (event) => {
            // setSelected({type:'image',ref:event})
            const transform = event.target.getAttribute("transform").split(" ");
         
            const x = event.target.getAttribute("x")
              ? event.target.getAttribute("x")
              : transform[0].substring(
                  transform[0].indexOf("(") + 1,
                  transform[0].length
                );
            const y = event.target.getAttribute("y")
              ? event.target.getAttribute("y")
              : transform[1].substring(0, transform[1].length - 1);
            const scaleX = event.target.getAttribute("width");
            const scaleY = event.target.getAttribute("height");
            // image.setAttribute('x',x)
            // image.setAttribute('y',y)
            setSelected({
              type: "image",
              ref: event,
              x:selected?.x?selected.x: parseFloat(x),
              y:selected?.y?selected.y: parseFloat(y),
              width:selected.width?selected.width: parseFloat(scaleX),
              height:selected.height?selected.height: parseFloat(scaleY),
              isDragging: true,
            });
            if(dragStart===null)
            setDragStart({
              x: event.clientX ,
              y: event.clientY,
            });
            setDragging(!isDragging);

            //    window.localStorage.setItem('selectedPart',JSON.stringify(event.target))
          });
      }
    }
  }, [svgContent]);
  const iframeRef = useRef(null);

  const setStreetMapImage = (url) => {
    const images = document.getElementsByTagName("image");
  
    // console.log(images[0])

    for (const image of images) {

      if (image.getAttribute("id") === "street-map") {
        image.setAttribute("xlink:href", url);
        // image.setAttribute("x", 420);
        // image.setAttribute("y", 620);
        // image.setAttribute("transform", "scale(.17 .22)");
        setStreetMapLoaded(true)
        image.setAttribute("width", "1618");
        image.setAttribute("height", "1011");
      }
    }
  };

  useEffect(() => {
    const handleMessage = (event) => {
      console.log(state)
      updateState({type:"STAR_MAP_RESET",payload:{checked:null}})
        if (event.data== "star-map") {
          const images = document.getElementsByTagName("image");
            var index=0
          for (const image of images) {
            // sendMessageToIframe()

            if (
              image.getAttribute("id") == "star-map" &&
              (state.selectedMoment==-1||state.selectedMoment==index)
            ) {
                // console.log("heere")
              image.setAttribute("xlink:href", localStorage.getItem("map"));
              setStarMapLoaded(true)
              image.setAttribute("width", "1828");
              image.setAttribute("height", "1311");
            }
            index++;
          }
        } 
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [state]);

  useEffect(() => {
    const iframes = document.getElementsByTagName("iframe");
    console.log(state.selectedMoment)
    if (iframes.length > 0) {
      var index = 0;
      for (const iframe of iframes) {
        if (state.starmap.checked){
          iframe.contentWindow.postMessage({
            type: "checked",
            id: ids[state.starmap.checked],
          });
        }
        else if (state.starmap.colorType){
          iframe.contentWindow.postMessage({
            type: "colors",
            id: ids[state.starmap.colorType],
            value: state.starmap.colorValue,
          });
        
        }
        else if (state.moments.length&&state.selectedMoment!==-1) {
          iframe.contentWindow.postMessage({
            type: "moment",
            id: "datetime",
            value: state.moments[state.selectedMoment].date,
            value2: state.moments[state.selectedMoment].time,
            index: state.selectedMoment,
          });
          index++;
        }
      }
    }
  }, [state]);
  return (
    <>
      <div
        style={{ width: "100%", height: "100%" }}
        dangerouslySetInnerHTML={{ __html: svgContent }}
        ref={svgref}
      />
      {state.moments
        .filter((m) => m.type == "star-map")
        .map((m) => {
          return (
            <iframe
              src="viewer.html"
              style={{ height: "0vh" }}
              width={"100%"}
            />
          );
        })}

      {/* <div onClick={sendMessageToIframe}>HEllo</div> */}
      <div style={{ height: 0, width: 0,backgroundColor:'black', overflow: "hidden" }}>
        <StreetMap svg={svgContent} setImage={setStreetMapImage} state={state}/>
      </div>
      <Backdrop open={!starMapLoaded||!streetMapLoaded}>
        <CircularProgress />
      </Backdrop>
      {/* <AutocompleteInput/> */}
    </>
  );
};

export default memo(SVGEdit);
