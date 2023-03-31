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

const BottomNav = () => {
  const intl = useIntl();
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0, backgroundColor: "transparent" }}
      >
        <BottomNavigation
          showLabels
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
        >
          <NextLink href="/" passHref className={Styles.bottonNavigationLink}>
            <BottomNavigationAction
              label={intl.formatMessage({
                id: "reserve",
                defaultMessage: "Reserve",
              })}
              value={intl.formatMessage({
                id: "reserve",
                defaultMessage: "Reserve",
              })}
              showLabel
              icon={
                <Image
                  src={"/images/chair@2x.png"}
                  width={20}
                  height={20}
                  alt="Request"
                />
              }
            />
          </NextLink>

          <NextLink
            href="/booking"
            passHref
            className={Styles.bottonNavigationLink}
          >
            <BottomNavigationAction
              label={intl.formatMessage({
                id: "booking",
                defaultMessage: "Booking",
              })}
              value={intl.formatMessage({
                id: "booking",
                defaultMessage: "Booking",
              })}
              showLabel
              icon={
                <Image
                  src={"/images/eye@2x.png"}
                  width={20}
                  height={20}
                  alt="Request"
                />
              }
            />
          </NextLink>

          <NextLink
            href="/request-place"
            passHref
            className={Styles.bottonNavigationLink}
          >
            <BottomNavigationAction
              label={intl.formatMessage({
                id: "request",
                defaultMessage: "Request",
              })}
              value={intl.formatMessage({
                id: "request",
                defaultMessage: "Request",
              })}
              showLabel
              icon={
                <Image
                  src={"/images/building@2x.png"}
                  width={20}
                  height={20}
                  alt="Request"
                />
              }
            />
          </NextLink>
          <NextLink
            href="/approval"
            passHref
            className={Styles.bottonNavigationLink}
          >
            <BottomNavigationAction
              label={intl.formatMessage({
                id: "approve",
                defaultMessage: "Approve",
              })}
              value={intl.formatMessage({
                id: "approve",
                defaultMessage: "Approve",
              })}
              showLabel
              icon={
                <Image
                  src={"/images/check@2x.png"}
                  width={20}
                  height={20}
                  alt="Approve"
                />
              }
            />
          </NextLink>
        </BottomNavigation>
      </AppBar>
    </>
  );
};

export default BottomNav;
