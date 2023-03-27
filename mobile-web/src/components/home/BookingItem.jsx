import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const BookingItem = () => {
  return (
    <Box
      container
      sx={{
        border: "1px solid #07A889",
        padding: "10px",
        borderRadius: "10px",
      }}
      mb={2}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component={"span"}
          fontSize={"14px"}
          sx={{ color: "#07A889" }}
        >
          Silon Eng, Floor 4
        </Typography>
        <Typography
          component={"span"}
          fontSize={"16px"}
          fontWeight={600}
          sx={{ color: "#07A889" }}
        >
          08:00-09:00
        </Typography>
      </Box>
      <Typography
        component={"p"}
        fontSize={"14px"}
        sx={{
          color: "#000000",
          marginTop: "10px",
          backgroundColor: "#fafbfb",
          display: "inline-block",
          padding: "4px",
        }}
      >
        TCC, Zone A, Seat TCC 09
      </Typography>
    </Box>
  );
};

export default BookingItem;
