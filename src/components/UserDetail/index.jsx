import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";

import "./styles.css";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
import { Link } from "react-router-dom";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const userData = models.userModel(userId);
    setUser(userData);
  }, [userId]);

  if (!user) {
    return <Typography variant="body1">Loading user...</Typography>;
  }

  return (
    <div>
      <Typography variant="body1">
        {user.first_name} {user.last_name};
      </Typography>
      <Typography variant="body1">Location: {user.location}</Typography>
      <Typography variant="body1">Description: {user.description}</Typography>
      <Typography variant="body1">Occupation: {user.occupation}</Typography>

      <Button component={Link} to={`/photos/${user._id}`} variant="outlined" sx={{ mt: 2 }}>
        View Photos
      </Button>
    </div>
  );
}

export default UserDetail;
