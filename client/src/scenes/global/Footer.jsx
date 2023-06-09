import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color="black"
          >
            GUSTECH
          </Typography>
          <div>
            Gustech adalah website yang menyediakan berbagai macam produk second komputer dan perlengkapan komputer, 
            seperti laptop, komputer, mouse, keyboard, dan lain-lain.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            Cimanggis, Depok
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            aryaraka360@gmail.com
          </Typography>
          <Typography mb="30px">(+62)85162825102</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;