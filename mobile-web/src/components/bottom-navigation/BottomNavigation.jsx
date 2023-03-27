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

const BottomNav = () => {
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
              label="Reserve"
              value="Reserve"
              showLabel
              icon={
                <Image
                  src={"/images/chair@2x.png"}
                  width={25}
                  height={25}
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
              label="Booking"
              value="Booking"
              showLabel
              icon={
                <Image
                  src={"/images/eye@2x.png"}
                  width={25}
                  height={25}
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
              label="Request"
              value="Request"
              showLabel
              icon={
                <Image
                  src={"/images/building@2x.png"}
                  width={25}
                  height={25}
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
              label="Approve"
              value="Approve"
              showLabel
              icon={
                <Image
                  src={"/images/check@2x.png"}
                  width={25}
                  height={25}
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
