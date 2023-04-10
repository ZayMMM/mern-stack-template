import BookingSummaryItem from "@/components/Booking/BookingSummary/BookingSummaryItem";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { useIntl } from "react-intl";
import SelectZone from "./SelectZone";
import { useRouter } from "next/router";
import {
  CONFIRM_SEAT_RESERVATION,
  HOT_DESK_BOOKING,
  SELECT_SEAT_ROUTE,
} from "@/config/route";

import React from "react";
import Image from "next/image";

const ReserveSeat = () => {
  const intl = useIntl();

  const [viewType, setViewType] = React.useState(1);

  const router = useRouter();

  const handleZoneChange = (event, index) => {
    switch (index) {
      case 0:
        router.push(SELECT_SEAT_ROUTE);
        break;
      case 1:
        router.push(SELECT_SEAT_ROUTE);
        break;
      case 2:
        router.push(SELECT_SEAT_ROUTE);
        break;
      case 3:
        router.push(SELECT_SEAT_ROUTE);
        break;
    }
  };

  const handleViewTypeChange = () => {
    setViewType(viewType == 1 ? 2 : 1);
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
          href={HOT_DESK_BOOKING}
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
            id: "reserve.a.seat",
            defaultMessage: "Reserve a seat",
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
                  <BookingSummaryItem title="Number of days" description="12" />
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
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <SelectZone
            handleZoneChange={handleZoneChange}
            viewType={viewType}
            handleViewTypeChange={handleViewTypeChange}
          />
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
          onClick={() => router.push(CONFIRM_SEAT_RESERVATION)}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default ReserveSeat;
