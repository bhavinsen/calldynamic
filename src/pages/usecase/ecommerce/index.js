import Layout from "@/components/Layout/Layout";
import { Box, Button, Container, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import FooterBar from "@/components/footer";
import React from "react";

const index = () => {
  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: "url('../assets/image/Hero Bg 1.png')",
          backgroundSize: "cover",
          maxHeight: { xs: "550px", md: "973px" },
          backgroundPosition: "bottom",
        }}
      >
        <Container maxWidth={"xl"}>
          <Box
            sx={{
              pt: { xs: "150px", md: "200px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                maxWidth: "704px",
                width: "100%",
                mx: "auto",
                textAlign: "center",
              }}
            >
              <Typography
                className="inter"
                sx={{
                  fontSize: { xs: "36px", md: "48px" },
                  lineHeight: { xs: "44px", md: "69px" },
                  fontWeight: "700",
                  letterSpacing: "-0.96px",
                  color: "#000",
                }}
              >
                Optimize Your{" "}
                <Typography
                  className="inter"
                  component={"span"}
                  sx={{
                    fontSize: { xs: "36px", md: "48px" },
                    lineHeight: { xs: "44px", md: "69px" },
                    fontWeight: "700",
                    letterSpacing: "-0.96px",
                    color: "#7F56D9",
                    position: "relative",
                  }}
                >
                  E-Commerce
                  <Typography
                    component={"img"}
                    sx={{
                      position: "absolute",
                      bottom: "-40%",
                      left: "0",
                      maxWidth: "100%",
                    }}
                    src="/assets/image/fency-underline.svg"
                  />
                </Typography>{" "}
                Strategy with CallDynamics AI
              </Typography>
              <Typography
                className="inter"
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  color: "#344054",
                }}
              >
                Unlocking Profound Insights, Mitigating Fraud Risks, and
                Leveraging In-Depth Data from Every Customer Interaction to
                Drive Your Online Sales Skyward
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button
                  disableRipple
                  disableElevation
                  variant="contained"
                  className="inter"
                  sx={{
                    padding: "17px 20px",
                    borderRadius: "12px",
                    background: "#7F56D9",
                    color: "#FFF",
                    fontSize: { sm: "13px", md: "16px" },
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                >
                  Elevate Your E-Commerce Strategy with Intelligent Call
                  Analytics Today!
                  <EastIcon sx={{ ml: "5px" }} />
                </Button>
              </Box>
              <Box
                sx={{
                  padding: "30px 10px",
                  background: "#7F56D9",
                  textAlign: "center",
                  display: { xs: "flex", sm: "none" },
                  flexDirection: "column",
                  gap: "13px",
                }}
              >
                <Typography
                  className="inter"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "28px",
                    color: "#FFF",
                    letterSpacing: "-0.36px",
                  }}
                >
                  Unlock the Full Potential of Every Call with CallDynamics AI
                  Today!
                </Typography>
                <Box>
                  <Button
                    className="inter"
                    variant="contained"
                    sx={{
                      background: "#FFF",
                      color: "#7F56D9",
                      textTransform: "capitalize",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Get Started <EastIcon />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* In-depth Insights for Elevated E-Commerce Strategies */}
          <Box
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", md: "nowrap", lg: "nowrap" },
              justifyContent: "space-between",
              alignItems: "center",
              pt: "50px",
              gap: "80px",
            }}
          >
            <Box
              sx={{
                maxWidth: { lg: "616px" },
                width: {xs:"100%",sm:"65%"},
                mx: "auto",
                order: { xs: "2", md: "1" },
              }}
            >
              <Typography
                className="inter"
                sx={{
                  fontSize: "30px",
                  fontWeight: { xs: "600", md: "700" },
                  lineHeight: "38px",
                  color: "#101828",
                  pb: "20px",
                }}
              >
                In-depth Insights for Elevated E-Commerce Strategies
              </Typography>
              <Typography
                className="inter"
                sx={{
                  fontSize: { xs: "18px", md: "22px" },
                  fontWeight: { xs: "400", md: "500" },
                  lineHeight: "28px",
                  color: "#101828",
                  letterSpacing: "-0.36px",
                  pb: "20px",
                }}
              >
                Unravel the Threads of Every Customer Interaction to Fuel Your
                E-Commerce Growth
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      padding: "11.25px",
                      border: "0.8px solid #EAECF0",
                      backgroundColor: "#FFF",
                      borderRadius: "9.643px",
                    }}
                  >
                    <Typography
                      component={"img"}
                      src="/assets/image/shopping-bag.svg"
                    />
                  </Box>
                  <Typography
                    className="inter"
                    component={"p"}
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "#344054",
                    }}
                  >
                    <Typography
                      className="inter"
                      component={"span"}
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "#101828",
                      }}
                    >
                      Navigating the Digital Marketplace:
                    </Typography>{" "}
                    With CallDynamics AI, navigate through the dynamic digital
                    marketplace with deeply insightful data.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      padding: "11.25px",
                      border: "0.8px solid #EAECF0",
                      backgroundColor: "#FFF",
                      borderRadius: "9.643px",
                    }}
                  >
                    <Typography
                      component={"img"}
                      src="/assets/image/coins-stacked.svg"
                    />
                  </Box>
                  <Typography
                    className="inter"
                    component={"p"}
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "#344054",
                    }}
                  >
                    <Typography
                      className="inter"
                      component={"span"}
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "#101828",
                      }}
                    >
                      Strategic Asset:
                    </Typography>{" "}
                    Transform every customer interaction into a robust data
                    source, guiding your e-commerce brand towards enhanced
                    customer experiences and optimized conversion funnels.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      padding: "11.25px",
                      border: "0.8px solid #EAECF0",
                      backgroundColor: "#FFF",
                      borderRadius: "9.643px",
                    }}
                  >
                    <Typography
                      component={"img"}
                      src="/assets/image/lightbulb.svg"
                    />
                  </Box>
                  <Typography
                    className="inter"
                    component={"p"}
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "#344054",
                    }}
                  >
                    <Typography
                      className="inter"
                      component={"span"}
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "#101828",
                      }}
                    >
                      Actionable Insights:
                    </Typography>{" "}
                    Adapt your strategies to anticipate the demands of your
                    digital clientele, driving engagement, loyalty, and
                    continual growth.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ order: { xs: "1", md: "2" }, mx: "auto" }}>
              <Typography
                component={"img"}
                sx={{ maxWidth: "100%" }}
                src="/assets/image/insightProgress.svg"
              />
            </Box>
          </Box>
          <Box
            sx={{ textAlign: "center", display: { xs: "none", lg: "block" } }}
          >
            <Typography
              component={"img"}
              sx={{ maxWidth: "100%" }}
              src="/assets/image/path-progress.svg"
            />
          </Box>

          {/* Bolstering Your Brand Against Fraudulent Activities */}
          <Box
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", md: "nowrap", lg: "nowrap" },
              justifyContent: "space-between",
              alignItems: "center",
              pt: "50px",
              gap: "80px",
            }}
          >
            <Box
              sx={{
                mx: "auto",
              }}
            >
              <Typography
                component={"img"}
                sx={{ maxWidth: "100%" }}
                src="/assets/image/fraud-detection.svg"
              />
            </Box>
            <Box sx={{ maxWidth: { lg: "616px" }, width: {xs:"100%",sm:"65%"}, mx:"auto" }}>
              <Typography
                className="inter"
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                  lineHeight: "38px",
                  color: "#101828",
                  pb: "20px",
                }}
              >
                Bolstering Your Brand Against Fraudulent Activities
              </Typography>
              <Typography
                className="inter"
                sx={{
                  fontSize: "22px",
                  fontWeight: "500",
                  lineHeight: "28px",
                  color: "#101828",
                  letterSpacing: "-0.36px",
                  pb: "20px",
                }}
              >
                 Shielding Your Online Storefront with Proactive Fraud Detection
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      padding: "11.25px",
                      border: "0.8px solid #EAECF0",
                      backgroundColor: "#FFF",
                      borderRadius: "9.643px",
                    }}
                  >
                    <Typography
                      component={"img"}
                      src="/assets/image/shield-zap.svg"
                    />
                  </Box>
                  <Typography
                    className="inter"
                    component={"p"}
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "#344054",
                    }}
                  >
                    <Typography
                      className="inter"
                      component={"span"}
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "#101828",
                      }}
                    >
                      Safeguarding Your Brand:
                    </Typography>{" "}
                    CallDynamics AI helps safeguard your e-commerce brand
                    against fraudulent activities.
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      padding: "11.25px",
                      border: "0.8px solid #EAECF0",
                      backgroundColor: "#FFF",
                      borderRadius: "9.643px",
                    }}
                  >
                    <Typography component={"img"} src="/assets/image/eye.svg" />
                  </Box>
                  <Typography
                    className="inter"
                    component={"p"}
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "#344054",
                    }}
                  >
                    <Typography
                      className="inter"
                      component={"span"}
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "#101828",
                      }}
                    >
                      Proactive Protection:
                    </Typography>{" "}
                    With intelligent fraud detection mechanisms, ensure your
                    online operations, customer data, and brand reputation are
                    shielded against malicious activities.
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      padding: "11.25px",
                      border: "0.8px solid #EAECF0",
                      backgroundColor: "#FFF",
                      borderRadius: "9.643px",
                    }}
                  >
                    <Typography
                      component={"img"}
                      src="/assets/image/shield-tick.svg"
                    />
                  </Box>
                  <Typography
                    className="inter"
                    component={"p"}
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "#344054",
                    }}
                  >
                    <Typography
                      className="inter"
                      component={"span"}
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "#101828",
                      }}
                    >
                      Risk Mitigation:
                    </Typography>{" "}
                    Identify and mitigate potential threats, securing your
                    digital storefront against the varied threats in the
                    e-commerce landscape.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ textAlign: "center", display: { xs: "none", lg: "block" } }}
          >
            <Typography
              component={"img"}
              sx={{ maxWidth: "100%" }}
              src="/assets/image/path-progress2.svg"
            />
          </Box>

          {/* Precision-Tailored Strategies Through Keen Data Extraction */}
          <Box
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", md: "nowrap", lg: "nowrap" },
              justifyContent: "space-between",
              alignItems: "center",
              py: "50px",
              gap: "80px",
            }}
          >
            <Box
              sx={{
                maxWidth: { lg: "616px" },
                width: {xs:"100%", sm:"65%"},
                mx:"auto",
                order: { xs: "2", md: "1" },
              }}
            >
              <Typography
                className="inter"
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                  lineHeight: "38px",
                  color: "#101828",
                  pb: "20px",
                }}
              >
                Precision-Tailored Strategies Through Keen Data Extraction
              </Typography>
              <Typography
                className="inter"
                sx={{
                  fontSize: "22px",
                  fontWeight: "500",
                  lineHeight: "28px",
                  color: "#101828",
                  letterSpacing: "-0.36px",
                  pb: "20px",
                }}
              >
                Carving Out Success with Data-Driven E-Commerce Strategies
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      padding: "11.25px",
                      border: "0.8px solid #EAECF0",
                      backgroundColor: "#FFF",
                      borderRadius: "9.643px",
                    }}
                  >
                    <Typography
                      component={"img"}
                      src="/assets/image/bar-line-chart.svg"
                    />
                  </Box>
                  <Typography
                    className="inter"
                    component={"p"}
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "#344054",
                    }}
                  >
                    <Typography
                      className="inter"
                      component={"span"}
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "#101828",
                      }}
                    >
                      Data-Driven Strategies:
                    </Typography>{" "}
                    CallDynamics AI ensures your e-commerce strategies are
                    refined, data-driven, and precise.
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      padding: "11.25px",
                      border: "0.8px solid #EAECF0",
                      backgroundColor: "#FFF",
                      borderRadius: "9.643px",
                    }}
                  >
                    <Typography
                      component={"img"}
                      src="/assets/image/dataflow2.svg"
                    />
                  </Box>
                  <Typography
                    className="inter"
                    component={"p"}
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "#344054",
                    }}
                  >
                    <Typography
                      className="inter"
                      component={"span"}
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "#101828",
                      }}
                    >
                      Key Data Extraction:
                    </Typography>{" "}
                    Extract and distill key data from every customer
                    interaction, providing invaluable insights and precise KPIs
                    for your e-commerce strategies.
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      padding: "11.25px",
                      border: "0.8px solid #EAECF0",
                      backgroundColor: "#FFF",
                      borderRadius: "9.643px",
                    }}
                  >
                    <Typography
                      component={"img"}
                      src="/assets/image/navigation-pointer.svg"
                    />
                  </Box>
                  <Typography
                    className="inter"
                    component={"p"}
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      color: "#344054",
                    }}
                  >
                    <Typography
                      className="inter"
                      component={"span"}
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "#101828",
                      }}
                    >
                      Strategic Decision Support:
                    </Typography>{" "}
                    With profound and actionable data, finely tune every
                    strategic decision to resonate deeply with your diverse
                    online audience.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ order: { xs: "1", md: "2" },mx:'auto' }}>
              <Typography
                component={"img"}
                sx={{ maxWidth: "100%" , }}
                src="/assets/image/data-extraction.svg"
              />
            </Box>
          </Box>
        </Container>
        <Box sx={{ padding: "100px 0px", background: "#F9FAFB  " }}>
          <Container maxWidth={"xl"}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "33.6px",
                textAlign: "center",
              }}
            >
              <Typography
                className="inter"
                sx={{
                  fontSize: { xs: "30px", md: "40px" },
                  lineHeight: { xs: "41px", md: "63px" },
                  fontWeight: "500",
                  letterSpacing: "-0.8px",
                  color: "#101828",
                }}
              >
                Embark on a journey where every customer interaction becomes a
                stepping stone towards elevated strategies, secure operations,
                and continual e-commerce growth.{" "}
              </Typography>
              <Typography
                className="inter"
                sx={{
                  fontSize: "21px",
                  fontSize: "21px",
                  fontWeight: "400",
                  lineHeight: "35px",
                  color: "#475467",
                }}
              >
                Propel your brand forward, ensuring your online storefront not
                only meets but anticipates, adapts, and shapes the demands of
                the digital marketplace, securing your position as a formidable
                e-commerce entity.
              </Typography>
              <Box>
                <Button
                  variant="contained"
                  className="inter"
                  sx={{
                    padding: "17px 33.141px",
                    borderRadius: "8px",
                    backgroundColor: "#7F56D9",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    color: "#FFF",
                    textTransform: "capitalize",
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        <FooterBar />
      </Box>
    </Layout>
  );
};

export default index;
