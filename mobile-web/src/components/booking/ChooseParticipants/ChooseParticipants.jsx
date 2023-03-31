import {
  Autocomplete,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import NextLink from "next/link";
import { useIntl } from "react-intl";

const ChooseParticipants = () => {
  const intl = useIntl();
  const participantEmails = [
    {
      email: "testing1@gmail.com",
    },
    {
      email: "testing2@gmail.com",
    },
    {
      email: "testing3@gmail.com",
    },
  ];

  return (
    <>
      <Container maxWidth="sm">
        <Box mt={2} sx={{ position: "relative" }}>
          <NextLink
            href={"/booking"}
            passHref
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                fontSize: "14px",
                position: "absolute",
                textTransform: "none",
                backgroundColor: "#f0f0f0",
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
              id: "attendance",
              defaultMessage: "Attendance",
            })}
          </Typography>
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
                id: "number.of.participants",
                defaultMessage: "Number of Participants",
              })}
            </Typography>
            <TextField
              sx={{ fontSize: "14px", maxWidth: "100px" }}
              variant="standard"
            />
          </Box>
          <Divider />
          <Box sx={{ padding: "15px 15px" }}>
            <Typography component={"p"} fontSize={14}>
              {intl.formatMessage({
                id: "email",
                defaultMessage: "Email",
              })}
            </Typography>
            <Autocomplete
              multiple
              id="tags-standard"
              options={participantEmails}
              getOptionLabel={(option) => option.email}
              sx={{ fontSize: "14px" }}
              renderInput={(params) => (
                <TextField {...params} variant="standard" />
              )}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ChooseParticipants;
