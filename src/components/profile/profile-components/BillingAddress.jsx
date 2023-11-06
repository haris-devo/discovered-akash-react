import React, { useState, useCallback } from "react";
import { Drawer, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { ArrowBackIosNew, Edit } from "@mui/icons-material";
import PropTypes from "prop-types";

// Input component for individual input fields
const Input = ({ label, placeholder, value, setValue, name }) => (
  <div className="flex flex-col gap-2 mt-2">
    <label className="text-sm ml-1">{label}</label>
    <input
      type="text"
      className="rounded-2xl p-2 px-4 bg-white border border-blue-300"
      placeholder={placeholder}
      onClick={(e) => e.stopPropagation()}
      value={value}
      onChange={(e) => setValue(e)}
      name={name}
    />
  </div>
);

// BillingAddress component for managing billing addresses
const BillingAddress = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the opening and closing of the drawer
  const [formData, setFormData] = useState({
    // State to manage the form data for adding/editing an address
    street: "",
    city: "",
    area: "",
    phone: "",
    zip: "",
  });
  const [addresses, setAddresses] = useState([
    // State to store a list of billing addresses
    {
      street: "joydevpur, gazipur, gazipur, 1700",
      city: "Dhaka",
      area: "Dhaka",
      phone: "+880 __-____-____",
      zip: "0000",
    },
    {
      street: "joydevpur, gazipur, gazipur, 1700",
      city: "Dhaka",
      area: "Dhaka",
      phone: "+880 __-____-____",
      zip: "0000",
    },
  ]);

  const [editAddressIndex, setEditAddressIndex] = useState(-1); // State to track the index of the address being edited

  const handleChange = (e) => {
    // Handle changes in form input fields and update formData state
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleDrawer = useCallback(
    (open) => (event) => {
      // Toggle the drawer open or closed
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setIsOpen(open);
    },
    []
  );

  const handleEdit = (index) => {
    // Handle the "Edit" button click for a specific address
    // Set the editAddressIndex to track the currently edited address
    // Pre-fill the form with the selected address data
    // Open the drawer for editing
    setEditAddressIndex(index);
    setFormData(addresses[index]);
    setIsOpen(true);
  };

  const handleSave = () => {
    // Handle the "Save" button click
    if (editAddressIndex !== -1) {
      // If an address is being edited, update the existing address
      const updatedAddresses = [...addresses];
      updatedAddresses[editAddressIndex] = formData;
      setAddresses(updatedAddresses);
      setEditAddressIndex(-1); // Reset the edit index
    } else {
      // If a new address is being added, add it to the list
      setAddresses([...addresses, formData]);
    }

    // Clear the form and close the drawer
    setFormData({
      street: "",
      city: "",
      area: "",
      phone: "",
      zip: "",
    });
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-5/6 pb-10 font-inter">
        <div className="h-auto bg-[#EFF2F3] rounded-2xl p-4 px-7">
          <div className="flex space-x-3 items-center">
            <img
              src="/public/assets/icons/address.png"
              alt="Saved Icon"
              className="w-6 h-6"
            />
            <h1 className="text-2xl font-bold">Billing Address</h1>
          </div>
        </div>
        <div className="h-auto bg-[#EFF2F3] rounded-2xl p-5 border-2 border-dashed border-gray-300 px-7">
          <div className="flex space-x-3 items-center justify-center">
            <button
              type="button"
              className="bg-[#F4F4F4] hover:bg-[#EAEAEA] text-gray-600 font-bold py-3 px-8 rounded-3xl border border-blue-300"
              onClick={toggleDrawer(true)}
            >
              <span className="flex items-center space-x-4">
                <img
                  src="/public/assets/icons/plus.png"
                  alt="Add Icon"
                  className="w-6 h-6"
                />
                <span className="text-lg text-blue-300">Add new address</span>
              </span>
            </button>
            <Drawer
              anchor={"right"}
              open={isOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: "450px" }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <Box
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                  className="background-color"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IconButton onClick={toggleDrawer(false)} color="white">
                    <ArrowBackIosNew color="white" />
                  </IconButton>
                </Box>
                <div className="flex flex-col gap-3 py-3 pt-6">
                  <h1 className="text-xl text-center font-bold text-blue-400">
                    Billing Address
                  </h1>
                  <div className="flex flex-col gap-2 mx-8 mt-4">
                    <h1 className="font-bold">
                      {editAddressIndex === -1
                        ? "Add New Billing Address"
                        : "Edit Your Billing Address"}
                    </h1>
                    <Input
                      label="Street"
                      placeholder="joydevpur, gazipur, gazipur, 1700"
                      value={formData.street}
                      setValue={handleChange}
                      name="street"
                    />
                    <Input
                      label="City"
                      placeholder="Dhaka"
                      value={formData.city}
                      setValue={handleChange}
                      name="city"
                    />
                    <Input
                      label="State/province/area"
                      placeholder="Dhaka"
                      value={formData.area}
                      setValue={handleChange}
                      name="area"
                    />
                    <Input
                      label="Your Phone Number"
                      placeholder="+880 __-____-____"
                      value={formData.phone}
                      setValue={handleChange}
                      name="phone"
                    />
                    <Input
                      label="Zip Code"
                      placeholder="0000"
                      value={formData.zip}
                      setValue={handleChange}
                      name="zip"
                    />
                    <button
                      className="text-sm bg-gradient-to-t from-[#4388EE] to-[#39BFF9] text-white px-5 py-3 rounded-2xl my-2"
                      type="submit"
                      onClick={handleSave}
                    >
                      {editAddressIndex === -1 ? "Add Address" : "Save"}
                    </button>
                  </div>
                </div>
              </Box>
            </Drawer>
          </div>
        </div>
        {addresses.map((address, index) => (
          <div key={index} className="h-auto bg-[#EFF2F3] rounded-2xl p-4 px-7">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold text-blue-400 mb-1">
                  {index + 1} Billing Address
                </h1>
                <button
                  className="text-sm text-blue-400 px-5 py-3 rounded-2xl"
                  onClick={() => handleEdit(index)}
                >
                  <Edit />
                </button>
              </div>
              <div className="flex">
                <span className="font-bold">Street: </span>
                <span className="ml-2">{address.street}</span>
              </div>
              <div className="flex">
                <span className="font-bold">City: </span>
                <span className="ml-2">{address.city}</span>
              </div>
              <div className="flex">
                <span className="font-bold">State/province/area: </span>
                <span className="ml-2">{address.area}</span>
              </div>
              <div className="flex">
                <span className="font-bold">Your Phone Number: </span>
                <span className="ml-2">{address.phone}</span>
              </div>
              <div className="flex">
                <span className="font-bold">Zip Code: </span>
                <span className="ml-2">{address.zip}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BillingAddress;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
