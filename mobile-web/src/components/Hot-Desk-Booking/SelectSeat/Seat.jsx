import { SELECT_ZONE_ROUTE } from "@/config/route";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

const Seat = () => {
  const router = useRouter();

  const handleSave = () => {
    router.push(SELECT_ZONE_ROUTE);
  };

  return (
    <Box mt={2}>
      <Typography component={"span"} fontSize={"14px"}>
        Seat
      </Typography>
      <Box mt={1}>
        <List
          disablePadding
          sx={{ backgroundColor: "#F0F0F1", borderRadius: "10px" }}
        >
          <ListItem>
            <ListItemText>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", color: "#9A9A9A" }}
              >
                08:00 - 17:00,
              </Typography>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", fontWeight: "600", color: "#9A9A9A" }}
              >
                TCC 01
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", color: "#9A9A9A" }}
              >
                08:00 - 17:00,
              </Typography>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", fontWeight: "600", color: "#9A9A9A" }}
              >
                TCC 02
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", color: "#9A9A9A" }}
              >
                08:00 - 17:00,
              </Typography>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", fontWeight: "600", color: "#9A9A9A" }}
              >
                TCC 03
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", color: "#9A9A9A" }}
              >
                08:00 - 17:00,
              </Typography>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", fontWeight: "600", color: "#9A9A9A" }}
              >
                TCC 04
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", color: "#9A9A9A" }}
              >
                08:00 - 17:00,
              </Typography>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", fontWeight: "600", color: "#9A9A9A" }}
              >
                TCC 05
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", color: "#9A9A9A" }}
              >
                08:00 - 17:00,
              </Typography>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", fontWeight: "600", color: "#9A9A9A" }}
              >
                TCC 06
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box mt={2} mb={2} textAlign={"center"}>
        <Button
          variant="contained"
          onClick={handleSave}
          sx={{
            textAlign: "center",
            backgroundColor: "#09a986",
            borderRadius: "10px",
            minWidth: "150px",
            "&:hover": {
              backgroundColor: "#09a986",
            },
            textTransform: "none",
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default Seat;
