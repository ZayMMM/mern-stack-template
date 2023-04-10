import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useIntl } from "react-intl";
import NextLink from "next/link";
import EmployeeList from "./EmployeeList";

const EmployeeDirectory = () => {
  const intl = useIntl();
  return (
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
              textTransform: "none",
              backgroundColor: "#f0f0f1",
              color: "#000",
              position: "absolute",
            }}
          >
            {intl.formatMessage({
              id: "go.back",
              defaultMessage: "Go Back",
            })}
          </Button>
        </NextLink>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            component={"span"}
            sx={{
              fontSize: "14px",
              backgroundColor: "#fafbfb",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            {intl.formatMessage({
              id: "for",
              defaultMessage: "For",
            })}
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={1} mt={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            placeholder="Search"
            InputProps={{
              sx: {
                borderRadius: "20px",
                height: "40px",
                backgroundColor: "#f0f0f1",
                borderColor: "#f0f0f1",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <EmployeeList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmployeeDirectory;
