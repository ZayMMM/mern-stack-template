import {
  Button,
  Container,
  Divider,
  FormControl,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { compareAsc, format } from "date-fns";
import NextLink from "next/link";
import ChooseMeetingRoomDialog from "./ChooseRoomDialog/ChooseRoomDialog";
import { useIntl } from "react-intl";

const Booking = () => {
  const intl = useIntl();
  const [age, setAge] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [dateSelectLabel, setDateSelectLabel] = React.useState("Select >");
  const [location, setLocation] = React.useState("1");
  const [facility, setFacility] = React.useState("1");
  const [additionalServices, setAdditionalServices] = React.useState([]);
  const [isChooseRoomDialogOpen, setIsChooseRoomDialogOpen] =
    React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleBookingDateChange = (date) => {
    setDateSelectLabel(format(date, "dd/MM/yyyy") + " >");
    setStartDate(date);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleFacilityChange = (event) => {
    setFacility(event.target.value);
  };

  const handleAdditionalServiceChange = (event) => {
    console.log(event.target.value);
    const {
      target: { value },
    } = event;
    setAdditionalServices(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChooseRoomDialogOpen = () => {
    setIsChooseRoomDialogOpen(true);
  };

  const handleChooseRoomDialogClose = () => {
    setIsChooseRoomDialogOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <NextLink
        href={"/"}
        passHref
        style={{ textDecoration: "none", color: "red" }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            backgroundColor: "#fafbfb",
            padding: "5px",
            borderRadius: "5px",
            position: "absolute",
          }}
        >
          {intl.formatMessage({
            id: "cancel",
            defaultMessage: "Cancel",
          })}
        </Typography>
      </NextLink>
      <Typography component={"p"} mt={1} sx={{ textAlign: "center" }}>
        {intl.formatMessage({
          id: "book.a.meeting.room",
          defaultMessage: "Book a meeting room",
        })}
      </Typography>
      <Box
        sx={{
          backgroundColor: "#f0f0f0",
          padding: "0px 0px",
          borderRadius: "10px",
        }}
        mt={2}
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
              id: "location",
              defaultMessage: "Location",
            })}
          </Typography>
          <FormControl sx={{ minWidth: 120 }} size="small" variant="standard">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={location}
              displayEmpty
              sx={{ fontSize: "14px" }}
              onChange={handleLocationChange}
            >
              <MenuItem value={1} fontSize={"14px"}>
                Silom Edge
              </MenuItem>
            </Select>
          </FormControl>
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
              id: "area",
              defaultMessage: "Area",
            })}
          </Typography>
          <FormControl sx={{ minWidth: 120 }} size="small" variant="standard">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              displayEmpty
              label="Age"
              sx={{ fontSize: "14px" }}
              onChange={handleChange}
            >
              <MenuItem value="" fontSize={"14px"}>
                <em>Select area</em>
              </MenuItem>
              <MenuItem value={10} fontSize={"14px"}>
                Floor 4-TBL
              </MenuItem>
              <MenuItem value={20} fontSize={"14px"}>
                Floor 4-TCC
              </MenuItem>
              <MenuItem value={30} fontSize={"14px"}>
                Class 15 TBL
              </MenuItem>
            </Select>
          </FormControl>
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
              id: "number.of.participants",
              defaultMessage: "Number of Participants",
            })}
          </Typography>
          <NextLink
            href={"/booking/choose-participants"}
            passHref
            style={{ textDecoration: "none", color: "#000" }}
          >
            <Typography component={"span"} fontSize={14}>
              {intl.formatMessage({
                id: "please.specify",
                defaultMessage: "Please specify >",
              })}
            </Typography>
          </NextLink>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#f0f0f0",
          padding: "0px 0px",
          borderRadius: "10px",
        }}
        mt={2}
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
              id: "date",
              defaultMessage: "Date",
            })}
          </Typography>
          <div>
            <DatePicker
              selected={startDate}
              onChange={handleBookingDateChange}
              customInput={
                <Typography fontSize={"14px"}>{dateSelectLabel}</Typography>
              }
            />
          </div>
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
              id: "specify.time.period",
              defaultMessage: "Specify the time period",
            })}
          </Typography>
          <NextLink
            href={"/booking/select-time-period"}
            passHref
            style={{ textDecoration: "none", color: "#000" }}
          >
            <Typography component={"span"} fontSize={14}>
              {intl.formatMessage({
                id: "select",
                defaultMessage: "Select >",
              })}
            </Typography>
          </NextLink>
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
              id: "facilitate.reading",
              defaultMessage: "Facilitate Reading",
            })}
          </Typography>
          <FormControl sx={{ minWidth: 120 }} size="small" variant="standard">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={facility}
              displayEmpty
              sx={{ fontSize: "14px" }}
              onChange={handleFacilityChange}
            >
              <MenuItem value={1} fontSize={"14px"}>
                Whiteboard
              </MenuItem>
              <MenuItem value={1} fontSize={"14px"}>
                Projector
              </MenuItem>
            </Select>
          </FormControl>
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
              id: "additional.services",
              defaultMessage: "Additional Services",
            })}
          </Typography>
          <FormControl sx={{ minWidth: 120 }} size="small" variant="standard">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={additionalServices}
              displayEmpty
              multiple
              sx={{ fontSize: "14px" }}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>no &gt;</em>;
                }

                return selected.join(", ");
              }}
              onChange={handleAdditionalServiceChange}
            >
              <MenuItem disabled value="">
                <em>no &gt;</em>
              </MenuItem>
              <MenuItem value={"snacks"} fontSize={"14px"}>
                Snacks
              </MenuItem>
              <MenuItem value={"paper, pencil"} fontSize={"14px"}>
                Paper, pencil
              </MenuItem>
              <MenuItem value={"Name tab"} fontSize={"14px"}>
                Name tab
              </MenuItem>
              <MenuItem value={"Sound System"} fontSize={"14px"}>
                Sound System
              </MenuItem>
              <MenuItem value={"Lecture table"} fontSize={"14px"}>
                Lecture table
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#f0f0f0",
          padding: "0px 0px",
          borderRadius: "10px",
        }}
        mt={2}
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
              id: "meeting.topic",
              defaultMessage: "Meeting Topic",
            })}
          </Typography>
          <TextField
            id="standard-multiline-flexible"
            sx={{ fontSize: "14px" }}
            placeholder={intl.formatMessage({
              id: "meeting.topic",
              defaultMessage: "Meeting Topic",
            })}
            variant="standard"
          />
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 10px",
          }}
        >
          <Typography component={"span"} fontSize={14}>
            {intl.formatMessage({
              id: "contact.number",
              defaultMessage: "Contact Number",
            })}
          </Typography>
          <TextField
            id="standard-multiline-flexible"
            sx={{ fontSize: "14px" }}
            placeholder={intl.formatMessage({
              id: "contact.number",
              defaultMessage: "Contact Number",
            })}
            variant="standard"
          />
        </Box>
      </Box>

      <Box mt={2} sx={{ width: "100%", textAlign: "center" }}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleChooseRoomDialogOpen}
          sx={{
            textAlign: "center",
            maxWidth: "150px",
            backgroundColor: "#09a986",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#09a986",
            },
          }}
        >
          {intl.formatMessage({
            id: "next",
            defaultMessage: "Next",
          })}
        </Button>
      </Box>

      <ChooseMeetingRoomDialog
        open={isChooseRoomDialogOpen}
        handleClose={handleChooseRoomDialogClose}
      />
    </Container>
  );
};

export default Booking;
