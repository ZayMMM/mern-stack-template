import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import NextLink from "next/link";
import BookingSummaryItem from "./BookingSummaryItem";
import React from "react";
import BookingSuccessDialog from "./BookingSuccessDialog";
import ParticipantMailDialog from "./ParticipantMailDialog";
import { useIntl } from "react-intl";

const BookingSummary = (props) => {
  const intl = useIntl();
  const [isBookingSuccessOpen, setIsBookingSuccessOpen] = React.useState(false);
  const [isParticipantMailOpen, setIsParticipantMailOpen] =
    React.useState(false);

  const handleBookingSuccessOpen = () => {
    setIsBookingSuccessOpen(true);
  };

  const handleBookingSuccessClose = () => {
    setIsBookingSuccessOpen(false);
  };

  const handleParticipantMailOpen = () => {
    setIsParticipantMailOpen(true);
  };

  const handleParticipantMailClose = () => {
    setIsParticipantMailOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
        flexWrap="nowrap"
        spacing={2}
        mt={2}
      >
        <NextLink
          href={"/booking"}
          passHref
          style={{ textDecoration: "none", color: "red" }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              backgroundColor: "#fafbfb",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            {intl.formatMessage({
              id: "cancel",
              defaultMessage: "Cancel",
            })}
          </Typography>
        </NextLink>
        <Typography
          sx={{
            fontSize: "14px",
            backgroundColor: "#fafbfb",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          {intl.formatMessage({
            id: "booking.summary",
            defaultMessage: "Booking summary",
          })}
        </Typography>
        <Typography
          sx={{
            backgroundColor: "#fafbfb",
            padding: "5px",
            fontSize: "14px",
            color: "#5aa194",
            borderRadius: "10px",
          }}
        >
          Correct
        </Typography>
      </Stack>
      <Grid container spacing={1} mt={2}>
        <Grid item xs={12}>
          <Card
            sx={{
              backgroundColor: "#eaf6fd",
              borderRadius: "10px",
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <BookingSummaryItem
                    title="location"
                    description="Silom Edge"
                  />
                </Grid>
                <Grid item xs={6}>
                  <BookingSummaryItem title="Area" description="Floor 4-TCC" />
                </Grid>
                <Grid item xs={6}>
                  <BookingSummaryItem title="For" description="self" />
                </Grid>
                <Grid item xs={6}>
                  <BookingSummaryItem
                    title="Contact Number"
                    description="0851263124"
                  />
                </Grid>
                <Grid item xs={6}>
                  <BookingSummaryItem title="Start" description="11/01/2023" />
                </Grid>
                <Grid item xs={6}>
                  <BookingSummaryItem title="End" description="11/01/2023" />
                </Grid>
                <Grid item xs={6}>
                  <BookingSummaryItem
                    title="Participants: ฿"
                    description="6"
                    onClick={handleParticipantMailOpen}
                  />
                </Grid>
                <Grid item xs={6}>
                  <BookingSummaryItem
                    title="Period"
                    description="09:00-11:00"
                  />
                </Grid>
                <Grid item xs={12}>
                  <BookingSummaryItem
                    title="Meeting Topic"
                    description="PMO Training for Sale Manager"
                  />
                </Grid>
                <Grid item xs={12}>
                  <BookingSummaryItem
                    title="Meeting Room"
                    description="A Victor Club 2"
                  />
                </Grid>
                <Grid item xs={12}>
                  <BookingSummaryItem
                    title="Addition Services"
                    description="Snacks"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }} mt={3}>
          <Button
            variant="contained"
            onClick={handleBookingSuccessOpen}
            sx={{
              backgroundColor: "#09a986",
              textTransform: "none",
              width: "170px",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#09a986",
              },
            }}
          >
            {intl.formatMessage({
              id: "confirm",
              defaultMessage: "Confirm",
            })}
          </Button>
          <BookingSuccessDialog
            open={isBookingSuccessOpen}
            handleClose={handleBookingSuccessClose}
          />
        </Grid>
      </Grid>

      <ParticipantMailDialog
        open={isParticipantMailOpen}
        handleClose={handleParticipantMailClose}
      />
    </Container>
  );
};

export default BookingSummary;
