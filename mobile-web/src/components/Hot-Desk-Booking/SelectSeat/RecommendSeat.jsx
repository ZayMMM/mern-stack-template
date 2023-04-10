import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const RecommendSeat = () => {
  return (
    <Box mt={2}>
      <Typography component={"span"} fontSize={"14px"}>
        Recommend
      </Typography>
      <Box mt={1}>
        <List
          disablePadding
          sx={{ backgroundColor: "#eaf6fc", borderRadius: "10px" }}
        >
          <ListItem>
            <ListItemText>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", color: "#71C2EC" }}
              >
                08:00 - 17:00,
              </Typography>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", color: "#71C2EC", fontWeight: "600" }}
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
                sx={{ fontSize: "14px", color: "#71C2EC" }}
              >
                09:00 - 17:00,
              </Typography>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", color: "#71C2EC", fontWeight: "600" }}
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
                sx={{ fontSize: "14px", color: "#71C2EC" }}
              >
                09:00 - 17:00,
              </Typography>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", color: "#71C2EC", fontWeight: "600" }}
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
                sx={{ fontSize: "14px", color: "#71C2EC" }}
              >
                09:00 - 17:00,
              </Typography>
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", color: "#71C2EC", fontWeight: "600" }}
              >
                TCC 04
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RecommendSeat;
