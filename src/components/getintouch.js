import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const GetInTouch = () => {
  return (
    <Box>
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            padding: "34px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F9FAFB",
            borderRadius: "16.8px",
            my: "20px",
          }}
        >
          <Typography
            component="img"
            src="/assets/image/getintouch.png"
            sx={{ mb: "10px" }}
          />
          <Typography
           className="inter"
            component="p"
            sx={{
              fontSize: "21px",
              fontWeight: "600",
              color: "#101828",
              lineHeight: "31.5px",
            }}
          >
            Still have questions?
          </Typography>
          <Typography
          className="inter"
            component="p"
            sx={{
              fontSize: "18.9px",
              fontWeight: "400",
              color: "#475467",
              lineHeight: "29.4px",
            }}
          >
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </Typography>
          <Button
            variant="contained"
            className="inter"
            sx={{
              backgroundColor: "#7F56D9",
              borderRadius: "8.4px",
              padding: "12.6px 21px",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "24px",
              my: "20px",
              textTransform:"capitalize"
            }}
          >
            Get in touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default GetInTouch;
