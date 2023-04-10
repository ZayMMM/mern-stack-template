import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";
import DatePicker from "react-datepicker";
import { useIntl } from "react-intl";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import SessionTransactionDialog from "./SessionTransactionDialog/SessionTransactionDialog";
import { useRouter } from "next/router";
import { EMPLOYEE_DIRECTORY } from "@/config/route";
import ExternalPersonForm from "./ExternalPersonFormDialog/ExternalPersonForm";

const HotDeskBooking = () => {
  const intl = useIntl();
  const [area, setArea] = React.useState("");
  const [location, setLocation] = React.useState("1");
  const [bookingFor, setBookingFor] = React.useState("1");
  const [startDate, setStartDate] = React.useState(new Date());
  const [dateSelectLabel, setDateSelectLabel] = React.useState("Select >");
  const [equipments, setEquipments] = React.useState([]);
  const [isSessionTransactionDialogOpen, setIsSessionTransactionDialogOpen] =
    React.useState(false);

  const [isOpenExternalPersonForm, SetIsOpenExternalPersonForm] =
    React.useState(false);

  const router = useRouter();

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleChange = (event) => {
    setArea(event.target.value);
  };

  const handleBookingForChange = (event) => {
    setBookingFor(event.target.value);

    if (event.target.value === 2) {
      router.push(EMPLOYEE_DIRECTORY);
    } else if (event.target.value === 3) {
      SetIsOpenExternalPersonForm(true);
    }
  };

  const handleBookingDateChange = (date) => {
    setDateSelectLabel(format(date, "dd/MM/yyyy") + " >");
    setStartDate(date);
  };

  const handleEquipmentChange = (event) => {
    const {
      target: { value },
    } = event;
    setEquipments(typeof value === "string" ? value.split(",") : value);
  };

  const handleSessionDialogDialogOpen = () => {
    setIsSessionTransactionDialogOpen(true);
  };

  const handleSessionDialogClose = () => {
    setIsSessionTransactionDialogOpen(false);
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
          id: "reserve.a.seat",
          defaultMessage: "Reserve a seat",
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
              value={area}
              displayEmpty
              label="Area"
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
              id: "for",
              defaultMessage: "For",
            })}
          </Typography>
          <FormControl sx={{ minWidth: 120 }} size="small" variant="standard">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={bookingFor}
              displayEmpty
              label="For"
              sx={{ fontSize: "14px" }}
              onChange={handleBookingForChange}
            >
              <MenuItem value={1} fontSize={"14px"}>
                Self
              </MenuItem>
              <MenuItem value={2} fontSize={"14px"}>
                Others (Employees)
              </MenuItem>
              <MenuItem value={3} fontSize={"14px"}>
                Others (External Persons)
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        {bookingFor === 3 && <ExternalPersonForm />}
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
          <Box>
            <DatePicker
              selected={startDate}
              onChange={handleBookingDateChange}
              customInput={
                <Typography fontSize={"14px"}>{dateSelectLabel}</Typography>
              }
            />
          </Box>
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
            href={"/hot-desk-booking/select-time-period"}
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
            flexWrap: "wrap",
          }}
        >
          <Typography component={"span"} fontSize={14}>
            {intl.formatMessage({
              id: "equipments",
              defaultMessage: "Equipments",
            })}
          </Typography>
          <FormControl sx={{ minWidth: 120 }} size="small" variant="standard">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={equipments}
              displayEmpty
              multiple
              sx={{ fontSize: "14px" }}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>no &gt;</em>;
                }

                return selected.join(", ");
              }}
              onChange={handleEquipmentChange}
            >
              <MenuItem disabled value="">
                <em>no &gt;</em>
              </MenuItem>
              <MenuItem value={"Monitor"} fontSize={"14px"}>
                Monitor
              </MenuItem>
              <MenuItem value={"Port Convertor"} fontSize={"14px"}>
                Port Convertor
              </MenuItem>
              <MenuItem value={"Adjustable Table"} fontSize={"14px"}>
                Adjustable Table
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box mt={2} sx={{ width: "100%", textAlign: "center" }}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleSessionDialogDialogOpen}
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

      <SessionTransactionDialog
        open={isSessionTransactionDialogOpen}
        handleClose={handleSessionDialogClose}
      />
    </Container>
  );
};

export default HotDeskBooking;
