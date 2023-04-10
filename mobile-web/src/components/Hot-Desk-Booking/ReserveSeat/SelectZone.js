import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";

const SelectZone = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        mt={2}
      >
        <Typography
          component={"span"}
          fontSize={"14px"}
          sx={{
            backgroundColor: "#fafbfb",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Choose a zone or seat
        </Typography>
        <Typography
          component={"span"}
          fontSize={"14px"}
          onClick={props.handleViewTypeChange}
          sx={{
            backgroundColor: "#fafbfb",
            padding: "5px",
            borderRadius: "5px",
            color: "#5aa194",
            fontWeight: "600",
          }}
        >
          {props.viewType == 1 ? "Diagram" : "List"}
        </Typography>
      </Box>
      <Box mt={2} sx={{ width: "100%" }}>
        {props.viewType == 1 ? (
          <List
            sx={{
              maxWidth: "100%",
              width: "100%",
              backgroundColor: "#f0f0f1",
              borderRadius: "10px",
            }}
            disablePadding
          >
            <ListItem
              sx={{ justifyContent: "space-between" }}
              onClick={(event) => props.handleZoneChange(event, 0)}
            >
              <ListItemText
                primary="Zone A"
                primaryTypographyProps={{ fontSize: "14px" }}
              />
              <ListItemText
                primary="20/35 >"
                sx={{ textAlign: "right" }}
                primaryTypographyProps={{ fontSize: "14px" }}
              />
            </ListItem>
            <Divider />
            <ListItem
              sx={{ justifyContent: "space-between" }}
              onClick={(event) => props.handleZoneChange(event, 1)}
            >
              <ListItemText
                primary="Zone B"
                primaryTypographyProps={{ fontSize: "14px" }}
              />
              <ListItemText
                primary="3/25 >"
                sx={{ textAlign: "right", fontSize: "14px" }}
                primaryTypographyProps={{ fontSize: "14px" }}
              />
            </ListItem>
            <Divider />
            <ListItem
              sx={{ justifyContent: "space-between" }}
              onClick={(event) => props.handleZoneChange(event, 2)}
            >
              <ListItemText
                primary="Zone C"
                primaryTypographyProps={{ fontSize: "14px" }}
              />
              <ListItemText
                primary="9/30 >"
                primaryTypographyProps={{ fontSize: "14px" }}
                sx={{ textAlign: "right" }}
              />
            </ListItem>
            <Divider />
            <ListItem
              sx={{ justifyContent: "space-between" }}
              onClick={(event) => props.handleZoneChange(event, 3)}
            >
              <ListItemText
                primary="Zone D"
                primaryTypographyProps={{ fontSize: "14px" }}
              />
              <ListItemText
                primary="2/40 >"
                primaryTypographyProps={{ fontSize: "14px" }}
                sx={{ textAlign: "right" }}
              />
            </ListItem>
          </List>
        ) : (
          <Image
            src={"/images/seat.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "300px" }}
            alt="Seat Image"
          />
        )}
      </Box>
    </>
  );
};

export default SelectZone;
