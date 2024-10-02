import Layout from "@/components/Layout/Layout";
import FooterBar from "@/components/footer";
import { Box, Button, Container, Typography } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import React from "react";

const CenterAgent = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{
            backgroundImage: "url('../assets/image/Hero Bg 1.png')",
            backgroundSize: "cover",
            maxHeight: { xs: "400px", md: "900px" },
            backgroundPosition: {xs:"bottom"},
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
                    fontSize: { xs: "30px", md: "48px" },
                    lineHeight: { xs: "46px", md: "68px" },
                    fontWeight: "700",
                    letterSpacing: "-0.96px",
                    color: "#000",
                    textIndent:"-7px"
                  }}
                >
                  Elevate{" "}
                  <Typography
                    className="inter"
                    component={"span"}
                    sx={{
                      fontSize: { xs: "30px", md: "48px" },
                      lineHeight: { xs: "46px", md: "68px" },
                      fontWeight: "700",
                      letterSpacing: "-0.96px",
                      color: "#7F56D9",
                      position: "relative",
                    }}
                  >
                    Call Center
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
                  Intelligence with CallDynamics AI
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
                  Unlock Deeper Insights, Safeguard Against Caller Fraud, and
                  Seamlessly Extract Crucial Data from Every Interaction to
                  Empower Your Call Center Operations
                </Typography>

                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Button
                    className="inter"
                    disableRipple
                    disableElevation
                    variant="contained"
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
                    Unlock the Full Potential of Every Call with CallDynamics AI
                    Today!
                    <EastIcon sx={{ ml: "5px" }} />
                  </Button>
                </Box>
                
                <Box
                  className="inter"
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

            {/* Dive into Unparalleled Call Insights */}
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
                  order: { xs: "2", md: "1" },
                  mx: "auto",
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
                  Dive into Unparalleled Call Insights
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
                  Navigating Through Layers of Communication with Insightful
                  Analysis
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
                      CallDynamics AI goes beyond traditional call analysis by
                      offering a deeper insight into every interaction at your
                      call center.
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
                      Utilize innovative technology that scrutinizes not just
                      the content but also the underlying subtext, emotion, and
                      intent in every call.
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
                      With profound understanding of calls, craft strategies
                      that resonate deeply with callers, enhancing their
                      experience and optimizing conversion paths.
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
                      Gauge caller satisfaction, comprehend emerging patterns,
                      and identify improvement areas with precise data extracted
                      by CallDynamics AI.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ order: { xs: "1", md: "2" }, mx: "auto" }}>
                <Typography
                  component={"img"}
                  sx={{ maxWidth: "100%" }}
                  src="/assets/image/centeragent1.png"
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

            {/* Bolster Your Defenses Against Caller Fraud */}
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
              <Box sx={{ mx: "auto" }}>
                <Typography
                  component={"img"}
                  sx={{ maxWidth: "100%" }}
                  src="/assets/image/fraud-detection.svg"
                />
              </Box>
              <Box
                sx={{
                  maxWidth: { lg: "616px" },
                  width: { xs: "100%", sm: "70%" },
                  mx: "auto",
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
                  Bolster Your Defenses Against Caller Fraud
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
                   Intelligent Fraud Detection to Safeguard Your Operations
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
                        Fortified Defense:
                      </Typography>{" "}
                      In a time of sophisticated caller fraud, fortify your
                      defenses with the advanced fraud detection algorithms
                      integrated into CallDynamics AI.
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
                        Proactive Shield:
                      </Typography>{" "}
                      The platform proactively identifies potential fraud risks,
                      safeguarding your operations and reputation from malicious
                      entities.
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
                        src="/assets/image/clock-sm.svg"
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
                        Real-Time Alerts:
                      </Typography>{" "}
                      Receive real-time alerts and detailed reports to respond
                      rapidly to potential threats, ensuring secure,
                      uninterrupted, and trustworthy operations.
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

            {/* Extracting Key Data and Identifying KPIs */}
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
                  width: { xs: "100%", sm: "70%" },
                  order: { xs: "2", md: "1" },
                  mx: "auto",
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
                  Extracting Key Data and Identifying KPIs
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
                  Precision Data Extraction for Strategic Decision Making
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
                        src="/assets/image/dataflow.svg"
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
                        Effortless Data Extraction:
                      </Typography>{" "}
                      Effortlessly extract key data from every interaction,
                      turning each call into a valuable source of information
                      that informs your strategies.
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
                        src="/assets/image/dotpoints.svg"
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
                        Precise Data Points:
                      </Typography>{" "}
                      he platform distills vast information within calls into
                      precise, actionable data points and KPIs for informed
                      decision-making.
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
                        src="/assets/image/data-cookie.svg"
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
                        Accessible Format:
                      </Typography>{" "}
                      Whether it’s demographics, behavioral cues, or sales data,
                      CallDynamics AI presents the data in an accessible format
                      for rapid comprehension and analysis.
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
                        src="/assets/image/SpeedometerOutline.svg"
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
                        Enhanced Performance:
                      </Typography>{" "}
                      Leverage insights from CallDynamics AI to drive improved
                      performance across all your call center operations.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ order: { xs: "1", md: "2" }, mx: "auto" }}>
                <Typography
                  component={"img"}
                  sx={{ maxWidth: "100%" }}
                  src="/assets/image/strategy-plan.svg"
                />
              </Box>
            </Box>
          </Container>
          <Box sx={{ padding: "100px 0px", background: "#F9FAFB  " }}>
            <Container maxWidth={"lg"}>
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
                  Ensure your call center operates at the pinnacle of
                  efficiency, security, and strategic depth with CallDynamics
                  AI.{" "}
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
                  Unlock a universe of insights, fortify your defenses, and
                  harness the raw power of data, all through a single, intuitive
                  platform designed for the unique challenges and opportunities
                  of modern call center operations.
                </Typography>
                <Box>
                  <Button
                    className="inter"
                    variant="contained"
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
    </>
  );
};

export default CenterAgent;
