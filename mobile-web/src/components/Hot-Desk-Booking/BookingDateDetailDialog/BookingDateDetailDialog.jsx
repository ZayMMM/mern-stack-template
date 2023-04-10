import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const BookingDateDetailDialog = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "14px" }}>
          Booking date detail (12 days)
        </Typography>
        <IconButton onClick={props.handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              backgroundColor: "#fafbfb",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Monday
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              backgroundColor: "#fafbfb",
              padding: "5px 15px",
              borderRadius: "5px",
            }}
          >
            09/01.2023
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              backgroundColor: "#fafbfb",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Thursday
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              backgroundColor: "#fafbfb",
              padding: "5px 15px",
              borderRadius: "5px",
            }}
          >
            09/01.2023
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              backgroundColor: "#fafbfb",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Firday
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              backgroundColor: "#fafbfb",
              padding: "5px 15px",
              borderRadius: "5px",
            }}
          >
            09/01.2023
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              backgroundColor: "#fafbfb",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Monday
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              backgroundColor: "#fafbfb",
              padding: "5px 15px",
              borderRadius: "5px",
            }}
          >
            09/01.2023
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDateDetailDialog;
