import { Box, Button, Divider, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import NextLink from "next/link";
import CheckIcon from "@mui/icons-material/Check";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { compareAsc, format } from "date-fns";
import { useIntl } from "react-intl";

const HotDeskTimePeriod = () => {
  const intl = useIntl();
  const [startTime, setStartTime] = React.useState();
  const [startTimeLabel, setStartTimeLabel] = React.useState("Select");
  const [endTime, setEndTime] = React.useState();
  const [endTimeLabel, setEndTimeLabel] = React.useState("Select");

  const handleStartTimeChange = (date) => {
    setStartTimeLabel(format(date, "hh:mm aa") + "");
    setStartTime(date);
  };

  const handleEndTimeChange = (date) => {
    setEndTimeLabel(format(date, "hh:mm aa"));
    setEndTime(date);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box mt={2} sx={{ position: "relative" }}>
          <NextLink
            href={"/hot-desk-booking"}
            passHref
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                fontSize: "14px",
                position: "absolute",
                textTransform: "none",
                backgroundColor: "#f0f0f1",
                color: "#000",
              }}
            >
              {intl.formatMessage({
                id: "go.back",
                defaultMessage: "Go Back",
              })}
            </Button>
          </NextLink>
          <Typography component={"p"} textAlign="center">
            {intl.formatMessage({
              id: "period",
              defaultMessage: "Period",
            })}
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }} mt={3}>
          <Stack spacing={2}>
            <Box
              sx={{
                backgroundColor: "#f0f0f0",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <Typography component={"span"} fontSize="14px">
                08:00-17:00 (all day)
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#f0f0f0",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <Typography component={"span"} fontSize="14px">
                08:00-12:00 (half day morning)
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#f0f0f0",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <Typography component={"span"} fontSize="14px">
                13:00-17:00 (half day afternoon)
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            backgroundColor: "#f0f0f0",
            padding: "0px 0px",
            borderRadius: "10px",
          }}
          mt={4}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 15px",
            }}
          >
            <Typography component={"span"} fontSize={14}>
              {intl.formatMessage({
                id: "specify.yourself",
                defaultMessage: "Specify yourself",
              })}
            </Typography>
            <CheckIcon sx={{ color: "#07A889", fontSize: "32px" }} />
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 15px",
            }}
          >
            <Typography component={"span"} fontSize={14}>
              {intl.formatMessage({
                id: "start",
                defaultMessage: "Start",
              })}
            </Typography>
            <div>
              <ReactDatePicker
                selected={startTime}
                onChange={handleStartTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                customInput={
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#c4c5c2",
                      color: "#000000",
                      "&:hover": {
                        backgroundColor: "#c4c5c2",
                      },
                    }}
                  >
                    {startTimeLabel}
                  </Button>
                }
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </div>
          </Box>
          <Divider></Divider>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 15px",
            }}
          >
            <Typography component={"span"} fontSize={14}>
              {intl.formatMessage({
                id: "end",
                defaultMessage: "End",
              })}
            </Typography>
            <div>
              <ReactDatePicker
                selected={endTime}
                onChange={handleEndTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                customInput={
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#c4c5c2",
                      color: "#000000",
                      "&:hover": {
                        backgroundColor: "#c4c5c2",
                      },
                    }}
                  >
                    {endTimeLabel}
                  </Button>
                }
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HotDeskTimePeriod;
