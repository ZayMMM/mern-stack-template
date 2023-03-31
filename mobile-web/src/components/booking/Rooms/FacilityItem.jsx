const { Stack } = require("@mui/system");

import { Typography } from "@mui/material";

const FacilityItem = (props) => {
  return (
    <Stack direction={"row"} alignItems="center" spacing={1}>
      {props.icon}
      <Typography
        component={"span"}
        sx={{ fontSize: "14px", color: props.color }}
      >
        {props.title}
      </Typography>
    </Stack>
  );
};

export default FacilityItem;
