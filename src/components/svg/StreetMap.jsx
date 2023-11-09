import React, { useRef, useEffect, memo } from "react";

import GoogleMapReact from "google-map-react";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image-more";
import * as htmlToImage from "html-to-image";
function StreetMap({ setImage, svg, state }) {
  const mapRef = useRef(null);
  const handleCapture = async () => {
    try {
      if (mapRef.current) {
        // console.log(mapRef.current.chilren[0])
        domtoimage
          .toSvg(mapRef.current, {
            quality: 1,
            style: { backgroundColor: "black" },
          })
          .then((res) => {
            console.log(res.indexOf("border-style: solid"));
            const res2 = res.replace(
              /border-style: solid/g,
              "border-style: none!important"
            );
            setImage(res2);
            // const image=document.createElement('img')
            
            // domtoimage.toPng(image).then(res3=>{
            //   setImage(res3);
            //   })
            // image.src=res2;
           
            // download(mapRef.current,"new")
            // handleCapture2()
          });
        // const dataUrl = await domtoimage.toPng(mapRef.current);

        // setImage(dataUrl)
        // window.localStorage.setItem('street-map', dataUrl)
        console.log("streepmap");
      }
    } catch (error) {
      console.log(mapRef.current);
      console.log("Couldn't generate image:", error);
    }
  };
  function download(text, filename) {
    var blob = new Blob([text], { type: "image/png" });

    var url = window.URL.createObjectURL(blob);
    console.log(text, blob, url);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  }

  //  useEffect(()=>{
  //     handleCapture()
  //     if(svg){
  //       setTimeout(()=>handleCapture(),5000)
  //     }
  //  },[svg,state])
  return (
    <>
      {/* <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div> */}
      <div style={{ height: "2000px", width: "2000px" }} ref={mapRef}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDE7uJo2ZLlWKXBoMgkv8K9JAqnlgjCyyE" }}
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={11}
          onTilesLoaded={handleCapture}
          // onGoogleApiLoaded={handleCapture}
          options={{
            styles: state.streetmap,
            // Replace with your style JSON
          }}
        />
      </div>
    </>
  );
}

export default memo(StreetMap);
