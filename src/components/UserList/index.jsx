import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Link as LinkUI,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";
import { Link } from "react-router-dom";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
  const users = models.userListModel();
  return (
    <div>
      <List component="nav">
        {users.map((item) => (
          <Link to={`/users/${item._id}`} style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemText primary={`${item.first_name} ${item.last_name}`} />
            </ListItem>
            <Divider />
          </Link>
        ))}
      </List>
    </div>
  );
}

export default UserList;
