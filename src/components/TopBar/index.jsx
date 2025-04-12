import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";


/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  // const location = useLocation();
  // const { userId } = useParams();
  // const [rightText, setRightText] = useState("Users");

  // useEffect(() => {
  //   if (location.pathname.startsWith("/photos/") && userId) {
  //     const user = models.userModel(userId);
  //     setRightText(`Photos of ${user.first_name}`);
  //   } else if (location.pathname.startsWith("/users/") && userId) {
  //     const user = models.userModel(userId);
  //     setRightText(`${user.first_name} ${user.last_name}`);
  //   } else {
  //     setRightText("Users");
  //   }
  // }, [location.pathname, userId]);


  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">PhotoSharing </Typography>
        {/* <Typography variant="h6">{rightText}</Typography> */}
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
