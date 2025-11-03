import React from "react";

import { ListItemIcon, MenuItem } from "@mui/material";
import { UserContext } from "../UserContext";
import { Logout } from "@mui/icons-material";

export default function LogoutLink() {
    const { logout } = React.useContext(UserContext);
    

    return (
        <MenuItem
          onClick={logout}
          sx={{color: "error.main"}}
        >
          <ListItemIcon>
            <Logout
              fontSize="small"
              sx={{color: "error.main"}}
            />
          </ListItemIcon>
          Logout
        </MenuItem>
    )
}
