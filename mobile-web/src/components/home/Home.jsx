import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import { Box, display } from "@mui/system";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import BookingList from "./BookingList";

const Home = () => {
  return (
    <>
      {" "}
      <Box
        sx={{
          background:
            "linear-gradient(177deg, rgba(7,169,138,1) 6%, rgba(48,166,225,1) 85%);",
          padding: "10px",
          minHeight: "150px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Image
            src={"/images/employee.png"}
            alt="Logo"
            width={60}
            height={60}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <Box component={"div"}>
            <Typography
              variant="p"
              fontSize={"14px"}
              component={"p"}
              sx={{ color: "#fff" }}
              mb={1}
            >
              11111111
            </Typography>
            <Typography
              variant="p"
              fontSize={"14px"}
              component={"p"}
              sx={{
                color: "#fff",
                backgroundColor: "#108487",
                display: "table",
                padding: "3px",
                borderRadius: "5px",
                marginBottom: "5px",
              }}
              mb={1}
            >
              Kulchalee Manee
            </Typography>
            <Typography
              variant="p"
              component={"p"}
              sx={{
                color: "#fff",
                backgroundColor: "#108487",
                display: "table",
                padding: "3px",
                borderRadius: "5px",
              }}
              fontSize={"14px"}
            >
              T.C.C Technology Co.Ltd
            </Typography>
          </Box>
        </Box>
        <NotificationsOutlinedIcon sx={{ color: "#fff" }} />
      </Box>
      <Box sx={{ textAlign: "center", marginTop: "-40px" }}>
        <Image
          src={"/images/qr-image.png"}
          width={200}
          height={200}
          alt="Qr Image"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            component={"span"}
            variant="span"
            fontSize={"18px"}
            sx={{ color: "#B22544", fontWeight: "600", paddingRight: "5px" }}
          >
            03:00
          </Typography>
          <Image
            src={"/images/Refresh.png"}
            width={17}
            height={17}
            alt="Refresh"
          />
        </Box>
      </Box>
      <BookingList />
    </>
  );
};

export default Home;
