const {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} = require("@mui/material");

import React from "react";

const EmployeeList = () => {
  return (
    <Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }} disablePadding>
        <ListItem sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
          <ListItemText
            primary={
              <Typography
                sx={{ fontSize: "20px", fontWeight: "600", display: "inline" }}
              >
                W
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          alignItems="flex-start"
          sx={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          <ListItemAvatar>
            <Avatar
              alt="Employee Profile"
              src="/images/emp1.png"
              sx={{ width: "40px", height: "40px" }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography sx={{ fontSize: "14px" }}>Prica</Typography>}
            secondary={
              <Typography
                sx={{ display: "inline", fontSize: "14px" }}
                component="span"
                variant="body2"
              >
                Thai Beverage Public Company Limited.
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem
          alignItems="flex-start"
          sx={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          <ListItemAvatar>
            <Avatar
              alt="Employee Profile"
              src="/images/emp2.png"
              sx={{ width: "40px", height: "40px" }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontSize: "14px",
                }}
              >
                Prica
              </Typography>
            }
            secondary={
              <Typography
                sx={{
                  fontSize: "14px",
                }}
                component="span"
                variant="body2"
              >
                Thai Beverage Public Company Limited.
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem
          alignItems="flex-start"
          sx={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          <ListItemAvatar>
            <Avatar
              alt="Employee Profile"
              src="/images/emp3.png"
              sx={{ width: "40px", height: "40px" }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography sx={{ fontSize: "14px" }}>Prica</Typography>}
            secondary={
              <Typography
                sx={{ display: "inline", fontSize: "14px" }}
                component="span"
                variant="body2"
              >
                Thai Beverage Public Company Limited.
              </Typography>
            }
          />
        </ListItem>

        <ListItem
          alignItems="flex-start"
          sx={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          <ListItemText
            primary={
              <Typography
                sx={{ fontSize: "20px", fontWeight: "600", display: "inline" }}
              >
                S
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          alignItems="flex-start"
          sx={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          <ListItemAvatar>
            <Avatar
              alt="Employee Profile"
              src="/images/emp1.png"
              sx={{ width: "40px", height: "40px" }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography sx={{ fontSize: "14px" }}>Prica</Typography>}
            secondary={
              <Typography
                sx={{ display: "inline", fontSize: "14px" }}
                component="span"
                variant="body2"
              >
                Thai Beverage Public Company Limited.
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem
          alignItems="flex-start"
          sx={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          <ListItemAvatar>
            <Avatar
              alt="Employee Profile"
              src="/images/emp2.png"
              sx={{ width: "40px", height: "40px" }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography sx={{ fontSize: "14px" }}>Prica</Typography>}
            secondary={
              <Typography
                sx={{ display: "inline", fontSize: "14px" }}
                component="span"
                variant="body2"
              >
                Thai Beverage Public Company Limited.
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem
          alignItems="flex-start"
          sx={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          <ListItemAvatar>
            <Avatar
              alt="Employee Profile"
              src="/images/emp3.png"
              sx={{ width: "40px", height: "40px" }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography sx={{ fontSize: "14px" }}>Prica</Typography>}
            secondary={
              <Typography
                sx={{ display: "inline", fontSize: "14px" }}
                component="span"
                variant="body2"
              >
                Thai Beverage Public Company Limited.
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default EmployeeList;
