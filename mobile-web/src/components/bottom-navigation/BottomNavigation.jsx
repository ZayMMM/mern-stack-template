import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Image from "next/image";
import NextLink from "next/link";
import Styles from "../../styles/BottomNavigation.module.css";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import React from "react";
import {
  APPROVAL_PLACE_ROUTE,
  APPROVAL_ROUTE,
  BOOKING_ROUTE,
  HOME_ROUTE,
  REQUEST_PLACE_ROUTE,
} from "@/config/route";
import { HOT_DESK_BOOKING } from "@/config/route";

const BottomNav = () => {
  const intl = useIntl();

  const router = useRouter();

  const handleRouteChange = (event, newValue) => {
    switch (newValue) {
      case "HOT-DESK-BOOKING":
        router.push(HOT_DESK_BOOKING);
        break;
      case "BOOKING":
        router.push(BOOKING_ROUTE);
        break;
      case "REQUEST":
        router.push(REQUEST_PLACE_ROUTE);
        break;
      case "APPROVAL":
        router.push(APPROVAL_ROUTE);
        break;
      default:
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0, backgroundColor: "transparent" }}
      >
        <BottomNavigation
          sx={{
            boxShadow: "none",
            bgcolor: "#fafbfb",
            "& .Mui-selected": {
              "& .MuiBottomNavigationAction-label": {},
            },
            "& .MuiBottomNavigationAction-label": {
              paddingTop: "5px",
            },
          }}
          showLabels
          onChange={handleRouteChange}
        >
          <BottomNavigationAction
            label={intl.formatMessage({
              id: "reserve",
              defaultMessage: "Reserve",
            })}
            value="HOT-DESK-BOOKING"
            icon={
              <Image
                src={"/images/chair@2x.png"}
                width={20}
                height={20}
                alt="Request"
              />
            }
          />

          <BottomNavigationAction
            label={intl.formatMessage({
              id: "booking",
              defaultMessage: "Booking",
            })}
            value="BOOKING"
            icon={
              <Image
                src={"/images/eye@2x.png"}
                width={20}
                height={20}
                alt="Request"
              />
            }
          />

          <BottomNavigationAction
            label={intl.formatMessage({
              id: "request",
              defaultMessage: "Request",
            })}
            value="REQUEST"
            icon={
              <Image
                src={"/images/building@2x.png"}
                width={20}
                height={20}
                alt="Request"
              />
            }
          />

          <BottomNavigationAction
            label={intl.formatMessage({
              id: "approve",
              defaultMessage: "Approve",
            })}
            value="APPROVAL"
            icon={
              <Image
                src={"/images/check@2x.png"}
                width={20}
                height={20}
                alt="Approve"
              />
            }
          />
        </BottomNavigation>
      </AppBar>
    </>
  );
};

export default BottomNav;
