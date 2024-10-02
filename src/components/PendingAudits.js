import DashboardLayout from '@/components/DashboardLayout/DashboardLayout'
import { Add, FilterList } from '@mui/icons-material'
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Modal,
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import CustomCheckbox from '@/components/CustomCheckbox'
import styled from '@emotion/styled'
import AudioPlayerModal from '@/components/AudioPlayerModal'
import RenameTranscriptionModal from '@/components/RenameTranscriptionModal'
import AuditAddnoteModal from '@/components/AuditAddnoteModal'
import FinalAuditMOdal from '@/components/FinalAuditstatusModal'
import DeleteTranscriptionModal from '@/components/DeleteTranscriptionModal'
import MobileFooter from './MobileFooter'

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

const tabledata = [
  {
    name: 'lead_34_john.mp3',
    Date: '03/23/2024',
    time: '@ 09:34:58 AM',
    source: 'Manual',
    publisher: 'Publisher_1',
    target: '(555)-554-4523',
    duration: '00:33:57',
    status: 'COMPLETED',
    statusbgcolor: '#4ECD90',
    score: '83%',
    Disposition: 'Sale',
    border: '1px solid #ABEFC6',
    bgcolor: '#ECFDF3',
    color: '#067647',
    src: '/assets/image/checkcirclepassed.svg',
    auditstatus: 'Passed',
    auditcolor: '#067647'
  },
  {
    name: 'lead_34_john.mp3',
    Date: '03/23/2024',
    time: '@ 09:34:58 AM',
    source: 'Manual',
    publisher: 'Publisher_1',
    target: '(555)-554-4523',
    duration: '00:33:57',
    status: 'PENDING    ',
    statusbgcolor: '#FFA726',
    score: '83%',
    Disposition: 'No    Sale',
    border: '1px solid #FECDCA',
    bgcolor: '#FEF3F2',
    color: '#B42318',
    auditstatus: 'Not Started',
    auditcolor: '#98A2B3'
  },
  {
    name: 'lead_34_john.mp3',
    Date: '03/23/2024',
    time: '@ 09:34:58 AM',
    source: 'Manual',
    publisher: 'Publisher_1',
    target: '(555)-554-4523',
    duration: '00:33:57',
    status: 'STARTED',
    statusbgcolor: '#7F56D9',
    score: '83%',
    Disposition: 'Pending',
    border: '1px solid #EAECF0',
    bgcolor: '#F9FAFB',
    color: '#344054',
    auditstatus: 'Started',
    auditcolor: '#6941C6'
  },
  {
    name: 'lead_34_john.mp3',
    Date: '03/23/2024',
    time: '@ 09:34:58 AM',
    source: 'Manual',
    publisher: 'Publisher_1',
    target: '(555)-554-4523',
    duration: '00:33:57',
    status: 'COMPLETED',
    statusbgcolor: '#4ECD90',
    score: '83%',
    Disposition: 'Quoted',
    border: '1px solid #E9D7FE',
    bgcolor: '#F9F5FF',
    color: '#6941C6',
    auditstatus: 'Failed',
    auditcolor: '#E54D4D',
    src2: '/assets/image/questionmark.svg'
  },
  {
    name: 'lead_34_john.mp3',
    Date: '03/23/2024',
    time: '@ 09:34:58 AM',
    source: 'Manual',
    publisher: 'Publisher_1',
    target: '(555)-554-4523',
    duration: '00:33:57',
    status: 'COMPLETED',
    statusbgcolor: '#4ECD90',
    score: '83%',
    Disposition: 'Callback',
    border: '1px solid #FEDF89',
    bgcolor: '#FFFAEB',
    color: '#B54708',
    src: '/assets/image/checkcirclepassed.svg',
    auditstatus: 'Passed',
    auditcolor: '#027948'
  },
  {
    name: 'lead_34_john.mp3',
    Date: '03/23/2024',
    time: '@ 09:34:58 AM',
    source: 'Manual',
    publisher: 'Publisher_1',
    target: '(555)-554-4523',
    duration: '00:33:57',
    status: 'COMPLETED',
    statusbgcolor: '#4ECD90',
    score: '83%',
    Disposition: 'Sale',
    border: '1px solid #ABEFC6',
    bgcolor: '#ECFDF3',
    color: '#067647',
    auditstatus: 'Failed',
    auditcolor: '#E54D4D',
    src2: '/assets/image/questionmark.svg'
  }
]

const Actiondata = [
  { id: '1', name: 'Rename' },
  { id: '2', name: 'Add Note' },
  { id: '3', name: 'View Note' },
  { id: '4', name: 'Edit Audit Status' },
  { id: '5', name: 'View Transciption' },
  { id: '6', name: 'Delete' }
]

const AuditStatus = [
  <>
    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Box>
        <CustomCheckbox />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90px' }}>
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
            Passed
          </Typography>
        </Box>
        <Box>
          <Typography component={'img'} src='/assets/image/passed.svg' />
        </Box>
      </Box>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Box>
        <CustomCheckbox />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90px' }}>
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
            Failed
          </Typography>
        </Box>
        <Box>
          <Typography component={'img'} src='/assets/image/failed.svg' />
        </Box>
      </Box>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Box>
        <CustomCheckbox />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90px' }}>
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
            Pending
          </Typography>
        </Box>
        <Box>
          <Typography component={'img'} src='/assets/image/pending.svg' />
        </Box>
      </Box>
    </Box>
  </>,
  <>
    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Box>
        <CustomCheckbox />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90px' }}>
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
            started
          </Typography>
        </Box>
        <Box>
          <Typography component={'img'} src='/assets/image/start.svg' />
        </Box>
      </Box>
    </Box>
  </>
]

const PendingAudits = ({ selectedCardData }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [anchorElIndustries, setAnchorElIndustries] = useState(null)
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [anchorElAuditstatus, setAnchorElAuditstatus] = useState(null)
  const [selectedAuditstatus, setSelectedAuditstatus] = useState('All')
  const [anchorElaction, setanchorElaction] = useState(null)
  const [openAudioModal, setopenAudioModal] = useState(false)
  const [openRenameModal, setopenRenameModal] = useState(false)
  const [openAuditAddnoteModal, setopenAuditAddnoteModal] = useState(false)
  const [openFinalAuditModal, setopenFinalAuditModal] = useState(false)
  const [openDeleteTranscriptionModal, setopenDeleteTranscriptionModal] = useState(false)

  const screen = useMediaQuery('(min-width:900px)')

  const handleClickDeleteTranscriptionModal = () => {
    setopenDeleteTranscriptionModal(!openDeleteTranscriptionModal)
  }

  const handleCloseDeleteTranscriptionModal = () => {
    setopenDeleteTranscriptionModal(false)
  }

  const handleClickFinalAuditModal = () => {
    setopenFinalAuditModal(!openFinalAuditModal)
  }

  const handleCloseFinalAuditModal = () => {
    setopenFinalAuditModal(false)
  }

  const handleClickAuditAddnoteModal = () => {
    setopenAuditAddnoteModal(!openAuditAddnoteModal)
  }

  const handleCloseAuditAddnoteModal = () => {
    setopenAuditAddnoteModal(false)
  }

  const handleClickRenameModal = () => {
    setopenRenameModal(!openRenameModal)
  }

  const handleCloseRenameModal = () => {
    setopenRenameModal(false)
  }

  const handleClickAudioModal = () => {
    setopenAudioModal(!openAudioModal)
  }
  const handleCloseAudioModal = () => {
    setopenAudioModal(false)
  }

  const handleNextPage = () => {
    if (currentPage < 10) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(1, prevPage - 1))
  }

  const handleClickIndustries = event => {
    setAnchorElIndustries(event.currentTarget)
  }

  const handleClickAuditstatus = event => {
    setAnchorElAuditstatus(event.currentTarget)
  }

  const handleCloseAuditstatus = AuditStatus => {
    setAnchorElAuditstatus(null)
    setSelectedAuditstatus(AuditStatus)
  }

  const handleCloseIndustries = industry => {
    setAnchorElIndustries(null)
    setSelectedIndustry(industry)
  }

  const handleClickAction = event => {
    setanchorElaction(event.currentTarget)
  }

  const handlecloseAction = () => {
    setanchorElaction(null)
  }

  const AgentActivity = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
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
  }))

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
                      Pending Audits
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
                        8 Files
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
                    Files Requiring a Human Audit
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
                    Audit Status
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
                      onClick={handleClickAuditstatus}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '30px'
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
                            {selectedAuditstatus}
                          </Typography>
                        </Box>
                        <ExpandMoreIcon />
                      </Box>
                    </Button>
                    <Menu
                      anchorEl={anchorElAuditstatus}
                      open={Boolean(anchorElAuditstatus)}
                      onClose={() => handleCloseAuditstatus(selectedAuditstatus)}
                    >
                      {AuditStatus.map(Auditstatus => (
                        <MenuItem key={Auditstatus} onClick={() => handleCloseAuditstatus(Auditstatus)}>
                          {Auditstatus}
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
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
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
                            Play
                          </Typography>
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
                        Date & Time
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
                            Duration
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
                        Risk Score
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
                        Audit Status
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
                    {tabledata.map(item => (
                      <TableRow>
                        <TableCell sx={{ pl: '15px' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <CustomCheckbox />
                            <Box
                              sx={{
                                color: '#000',
                                bgcolor: '#fff',
                                '&:hover': { bgcolor: '#fff' }
                              }}
                              onClick={handleClickAudioModal}
                            >
                              <IconButton disableRipple>
                                <PauseCircleOutlineIcon sx={{ fontSize: '27px !important', color: '#BEB9CE' }} />
                              </IconButton>
                            </Box>
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
                              {item.Date}
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
                              {item.source}
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
                              {item.duration}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              padding: '8px 5px',
                              bgcolor: item.statusbgcolor,
                              borderRadius: '5px',
                              display: 'inline-block'
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
                                alignItems: 'center'
                              }}
                            >
                              {item.status}
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
                                color: '#E54D4D'
                              }}
                            >
                              {item.score}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              padding: '2px 8px',
                              border: item.border,
                              bgcolor: item.bgcolor,
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
                              {item.Disposition}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography component={'img'} src={item.src} sx={{ mr: '4px' }} />
                            <Typography
                              className='inter'
                              component={'span'}
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: item.auditcolor
                              }}
                            >
                              {item.auditstatus}
                            </Typography>
                            <AgentActivity title='Suspicious Agent Activity'>
                              <Typography component={'img'} src={item.src2} sx={{ ml: '4px' }} />
                            </AgentActivity>
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
                                  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
                                  border: '1px solid #D0D5DD'
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
                                      handleClickRenameModal()
                                    } else if (index === 1) {
                                      handleClickAuditAddnoteModal()
                                    } else if (index === 3) {
                                      handleClickFinalAuditModal()
                                    } else if (index === 5) {
                                      handleClickDeleteTranscriptionModal()
                                    }
                                  }}
                                >
                                  {action.name}
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
        <>
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
                        Pending Audits
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
                          8 Files
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
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '18px',
                                color: '#475467'
                              }}
                            >
                              Play
                            </Typography>
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
                          Date & Time
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
                              Duration
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
                          Risk Score
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
                          Audit Status
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
                      {tabledata.map(item => (
                        <TableRow>
                          <TableCell sx={{ pl: '15px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <CustomCheckbox />
                              <Box
                                sx={{
                                  color: '#000',
                                  bgcolor: '#fff',
                                  '&:hover': { bgcolor: '#fff' }
                                }}
                                onClick={handleClickAudioModal}
                              >
                                <IconButton disableRipple>
                                  <PauseCircleOutlineIcon sx={{ fontSize: '27px !important', color: '#BEB9CE' }} />
                                </IconButton>
                              </Box>
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
                                {item.Date}
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
                                {item.source}
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
                                {item.duration}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Box
                              sx={{
                                padding: '8px 5px',
                                bgcolor: item.statusbgcolor,
                                borderRadius: '5px',
                                display: 'inline-block'
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
                                  alignItems: 'center'
                                }}
                              >
                                {item.status}
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
                                  color: '#E54D4D'
                                }}
                              >
                                {item.score}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Box
                              sx={{
                                padding: '2px 8px',
                                border: item.border,
                                bgcolor: item.bgcolor,
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
                                {item.Disposition}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Typography component={'img'} src={item.src} sx={{ mr: '4px' }} />
                              <Typography
                                className='inter'
                                component={'span'}
                                sx={{
                                  fontSize: '12px',
                                  fontWeight: '500',
                                  lineHeight: '14px',
                                  color: item.auditcolor
                                }}
                              >
                                {item.auditstatus}
                              </Typography>
                              <AgentActivity title='Suspicious Agent Activity'>
                                <Typography component={'img'} src={item.src2} sx={{ ml: '4px' }} />
                              </AgentActivity>
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
                                    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
                                    border: '1px solid #D0D5DD'
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
                                        handleClickRenameModal()
                                      } else if (index === 1) {
                                        handleClickAuditAddnoteModal()
                                      } else if (index === 3) {
                                        handleClickFinalAuditModal()
                                      } else if (index === 5) {
                                        handleClickDeleteTranscriptionModal()
                                      }
                                    }}
                                  >
                                    {action.name}
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
          <MobileFooter />
        </>
      )}

      <AudioPlayerModal open={openAudioModal} onClose={handleCloseAudioModal} />
      <RenameTranscriptionModal open={openRenameModal} onClose={handleCloseRenameModal} />
      <AuditAddnoteModal open={openAuditAddnoteModal} onClose={handleCloseAuditAddnoteModal} />
      <FinalAuditMOdal open={openFinalAuditModal} onClose={handleCloseFinalAuditModal} />
      <DeleteTranscriptionModal open={openDeleteTranscriptionModal} onClose={handleCloseDeleteTranscriptionModal} />
    </>
  )
}

export default PendingAudits
