import BookingItem from "./BookingItem";

import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";

const BookingList = () => {
  return (
    <Container maxWidth={"sm"} sx={{ marginTop: "2rem" }}>
      <Box
        mb={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component={"span"}
          fontSize={14}
          sx={{ backgroundColor: "#fafbfb", padding: "5px" }}
        >
          today's booking
        </Typography>
        <Typography
          component={"span"}
          fontSize={14}
          sx={{
            backgroundColor: "#fafbfb",
            padding: "5px",
            minWidth: "70px",
            display: "inline-flex",
            justifyContent: "center",
          }}
        >
          all
        </Typography>
      </Box>
      <BookingItem />
      <BookingItem />
      <BookingItem />
      <BookingItem />
      <BookingItem />
      <BookingItem />
    </Container>
  );
};

export default BookingList;
