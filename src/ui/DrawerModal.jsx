import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ArrowBackIosNew } from "@mui/icons-material";

export default function DrawerModal({ children, buttonInfo, openDrawer }) {
  const [state, setState] = React.useState({
    right: openDrawer,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const drawerContent = (
    <Box
      sx={{ width: "450px" }}
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <Box
        sx={{ display: "flex", justifyContent: "flex-start" }}
        className="background-color"
      >
        <IconButton onClick={toggleDrawer("right", false)} color="white">
          <ArrowBackIosNew color="white" />
        </IconButton>
      </Box>
      {children}
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer("right", true)}>{buttonInfo}</button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
}

DrawerModal.propTypes = {
  children: PropTypes.node.isRequired,
  buttonInfo: PropTypes.string.isRequired,
  openDrawer: PropTypes.bool.isRequired,
};
