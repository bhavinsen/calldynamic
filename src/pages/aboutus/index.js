import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import FooterBar from "@/components/footer";
import Layout from "@/components/Layout/Layout";

const index = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{
            pt: "100px",
            pb: "60px",
            backgroundImage: {
              xs: "url('../assets/image/Hero Bg 1.png')",
              sm: "none",
            },
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container maxWidth={"xl"}>
            <Box sx={{ mt: "60px", textAlign: "center" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "12.133px", sm: "16.8px" },
                  lineHeight: { xs: "18.2px", sm: "25.2px" },
                  fontWeight: "600",
                  color: "#6941C6",
                  mb: "20px",
                }}
              >
                About us
              </Typography>
              <Box sx={{ width: "100%", maxWidth: "1024px", mx: "auto" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "22.375px", sm: "43.4px" },
                    lineHeight: { xs: "32.48px", sm: "63px" },
                    fontWeight: "600",
                    color: "#101828",
                    letterSpacing: "-0.868px",
                    mb: "20px",
                  }}
                >
                  Empowering Call Centers and Quality Assurance Teams with{" "}
                  <Typography
                    component="span"
                    sx={{
                      textAlign: "center",
                      fontSize: { xs: "22.375px", sm: "43.4px" },
                      lineHeight: { xs: "32.48px", sm: "63px" },
                      fontWeight: "600",
                      color: "#7F56D9",
                      letterSpacing: "-0.868px",
                      mb: "20px",
                    }}
                  >
                    Unrivaled Intelligent Analysis
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ width: "100%", maxWidth: "1044px", mx: "auto" }}>
                <Typography
                  component="p"
                  sx={{
                    fontSize: { xs: "12.277px", sm: "21px" },
                    lineHeight: { xs: "22.749px", sm: "31.5px" },
                    fontWeight: { xs: "400", sm: "600" },
                    color: "#475467",
                  }}
                >
                  In the intricate world of call data and analytics,{" "}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: { xs: "12.277px", sm: "21px" },
                      lineHeight: { xs: "22.749px", sm: "31.5px" },
                      fontWeight: { xs: "400", sm: "600" },
                      color: "#7F56D9",
                    }}
                  >
                    CallDynamics AI
                  </Typography>{" "}
                  emerged from a robust desire to innovate, transform, and
                  streamline the way businesses perceive, analyze, and utilize
                  their call data. We believe that deep, meaningful insights
                  from calls are pivotal in driving businesses forward, and our
                  platform is meticulously designed to unlock those insights
                  with unparalleled precision and ease.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box>
          <Container maxWidth={"xl"}>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: "600",
                lineHeight: "44px",
                letterSpacing: "-0.72px",
                color: "#101828",
                textAlign: "center",
                mb: "10px",
              }}
            >
              On a Mission
            </Typography>
            <Box sx={{ width: "100%", maxWidth: "700px", mx: "auto" }}>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "20px" },
                  fontWeight: "400",
                  lineHeight: { xs: "27px", sm: "30px" },
                  color: "#475467)",
                  textAlign: "center",
                }}
              >
                At CallDynamics AI, we’re on a mission to revolutionize call
                data analysis, providing businesses with unparalleled insights
                for strategic success.
              </Typography>
            </Box>
            <Box sx={{ py: "100px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ mx: "auto" }}>
                  <Typography
                    component="img"
                    sx={{ pb: "20px", maxWidth: "100%", order: "1" }}
                    src="/assets/image/mission_ icon1.png"
                  />
                  <Box
                    sx={{
                      maxWidth: "600px",
                      width: "100%",
                      mx: "auto",
                      order: "2 ",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "30px",
                        fontWeight: "600",
                        lineHeight: "38px",
                        color: "#101828",
                        pb: "18px",
                      }}
                    >
                      Bridging Technology and Insights
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "28px",
                        color: "#101828",
                        pb: "18px",
                      }}
                    >
                      At CallDynamics AI, we blend cutting-edge AI technologies
                      with insightful data analytics, providing an exquisite,
                      user-friendly platform that transcends traditional
                      boundaries of call data analysis. Utilizing unparalleled
                      transcription accuracy and custom models, we've crafted a
                      tool that stands as a beacon of innovative, intelligent,
                      and insightful call analysis.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ position: "relative", mx: "auto" }}>
                  <Typography
                    component={"img"}
                    sx={{ position: "relative", maxWidth: "100%" }}
                    src="/assets/image/mission_1.png"
                  />
                  <Typography
                    component={"img"}
                    sx={{
                      position: "absolute",
                      top: { xs: "-25%", sm: "-18%" },
                      left: { xs: "10%", sm: "20%" },
                      maxWidth: "100%",
                    }}
                    src="/assets/image/mission_11.png"
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mx: "auto",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Typography
                    component={"img"}
                    sx={{ position: "relative", mx: "auto", maxWidth: "100%" }}
                    src="/assets/image/mission_2.png"
                  />
                </Box>
                <Box sx={{ mx: "auto" }}>
                  <Typography
                    component="img"
                    sx={{ pb: "20px", maxWidth: "100%" }}
                    src="/assets/image/mission icon2.png"
                  />
                  <Box sx={{ maxWidth: "600px", width: "100%", mx: "auto" }}>
                    <Typography
                      sx={{
                        fontSize: "30px",
                        fontWeight: "600",
                        lineHeight: "38px",
                        color: "#101828",
                        pb: "18px",
                      }}
                    >
                      Customization at Its Core
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "28px",
                        color: "#101828",
                        pb: "18px",
                      }}
                    >
                      Every industry, every business, is a unique entity,
                      demanding specific, tailored solutions. CallDynamics AI is
                      constructed with a foundational belief in customization,
                      ensuring that our platform not only meets but anticipates
                      and adapts to your industry’s and business's unique needs
                      and challenges. Through in-depth cooperation with industry
                      experts and our proprietary method for real-time model
                      training, we ensure the insights provided are not generic
                      but are astutely aligned with your specific use-cases and
                      strategic ambitions.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mx: "auto",
                }}
              >
                <Box sx={{ mx: "auto" }}>
                  <Typography
                    component="img"
                    sx={{ pb: "20px", maxWidth: "100%" }}
                    src="/assets/image/mission icon3.png"
                  />
                  <Box sx={{ maxWidth: "600px", width: "100%", mx: "auto" }}>
                    <Typography
                      sx={{
                        fontSize: "30px",
                        fontWeight: "600",
                        lineHeight: "38px",
                        color: "#101828",
                        pb: "18px",
                      }}
                    >
                      Limitless Possibilities with AI
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "28px",
                        color: "#101828",
                        pb: "18px",
                      }}
                    >
                      Determined to break free from the limitations of manual
                      call analysis, our platform provides an avenue where call
                      data can be analyzed voluminously and instantaneously.
                      CallDynamics AI doesn’t just analyze; it learns, evolves,
                      and consistently enhances its analytical prowess,
                      providing your business with insights that are perpetually
                      sharpening and adapting to the dynamic landscape of your
                      call data.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ position: "relative", mx: "auto" }}>
                  <Typography
                    component={"img"}
                    sx={{ position: "relative", maxWidth: "100%" }}
                    src="/assets/image/mission_3.png"
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box>
          <Container maxWidth={"xl"}>
            <Box sx={{ textAlign: "center", pb: "100px" }}>
              <Typography
                component={"img"}
                sx={{
                  margin: "auto",
                  mb: "20px",
                  maxWidth: "100%",
                }}
                src="/assets/image/mission_ icon1.png"
              />
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "600",
                  lineHeight: "38px",
                  mb: "10px",
                }}
              >
                Safeguarding Accuracy and Integrity
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  color: "#475467",
                  pb: "18px",
                }}
              >
                Every industry, every business, is a unique entity, demanding
                specific, tailored solutions. CallDynamics AI is constructed
                with a foundational belief in customization, ensuring that our
                platform not only meets but anticipates and adapts to your
                industry’s and business's unique needs and challenges. Through
                in-depth cooperation with industry experts and our proprietary
                method for real-time model training, we ensure the insights
                provided are not generic but are astutely aligned with your
                specific use-cases and strategic ambitions.
              </Typography>
            </Box>
          </Container>
        </Box>

        <Box sx={{ background: "#F9FAFB", py: "100px" }}>
          <Container maxWidth={"xl"}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: "600",
                  lineHeight: "63px",
                  letterSpacing: " -0.8px",
                  color: "#101828",
                }}
              >
                Your Ally in Strategic Advancement
              </Typography>
              <Typography
                sx={{
                  fontSize: "21px",
                  fontWeight: "400",
                  lineHeight: "35px",
                  color: "#475467",
                }}
              >
                At CallDynamics AI, we don’t just provide a service; we forge
                partnerships. We stand beside our clients as an ally, ensuring
                that the insights and analytics provided by our platform serve
                not just immediate needs but strategically propel your business
                toward future successes.
              </Typography>
            </Box>
          </Container>
        </Box>

        <Box sx={{ background: "#53389E", py: "96px" }}>
          <Container maxWidth={"lg"}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: "600",
                  lineHeight: "44px",
                  letterSpacing: " -0.72px",
                  color: "#FFF",
                  mb: "20px",
                }}
              >
                Connect with Intelligent Call Analysis Today!
              </Typography>
              <Typography
                sx={{
                  fontSize: "21px",
                  fontWeight: "400",
                  lineHeight: "35px",
                  color: "#F2F4F7",
                  mb: "20px",
                }}
              >
                Join Us in redefining the scope, accuracy, and impact of call
                data analytics, and let’s forge a future where every call, every
                word, and every nuance is a stepping stone toward insightful
                decisions and strategic triumphs. Embrace the future of call
                data analytics with CallDynamics AI –{" "}
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: "21px",
                    fontWeight: "400",
                    lineHeight: "35px",
                    color: "#F2F4F7",
                    fontStyle: "italic",
                  }}
                >
                  Where Every Word Matters.
                </Typography>
              </Typography>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "8.772px",
                    padding: "17.544px 30.702px",
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "28px",
                    color: "#344054",
                    background: "#FFF",
                    "&.MuiButtonBase-root:hover": { backgroundColor: "#FFF" },
                    textTransform: "capitalize ",
                  }}
                >
                  Explore CallDynamics AI
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        <FooterBar />
      </Layout>
    </>
  );
};

export default index;
