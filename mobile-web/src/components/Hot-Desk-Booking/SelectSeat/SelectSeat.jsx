import { SELECT_ZONE_ROUTE } from "@/config/route";
import { Container, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import { useIntl } from "react-intl";
import RecommendSeat from "./RecommendSeat";
import Seat from "./Seat";
import React from "react";
import SeatDiagramDialog from "./SeatDiagramDialog";

const SelectSeat = () => {
  const intl = useIntl();

  const [showSeatDiagram, setShowSeatDiagram] = React.useState(false);

  const handleSeatDiagramDialogOpen = (event) => {
    setShowSeatDiagram(true);
  };

  const handleSeatDiagramClose = (event) => {
    setShowSeatDiagram(false);
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
          style={{ textDecoration: "none" }}
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
              id: "go.back",
              defaultMessage: "Go Back",
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
            id: "zone.a",
            defaultMessage: "Zone A",
          })}
        </Typography>
        <Typography
          onClick={handleSeatDiagramDialogOpen}
          sx={{
            backgroundColor: "#fafbfb",
            padding: "5px",
            fontSize: "14px",
            color: "#5aa194",
            borderRadius: "10px",
          }}
        >
          Diagram
        </Typography>
      </Stack>
      <RecommendSeat />
      <Seat />
      <SeatDiagramDialog
        open={showSeatDiagram}
        handleClose={handleSeatDiagramClose}
      />
    </Container>
  );
};

export default SelectSeat;
