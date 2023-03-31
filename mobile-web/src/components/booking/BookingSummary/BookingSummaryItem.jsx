import { Typography } from "@mui/material";

const { Stack } = require("@mui/system");

const BookingSummaryItem = (props) => {
  return (
    <Stack direction={"column"} spacing={0.5}>
      <Typography
        sx={{ fontSize: "14px", color: "#5aa194" }}
        component="span"
        onClick={props.onClick}
      >
        {props.title}
      </Typography>
      <Typography sx={{ fontSize: "14px", fontWeight: "600" }} component="span">
        {props.description}
      </Typography>
    </Stack>
  );
};

export default BookingSummaryItem;
