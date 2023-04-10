import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Button } from "@mui/material";
import NextLink from "next/link";

const SessionTransactionDialog = (props) => {
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        sx={{ borderRadius: "10px" }}
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{ paddingBottom: "10px" }}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontSize: "14px", color: "#000000" }}
          >
            You have 30 minutes to complete the transaction.
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <NextLink
            href={"/hot-desk-booking/zones"}
            passHref
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#09a986",
                textTransform: "none",
                borderRadius: "7px",
                "&:hover": {
                  backgroundColor: "#09a986",
                },
              }}
            >
              Select More
            </Button>
          </NextLink>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SessionTransactionDialog;
