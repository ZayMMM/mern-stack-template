import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useIntl } from "react-intl";

const SessionCompleteTransactionDialog = (props) => {
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
        sx={{
          fontSize: "14px",
          fontWeight: "600",
          textAlign: "center",
          color: "#EB8439",
        }}
      >
        You have 5 minutes left to complete the transaction.
      </DialogTitle>

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
          Acknowledge
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SessionCompleteTransactionDialog;
