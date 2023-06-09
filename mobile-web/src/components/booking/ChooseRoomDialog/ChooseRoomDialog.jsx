import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { SELECT_BOOKING_ROOM_ROUTE } from "@/config/route";

const ChooseMeetingRoomDialog = (props) => {
  const router = useRouter();

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
            onClick={() => router.push(SELECT_BOOKING_ROOM_ROUTE)}
          >
            Choose a meeting room
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChooseMeetingRoomDialog;
