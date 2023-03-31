import { Button, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import NextLink from "next/link";
import RoomItem from "./RoomItem";
import { useIntl } from "react-intl";

const RoomList = () => {
  const intl = useIntl();
  return (
    <>
      <Container maxWidth="sm">
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems={"center"}
          spacing="2"
          sx={{ mt: 2 }}
        >
          <NextLink
            href={"/booking"}
            passHref
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                fontSize: "14px",
                textTransform: "none",
                backgroundColor: "#f0f0f0",
                color: "#000",
              }}
            >
              {intl.formatMessage({
                id: "go.back",
                defaultMessage: "Go Back",
              })}
            </Button>
          </NextLink>
          <Typography>30/02/2023</Typography>
          <Typography sx={{ backgroundColor: "#fafbfb", padding: "5px" }}>
            {intl.formatMessage({
              id: "time.table",
              defaultMessage: "Time Table",
            })}
          </Typography>
        </Stack>
        <Grid container spacing={2} mt={2} mb={3}>
          <Grid item xs={12}>
            <NextLink
              passHref
              href={"/booking/booking-summary"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <RoomItem />
            </NextLink>
          </Grid>
          <Grid item xs={12}>
            <RoomItem />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RoomList;
