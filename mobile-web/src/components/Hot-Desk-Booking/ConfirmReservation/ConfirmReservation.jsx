import BookingSummaryItem from "@/components/Booking/BookingSummary/BookingSummaryItem";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { useIntl } from "react-intl";

import { useRouter } from "next/router";
import {
  HOT_DESK_BOOKING,
  SELECT_SEAT_ROUTE,
  SELECT_ZONE_ROUTE,
} from "@/config/route";

import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import BookingDateDetailDialog from "../BookingDateDetailDialog/BookingDateDetailDialog";
import SuccessDialogForSelf from "./SuccessDialogForSelf";
import SessionCompleteTransactionDialog from "./SessionCompleteTransactionDialog";

const ConfirmReservation = () => {
  const intl = useIntl();

  const [viewType, setViewType] = React.useState(1);
  const [bookingDetailDialogopen, setBookingDetialDialogOpen] =
    React.useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = React.useState(false);
  const [sessionTransactionDialogOpen, setSessionDialogOpen] =
    React.useState(false);

  const router = useRouter();

  const handleBookingDetailDialogOpen = () => {
    setBookingDetialDialogOpen(true);
  };

  const handleBookingDetailDialogClose = () => {
    setBookingDetialDialogOpen(false);
  };

  const handleSuccessDialogOpen = () => {
    setSuccessDialogOpen(true);
  };

  const handleSuccessDialogClose = () => {
    setSuccessDialogOpen(false);
    setSessionDialogOpen(true);
  };

  const handleSessionTransactionDialogOpen = () => {
    setSessionDialogOpen(true);
  };

  const handleSessionTransactionDialogClose = () => {
    setSessionDialogOpen(false);
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
          href={SELECT_ZONE_ROUTE}
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
            id: "confirm.seat.reservation",
            defaultMessage: "Confirm seat reservation",
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
                    title="Location"
                    description="Silom Edge"
                  />
                </Grid>
                <Grid item xs={6}>
                  <BookingSummaryItem title="Area" description="Floor 4-TCC" />
                </Grid>
                <Grid item xs={12}>
                  <BookingSummaryItem title="For" description="self" />
                </Grid>

                <Grid item xs={6}>
                  <BookingSummaryItem title="Start" description="11/01/2023" />
                </Grid>
                <Grid item xs={6}>
                  <BookingSummaryItem title="End" description="11/01/2023" />
                </Grid>
                <Grid item xs={6}>
                  <Stack direction={"column"} spacing={0.5}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "14px", color: "#5aa194" }}
                        component="span"
                      >
                        Number of days
                      </Typography>
                      <IconButton onClick={handleBookingDetailDialogOpen}>
                        <InfoIcon />
                      </IconButton>
                    </Box>
                    <Typography
                      sx={{ fontSize: "14px", fontWeight: "600" }}
                      component="span"
                    >
                      12
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <BookingSummaryItem
                    title="Period"
                    description="09:00-11:00"
                  />
                </Grid>

                <Grid item xs={12}>
                  <BookingSummaryItem
                    title="Equipments"
                    description="Monitor"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack direction={"column"} spacing={0.5}>
                    <Typography
                      sx={{ fontSize: "14px", color: "#5aa194" }}
                      component="span"
                    >
                      Blaze Seat
                    </Typography>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2rem",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>A</Typography>
                        <Typography
                          sx={{ fontSize: "14px", fontWeight: "600" }}
                        >
                          TCC 02, 08:00 - 09:00
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2rem",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>B</Typography>
                        <Typography
                          sx={{ fontSize: "14px", fontWeight: "600" }}
                        >
                          TCC 02, 08:00 - 09:00
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2rem",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>C</Typography>
                        <Typography
                          sx={{ fontSize: "14px", fontWeight: "600" }}
                        >
                          TCC 02, 08:00 - 09:00
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box mt={2} mb={2} textAlign={"center"}>
        <Button
          variant="contained"
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
          onClick={handleSuccessDialogOpen}
        >
          Confirm
        </Button>
      </Box>
      <BookingDateDetailDialog
        open={bookingDetailDialogopen}
        handleClose={handleBookingDetailDialogClose}
      />
      <SuccessDialogForSelf
        open={successDialogOpen}
        handleClose={handleSuccessDialogClose}
        sessionTransactionDialogOpen={sessionTransactionDialogOpen}
      />
      <SessionCompleteTransactionDialog
        open={sessionTransactionDialogOpen}
        handleClose={handleSessionTransactionDialogClose}
      />
    </Container>
  );
};

export default ConfirmReservation;
