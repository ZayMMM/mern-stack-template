import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useIntl } from "react-intl";

const SuccessDialogForSelf = (props) => {
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
          id: "successfully.reserve.a.seat",
          defaultMessage: "Successfully reserved a seat",
        })}
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
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessDialogForSelf;
