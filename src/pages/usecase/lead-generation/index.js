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
          maxHeight: { xs: "500px", md: "973px" },
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
                  lineHeight: { xs: "44px", md: "68px" },
                  fontWeight: "700",
                  letterSpacing: "-0.96px",
                  color: "#000",
                }}
              >
                Amplify{" "}
                <Typography
                  className="inter"
                  component={"span"}
                  sx={{
                    fontSize: { xs: "36px", md: "48px" },
                    lineHeight: { xs: "44px", md: "68px" },
                    fontWeight: "700",
                    letterSpacing: "-0.96px",
                    color: "#7F56D9",
                    position: "relative",
                  }}
                >
                  Lead Generation
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
                Success with CallDynamics AI
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
                Harvesting Actionable Insights, Protecting Your Operations, and
                Skillfully Mining Key Data from Every Call to Propel Your Lead
                Generation Strategies Forward
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button
                  disableRipple
                  disableElevation
                  variant="contained"
                  className="inter"
                  sx={{
                    textTransform: "capitalize",
                    padding: "17px 35px",
                    borderRadius: "12px",
                    background: "#7F56D9",
                    color: "#FFF",
                    fontSize: { sm: "11px", md: "15px" },
                    fontWeight: "500",
                    letterSpacing: { md: "-0.36px" },
                  }}
                >
                  Harness the Power of AI-Driven Call Insights with CallDynamics
                  AI Now!
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

          {/* Crafting Data-Driven Strategies with Deep Insights */}
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
                width: { xs: "100%", sm: "65%" },
                mx: "auto" ,
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
                Crafting Data-Driven Strategies with Deep Insights
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
                Turning Every Interaction into a Wealth of Strategic Data
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
                      In-Depth Analysis:
                    </Typography>{" "}
                    Elevate your agency by unlocking the latent potential within
                    every call using CallDynamics AI.
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
                      src="/assets/image/star-light.svg"
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
                      Advanced AI:
                    </Typography>{" "}
                    Extract and interpret a wealth of data from every
                    interaction, turning each call into a strategic asset.
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
                      src="/assets/image/Strategy.svg"
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
                      Strategy Crafting:
                    </Typography>{" "}
                    Gain detailed insights into caller intent, behaviors, and
                    patterns to craft approaches that resonate profoundly with
                    your target demographics.
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
                      src="/assets/image/search-graph.svg"
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
                      Data-Driven Insights:
                    </Typography>{" "}
                    Empower your strategies with actionable insights that drive
                    engagement, optimize conversions, and align your campaigns
                    with audience demands.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ order: { xs: "1", md: "2" } , mx: "auto" }}>
              <Typography
                component={"img"}
                sx={{ maxWidth: "100%" , mx: "auto" }}
                src="/assets/image/insightPie.svg"
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

          {/* Fortifying Against Fraudulent Activities */}
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
            <Box sx={{mx:'auto'}}>
              <Typography
                component={"img"}
                sx={{ maxWidth: "100%", mx:"auto" }}
                src="/assets/image/fraud-detection.svg"
              />
            </Box>
            <Box sx={{ maxWidth: { lg: "616px" }, width: { xs: "100%", sm: "65%" }, mx:"auto" }}>
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
                Fortifying Against Fraudulent Activities
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
                 Instilling Robust Defenses with Intelligent Fraud Detection
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
                      src="/assets/image/empty-shield.svg"
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
                      Challenges Mitigation:
                    </Typography>{" "}
                    In the challenging landscape of lead generation, protect
                    your operations against caller fraud with CallDynamics AI.
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
                      src="/assets/image/star-light (1).svg"
                    />
                  </Box>
                  <Typography
                    component={"p"}
                    className="inter"
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
                      Intelligent Detection:
                    </Typography>{" "}
                    Utilize AI-driven fraud detection mechanisms that promptly
                    identify and alert your team to potential malicious
                    activities and anomalous patterns.
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
                      Proactive Defense:
                    </Typography>{" "}
                    Navigate confidently through lead generation with proactive,
                    intelligent defenses that secure your strategies and success
                    against potential threats.
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

          {/* Tailoring Strategies with Precision Data Extraction */}
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
                width: { xs: "100%", sm: "65%" },
                mx: "auto",
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
                Tailoring Strategies with Precision Data Extraction
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
                Data Extraction That Drives Optimized, Targeted Campaigns
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
                      src="/assets/image/target-icon.svg"
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
                      Precision is Key:
                    </Typography>{" "}
                    In competitive lead generation, precision and application of
                    your data are crucial. CallDynamics AI skillfully mines
                    essential data from every interaction.
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
                    Transform interactions into actionable insights and pinpoint
                    KPIs that form the bedrock of your strategies.
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
                      Data Distillation:
                    </Typography>{" "}
                    From demographics to behavioral patterns, distill a wealth
                    of data into concise formats, informing and aligning your
                    strategic decisions with campaign demands.
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
                      src="/assets/image/settings2.svg"
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
                      Tailored Campaigns:
                    </Typography>{" "}
                    Navigate through lead generation with insightful, actionable
                    data, ensuring campaigns are precisely tailored and
                    perpetually refined for optimal results.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ order: { xs: "1", md: "2" }, mx:'auto'}}>
              <Typography
                component={"img"}
                sx={{ maxWidth: "100%", mx:'auto'}}
                src="/assets/image/data-extraction.svg"
              />
            </Box>
          </Box>
        </Container>

        {/* testimonials */}
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
                Leverage the full potency of every call, ensuring your lead
                generation strategies are robust, informed, and perpetually
                optimized with CallDynamics AI.{" "}
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
                Navigate with confidence through the intricacies of lead
                generation, ensuring every interaction propels your strategies,
                safeguards your operations, and continues to define your pathway
                to success.
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
