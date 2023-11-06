import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Box, Drawer, IconButton } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
const InputField = ({ label, type, placeholder, value, onChange, name }) => (
  <div className="flex flex-col w-1/2 gap-1">
    <label className="text-sm">{label}</label>
    <input
      type={type}
      name={name}
      className="rounded-2xl p-2 bg-white"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

const ButtonWithIcon = ({ src, alt }) => (
  <button className="">
    <img src={src} alt={alt} className="w-5 h-5" />
  </button>
);

const UpdateProfileInfo = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = useCallback(
    (open) => (event) => {
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

  const handleChange = useCallback((e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Submit the form
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 w-5/6 pb-10 font-inter">
        <div className=" h-auto bg-[#EFF2F3] rounded-2xl p-4 px-7">
          <div className="flex space-x-3 items-center">
            <ButtonWithIcon
              src="/public/assets/icons/settings.png"
              alt="Settings Icon"
            />
            <h1 className="text-2xl font-bold ">Update Profile Info</h1>
          </div>
          <div className="flex flex-col mt-6">
            <span>Avatar</span>
            <h1 className="text-sm text-blue-400 ">
              Replace the system images with your own.
            </h1>
            <div className="flex flex-col gap-3 my-4">
              <img
                src="https://source.unsplash.com/100x100/?portrait"
                alt="Avatar"
                className="w-28 h-28 rounded-full"
              />
              <div className="flex justify-center space-x-2 w-28">
                <ButtonWithIcon
                  src="/public/assets/icons/edit.png"
                  alt="Upload Icon"
                />
                <ButtonWithIcon
                  src="/public/assets/icons/delete.png"
                  alt="Upload Icon"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm my-1 font-bold ">Personal Information</h1>
              <p className="text-sm font-inter mb-2 text-[#9CD5EE]">
                Please provide your personal information so that you do not have
                to fill it in manually when placing an order.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex space-x-5  my-2">
                  <InputField
                    label="Your Name*"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Your Email*"
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex space-x-5  my-2">
                  <InputField
                    label="Your Date Of Birth"
                    type="text"
                    placeholder="01.01.2000"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex space-x-5  my-2">
                  <InputField
                    label="Your Phone Number*"
                    type="text"
                    placeholder="+ 880 00 - 0000 - 0000"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col   my-4">
                  <h1 className="text-sm my-1 font-bold ">
                    Email and Password
                  </h1>
                  <p className="text-sm font-inter mb-2 text-[#9CD5EE]">
                    Your email and password are used to log into your account
                  </p>
                  <div className="flex space-x-5  my-2">
                    <InputField
                      label="Enter your email*"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Enter your email password*"
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-start">
                    <button
                      className="text-sm my-1 text-blue-400"
                      onClick={toggleDrawer(true)}
                    >
                      Change mail
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
                          <IconButton
                            onClick={toggleDrawer(false)}
                            color="white"
                          >
                            <ArrowBackIosNew color="white" />
                          </IconButton>
                        </Box>
                        <div
                          className="flex flex-col gap-3 py-3 pt-6"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <h1 className="text-xl text-center font-bold text-blue-400">
                            Change email
                          </h1>
                          <div className="flex space-x-4 mx-8 my-3">
                            <img
                              src="https://source.unsplash.com/100x100/?portrait"
                              alt="Avatar"
                              className="w-14 h-14 rounded-full"
                            />
                            <div className="flex flex-col gap-1 justify-center">
                              <span className="text-sm font-bold">
                                Leroy Jenkins
                              </span>
                              <span className="text-sm text-gray-400">
                                leroyjenkins@gmail.com
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 mx-8">
                            <div className="flex flex-col gap-2 ">
                              <label className="text-sm ml-1 font-bold">
                                Enter your new email
                              </label>
                              <input
                                type="text"
                                className="rounded-2xl p-2 bg-white border border-blue-300"
                                placeholder="Confirm your new email"
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                            <button
                              className="text-sm bg-gradient-to-t from-[#4388EE] to-[#39BFF9] text-white px-5 py-3 rounded-2xl my-2 "
                              type="submit"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </Box>
                    </Drawer>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-start h-20">
                  <div className="flex space-x-3">
                    <button
                      className="text-sm bg-gradient-to-t from-[#4388EE] to-[#39BFF9] text-white px-5 py-2 rounded-2xl"
                      type="submit"
                    >
                      Save Profile
                    </button>

                    <button
                      className="text-sm my-1 text-blue-400 border border-blue-300 px-5 py-3 rounded-2xl"
                      onClick={toggleDrawer(true)}
                    >
                      Delete Profile
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
                          <IconButton
                            onClick={toggleDrawer(false)}
                            color="white"
                          >
                            <ArrowBackIosNew color="white" />
                          </IconButton>
                        </Box>
                        <div
                          className="flex flex-col gap-3 py-3 pt-6"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <h1 className="text-xl text-center font-bold text-blue-400">
                            Deleting a profile
                          </h1>
                          <div className="flex flex-col  mx-8 my-3">
                            <h1 className="font-bold ">
                              Are you sure you want to delete your profile?
                            </h1>
                            <p
                              className="text-sm text-gray-400"
                              onClick={toggleDrawer(false)}
                            >
                              This will lead to the loss of purchase history and
                              the deletion of all your data on the prom.ua
                              platform.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 mx-8">
                            <div className="flex justify-around space-x-5">
                              <button
                                className="text-sm text-blue-400 px-5 py-3 rounded-2xl my-2 w-full border border-blue-300 font-semibold"
                                type="submit"
                              >
                                Yes, delete
                              </button>
                              <button
                                className="text-sm bg-gradient-to-t from-[#4388EE] to-[#39BFF9] text-white px-5 py-3 rounded-2xl my-2 w-full font-semibold "
                                type="submit"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </Box>
                    </Drawer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateProfileInfo;

// Adding prop types
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

ButtonWithIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
