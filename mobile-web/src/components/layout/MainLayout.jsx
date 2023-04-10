import BottomNav from "../Bottom-Navigation/BottomNavigation";

const { Box } = require("@mui/system");

const MainLayout = ({ children }) => {
  return (
    <>
      <Box sx={{ marginBottom: "70px" }}>{children}</Box>
      <BottomNav />
    </>
  );
};

export default MainLayout;
