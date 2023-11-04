import React, { useState, useEffect, useRef } from 'react';

const AutocompleteInput = () => {
  const [inputValue, setInputValue] = useState("");
  const autocompleteRef = useRef(null);
  let autocomplete = null;

  const handlePlaceSelect = () => {
    const addressObject = autocomplete.getPlace();
    const address = addressObject.address_components;
    
    if (address) {
      // Here you can get more details of the selected place if you need
      console.log(addressObject);
    }
  };

  useEffect(() => {
    if (!window.google) {
      console.error("Google Maps JavaScript API library is not loaded.");
      return;
    }

    if (!window.google.maps.places) {
      console.error("Google Maps Places library is not loaded.");
      return;
    }

    autocomplete = new window.google.maps.places.Autocomplete(autocompleteRef.current, {
      types: ["geocode"],
    });

    autocomplete.setFields(["address_components", "formatted_address"]);
    autocomplete.addListener("place_changed", handlePlaceSelect);

    return () => {
      window.google.maps.event.clearInstanceListeners(autocomplete);
    };
  }, []);

  return (
    <input 
      ref={autocompleteRef}
      type="text"
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      placeholder="Enter a location"
      style={{ width: '300px', height: '40px', padding: '5px' }}
    />
  );
};

export default AutocompleteInput;
