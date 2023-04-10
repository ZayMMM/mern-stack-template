import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

const SeatDiagramDialog = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      maxWidth="xl"
      fullWidth={true}
    >
      <DialogActions onClick={props.handleClose}>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <DialogContent>
        <Image
          src={"/images/seat.png"}
          width={"200"}
          height={"200"}
          alt="Seat Diagram"
        />
      </DialogContent>
    </Dialog>
  );
};

export default SeatDiagramDialog;
