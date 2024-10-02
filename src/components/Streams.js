import DashboardLayout from '@/components/DashboardLayout/DashboardLayout'
import { Add } from '@mui/icons-material'
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { KeyboardArrowDown } from '@mui/icons-material'
import CustomCheckbox from '@/components/CustomCheckbox'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Dashfooter from '@/components/Dashfooter'
import StreemStartedModal from '@/components/StreemStartedModal'
import MobileFooter from './MobileFooter'

const statusMenu = [
  <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: '7px' }}>
        <Typography component={'img'} src='/assets/image/violetdot.svg' />
        <Typography
          className='inter'
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '20px',
            color: '#344054'
          }}
        >
          All
        </Typography>
      </Box>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: '7px' }}>
        <Typography component={'img'} src='/assets/image/greendot.svg' />
        <Typography
          className='inter'
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '20px',
            color: '#344054'
          }}
        >
          Active
        </Typography>
      </Box>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: '7px' }}>
        <Typography component={'img'} src='/assets/image/yellowdot.svg' />
        <Typography
          className='inter'
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '20px',
            color: '#344054'
          }}
        >
          Paused
        </Typography>
      </Box>
    </Box>
  </>
]

const IntegrationMenu = [
  <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
        <Typography component={'img'} src='/assets/image/ringba.svg' sx={{ width: '25px' }} />
        <Typography
          className='inter'
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '20px',
            color: '#344054'
          }}
        >
          Ringba
        </Typography>
      </Box>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
        <Typography component={'img'} src='/assets/image/track.svg' sx={{ width: '25px' }} />
        <Typography
          className='inter'
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '20px',
            color: '#344054'
          }}
        >
          Trackdrive
        </Typography>
      </Box>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
        <Typography component={'img'} src='/assets/image/retreaver.svg' sx={{ width: '25px' }} />
        <Typography
          className='inter'
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '20px',
            color: '#344054'
          }}
        >
          Retreaver
        </Typography>
      </Box>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
        <Typography component={'img'} src='/assets/image/twilio.svg' sx={{ width: '25px' }} />
        <Typography
          className='inter'
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '20px',
            color: '#344054'
          }}
        >
          Twilio
        </Typography>
      </Box>
    </Box>
  </>
]

const industryMenu = [
  'ACA Health Insurance',
  'U65 Health Insurance',
  'Final Expense',
  'Medicare',
  'Debt Relief',
  'Tax Debt Relief',
  'Flight Booking',
  'Pest Control',
  'Plumbing'
]

const streamTabledata = [
  {
    streamName: 'Stream_Name_1',
    industry: 'Health Insurance',
    dotimg: '/assets/image/yellowdot.svg',
    image: '/assets/image/ringba.svg',
    integration: 'Ringba',
    status: 'Paused',
    totalfile: '54',
    dateTime: 'Jan 12, 2023 @ 8:13 AM'
  },
  {
    streamName: 'Stream_Name_1',
    industry: 'Health Insurance',
    dotimg: '/assets/image/greendot.svg',
    image: '/assets/image/track.svg',
    integration: 'Trackdrive',
    status: 'Completed',
    totalfile: '152',
    dateTime: 'Jan 12, 2023 @ 8:13 AM'
  },
  {
    streamName: 'Stream_Name_1',
    industry: 'Health Insurance',
    dotimg: '/assets/image/yellowdot.svg',
    image: '/assets/image/ringba.svg',
    integration: 'Ringba',
    status: 'Transcribing',
    totalfile: '98',
    dateTime: 'Jan 12, 2023 @ 8:13 AM'
  },
  {
    streamName: 'Stream_Name_1',
    industry: 'Health Insurance',
    dotimg: '/assets/image/yellowdot.svg',
    image: '/assets/image/ringba.svg',
    integration: 'Ringba',
    status: 'Transcribing',
    totalfile: '12',
    dateTime: 'Jan 12, 2023 @ 8:13 AM'
  },
  {
    streamName: 'Stream_Name_1',
    industry: 'Health Insurance',
    dotimg: '/assets/image/yellowdot.svg',
    image: '/assets/image/ringba.svg',
    integration: 'Ringba',
    status: 'Transcribing',
    totalfile: '54',
    dateTime: 'Jan 12, 2023 @ 8:13 AM'
  },
  {
    streamName: 'Stream_Name_1',
    industry: 'Health Insurance',
    dotimg: '/assets/image/yellowdot.svg',
    image: '/assets/image/ringba.svg',
    integration: 'Ringba',
    status: 'Transcribing',
    totalfile: '54',
    dateTime: 'Jan 12, 2023 @ 8:13 AM'
  },
  {
    streamName: 'Stream_Name_1',
    industry: 'Health Insurance',
    dotimg: '/assets/image/yellowdot.svg',
    image: '/assets/image/ringba.svg',
    integration: 'Ringba',
    status: 'Transcribing',
    totalfile: '54',
    dateTime: 'Jan 12, 2023 @ 8:13 AM'
  },
  {
    streamName: 'Stream_Name_1',
    industry: 'Health Insurance',
    dotimg: '/assets/image/yellowdot.svg',
    image: '/assets/image/ringba.svg',
    integration: 'Ringba',
    status: 'Transcribing',
    totalfile: '54',
    dateTime: 'Jan 12, 2023 @ 8:13 AM'
  }
]
const Actiondata = [
  <>
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <Typography component={'img'} src='/assets/image/playactivate.svg' sx={{ width: '16px' }} />
      <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}>
        Activate
      </Typography>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <Typography component={'img'} src='/assets/image/edit.svg' sx={{ width: '16px' }} />
      <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}>Edit</Typography>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <Typography component={'img'} src='/assets/image/delete.svg' sx={{ width: '16px' }} />
      <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}>Delete</Typography>
    </Box>
  </>
]

const Streams = ({ selectedCardData }) => {
  const [anchorElIndustries, setAnchorElIndustries] = useState(null)
  const [anchorElstatus, setAnchorElstatus] = useState(null)
  const [anchorElintegration, setAnchorElintegration] = useState(null)
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedIntegration, setSelectedIntegration] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [anchorElaction, setanchorElaction] = useState(null)
  const [openActivateModal, setopenActivateModal] = useState(false)

  const screen = useMediaQuery('(min-width:900px)')

  const handleClickActivateModal = () => {
    setopenActivateModal(!openActivateModal)
  }

  const handleCloseActivateModal = () => {
    setopenActivateModal(false)
  }

  const handleClickIndustries = event => {
    setAnchorElIndustries(event.currentTarget)
  }

  const handleClickStatus = event => {
    setAnchorElstatus(event.currentTarget)
  }

  const handleClickintegration = event => {
    setAnchorElintegration(event.currentTarget)
  }

  const handleCloseIndustries = status => {
    setAnchorElIndustries(null)
    setSelectedIndustry(status)
  }

  const handleCloseStatus = status => {
    setAnchorElstatus(null)
    setSelectedStatus(status)
  }

  const handleCloseIntegration = integration => {
    setAnchorElintegration(null)
    setSelectedIntegration(integration)
  }

  const handleNextPage = () => {
    if (currentPage < 10) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(1, prevPage - 1))
  }

  const handleClickAction = event => {
    setanchorElaction(event.currentTarget)
  }

  const handlecloseAction = () => {
    setanchorElaction(null)
  }

  const fieldStyle = {
    px: '14px',
    py: '10px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    color: '#475467',
    width: '200px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: { xs: '14px', sm: '16px' },
    textTransform: 'initial',
    ':hover': {
      background: '#fff !important',
      border: '1px solid #D0D5DD'
    }
  }

  useEffect(() => {
    if (openActivateModal) {
      const timer = setTimeout(() => {
        setopenActivateModal(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [openActivateModal])

  return (
    <>
      {screen ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 24px',
            background: '#F7F3FD',
            transition: 'all 0.2s',
            ml: selectedCardData ? '315px' : '115px',
            gap: '20px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '10.482px',
              background: 'linear-gradient(90deg, #FFF -1.64%, #FFF 120.64%)',
              border: ' 0.873px solid #EAECF0',
              boxShadow: '0px 0.873px 1.747px 0px rgba(29, 16, 40, 0.06), 0px 0.873px 2.62px 0px rgba(27, 16, 40, 0.10)'
            }}
          >
            <Box sx={{ p: '20px 24px', borderBottom: '1px solid #EAECF0' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <Box sx={{ display: 'flex', gap: '8px' }}>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '18px',
                        fontWeight: '600',
                        lineHeight: '28px',
                        color: '#101828'
                      }}
                    >
                      Streams
                    </Typography>
                    <Box
                      sx={{
                        padding: '2px 8px',
                        bgcolor: '#F9F5FF',
                        borderRadius: '16px',
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center'
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
                        24 Streams
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '14px',
                      fontWeight: '400',
                      lineHeight: '20px',
                      color: '#475467'
                    }}
                  >
                    Manage all your streams data.
                  </Typography>
                </Box>
                <Box>
                  <Button
                    disableElevation
                    disableRipple
                    className='inter'
                    variant='contained'
                    sx={{
                      padding: '10px 16px',
                      border: '1px solid #D0D5DD',
                      borderRadius: '8px',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                      color: '#fff',
                      bgcolor: '#7F56D9'
                    }}
                  >
                    <Add sx={{ pr: '8px' }} />
                    Add Stream
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                padding: '12px 16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap'
              }}
            >
              <Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '12px',
                      fontWeight: '500',
                      lineHeight: '16px',
                      color: '#344054'
                    }}
                  >
                    Status
                  </Typography>
                  <Box>
                    <Button
                      sx={fieldStyle}
                      disableRipple
                      onClick={handleClickStatus}
                      variant='outlined'
                      className='inter'
                    >
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '19px'
                          }}
                        >
                          {selectedStatus}
                        </Typography>
                      </Box>
                      <KeyboardArrowDown />
                    </Button>
                    <Menu
                      anchorEl={anchorElstatus}
                      open={Boolean(anchorElstatus)}
                      onClose={() => handleCloseStatus(selectedStatus)}
                      PaperProps={{
                        sx: {
                          boxShadow:
                            '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
                          maxWidth: '200px',
                          width: '100%'
                        }
                      }}
                    >
                      {statusMenu.map(status => (
                        <MenuItem key={status} onClick={() => handleCloseStatus(status)}>
                          {status}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '12px',
                      fontWeight: '500',
                      lineHeight: '16px',
                      color: '#344054'
                    }}
                  >
                    Integration
                  </Typography>
                  <Box>
                    <Button
                      sx={fieldStyle}
                      disableRipple
                      onClick={handleClickintegration}
                      variant='outlined'
                      className='inter'
                    >
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '19px'
                          }}
                        >
                          {selectedIntegration}
                        </Typography>
                      </Box>
                      <KeyboardArrowDown />
                    </Button>
                    <Menu
                      anchorEl={anchorElintegration}
                      open={Boolean(anchorElintegration)}
                      onClose={() => handleCloseIntegration(selectedIntegration)}
                      PaperProps={{
                        sx: {
                          boxShadow:
                            '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
                          maxWidth: '200px',
                          width: '100%'
                        }
                      }}
                    >
                      {IntegrationMenu.map(integration => (
                        <MenuItem key={integration} onClick={() => handleCloseIntegration(integration)}>
                          {integration}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '12px',
                      fontWeight: '500',
                      lineHeight: '16px',
                      color: '#344054'
                    }}
                  >
                    Status
                  </Typography>
                  <Box>
                    <Button
                      sx={fieldStyle}
                      disableRipple
                      onClick={handleClickIndustries}
                      variant='outlined'
                      className='inter'
                    >
                      <Box>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '19px'
                          }}
                        >
                          {selectedIndustry}
                        </Typography>
                      </Box>
                      <KeyboardArrowDown />
                    </Button>
                    <Menu
                      anchorEl={anchorElIndustries}
                      open={Boolean(anchorElIndustries)}
                      onClose={() => handleCloseIndustries(selectedIndustry)}
                    >
                      {industryMenu.map(industry => (
                        <MenuItem key={industry} onClick={() => handleCloseIndustries(industry)}>
                          {industry}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '8px',
                    border: '1px solid #D0D5DD',
                    padding: '8px 12px',
                    borderRadius: '8px'
                  }}
                >
                  <Typography component={'img'} src='/assets/image/search-lg.svg' />
                  <Typography
                    className='inter'
                    component={'input'}
                    placeholder='Search'
                    sx={{
                      background: '#FFF',
                      border: 'none',
                      outline: 'none',
                      fontSize: '15px',
                      fontWeight: '400',
                      lineHeight: '24px',
                      color: '#667085'
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box>
              <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
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
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                          <CustomCheckbox />
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex' }}>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '12px',
                              fontWeight: '500',
                              lineHeight: '18px',
                              color: '#475467',
                              mr: '4px'
                            }}
                          >
                            Stream Name
                          </Typography>
                          <Typography component={'img'} src='/assets/image/arrow-down.svg' />
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
                        Industry
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
                        Integration
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex' }}>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '12px',
                              fontWeight: '500',
                              lineHeight: '18px',
                              color: '#475467',
                              mr: '4px'
                            }}
                          >
                            Status
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
                        Total Files
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex' }}>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '12px',
                              fontWeight: '500',
                              lineHeight: '18px',
                              color: '#475467',
                              mr: '4px'
                            }}
                          >
                            Date Started
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
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {streamTabledata.map(item => (
                      <TableRow>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <CustomCheckbox />
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', gap: '7px' }}>
                            <Typography component={'img'} src={item.dotimg} />
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '15px',
                                fontWeight: '500',
                                lineHeight: '17px',
                                color: '#160647'
                              }}
                            >
                              {item.streamName}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '15px',
                              fontWeight: '500',
                              lineHeight: '17px',
                              color: '#160647'
                            }}
                          >
                            {item.industry}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                            <Typography component={'img'} src={item.image} sx={{ width: '31.85px' }} />
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px',
                                color: '#344054'
                              }}
                            >
                              {item.integration}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '15px',
                              fontWeight: '500',
                              lineHeight: '17px',
                              color: '#BEB9CE'
                            }}
                          >
                            {item.status}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '15px',
                              fontWeight: '500',
                              lineHeight: '17px',
                              color: '#BEB9CE'
                            }}
                          >
                            {item.totalfile}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '12px',
                              fontWeight: '500',
                              lineHeight: '14px',
                              color: '#BEB9CE'
                            }}
                          >
                            {item.dateTime}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={handleClickAction}>
                            <MoreHorizIcon />
                          </IconButton>
                          <Menu
                            sx={{}}
                            anchorEl={anchorElaction}
                            open={Boolean(anchorElaction)}
                            onClose={handlecloseAction}
                            PaperProps={{
                              style: {
                                boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                                width: '150px'
                              }
                            }}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'right'
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right'
                            }}
                          >
                            {Actiondata.map((action, index) => (
                              <MenuItem
                                key={index}
                                onClick={() => {
                                  if (index === 0) {
                                    handleClickActivateModal()
                                  } else if (index === 1) {
                                    //   handleClickAuditAddnoteModal()
                                  }
                                }}
                              >
                                {action}
                              </MenuItem>
                            ))}
                          </Menu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box
                sx={{
                  padding: '12px 22px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Box>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '20px',
                      color: '#344054'
                    }}
                  >
                    Page {currentPage} of 10
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '20px' }}>
                  <Box>
                    <Button
                      className='inter'
                      variant='outlined'
                      sx={{
                        border: '1px solid #D0D5DD',
                        borderRadius: '8px',
                        textTransform: 'capitalize',
                        fontSize: '14px ',
                        fontWeight: '600',
                        lineHeight: '20px',
                        color: '#344054',
                        padding: '8px 14px'
                      }}
                      onClick={handlePreviousPage}
                    >
                      Previous
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      className='inter'
                      variant='outlined'
                      sx={{
                        border: '1px solid #D0D5DD',
                        borderRadius: '8px',
                        textTransform: 'capitalize',
                        fontSize: '14px ',
                        fontWeight: '600',
                        lineHeight: '20px',
                        color: '#344054',
                        padding: '8px 14px'
                      }}
                      onClick={handleNextPage}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              padding: '10px',
              background: '#F7F3FD',
              mt: '90px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '10.482px',
                background: 'linear-gradient(90deg, #FFF -1.64%, #FFF 120.64%)',
                border: ' 0.873px solid #EAECF0',
                boxShadow:
                  '0px 0.873px 1.747px 0px rgba(29, 16, 40, 0.06), 0px 0.873px 2.62px 0px rgba(27, 16, 40, 0.10)'
              }}
            >
              <Box sx={{ p: '20px 24px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    <Box sx={{ display: 'flex', gap: '8px' }}>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '18px',
                          fontWeight: '600',
                          lineHeight: '28px',
                          color: '#101828'
                        }}
                      >
                        Streams
                      </Typography>
                      <Box
                        sx={{
                          padding: '2px 8px',
                          bgcolor: '#F9F5FF',
                          borderRadius: '16px',
                          alignItems: 'center',
                          display: 'flex',
                          justifyContent: 'center'
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
                          24 Streams
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: '10px',
                  p: '20px 20px',
                  borderTop: '1px solid #EAECF0'
                }}
              >
                <Button
                  sx={{
                    width: '50%',
                    border: '1px solid #D0D5DD',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#667085',
                    textTransform: 'capitalize'
                  }}
                >
                  <Typography component={'img'} src='/assets/image/filter.svg' sx={{ width: '20px', pr: '5px' }} />
                  Filters
                </Button>
                <Box
                  sx={{
                    width: '50%',
                    display: 'flex',
                    border: '1px solid #D0D5DD',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    alignItems: 'center'
                  }}
                >
                  <Typography component={'img'} src='/assets/image/search-lg.svg' sx={{ pr: '5px' }} />
                  <Typography
                    component={'input'}
                    type='search'
                    placeholder='Search'
                    sx={{
                      border: 'none',
                      outline: 'none',
                      width: '100%',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#667085',
                      textTransform: 'capitalize'
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
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
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <CustomCheckbox />
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex' }}>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '18px',
                                color: '#475467',
                                mr: '4px'
                              }}
                            >
                              Stream Name
                            </Typography>
                            <Typography component={'img'} src='/assets/image/arrow-down.svg' />
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
                          Industry
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
                          Integration
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex' }}>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '18px',
                                color: '#475467',
                                mr: '4px'
                              }}
                            >
                              Status
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
                          Total Files
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex' }}>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '18px',
                                color: '#475467',
                                mr: '4px'
                              }}
                            >
                              Date Started
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
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {streamTabledata.map(item => (
                        <TableRow>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                              <CustomCheckbox />
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Box sx={{ display: 'flex', gap: '7px' }}>
                              <Typography component={'img'} src={item.dotimg} />
                              <Typography
                                className='inter'
                                sx={{
                                  fontSize: '15px',
                                  fontWeight: '500',
                                  lineHeight: '17px',
                                  color: '#160647'
                                }}
                              >
                                {item.streamName}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '15px',
                                fontWeight: '500',
                                lineHeight: '17px',
                                color: '#160647'
                              }}
                            >
                              {item.industry}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                              <Typography component={'img'} src={item.image} sx={{ width: '31.85px' }} />
                              <Typography
                                className='inter'
                                sx={{
                                  fontSize: '14px',
                                  fontWeight: '500',
                                  lineHeight: '20px',
                                  color: '#344054'
                                }}
                              >
                                {item.integration}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '15px',
                                fontWeight: '500',
                                lineHeight: '17px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.status}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '15px',
                                fontWeight: '500',
                                lineHeight: '17px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.totalfile}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.dateTime}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <IconButton onClick={handleClickAction}>
                              <MoreHorizIcon />
                            </IconButton>
                            <Menu
                              sx={{}}
                              anchorEl={anchorElaction}
                              open={Boolean(anchorElaction)}
                              onClose={handlecloseAction}
                              PaperProps={{
                                style: {
                                  boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                                  width: '150px'
                                }
                              }}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                              }}
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                              }}
                            >
                              {Actiondata.map((action, index) => (
                                <MenuItem
                                  key={index}
                                  onClick={() => {
                                    if (index === 0) {
                                      handleClickActivateModal()
                                    } else if (index === 1) {
                                      //   handleClickAuditAddnoteModal()
                                    }
                                  }}
                                >
                                  {action}
                                </MenuItem>
                              ))}
                            </Menu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box
                  sx={{
                    padding: '12px 22px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Box>
                    <Button
                      className='inter'
                      variant='outlined'
                      sx={{
                        border: '1px solid #D0D5DD',
                        borderRadius: '8px',
                        textTransform: 'capitalize',
                        fontSize: '14px ',
                        fontWeight: '600',
                        lineHeight: '20px',
                        color: '#344054',
                        padding: '8px 14px'
                      }}
                      onClick={handlePreviousPage}
                    >
                      Previous
                    </Button>
                  </Box>
                  <Box>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '14px',
                        fontWeight: '500',
                        lineHeight: '20px',
                        color: '#344054'
                      }}
                    >
                      Page {currentPage} of 10
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      className='inter'
                      variant='outlined'
                      sx={{
                        border: '1px solid #D0D5DD',
                        borderRadius: '8px',
                        textTransform: 'capitalize',
                        fontSize: '14px ',
                        fontWeight: '600',
                        lineHeight: '20px',
                        color: '#344054',
                        padding: '8px 14px'
                      }}
                      onClick={handleNextPage}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <MobileFooter />
        </>
      )}

      <StreemStartedModal open={openActivateModal} onClose={handleCloseActivateModal} />
    </>
  )
}

export default Streams
