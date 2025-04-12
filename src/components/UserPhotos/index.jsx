import React, {useEffect, useState} from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

import "./styles.css";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
import { Link } from "react-router-dom";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleString();
}

function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const photoData = models.photoOfUserModel(userId);
    setPhotos(photoData);
  }, [userId]);

  return (
    <div>
      {photos.map((photo) => (
        <Card key={photo._id} sx={{mb: 3}}>
          <CardMedia component="img" height="300" image={`../../images/${photo.file_name}`} alt="User photo"/>
          <CardContent>
            <Typography variant="body2">
              Date on: {formatDate(photo.date_time)}
            </Typography>

            {photo.comments?.map((comment) => (
              <div key={comment._id}>
                <Typography variant="subtitle2">
                  <Link to={`/users/${comment.user._id}`}>
                    {comment.user.first_name} {comment.user.last_name}
                  </Link>
                </Typography>
                <Typography variant="caption">
                  {formatDate(comment.date_time)}
                </Typography>
                <Typography variant="body2">{comment.comment}</Typography>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
