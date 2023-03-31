import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useIntl } from "react-intl";

const BookingSuccessDialog = (props) => {
  const intl = useIntl();
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      sx={{ borderRadius: "10px" }}
      maxWidth="md"
      fullWidth={true}
    >
      <DialogTitle
        sx={{ fontSize: "16px", fontWeight: "600", textAlign: "center" }}
      >
        {intl.formatMessage({
          id: "successfully.book.a.meeting",
          defaultMessage: "Successfully booked a meeting",
        })}
      </DialogTitle>
      <DialogContent sx={{ paddingBottom: "10px" }}>
        <DialogContentText
          sx={{
            fontSize: "14px",
            backgroundColor: "#fafbfb",
            padding: "7px",
            borderRadius: "10px",
            color: "#000",
          }}
        >
          Detail Notifications
        </DialogContentText>
        <DialogContentText
          sx={{
            fontSize: "14px",
            backgroundColor: "#fafbfb",
            padding: "7px",
            borderRadius: "10px",
            color: "#000",
            mt: 1,
          }}
        >
          System Email Booking
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <Button
          variant="contained"
          onClick={props.handleClose}
          sx={{
            backgroundColor: "#09a986",
            textTransform: "none",
            borderRadius: "7px",
            minWidth: "170px",
          }}
        >
          acknowledge
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingSuccessDialog;
