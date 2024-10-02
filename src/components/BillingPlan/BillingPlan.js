import { Add } from '@mui/icons-material'
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  tooltipClasses,
  useMediaQuery
} from '@mui/material'
import React, { useState } from 'react'
import AddCreditmodal from '../AddCreditmodal'
import IOSSwitch from '../IOSSwitch'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import dynamic from 'next/dynamic'
import AddPaymantmodal from '../AddPaymantmodal'
import styled from '@emotion/styled'
import AutoRechargemodal from '../AutoRechargemodal'
import ReduceTimeModal from '../ReduceTimeModal'
import ReduceStreemModal from '../ReduceStreemModal'
import AddUsermodal from '../AddUsermodal'
import CustomCheckbox from '../CustomCheckbox'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import PurchaseDrawer from '../PurchaseDrawer'
import UpdatePaymentDrawer from '../UpdatePaymentDrawer'
import PlanDrawer from '../PlanDrawer'

const plandata = [
  {
    icon: '/assets/image/Startericon.svg',
    heading: 'Starter plan',
    perplan: 'Per month',
    credit: '1,000 signup credits',
    planprice: '$0',
    plancredit: '$0.0425 /credit',
    plandesc: 'Includes 1 user, unlimited streams, conversation analysis, reporting & analytics, email support.'
  },
  {
    icon: '/assets/image/businessplan.svg',
    heading: 'Business plan ',
    perplan: 'Per month',
    credit: '1,200 monthly credits',
    planprice: '$129',
    plancredit: '$0.0325 /credit',
    plandesc:
      'Includes 3 users, unlimited streams, real-time transcription, conversation analysis, reporting & analytics, API & webhooks, email support.'
  },
  {
    icon: '/assets/image/agencyplan.svg',
    heading: 'Agency plan',
    perplan: 'Per month',
    credit: '2,400 monthly credits',
    planprice: '$349',
    plancredit: '$0.025 /credit',
    plandesc:
      'Includes 10 users, unlimited streams, real-time transcription, conversation analysis, reporting & analytics, API & webhooks, live chat & email support.'
  },
  {
    icon: '/assets/image/enterpriseplan.svg',
    heading: 'Enterprise plan ',
    credit: '   ',
    planprice: 'Custom Pricing',
    plancredit: 'Book a Call',
    plandesc:
      'Unlimited users, unlimited streams, conversation analysis, real-time transcription, custom reporting, API & webhooks, custom AI training, dedicated account manager.'
  }
]

const plandatas = [
  {
    icon: '/assets/image/Startericon.svg',
    heading: 'Starter plan',
    perplan: 'Per month',
    credit: '1,000 signup credits',
    planprice: '$0',
    plancredit: '$0.0425 /credit',
    plandesc: 'Includes 1 user, unlimited streams, conversation analysis, reporting & analytics, email support.'
  }
]

const cardDetail = [
  {
    payimage: '/assets/image/visa.svg',
    ending: 'Visa ending in 1234'
  },
  {
    payimage: '/assets/image/mastercard.svg',
    ending: 'Mastercard ending in 1234'
  },
  {
    payimage: '/assets/image/applepay.svg',
    ending: 'Mastercard ending in 1234'
  }
]

const cardDetails = [
  {
    payimage: '/assets/image/visa.svg',
    ending: 'Visa ending in 1234'
  }
]

const ReactApexcharts = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const BillingPlan = () => {
  const [openAddCreditModal, setopenAddCreditModal] = useState(false)
  const [openAddUserModal, setopenAddUserModal] = useState(false)
  const [openAddPaymantModal, setopenAddPaymantModal] = useState(false)
  const [openAutorechargeModal, setopenAutorechargeModal] = useState(false)
  const [openReducetimeModal, setopenReducetimeModal] = useState(false)
  const [openReduceStreemModal, setopenReduceStreemModal] = useState(false)
  const [clickedItemId, setClickedItemId] = useState(null)
  const [chackedItemId, setchackedItemId] = useState(null)
  const [open, setOpen] = useState(false)
  const [openPyment, setOpenPyment] = useState(false)
  const [openPlan, setOpenPlan] = useState(false)

  const screen = useMediaQuery('(min-width:900px)')

  const handleClickModal = () => {
    setopenAddCreditModal(!openAddCreditModal)
  }

  const handleCloseModal = () => {
    setopenAddCreditModal(false)
  }

  const handleClickPaymantModal = () => {
    setopenAddPaymantModal(!openAddPaymantModal)
  }

  const handleClosepaymantModal = () => {
    setopenAddPaymantModal(false)
  }

  const handleClickAutorechargeModal = () => {
    setopenAutorechargeModal(!openAutorechargeModal)
  }

  const handleCloseAutorechargeModal = () => {
    setopenAutorechargeModal(false)
  }

  const handleClickReduceTimeModal = () => {
    setopenReducetimeModal(!openReducetimeModal)
  }

  const handleCloseReduceTimeModal = () => {
    setopenReducetimeModal(false)
  }

  const handleClickReduceStreemModal = () => {
    setopenReduceStreemModal(!openReduceStreemModal)
  }

  const handleCloseReduceStreemModal = () => {
    setopenReduceStreemModal(false)
  }

  const handleClickAddUserModal = () => {
    setopenAddUserModal(!openAddUserModal)
  }

  const handleCloseAddUserModal = () => {
    setopenAddUserModal(false)
  }

  const handleClickedItem = itemId => {
    setClickedItemId(prevState => (prevState === itemId ? null : itemId))
  }

  const handleChackedItem = itemId => {
    setchackedItemId(prevState => (prevState === itemId ? null : itemId))
  }

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

  const PaymenttoggleDrawer = newOpen => () => {
    setOpenPyment(newOpen)
  }

  const PlantoggleDrawer = newOpen => () => {
    setOpenPlan(newOpen)
  }

  const chartdata = {
    series: [5.37, 94.63],
    options: {
      chart: {
        type: 'donut'
      },
      colors: ['#7F56D9', '#EAECF0'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 0
      },
      legend: {
        show: false
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              enabled: false
            }
          }
        }
      ]
    }
  }

  const userdata = {
    series: [20, 80],
    options: {
      chart: {
        type: 'donut'
      },
      colors: ['#475467', '#F2F4F7'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 0
      },
      legend: {
        show: false
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              enabled: false
            }
          }
        }
      ]
    }
  }

  const Billinghistory = [
    {
      adminimage: '/assets/image/userphoto.png',
      invoice: 'INV-001122022',
      name: 'Olivia Rhye',
      email: 'olivia@email.com',
      amount: 'USD $10.00',
      date: 'Dec 1, 2022',
      status: 'Paid'
    },
    {
      adminimage: '/assets/image/userphoto.png',
      invoice: 'INV-001122022',
      name: 'Olivia Rhye',
      email: 'olivia@email.com',
      amount: 'USD $10.00',
      date: 'Nov 1, 2022',
      status: 'Paid'
    },
    {
      adminimage: '/assets/image/userphoto.png',
      invoice: 'INV-001122022',
      name: 'Olivia Rhye',
      email: 'olivia@email.com',
      amount: 'USD $10.00',
      date: 'Oct 1, 2022',
      status: 'Paid'
    },
    {
      adminimage: '/assets/image/userphoto.png',
      invoice: 'INV-001122022',
      name: 'Olivia Rhye',
      email: 'olivia@email.com',
      amount: 'USD $10.00',
      date: 'Sep 1, 2022',
      status: 'Paid'
    },
    {
      adminimage: '/assets/image/userphoto.png',
      invoice: 'INV-001122022',
      name: 'Olivia Rhye',
      email: 'olivia@email.com',
      amount: 'USD $10.00',
      date: 'Aug 1, 2022',
      status: 'Paid'
    },
    {
      adminimage: '/assets/image/userphoto.png',
      invoice: 'INV-001122022',
      name: 'Olivia Rhye',
      email: 'olivia@email.com',
      amount: 'USD $10.00',
      date: 'Jul 1, 2022',
      status: 'Paid'
    },
    {
      adminimage: '/assets/image/userphoto.png',
      invoice: 'INV-001122022',
      name: 'Olivia Rhye',
      email: 'olivia@email.com',
      amount: 'USD $10.00',
      date: 'Jun 1, 2022',
      status: 'Paid'
    }
  ]

  const CrediTootip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(
    ({ theme }) => ({
      [`& .${tooltipClasses.arrow}`]: {
        color: '#fff'
      },
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#fff',
        boxShadow: '0px 12px 16px 4px rgba(16, 24, 40, 0.08)',
        width: 'auto',
        fontSize: '12px',
        padding: ' 10px 12px',
        borderRadius: '8px',
        color: '#344054',
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: '15px'
      }
    })
  )

  const Renewstooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: '#101828'
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#101828',
      boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
      width: 'auto',
      fontSize: '12px',
      padding: '10px 12px',
      borderRadius: '8px',
      color: '#fff',
      fontWeight: '600',
      textAlign: 'center',
      lineHeight: '15px'
    }
  }))

  return (
    <>
      {screen ? (
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderBottom: '1px solid #EAECF0',
              pb: '20px'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <Typography
                className='inter'
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  lineHeight: '28px',
                  color: '#101828'
                }}
              >
                Billing & Plan
              </Typography>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  color: '#475467'
                }}
              >
                Update your plan, add/remove billing methods, and view/download your invoices.
              </Typography>
            </Box>
            <Box>
              <Button
                className='inter'
                variant='outlined'
                sx={{
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: '1px solid #D0D5DD',
                  textTransform: 'capitalize',
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  color: '#344054'
                }}
                onClick={handleClickModal}
              >
                <Add sx={{ pr: 1 }} />
                Add Credits
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '33px' }}>
            <Box sx={{ width: '60%' }}>
              <Box
                sx={{
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'end',
                  alignItems: 'center',
                  py: '20px'
                }}
              >
                <Box>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '20px',
                      color: '#000000'
                    }}
                  >
                    Monthly
                  </Typography>
                </Box>
                <Box>
                  <IOSSwitch />
                </Box>
                <Box>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '20px',
                      color: '#000000'
                    }}
                  >
                    Yearly{' '}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: '1px solid #FAC515',
                    borderRadius: '6px',
                    background: '#F4D456',
                    padding: '3px 8px'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '12px',
                      fontWeight: '500',
                      lineHeight: '18px',
                      color: '#1D2939'
                    }}
                  >
                    20% Discount
                  </Typography>
                </Box>
              </Box>
              <Box>
                {plandata.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      border: clickedItemId === index ? '2px solid #7F56D9' : '2px solid #EAECF0',
                      borderRadius: '12px',
                      py: '10px',
                      my: '10px',
                      cursor: 'pointer',
                      background: '#fff'
                    }}
                    onClick={() => handleClickedItem(index)}
                  >
                    <Box
                      sx={{
                        borderBottom: clickedItemId === index ? '2px solid #7F56D9' : '2px solid #EAECF0',
                        p: '12px'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center'
                          }}
                        >
                          <Typography component={'img'} src={item.icon} />
                          <Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '16px',
                                fontWeight: '600',
                                lineHeight: '24px',
                                color: '#53389E'
                              }}
                            >
                              {item.heading}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: index === 3 ? 'none' : 'block',
                              border: '1px solid #EAECF0',
                              borderRadius: '6px',
                              background: clickedItemId === index ? '#6941C6' : '#EAECF0',
                              padding: '3px 8px'
                            }}
                          >
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '18px',
                                color: clickedItemId === index ? '#fff' : '#1D2939'
                              }}
                            >
                              {item.credit}
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Typography
                            sx={{ cursor: 'pointer' }}
                            component={'img'}
                            src={clickedItemId === index ? '/assets/image/roundcheck.svg' : '/assets/image/round.svg'}
                            onClick={() => handleClickedItem(index)}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ p: '16px' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start'
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px'
                          }}
                        >
                          <Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '30px',
                                fontWeight: '600',
                                lineHeight: '38px',
                                color: '#344054'
                              }}
                            >
                              {item.planprice}{' '}
                              <Typography
                                className='inter'
                                component={'span'}
                                sx={{
                                  fontSize: '14px',
                                  fontWeight: '400',
                                  lineHeight: '20px',
                                  color: '#475467'
                                }}
                              >
                                {item.perplan}
                              </Typography>
                            </Typography>
                          </Box>
                          <Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#475467'
                              }}
                            >
                              {item.plandesc}
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            borderRadius: '16px',
                            background: '#ECFDF3',
                            padding: '2px 8px',
                            maxWidth: '100px',
                            width: '100%'
                          }}
                        >
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '12px',
                              fontWeight: '500',
                              lineHeight: '18px',
                              color: '#027A48',
                              textAlign: 'center'
                            }}
                          >
                            {item.plancredit}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '14px',
                        fontWeight: '500',
                        lineHeight: '20px',
                        color: '#344054'
                      }}
                    >
                      Card details
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '20px',
                        color: '#475467'
                      }}
                    >
                      Select default payment method.
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <IOSSwitch />
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '14px',
                        fontWeight: '500',
                        lineHeight: '20px',
                        color: '#000'
                      }}
                    >
                      Auto Recharge
                    </Typography>
                    <IconButton onClick={handleClickAutorechargeModal}>
                      <SettingsOutlinedIcon
                        sx={{
                          color: '#B9B9B9',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          '&.MuiSvgIcon-root:hover': { color: '#7F56D9' }
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
              <Box>
                {cardDetail.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      border: chackedItemId === index ? '2px solid #7F56D9' : '2px solid #EAECF0',
                      borderRadius: '12px',
                      background: chackedItemId === index ? '#F9F5FF' : '#fff',
                      p: '16px',
                      my: '10px',
                      cursor: 'pointer'
                    }}
                    onClick={() => handleChackedItem(index)}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          gap: '12px',
                          alignItems: 'flex-start'
                        }}
                      >
                        <Box>
                          <Typography component={'img'} src={item.payimage} />
                        </Box>
                        <Box>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '14px',
                              fontWeight: '500',
                              lineHeight: '20px',
                              color: chackedItemId === index ? '#53389E' : '#344054'
                            }}
                          >
                            {item.ending}
                          </Typography>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '14px',
                              fontWeight: '400',
                              lineHeight: '20px',
                              color: chackedItemId === index ? '#7F56D9' : '#475467'
                            }}
                          >
                            Expiry 06/2024
                          </Typography>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '14px',
                              fontWeight: '600',
                              lineHeight: '20px',
                              color: chackedItemId === index ? '#9E77ED' : '#475467'
                            }}
                          >
                            Set as default{' '}
                            <Typography
                              component={'span'}
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '600',
                                lineHeight: '20px',
                                color: '#6941C6',
                                ml: '12px'
                              }}
                            >
                              Edit
                            </Typography>
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          sx={{ cursor: 'pointer' }}
                          component={'img'}
                          src={chackedItemId === index ? '/assets/image/roundcheck.svg' : '/assets/image/round.svg'}
                          onClick={() => handleChackedItem(index)}
                        />
                      </Box>
                    </Box>
                  </Box>
                ))}
                <Box>
                  <Button
                    className='inter'
                    variant='outlined'
                    sx={{
                      my: 2,
                      padding: '10px 16px',
                      borderRadius: '8px',
                      border: '1px solid #D0D5DD',
                      bgcolor: '#fff',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                      color: '#344054',
                      '&.MuiButton-root:hover': {
                        border: '1px solid #D0D5DD',
                        bgcolor: '#fff'
                      }
                    }}
                    onClick={handleClickPaymantModal}
                  >
                    <Add sx={{ pr: 1 }} />
                    Add new payment method
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: '40%' }}>
              <Box
                sx={{
                  border: '1px solid #EAECF0',
                  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                  p: '24px',
                  borderRadius: '12px',
                  my: '20px',
                  bgcolor: '#fff'
                }}
              >
                <Box sx={{ display: 'flex', gap: '24px' }}>
                  <Box>
                    <Box id='chart'>
                      <ReactApexcharts
                        options={chartdata.options}
                        series={chartdata.series}
                        type='donut'
                        width={'250px'}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '16px',
                        fontWeight: '600',
                        lineHeight: '20px',
                        color: '#101828',
                        mb: '20px'
                      }}
                    >
                      Total Credits
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '30px',
                        fontWeight: '600',
                        lineHeight: '38px',
                        color: '#101828'
                      }}
                    >
                      12{' '}
                      <Typography
                        component={'span'}
                        className='inter'
                        sx={{
                          fontSize: '16px',
                          fontWeight: '600',
                          lineHeight: '38px',
                          color: '#101828'
                        }}
                      >
                        credits
                      </Typography>{' '}
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '14px',
                        fontWeight: '500',
                        lineHeight: '20px',
                        color: '#475467'
                      }}
                    >
                      used of 1,700 credits
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '14px',
                          fontWeight: '500',
                          lineHeight: '30px',
                          color: '#7F56D9'
                        }}
                      >
                        + 500 credits
                      </Typography>
                      <Box>
                        <CrediTootip title={'Additional purchased Credit Packs'} arrow>
                          <Typography component={'img'} src='/assets/image/infocircle.svg' />
                        </CrediTootip>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  border: '1px solid #EAECF0',
                  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                  p: '24px',
                  borderRadius: '12px',
                  my: '20px',
                  bgcolor: '#fff'
                }}
              >
                <Box sx={{ display: 'flex', gap: '24px' }}>
                  <Box>
                    <Box id='chart'>
                      <ReactApexcharts
                        options={userdata.options}
                        series={userdata.series}
                        type='donut'
                        width={'250px'}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '16px',
                        fontWeight: '600',
                        lineHeight: '20px',
                        color: '#101828',
                        mb: '20px'
                      }}
                    >
                      User Licenses
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '30px',
                        fontWeight: '600',
                        lineHeight: '38px',
                        color: '#101828'
                      }}
                    >
                      3{' '}
                      <Typography
                        component={'span'}
                        className='inter'
                        sx={{
                          fontSize: '16px',
                          fontWeight: '600',
                          lineHeight: '38px',
                          color: '#101828'
                        }}
                      >
                        Users
                      </Typography>{' '}
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '14px',
                        fontWeight: '500',
                        lineHeight: '20px',
                        color: '#475467'
                      }}
                    >
                      used of 8 users
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '14px',
                          fontWeight: '500',
                          lineHeight: '30px',
                          color: '#7F56D9'
                        }}
                      >
                        + 5 users
                      </Typography>
                      <Box>
                        <CrediTootip title={'Additional purchased User Licenses'} arrow>
                          <Typography component={'img'} src='/assets/image/infocircle.svg' />
                        </CrediTootip>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  border: '1px solid #D6BBFB',
                  borderRadius: '12px',
                  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                  bgcolor: '#fff'
                }}
              >
                <Box sx={{ padding: '14px', borderBottom: '1px solid #D6BBFB' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: '9px' }}>
                      <Box>
                        <Typography component={'img'} src='/assets/image/shoppingcart.svg' />
                      </Box>
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '15px',
                            fontWeight: '600',
                            lineHeight: '24px',
                            color: '#53389E'
                          }}
                        >
                          Current Subscriptions
                        </Typography>
                      </Box>
                    </Box>
                    <Renewstooltip title={'Renews on Jan 31, 2023'} placement='top'>
                      <Box
                        sx={{
                          border: '1px solid #E9D7FE',
                          borderRadius: '5px',
                          background: '#F9F5FF',
                          padding: '3px 8px'
                        }}
                      >
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '12px',
                            fontWeight: '500',
                            lineHeight: '18px',
                            color: '#6941C6'
                          }}
                        >
                          Renews in 25 days
                        </Typography>
                      </Box>
                    </Renewstooltip>
                  </Box>
                </Box>
                <Box sx={{ background: '#F9F5FF', p: '12px', my: '18px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Typography component={'img'} src='/assets/image/businessplan.svg' />
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#53389E'
                          }}
                        >
                          Basic plan
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '20px',
                          fontWeight: '500',
                          lineHeight: '28px',
                          color: '#160647'
                        }}
                      >
                        $ 129{' '}
                        <Typography
                          className='inter'
                          component={'span'}
                          sx={{
                            fontSize: '13px',
                            fontWeight: '500',
                            lineHeight: '18px',
                            color: '#160647'
                          }}
                        >
                          /month
                        </Typography>{' '}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ background: '#fff', p: '12px', my: '18px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Typography component={'img'} src='/assets/image/coinsstacked.svg' />
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#160647'
                          }}
                        >
                          1,200{' '}
                          <Typography
                            component={'span'}
                            className='inter'
                            sx={{
                              fontSize: '15px',
                              fontWeight: '400',
                              color: '#9F92B4'
                            }}
                          >
                            credits
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Typography component={'img'} src='/assets/image/usersicon.svg' />
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#160647'
                          }}
                        >
                          3{' '}
                          <Typography
                            component={'span'}
                            className='inter'
                            sx={{
                              fontSize: '15px',
                              fontWeight: '400',
                              color: '#9F92B4'
                            }}
                          >
                            Users
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ background: '#F9F5FF', p: '12px', my: '18px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Typography component={'img'} src='/assets/image/plusicon.svg' />
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#53389E'
                          }}
                        >
                          Additonal Purchases
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '20px',
                          fontWeight: '500',
                          lineHeight: '28px',
                          color: '#160647'
                        }}
                      >
                        $ 191.25
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ background: '#fff', p: '12px', my: '10px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Typography component={'img'} src='/assets/image/coinsstacked.svg' />
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#160647'
                          }}
                        >
                          500{' '}
                          <Typography
                            component={'span'}
                            className='inter'
                            sx={{
                              fontSize: '15px',
                              fontWeight: '400',
                              color: '#9F92B4'
                            }}
                          >
                            credits
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#160647'
                          }}
                        >
                          $ 16.25
                          <IconButton sx={{ ml: '10px' }} onClick={handleClickReduceTimeModal}>
                            <Typography component={'img'} src='/assets/image/edit.svg' />
                          </IconButton>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ background: '#fff', p: '12px', my: '10px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Typography component={'img'} src='/assets/image/usersicon.svg' />
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#160647'
                          }}
                        >
                          5{' '}
                          <Typography
                            component={'span'}
                            className='inter'
                            sx={{
                              fontSize: '15px',
                              fontWeight: '400',
                              color: '#9F92B4'
                            }}
                          >
                            Users
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#160647'
                          }}
                        >
                          $ 175 /month
                          <IconButton sx={{ ml: '10px' }} onClick={handleClickReduceStreemModal}>
                            <Typography component={'img'} src='/assets/image/edit.svg' />
                          </IconButton>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ padding: '20px 30px', borderTop: '1px solid #D6BBFB' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Typography className='inter' sx={{ fontSize: '16px', fontWeight: '600', color: '#53389E' }}>
                      Monthly Total
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '23px',
                        fontWeight: '600',
                        lineHeight: '30px',
                        color: '#7F56D99E'
                      }}
                    >
                      $ 320.25
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  padding: '40px 24px',
                  borderRadius: '12px',
                  bgcolor: '#7F56D9',
                  my: '20px'
                }}
              >
                <Typography component={'img'} src='/assets/image/adduser.svg' />
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '20px',
                    fontWeight: '600',
                    lineHeight: '30px',
                    color: '#FFFFFF'
                  }}
                >
                  Add Users
                </Typography>
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    color: '#FFFFFF'
                  }}
                >
                  Buy extra User Licenses
                </Typography>
                <Box>
                  <Button
                    disableTouchRipple
                    disableElevation
                    variant='contained'
                    className='inter'
                    sx={{
                      bgcolor: '#fff',
                      width: '100%',
                      color: '#344054',
                      textTransform: 'capitalize',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      mt: '20px',
                      fontSize: '16px',
                      fontWeight: '600',
                      '&.MuiButton-root:hover': {
                        backgroundColor: '#fff !important'
                      }
                    }}
                    onClick={handleClickAddUserModal}
                  >
                    Purchase Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              py: '20px'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <Typography
                className='inter'
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  lineHeight: '28px',
                  color: '#101828'
                }}
              >
                Billing history
              </Typography>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  color: '#475467'
                }}
              >
                Access all your previous invoices.
              </Typography>
            </Box>
            <Box>
              <Button
                className='inter'
                variant='outlined'
                sx={{
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: '1px solid #D0D5DD',
                  textTransform: 'capitalize',
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  color: '#344054'
                }}
              >
                <Typography component={'img'} src='/assets/image/downloadcloud.svg' sx={{ pr: 1 }} />
                Download all
              </Button>
            </Box>
          </Box>
          <Box sx={{ width: '100%' }}>
            <TableContainer
              component={Paper}
              sx={{
                boxShadow: 'none',
                border: '1px solid #EAECF0',
                borderRadius: '12px'
              }}
            >
              <Table sx={{ minWidth: 650, bgcolor: '#FCFCFD' }} aria-label='simple table'>
                <TableHead
                  sx={{
                    background: '#F9FAFB',
                    padding: '12px 0px',
                    textAlign: 'left'
                  }}
                >
                  <TableRow sx={{ textAlign: 'left', alignItems: 'center' }}>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <CustomCheckbox />
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '12px',
                            fontWeight: '500',
                            lineHeight: '18px',
                            color: '#475467'
                          }}
                        >
                          Invoice
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      className='inter'
                      sx={{
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '18px',
                        color: '#475467'
                      }}
                    >
                      Account admin
                    </TableCell>
                    <TableCell
                      className='inter'
                      sx={{
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '18px',
                        color: '#475467'
                      }}
                    >
                      Amount
                    </TableCell>
                    <TableCell
                      className='inter'
                      sx={{
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '18px',
                        color: '#475467'
                      }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      className='inter'
                      sx={{
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '18px',
                        color: '#475467'
                      }}
                    >
                      Status
                    </TableCell>
                    <TableCell sx={{ width: '0px' }}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Billinghistory.map(item => (
                    <TableRow>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <CustomCheckbox />
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '12px',
                              fontWeight: '500',
                              lineHeight: '18px',
                              color: '#475467'
                            }}
                          >
                            {item.invoice}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                          <Box
                            sx={{
                              bgcolor: '#E9DCBB',
                              borderRadius: '100%',
                              width: '40px',
                              height: '40px'
                            }}
                          >
                            <Typography
                              sx={{ width: '40px', borderRadius: '100%' }}
                              component={'img'}
                              src={item.adminimage}
                            />
                          </Box>
                          <Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px',
                                color: '#101828'
                              }}
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#475467'
                              }}
                            >
                              {item.email}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#475467'
                          }}
                        >
                          {item.amount}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#475467'
                          }}
                        >
                          {item.date}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            padding: '2px 8px',
                            bgcolor: '#ECFDF3',
                            borderRadius: '16px',
                            display: 'inline-block'
                          }}
                        >
                          <Box sx={{ display: 'flex', gap: '4px' }}>
                            <Typography component={'img'} src='/assets/image/check.svg' />
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '18px',
                                color: '#027A48'
                              }}
                            >
                              {item.status}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box>
                          <IconButton>
                            <Typography component={'img'} src='/assets/image/downloadcloud.svg' />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box
            sx={{
              borderBottom: '1px solid #EAECF0',
              pb: '20px'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Typography
                className='inter'
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  lineHeight: '28px',
                  color: '#101828'
                }}
              >
                Billing & Plan
              </Typography>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  color: '#475467'
                }}
              >
                Update your plan, add/remove billing methods, and view/download your invoices.
              </Typography>
              <Button
                className='inter'
                sx={{
                  padding: '10px 16px',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  color: '#fff',
                  bgcolor: '#7F56D9',
                  '&.MuiButton-root:hover': {
                    bgcolor: '#7F56D9'
                  }
                }}
                onClick={toggleDrawer(true)}
              >
                <Add sx={{ pr: 1 }} />
                Add API Streams/Minutes
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '33px' }}>
            <Box sx={{ width: '100%' }}>
              <Box
                sx={{
                  border: '1px solid #EAECF0',
                  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                  p: '24px',
                  borderRadius: '12px',
                  my: '20px',
                  bgcolor: '#fff'
                }}
              >
                <Box sx={{ display: 'flex', gap: '24px' }}>
                  <Box>
                    <Box id='chart'>
                      <ReactApexcharts
                        options={chartdata.options}
                        series={chartdata.series}
                        type='donut'
                        width={'100px'}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '16px',
                        fontWeight: '600',
                        lineHeight: '20px',
                        color: '#101828',
                        mb: '20px'
                      }}
                    >
                      Total Credits
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '30px',
                        fontWeight: '600',
                        lineHeight: '38px',
                        color: '#101828'
                      }}
                    >
                      12{' '}
                      <Typography
                        component={'span'}
                        className='inter'
                        sx={{
                          fontSize: '16px',
                          fontWeight: '600',
                          lineHeight: '38px',
                          color: '#101828'
                        }}
                      >
                        credits
                      </Typography>{' '}
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '14px',
                        fontWeight: '500',
                        lineHeight: '20px',
                        color: '#475467'
                      }}
                    >
                      used of 1,700 credits
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '14px',
                          fontWeight: '500',
                          lineHeight: '30px',
                          color: '#7F56D9'
                        }}
                      >
                        + 500 credits
                      </Typography>
                      <Box>
                        <CrediTootip title={'Additional purchased Credit Packs'} arrow>
                          <Typography component={'img'} src='/assets/image/infocircle.svg' />
                        </CrediTootip>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  border: '1px solid #EAECF0',
                  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                  p: '24px',
                  borderRadius: '12px',
                  my: '20px',
                  bgcolor: '#fff'
                }}
              >
                <Box sx={{ display: 'flex', gap: '24px' }}>
                  <Box>
                    <Box id='chart'>
                      <ReactApexcharts
                        options={userdata.options}
                        series={userdata.series}
                        type='donut'
                        width={'100px'}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '16px',
                        fontWeight: '600',
                        lineHeight: '20px',
                        color: '#101828',
                        mb: '20px'
                      }}
                    >
                      User Licenses
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '30px',
                        fontWeight: '600',
                        lineHeight: '38px',
                        color: '#101828'
                      }}
                    >
                      3{' '}
                      <Typography
                        component={'span'}
                        className='inter'
                        sx={{
                          fontSize: '16px',
                          fontWeight: '600',
                          lineHeight: '38px',
                          color: '#101828'
                        }}
                      >
                        Users
                      </Typography>{' '}
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '14px',
                        fontWeight: '500',
                        lineHeight: '20px',
                        color: '#475467'
                      }}
                    >
                      used of 8 users
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '14px',
                          fontWeight: '500',
                          lineHeight: '30px',
                          color: '#7F56D9'
                        }}
                      >
                        + 5 users
                      </Typography>
                      <Box>
                        <CrediTootip title={'Additional purchased User Licenses'} arrow>
                          <Typography component={'img'} src='/assets/image/infocircle.svg' />
                        </CrediTootip>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                {plandatas.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      border: clickedItemId === index ? '2px solid #7F56D9' : '2px solid #EAECF0',
                      borderRadius: '12px',
                      py: '10px',
                      my: '10px',
                      cursor: 'pointer',
                      background: '#fff'
                    }}
                    onClick={() => handleClickedItem(index)}
                  >
                    <Box
                      sx={{
                        borderBottom: clickedItemId === index ? '2px solid #7F56D9' : '2px solid #EAECF0',
                        p: '12px'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center'
                          }}
                        >
                          <Typography component={'img'} src={item.icon} />
                          <Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '16px',
                                fontWeight: '600',
                                lineHeight: '24px',
                                color: '#53389E'
                              }}
                            >
                              {item.heading}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: index === 3 ? 'none' : 'block',
                              border: '1px solid #EAECF0',
                              borderRadius: '6px',
                              background: clickedItemId === index ? '#6941C6' : '#EAECF0',
                              padding: '3px 8px'
                            }}
                          >
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '18px',
                                color: clickedItemId === index ? '#fff' : '#1D2939'
                              }}
                            >
                              {item.credit}
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Typography
                            sx={{ cursor: 'pointer' }}
                            component={'img'}
                            src={clickedItemId === index ? '/assets/image/roundcheck.svg' : '/assets/image/round.svg'}
                            onClick={() => handleClickedItem(index)}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ p: '16px' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start'
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px'
                          }}
                        >
                          <Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '30px',
                                fontWeight: '600',
                                lineHeight: '38px',
                                color: '#344054'
                              }}
                            >
                              {item.planprice}{' '}
                              <Typography
                                className='inter'
                                component={'span'}
                                sx={{
                                  fontSize: '14px',
                                  fontWeight: '400',
                                  lineHeight: '20px',
                                  color: '#475467'
                                }}
                              >
                                {item.perplan}
                              </Typography>
                            </Typography>
                          </Box>
                          <Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#475467'
                              }}
                            >
                              {item.plandesc}
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            borderRadius: '16px',
                            background: '#ECFDF3',
                            padding: '2px 8px',
                            maxWidth: '100px',
                            width: '100%'
                          }}
                        >
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '12px',
                              fontWeight: '500',
                              lineHeight: '18px',
                              color: '#027A48',
                              textAlign: 'center'
                            }}
                          >
                            {item.plancredit}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
                <Box>
                  <Button
                    className='inter'
                    disableRipple
                    sx={{
                      width: '100%',
                      my: 2,
                      padding: '10px 16px',
                      borderRadius: '8px',
                      bgcolor: '#7F56D9',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                      color: '#fff',
                      '&.MuiButton-root:hover': {
                        bgcolor: '#7F56D9'
                      }
                    }}
                    onClick={PlantoggleDrawer(true)}
                  >
                    <AutorenewIcon sx={{ pr: 1 }} />
                    Change Plan
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  border: '1px solid #D6BBFB',
                  borderRadius: '12px',
                  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                  bgcolor: '#fff'
                }}
              >
                <Box sx={{ padding: '14px', borderBottom: '1px solid #D6BBFB' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: '9px' }}>
                      <Box>
                        <Typography component={'img'} src='/assets/image/shoppingcart.svg' />
                      </Box>
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '15px',
                            fontWeight: '600',
                            lineHeight: '24px',
                            color: '#53389E'
                          }}
                        >
                          Current Subscriptions
                        </Typography>
                      </Box>
                    </Box>
                    <Renewstooltip title={'Renews on Jan 31, 2023'} placement='top'>
                      <Box
                        sx={{
                          border: '1px solid #E9D7FE',
                          borderRadius: '5px',
                          background: '#F9F5FF',
                          padding: '3px 8px'
                        }}
                      >
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '12px',
                            fontWeight: '500',
                            lineHeight: '18px',
                            color: '#6941C6'
                          }}
                        >
                          Renews in 25 days
                        </Typography>
                      </Box>
                    </Renewstooltip>
                  </Box>
                </Box>
                <Box sx={{ background: '#F9F5FF', p: '12px', my: '18px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Typography component={'img'} src='/assets/image/businessplan.svg' />
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#53389E'
                          }}
                        >
                          Basic plan
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '20px',
                          fontWeight: '500',
                          lineHeight: '28px',
                          color: '#160647'
                        }}
                      >
                        $ 129{' '}
                        <Typography
                          className='inter'
                          component={'span'}
                          sx={{
                            fontSize: '13px',
                            fontWeight: '500',
                            lineHeight: '18px',
                            color: '#160647'
                          }}
                        >
                          /month
                        </Typography>{' '}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ background: '#fff', p: '12px', my: '18px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Typography component={'img'} src='/assets/image/coinsstacked.svg' />
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#160647'
                          }}
                        >
                          1,200{' '}
                          <Typography
                            component={'span'}
                            className='inter'
                            sx={{
                              fontSize: '15px',
                              fontWeight: '400',
                              color: '#9F92B4'
                            }}
                          >
                            credits
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Typography component={'img'} src='/assets/image/usersicon.svg' />
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#160647'
                          }}
                        >
                          3{' '}
                          <Typography
                            component={'span'}
                            className='inter'
                            sx={{
                              fontSize: '15px',
                              fontWeight: '400',
                              color: '#9F92B4'
                            }}
                          >
                            Users
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ background: '#F9F5FF', p: '12px', my: '18px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Typography component={'img'} src='/assets/image/plusicon.svg' />
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#53389E'
                          }}
                        >
                          Additonal Purchases
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '20px',
                          fontWeight: '500',
                          lineHeight: '28px',
                          color: '#160647'
                        }}
                      >
                        $ 191.25
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ background: '#fff', p: '12px', my: '10px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Typography component={'img'} src='/assets/image/coinsstacked.svg' />
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#160647'
                          }}
                        >
                          500{' '}
                          <Typography
                            component={'span'}
                            className='inter'
                            sx={{
                              fontSize: '15px',
                              fontWeight: '400',
                              color: '#9F92B4'
                            }}
                          >
                            credits
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#160647'
                          }}
                        >
                          $ 16.25
                          <IconButton sx={{ ml: '10px' }} onClick={handleClickReduceTimeModal}>
                            <Typography component={'img'} src='/assets/image/edit.svg' />
                          </IconButton>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ background: '#fff', p: '12px', my: '10px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Typography component={'img'} src='/assets/image/usersicon.svg' />
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#160647'
                          }}
                        >
                          5{' '}
                          <Typography
                            component={'span'}
                            className='inter'
                            sx={{
                              fontSize: '15px',
                              fontWeight: '400',
                              color: '#9F92B4'
                            }}
                          >
                            Users
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#160647'
                          }}
                        >
                          $ 175 /month
                          <IconButton sx={{ ml: '10px' }} onClick={handleClickReduceStreemModal}>
                            <Typography component={'img'} src='/assets/image/edit.svg' />
                          </IconButton>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ padding: '20px 30px', borderTop: '1px solid #D6BBFB' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Typography className='inter' sx={{ fontSize: '16px', fontWeight: '600', color: '#53389E' }}>
                      Monthly Total
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '23px',
                        fontWeight: '600',
                        lineHeight: '30px',
                        color: '#7F56D99E'
                      }}
                    >
                      $ 320.25
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  padding: '40px 24px',
                  borderRadius: '12px',
                  bgcolor: '#7F56D9',
                  my: '20px'
                }}
              >
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '20px',
                    fontWeight: '600',
                    lineHeight: '30px',
                    color: '#FFFFFF'
                  }}
                >
                  Add Minutes & Users
                </Typography>
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    color: '#FFFFFF'
                  }}
                >
                  Buy extra Transcription Minutes and User Licenses
                </Typography>
                <Box>
                  <Button
                    disableTouchRipple
                    disableElevation
                    variant='contained'
                    className='inter'
                    sx={{
                      bgcolor: '#fff',
                      width: '100%',
                      color: '#344054',
                      textTransform: 'capitalize',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      mt: '20px',
                      fontSize: '16px',
                      fontWeight: '600',
                      '&.MuiButton-root:hover': {
                        backgroundColor: '#fff !important'
                      }
                    }}
                    onClick={toggleDrawer(true)}
                  >
                    Purchase Now
                  </Button>
                </Box>
              </Box>
              <Box>
                {cardDetails.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      border: chackedItemId === index ? '2px solid #7F56D9' : '2px solid #EAECF0',
                      borderRadius: '12px',
                      background: chackedItemId === index ? '#F9F5FF' : '#fff',
                      p: '16px',
                      my: '10px',
                      cursor: 'pointer'
                    }}
                    onClick={() => handleChackedItem(index)}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          gap: '12px',
                          alignItems: 'flex-start'
                        }}
                      >
                        <Box>
                          <Typography component={'img'} src={item.payimage} />
                        </Box>
                        <Box>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '14px',
                              fontWeight: '500',
                              lineHeight: '20px',
                              color: chackedItemId === index ? '#53389E' : '#344054'
                            }}
                          >
                            {item.ending}
                          </Typography>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '14px',
                              fontWeight: '400',
                              lineHeight: '20px',
                              color: chackedItemId === index ? '#7F56D9' : '#475467'
                            }}
                          >
                            Expiry 06/2024
                          </Typography>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '14px',
                              fontWeight: '600',
                              lineHeight: '20px',
                              color: chackedItemId === index ? '#9E77ED' : '#475467'
                            }}
                          >
                            Set as default{' '}
                            <Typography
                              component={'span'}
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '600',
                                lineHeight: '20px',
                                color: '#6941C6',
                                ml: '12px'
                              }}
                            >
                              Edit
                            </Typography>
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          sx={{ cursor: 'pointer' }}
                          component={'img'}
                          src={chackedItemId === index ? '/assets/image/roundcheck.svg' : '/assets/image/round.svg'}
                          onClick={() => handleChackedItem(index)}
                        />
                      </Box>
                    </Box>
                  </Box>
                ))}
                <Box>
                  <Button
                    className='inter'
                    sx={{
                      width: '100%',
                      my: 2,
                      padding: '10px 16px',
                      borderRadius: '8px',
                      bgcolor: '#7F56D9',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                      color: '#fff',
                      '&.MuiButton-root:hover': {
                        bgcolor: '#7F56D9'
                      }
                    }}
                    onClick={PaymenttoggleDrawer(true)}
                  >
                    <AutorenewIcon sx={{ pr: 1 }} />
                    Update Payment Method
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              py: '20px'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <Typography
                className='inter'
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  lineHeight: '28px',
                  color: '#101828'
                }}
              >
                Billing history
              </Typography>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  color: '#475467'
                }}
              >
                Access all your previous invoices.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: '100%' }}>
            <TableContainer
              component={Paper}
              sx={{
                boxShadow: 'none',
                border: '1px solid #EAECF0',
                borderRadius: '12px'
              }}
            >
              <Table sx={{ minWidth: 650, bgcolor: '#FCFCFD' }} aria-label='simple table'>
                <TableHead
                  sx={{
                    background: '#F9FAFB',
                    padding: '12px 0px',
                    textAlign: 'left'
                  }}
                >
                  <TableRow sx={{ textAlign: 'left', alignItems: 'center' }}>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <CustomCheckbox />
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '12px',
                            fontWeight: '500',
                            lineHeight: '18px',
                            color: '#475467'
                          }}
                        >
                          Invoice
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      className='inter'
                      sx={{
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '18px',
                        color: '#475467'
                      }}
                    >
                      Account admin
                    </TableCell>
                    <TableCell
                      className='inter'
                      sx={{
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '18px',
                        color: '#475467'
                      }}
                    >
                      Amount
                    </TableCell>
                    <TableCell
                      className='inter'
                      sx={{
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '18px',
                        color: '#475467'
                      }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      className='inter'
                      sx={{
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '18px',
                        color: '#475467'
                      }}
                    >
                      Status
                    </TableCell>
                    <TableCell sx={{ width: '0px' }}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Billinghistory.map(item => (
                    <TableRow>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <CustomCheckbox />
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '12px',
                              fontWeight: '500',
                              lineHeight: '18px',
                              color: '#475467'
                            }}
                          >
                            {item.invoice}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                          <Box
                            sx={{
                              bgcolor: '#E9DCBB',
                              borderRadius: '100%',
                              width: '40px',
                              height: '40px'
                            }}
                          >
                            <Typography
                              sx={{ width: '40px', borderRadius: '100%' }}
                              component={'img'}
                              src={item.adminimage}
                            />
                          </Box>
                          <Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px',
                                color: '#101828'
                              }}
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#475467'
                              }}
                            >
                              {item.email}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#475467'
                          }}
                        >
                          {item.amount}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#475467'
                          }}
                        >
                          {item.date}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            padding: '2px 8px',
                            bgcolor: '#ECFDF3',
                            borderRadius: '16px',
                            display: 'inline-block'
                          }}
                        >
                          <Box sx={{ display: 'flex', gap: '4px' }}>
                            <Typography component={'img'} src='/assets/image/check.svg' />
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '18px',
                                color: '#027A48'
                              }}
                            >
                              {item.status}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box>
                          <IconButton>
                            <Typography component={'img'} src='/assets/image/downloadcloud.svg' />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      )}

      <AddCreditmodal open={openAddCreditModal} onClose={handleCloseModal} />
      <AddPaymantmodal open={openAddPaymantModal} onClose={handleClosepaymantModal} />
      <AutoRechargemodal open={openAutorechargeModal} onClose={handleCloseAutorechargeModal} />
      <ReduceTimeModal open={openReducetimeModal} onClose={handleCloseReduceTimeModal} />
      <ReduceStreemModal open={openReduceStreemModal} onClose={handleCloseReduceStreemModal} />
      <AddUsermodal open={openAddUserModal} onClose={handleCloseAddUserModal} />
      <PurchaseDrawer open={open} toggleDrawer={toggleDrawer} />
      <UpdatePaymentDrawer openPyment={openPyment} PaymenttoggleDrawer={PaymenttoggleDrawer} />
      <PlanDrawer openPlan={openPlan} PlantoggleDrawer={PlantoggleDrawer} />
    </>
  )
}

export default BillingPlan
