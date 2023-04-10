import {
  Box,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

import { useIntl } from "react-intl";

const ExternalPersonForm = (props) => {
  const intl = useIntl();
  return (
    <Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 15px",
        }}
      >
        <TextField
          variant="standard"
          placeholder={intl.formatMessage({
            id: "first.name",
            defaultMessage: "First Name",
          })}
          autoComplete="off"
          fullWidth
          InputProps={{
            sx: {
              fontSize: "14px",
            },
          }}
        />
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
        <TextField
          variant="standard"
          placeholder={intl.formatMessage({
            id: "last.name",
            defaultMessage: "Last Name",
          })}
          fullWidth
          InputProps={{
            sx: {
              fontSize: "14px",
            },
          }}
          autoComplete="off"
        />
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
        <TextField
          variant="standard"
          placeholder={intl.formatMessage({
            id: "company",
            defaultMessage: "Company",
          })}
          fullWidth
          InputProps={{
            sx: {
              fontSize: "14px",
            },
          }}
          autoComplete="off"
        />
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
        <TextField
          variant="standard"
          fullWidth
          placeholder={intl.formatMessage({
            id: "email",
            defaultMessage: "Email",
          })}
          InputProps={{
            sx: {
              fontSize: "14px",
            },
          }}
          autoComplete="off"
        />
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
        <TextField
          variant="standard"
          fullWidth
          placeholder={intl.formatMessage({
            id: "contact.number",
            defaultMessage: "Contact Number",
          })}
          InputProps={{
            sx: {
              fontSize: "14px",
            },
          }}
          autoComplete="off"
        />
      </Box>
    </Box>
  );
};

export default ExternalPersonForm;
