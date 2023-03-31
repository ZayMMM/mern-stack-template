import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ParticipantMailDialog = (props) => {
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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: "14px", color: "#5aa194" }}>
          Delegate
        </Typography>
        <IconButton onClick={props.handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <DialogContentText
          sx={{
            fontSize: "14px",
            color: "#000",
          }}
        >
          testing1@gmail.com
        </DialogContentText>
        <DialogContentText
          sx={{
            fontSize: "14px",
            color: "#000",
            mt: 2,
          }}
        >
          testing2@gmail.com
        </DialogContentText>
        <DialogContentText
          sx={{
            fontSize: "14px",
            color: "#000",
            mt: 2,
          }}
        >
          testing3@gmail.com
        </DialogContentText>
        <DialogContentText
          sx={{
            fontSize: "14px",
            color: "#000",
            mt: 2,
          }}
        >
          testing4@gmail.com
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ParticipantMailDialog;
