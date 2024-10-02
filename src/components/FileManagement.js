import React, { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout/DashboardLayout'
import {
  Box,
  Button,
  Checkbox,
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
  Tooltip,
  Typography,
  tooltipClasses,
  useMediaQuery
} from '@mui/material'
import { Add, FilterList } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import styled from '@emotion/styled'
import CustomCheckbox from '@/components/CustomCheckbox'
import MobileFooter from './MobileFooter'

const TableData = [
  {
    date: '03/23/2024',
    time: '@ 09:34:58 AM',
    name: 'Batch File Uploa...',
    sorce: 'Stream_1',
    duration: '-',
    publisher: 'UNIK Media...',
    campaign: 'Campaign_1',
    target: 'Target_Name',
    revenue: '$45.00',
    cost: '$28.75',
    bgcolor: '#67E3F9',
    status: 'UPLOADING',
    border: '1px solid #ABEFC6',
    bgcolors: '#ECFDF3',
    color: '#067647',
    disposition: 'Sale'
  },
  {
    date: '03/23/2024',
    time: '@ 09:34:58 AM',
    name: 'lead_34_john.mp3',
    sorce: 'Manual',
    duration: '00:33:57',
    publisher: 'UNIK Media Group LLC',
    campaign: 'Campaign_1',
    target: 'Target_Name',
    revenue: '$45.00',
    cost: '$28.75',
    bgcolor: '#12B76A',
    status: 'COMPLETED',
    border: '1px solid #FECDCA',
    bgcolors: '#FEF3F2',
    color: '#B42318',
    disposition: 'No Sale'
  },
  {
    date: '03/23/2024',
    time: '@ 09:34:58 AM',
    name: 'lead_34_john.mp3',
    sorce: 'Stream_1',
    duration: '00:33:57',
    publisher: 'UNIK Media Group LLC',
    campaign: 'Campaign_1',
    target: 'Target_Name',
    revenue: '$45.00',
    cost: '$28.75',
    bgcolor: '#FDB022',
    status: 'ANALYZING',
    border: '1px solid #E9D7FE',
    bgcolors: '#F9F5FF',
    color: '#6941C6',
    disposition: 'Quoted'
  },
  {
    date: '03/23/2024',
    time: '@ 09:34:58 AM',
    name: 'lead_34_john.mp3',
    sorce: 'Stream_1',
    duration: '00:33:57',
    publisher: 'UNIK Media Group LLC',
    campaign: 'Campaign_1',
    target: 'Target_Name',
    revenue: '$25.8k',
    cost: '$28.75',
    bgcolor: '#FDB022',
    status: 'ANALYZING',
    border: '1px solid #FEDF89',
    bgcolors: '#FFFAEB',
    color: '#B54708',
    disposition: 'Callback'
  },
  {
    date: '03/23/2024',
    time: '@ 09:34:58 AM',
    name: 'lead_34_john.mp3',
    sorce: 'Stream_1',
    duration: '00:33:57',
    publisher: 'UNIK Media Group LLC',
    campaign: 'Campaign_1',
    target: 'Target_Name',
    revenue: '$45.00',
    cost: '$28.75',
    bgcolor: '#160647',
    status: 'RAW FILE',
    border: '1px solid #EAECF0',
    bgcolors: '#F9FAFB',
    color: '#344054',
    disposition: 'Pending'
  },
  {
    date: '03/23/2024',
    time: '@ 09:34:58 AM',
    name: 'lead_34_john.mp3',
    sorce: 'Stream_2',
    duration: '00:33:57',
    publisher: 'UNIK Media Group LLC',
    campaign: 'Campaign_1',
    target: 'Target_Name',
    revenue: '$45.00',
    cost: '$28.75',
    bgcolor: '#666CFF',
    status: 'PROCESSING',
    border: '1px solid #FECDCA',
    bgcolors: '#FEF3F2',
    color: '#B42318',
    disposition: 'No Sale'
  },
  {
    date: '03/23/2024',
    time: '@ 09:34:58 AM',
    name: 'lead_34_john.mp3',
    sorce: 'Stream_2',
    duration: '00:33:57',
    publisher: 'UNIK Media Group LLC',
    campaign: 'Campaign_1',
    target: 'Target_Name',
    revenue: '$45.00',
    cost: '$28.75',
    bgcolor: '#D92D20',
    status: 'ERROR ANALYZING',
    border: '1px solid #FECDCA',
    bgcolors: '#FEF3F2',
    color: '#B42318',
    disposition: 'No Sale'
  },
  {
    date: '03/23/2024',
    time: '@ 09:34:58 AM',
    name: 'lead_34_john.mp3',
    sorce: 'Stream_2',
    duration: '00:33:57',
    publisher: 'UNIK Media Group LLC',
    campaign: 'Campaign_1',
    target: 'Target_Name',
    revenue: '$45.00',
    cost: '$28.75',
    bgcolor: '#D92D20',
    status: 'ERROR TRANSCRIBING',
    border: '1px solid #EAECF0',
    bgcolors: '#F9FAFB',
    color: '#344054',
    disposition: 'Pending'
  },
  {
    date: '03/23/2024',
    time: '@ 09:34:58 AM',
    name: 'lead_34_john.mp3',
    sorce: 'Manual',
    duration: '00:33:57',
    publisher: 'UNIK Media Group LLC',
    campaign: 'Campaign_1',
    target: 'Target_Name',
    revenue: '$45.00',
    cost: '$28.75',
    bgcolor: '#7F56D9',
    status: 'TRANSCRIBED',
    border: '1px solid #FECDCA',
    bgcolors: '#FEF3F2',
    color: '#B42318',
    disposition: 'No Sale'
  }
]

const industryMenu = [
  <>
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
        All
      </Typography>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          gap: '7px'
        }}
      >
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
          Completed
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
          Analyzing
        </Typography>
      </Box>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: '7px' }}>
        <Typography component={'img'} src='/assets/image/purpledot.svg' />
        <Typography
          className='inter'
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '20px',
            color: '#344054'
          }}
        >
          Raw File
        </Typography>
      </Box>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: '7px' }}>
        <Typography component={'img'} src='/assets/image/reddot.svg' />
        <Typography
          className='inter'
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '20px',
            color: '#344054'
          }}
        >
          Error Transcribing
        </Typography>
      </Box>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: '7px' }}>
        <Typography component={'img'} src='/assets/image/reddot.svg' />
        <Typography
          className='inter'
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '20px',
            color: '#344054'
          }}
        >
          Error Analyzing
        </Typography>
      </Box>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: '7px' }}>
        <Typography component={'img'} src='/assets/image/bluedot.svg' />
        <Typography
          className='inter'
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '20px',
            color: '#344054'
          }}
        >
          Processing
        </Typography>
      </Box>
    </Box>
  </>,
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
          Transcribed
        </Typography>
      </Box>
    </Box>
  </>
]

const Actiondata = ['Rename', 'Add Note', 'View Note', 'Edit Audit Status', 'View Transciption', 'Delete']

const SwitchTooltip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(
  ({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: '#101828'
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#101828',
      width: '200px',
      fontSize: '12px',
      padding: '16px 12px',
      borderRadius: '8px',
      color: 'white',
      fontWeight: '600',
      textAlign: 'center',
      lineHeight: '15px'
    }
  })
)

const FileManagement = ({ selectedCardData }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [anchorElaction, setanchorElaction] = useState(null)
  const [anchorElIndustries, setAnchorElIndustries] = useState(null)
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [isClicked, setIsClicked] = useState(false)

  const screen = useMediaQuery('(min-width:900px)')

  const handleClick = () => {
    setIsClicked(!isClicked)
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

  const handleClickIndustries = event => {
    setAnchorElIndustries(event.currentTarget)
  }

  const handleCloseIndustries = industry => {
    setAnchorElIndustries(null)
    setSelectedIndustry(industry)
  }

  return (
    <>
      {screen ? (
        <Box
          sx={{
            p: '24px',
            bgcolor: '#F7F3FD',
            ml: selectedCardData ? '315px' : '115px',
            transition: 'all 0.2s'
          }}
        >
          <Box
            sx={{
              border: '1px solid #EAECF0',
              borderRadius: '12px',
              p: '',
              boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
              bgcolor: '#FFF '
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
                      All Files
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
                        24 Files
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
                    Manage all your files.
                  </Typography>
                </Box>
                <Box>
                  <SwitchTooltip
                    title={
                      isClicked ? (
                        <>
                          <Typography
                            sx={{
                              fontSize: '12px',
                              fontWeight: '600',
                              lineHeight: '15px'
                            }}
                          >
                            {' '}
                            Auto-Refresh is{' '}
                            <Typography
                              component={'span'}
                              sx={{
                                color: '#039855',
                                fontSize: '12px',
                                fontWeight: '600',
                                lineHeight: '15px'
                              }}
                            >
                              {' '}
                              ON{' '}
                            </Typography>
                            - Updating every 3 seconds.
                          </Typography>
                        </>
                      ) : (
                        'Auto-Refresh is OFF - Click to update every 3 seconds.'
                      )
                    }
                    arrow
                  >
                    <Button
                      disableElevation
                      disableRipple
                      className='inter'
                      variant='contained'
                      sx={{
                        padding: '10px 16px',
                        mr: '12px',
                        border: isClicked ? '1px solid transparant' : '1px solid #D0D5DD',
                        borderRadius: '8px',
                        textTransform: 'capitalize',
                        fontSize: '14px',
                        fontWeight: '600',
                        lineHeight: '20px',
                        bgcolor: isClicked ? '#D1FADF' : '#fff',
                        '&.MuiButtonBase-root:hover': {
                          background: isClicked ? '#D1FADF' : '#fff'
                        }
                      }}
                      onClick={handleClick}
                    >
                      <Typography
                        component={'img'}
                        src={isClicked ? '/assets/image/autorefresh.svg' : '/assets/image/FileAcsess.svg'}
                      />
                    </Button>
                  </SwitchTooltip>
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
                    Upload File
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
                      disableElevation
                      disableRipple
                      className='inter'
                      variant='outlined'
                      sx={{
                        textTransform: 'capitalize',
                        padding: '8px 12px',
                        color: '#101828',
                        border: '1px solid #D0D5DD',
                        borderRadius: '8px',
                        alignItems: 'flex-start',
                        '&:hover': {
                          border: '1px solid #D0D5DD',
                          bgcolor: '#fff'
                        }
                      }}
                      onClick={handleClickIndustries}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '10px'
                        }}
                      >
                        <Box sx={{ display: 'flex', gap: '7px' }}>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '14px',
                              fontWeight: '500',
                              lineHeight: '20px',
                              color: '#101828'
                            }}
                          >
                            {selectedIndustry}
                          </Typography>
                        </Box>
                        <ExpandMoreIcon />
                      </Box>
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
                    Source
                  </Typography>
                  <Box>
                    <Button
                      disableElevation
                      disableRipple
                      className='inter'
                      variant='outlined'
                      sx={{
                        textTransform: 'capitalize',
                        padding: '8px 12px',
                        color: '#101828',
                        border: '1px solid #D0D5DD',
                        borderRadius: '8px',
                        alignItems: 'flex-start',
                        '&:hover': {
                          border: '1px solid #D0D5DD',
                          bgcolor: '#fff'
                        }
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '40px'
                        }}
                      >
                        <Box sx={{ display: 'flex', gap: '7px' }}>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '14px',
                              fontWeight: '500',
                              lineHeight: '20px',
                              color: '#101828'
                            }}
                          >
                            All
                          </Typography>
                        </Box>
                        <ExpandMoreIcon />
                      </Box>
                    </Button>
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
                <Box>
                  <Button
                    className='inter'
                    variant='outlined'
                    sx={{
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                      color: '#344054',
                      padding: '14px 16px',
                      textTransform: 'capitalize',
                      border: '1px solid #D0D5DD',
                      bgcolor: '#fff',
                      borderRadius: '8px',
                      '&:hover': {
                        border: '1px solid #D0D5DD',
                        bgcolor: '#fff'
                      }
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/export.svg' sx={{ pr: '8px' }} />
                    Export
                  </Button>
                </Box>
                <Box>
                  <Button
                    className='inter'
                    variant='outlined'
                    sx={{
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                      color: '#344054',
                      padding: '12px 16px',
                      textTransform: 'capitalize',
                      border: '1px solid #D0D5DD',
                      bgcolor: '#fff',
                      borderRadius: '8px',
                      '&:hover': {
                        border: '1px solid #D0D5DD',
                        bgcolor: '#fff'
                      }
                    }}
                  >
                    <FilterList sx={{ pr: '10px' }} />
                    Filter
                  </Button>
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
                        <CustomCheckbox />
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
                            Date
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
                        Play
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
                            Name
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
                        Source
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
                        Duration
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
                            Publisher
                          </Typography>
                          <Typography component={'img'} src='/assets/image/arrow-down.svg' />
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
                            Campaign
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
                        Target
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
                        Revenue
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
                        Cost
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
                      <TableCell
                        className='inter'
                        sx={{
                          fontSize: '12px',
                          fontWeight: '500',
                          lineHeight: '18px',
                          color: '#475467'
                        }}
                      >
                        Disposition
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
                    {TableData.map((item, index) => (
                      <TableRow>
                        <TableCell>
                          <CustomCheckbox />
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.date}
                            </Typography>
                            <br />
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '9px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.time}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <IconButton sx={{ p: '0' }}>
                            <Typography component={'img'} src='/assets/image/Play.svg' />
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#1D2939'
                              }}
                            >
                              {item.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.sorce}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.duration}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.publisher}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.campaign}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.target}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.revenue}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.cost}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              padding: '8px 5px',
                              bgcolor: item.bgcolor,
                              borderRadius: '5px',
                              maxWidth: '90px'
                            }}
                          >
                            <Typography
                              className='inter'
                              sx={{
                                maxHeight: '24px',
                                fontSize: '10px',
                                fontWeight: '700',
                                color: '#fff',
                                letterSpacing: '0.179px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textTransform: 'uppercase'
                              }}
                            >
                              {item.status}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              padding: '2px 8px',
                              border: item.border,
                              bgcolor: item.bgcolors,
                              borderRadius: '16px',
                              alignItems: 'center',
                              display: 'inline-block',
                              justifyContent: 'center'
                            }}
                          >
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '18px',
                                color: item.color
                              }}
                            >
                              {item.disposition}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
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
                                  boxShadow: 'none',
                                  border: '1px solid #D0D5DD'
                                }
                              }}
                            >
                              {Actiondata.map((action, index) => (
                                <MenuItem key={index} onClick={handlecloseAction}>
                                  {action}
                                </MenuItem>
                              ))}
                            </Menu>
                          </Box>
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
        <Box
          sx={{
            p: '10px',
            bgcolor: '#F7F3FD',
            transition: 'all 0.2s',
            mt: '90px'
          }}
        >
          <Box
            sx={{
              border: '1px solid #EAECF0',
              borderRadius: '12px',
              p: '',
              boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
              bgcolor: '#FFF '
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
                      All Files
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
                        24 Files
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
                        <CustomCheckbox />
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
                            Date
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
                        Play
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
                            Name
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
                        Source
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
                        Duration
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
                            Publisher
                          </Typography>
                          <Typography component={'img'} src='/assets/image/arrow-down.svg' />
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
                            Campaign
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
                        Target
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
                        Revenue
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
                        Cost
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
                      <TableCell
                        className='inter'
                        sx={{
                          fontSize: '12px',
                          fontWeight: '500',
                          lineHeight: '18px',
                          color: '#475467'
                        }}
                      >
                        Disposition
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
                    {TableData.map((item, index) => (
                      <TableRow>
                        <TableCell>
                          <CustomCheckbox />
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.date}
                            </Typography>
                            <br />
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '9px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.time}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <IconButton sx={{ p: '0' }}>
                            <Typography component={'img'} src='/assets/image/Play.svg' />
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#1D2939'
                              }}
                            >
                              {item.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.sorce}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.duration}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.publisher}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.campaign}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.target}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.revenue}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#BEB9CE'
                              }}
                            >
                              {item.cost}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              padding: '8px 5px',
                              bgcolor: item.bgcolor,
                              borderRadius: '5px',
                              maxWidth: '90px'
                            }}
                          >
                            <Typography
                              className='inter'
                              sx={{
                                maxHeight: '24px',
                                fontSize: '10px',
                                fontWeight: '700',
                                color: '#fff',
                                letterSpacing: '0.179px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textTransform: 'uppercase'
                              }}
                            >
                              {item.status}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              padding: '2px 8px',
                              border: item.border,
                              bgcolor: item.bgcolors,
                              borderRadius: '16px',
                              alignItems: 'center',
                              display: 'inline-block',
                              justifyContent: 'center'
                            }}
                          >
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '18px',
                                color: item.color
                              }}
                            >
                              {item.disposition}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
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
                                  boxShadow: 'none',
                                  border: '1px solid #D0D5DD'
                                }
                              }}
                            >
                              {Actiondata.map((action, index) => (
                                <MenuItem key={index} onClick={handlecloseAction}>
                                  {action}
                                </MenuItem>
                              ))}
                            </Menu>
                          </Box>
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
          <MobileFooter />
        </Box>
      )}
    </>
  )
}

export default FileManagement
