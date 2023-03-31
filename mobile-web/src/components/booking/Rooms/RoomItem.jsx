import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import Box from "@mui/system";
import FacilityItem from "./FacilityItem";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { People, PeopleOutlineOutlined } from "@mui/icons-material";
import SpeakerOutlinedIcon from "@mui/icons-material/SpeakerOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { BsProjector } from "react-icons/bs";
import { BiWebcam } from "react-icons/bi";
import { MdTouchApp } from "react-icons/md";

const RoomItem = (props) => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#eaf6fd",
          borderRadius: "10px",
          boxShadow: "none",
        }}
      >
        <CardHeader
          sx={{ textAlign: "center" }}
          title="09:00-11:00, Victor Club 2 Tou A"
          titleTypographyProps={{
            variant: "span",
            fontSize: "14px",
            color: "#66a9c7",
          }}
        />
        <CardMedia
          component="img"
          height="194"
          image={"/images/room1.png"}
          alt="Paella dish"
        />
        <CardContent>
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Typography fontSize={"14px"}>Facilities</Typography>
            <Typography fontSize={"14px"}>Diagram</Typography>
          </Stack>
          <Grid container spacing={1} mt={2}>
            <Grid item xs={6}>
              <FacilityItem
                icon={<PeopleOutlineOutlined sx={{ fontSize: "16px" }} />}
                title="6-10"
              />
            </Grid>
            <Grid item xs={6}>
              <FacilityItem
                icon={<SpeakerOutlinedIcon sx={{ fontSize: "16px" }} />}
                title="Speaker"
              />
            </Grid>
            <Grid item xs={6}>
              <FacilityItem
                icon={<WifiOutlinedIcon sx={{ fontSize: "16px" }} />}
                title="Wifi"
              />
            </Grid>
            <Grid item xs={6}>
              <FacilityItem
                icon={
                  <PhoneCallbackOutlinedIcon
                    sx={{ fontSize: "16px", color: "#cfd5da" }}
                  />
                }
                color="#d5dbe1"
                title="Conference Call"
              />
            </Grid>
            <Grid item xs={6}>
              <FacilityItem
                icon={<BsProjector style={{ fontSize: "16px" }} />}
                title="Projector"
              />
            </Grid>
            <Grid item xs={6}>
              <FacilityItem
                icon={
                  <BiWebcam style={{ fontSize: "16px", color: "#cfd5da" }} />
                }
                color="#d5dbe1"
                title="Web Cam"
              />
            </Grid>
            <Grid item xs={6}>
              <FacilityItem
                icon={
                  <MdTouchApp style={{ fontSize: "16px", color: "#cfd5da" }} />
                }
                title="Touch Screen"
                color="#d5dbe1"
              />
            </Grid>
            <Grid item xs={6}>
              <FacilityItem
                icon={
                  <RestaurantIcon sx={{ fontSize: "16px", color: "#cfd5da" }} />
                }
                color="#d5dbe1"
                title="Food"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default RoomItem;
