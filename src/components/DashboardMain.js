import styled from '@emotion/styled'
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
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
  useForkRef,
  useMediaQuery
} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dynamic from 'next/dynamic'
import FilterListIcon from '@mui/icons-material/FilterList'
import React, { useState } from 'react'
import MapChart from './mapchart'
import ManageWidgetsabar from './ManageWidgetsabr'
import FilterModal from './filterModal'
import LocationFilterModal from './LocationFilterModal'
import { ArrowDownward, KeyboardArrowDown } from '@mui/icons-material'
import IOSSwitch from './IOSSwitch'
import { DateRangePicker } from '@mui/x-date-pickers-pro'
import CustomCheckbox from './CustomCheckbox'
import MobileFooter from './MobileFooter'

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

const buttons = [
  <Button
    className='inter'
    key='one'
    sx={{
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '20px',
      color: '#1D2939',
      textTransform: 'lowercase',
      padding: '10px 16px',
      border: '1px solid #D0D5DD !important'
    }}
  >
    12 month
  </Button>,
  <Button
    className='inter'
    key='two'
    sx={{
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '20px',
      color: '#1D2939',
      textTransform: 'lowercase',
      padding: '10px 16px',
      border: '1px solid #D0D5DD !important'
    }}
  >
    30 days
  </Button>,
  <Button
    className='inter'
    key='three'
    sx={{
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '20px',
      color: '#1D2939',
      textTransform: 'lowercase',
      padding: '10px 16px',
      border: '1px solid #D0D5DD !important'
    }}
  >
    7 days
  </Button>,
  <Button
    className='inter'
    key='four'
    sx={{
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '20px',
      color: '#1D2939',
      textTransform: 'lowercase',
      padding: '10px 16px',
      border: '1px solid #D0D5DD !important'
    }}
  >
    24 hours
  </Button>
]

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

const LocationData = [
  {
    id: '12',
    city: 'Florida',
    color: '#53389E',
    val: 50
  },
  {
    id: '48',
    city: 'Dallas',
    color: '#7F56D9',
    val: 30
  },
  {
    id: '53',
    city: 'Washington',
    color: '#B692F6',
    val: 30
  },
  {
    id: '06',
    city: 'California',
    color: '#D6BBFB',
    val: 20
  },
  {
    id: '26',
    city: 'Michigan',
    color: '#E9D7FE',
    val: 20
  },
  {
    id: '36',
    city: 'New York',
    color: '#E9D7FE',
    val: 20
  },
  {
    id: '42',
    city: 'Pennsylvania',
    color: '#E9D7FE',
    val: 20
  },
  {
    id: '39',
    city: 'Ohio',
    color: '#E9D7FE',
    val: 10
  }
]

const ReactApexcharts = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const chartData = {
  series: [12, 21, 24],
  options: {
    chart: {
      type: 'pie'
    },
    colors: ['#D92D20', '#039855', '#F79009'],
    dataLabels: {
      enabled: false
    },
    labels: ['Negative 12 ', 'Positive 21', 'Neutral 24 '],
    legend: {
      position: 'right',
      horizontalAlign: 'center',
      fontSize: '15px',
      fontFamily: 'inter',
      fontWeight: 400,
      markers: {
        width: 17,
        height: 17,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 5,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      },
      itemMargin: {
        horizontal: 10,
        vertical: 10
      }
    },
    stroke: {
      width: 0
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 100
          },
          legend: {
            position: 'bottom',
            horizontalAlign: 'center'
          }
        }
      },
      {
        breakpoint: 300,
        options: {
          chart: {
            width: 280
          }
        }
      },
      {
        breakpoint: 1220,
        options: {
          chart: {
            width: 400
          }
        }
      },
      {
        breakpoint: 2200,
        options: {
          chart: {
            width: 470
          }
        }
      }
    ],
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      hideEmptySeries: true,
      fillSeriesColor: false,
      theme: false,
      style: {
        className: 'inter',
        fontSize: '14px',
        fontFamily: undefined
      },
      onDatasetHover: {
        highlightDataSeries: false
      },
      x: {
        show: true,
        format: 'dd MMM',
        formatter: undefined
      },
      y: {
        formatter: undefined,
        title: {
          formatter: seriesName => seriesName
        }
      },
      z: {
        formatter: undefined,
        title: 'Size: '
      },
      marker: {
        show: true
      },
      items: {
        display: 'flex'
      },
      fixed: {
        enabled: false,
        position: 'topRight',
        offsetX: 0,
        offsetY: 0
      }
    }
  }
}

const riskChartdata = {
  series: [14],
  options: {
    chart: {
      height: 350,
      type: 'radialBar',
      offsetY: -10
    },
    colors: ['#12B76A'],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          enabled: true,
          enabledOnSeries: undefined,
          formatter: function (val, opts) {
            return val
          },
          name: {
            fontSize: '16px',
            color: undefined
          },
          value: {
            fontSize: '22px',
            color: undefined,
            formatter: function (val) {
              return val + '%'
            }
          },
          textAnchor: 'middle',
          distributed: false,
          offsetX: 0,
          offsetY: 0,
          style: {
            fontSize: '16px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            colors: undefined
          },
          background: {
            enabled: true,
            foreColor: '#fff',
            padding: 4,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#fff',
            opacity: 0.9,
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: '#000',
              opacity: 0.45
            }
          },
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45
          }
        }
        // dataLabels: {
        //   name: {
        //     fontSize: '16px',
        //     color: undefined,
        //     offsetY: 120
        //   },
        //   value: {
        //     offsetY: 76,
        //     fontSize: '22px',
        //     color: undefined,
        //     formatter: function (val) {
        //       return val + '%'
        //     }
        //   }
        // }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
      }
    },
    stroke: {
      dashArray: 4
    },
    labels: ['Low Risk']
  }
}

const callOutComedata = {
  series: [3, 4, 6, 4, 10],
  options: {
    chart: {
      type: 'donut'
    },
    colors: ['#B54708', '#027A48', '#5925DC', '#D0D5DD', '#B42318'],
    dataLabels: {
      enabled: false
    },
    labels: ['Callback', ' Sale', 'Quated', 'Pending', 'No Sale'],
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '16px',
      fontFamily: 'inter',
      fontWeight: 500,
      height: 'auto',
      padding: '8px 20px',
      border: '1px solid black',
      labels: {
        colors: ['#B54708', '#027A48', '#5925DC', '#344054', '#B42318']
      },
      markers: {
        width: 0,
        height: 0,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 5,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 10,
        offsetY: 10
      },
      itemMargin: {
        horizontal: 10,
        vertical: 10
      }
    },
    stroke: {
      width: 0
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  }
}

function createData(name, uploded, trigger, risk, talktime, totalmins) {
  return { name, uploded, trigger, risk, talktime, totalmins }
}

const rows = [
  createData('Target_1', 35, 10, 4.83, '4:54', 135),
  createData('Target_2', 64, 13, 3.17, '8:16', 132),
  createData('Target_3', 87, 21, 1.02, '7:25', 423)
]

function publisherData(name, uploded, trigger, risk, talktime, totalmins) {
  return { name, uploded, trigger, risk, talktime, totalmins }
}

const publisherRows = [
  publisherData('Pub_1', 35, 10, 4.83, '4:54', 135),
  publisherData('Pub_2', 64, 13, 3.17, '8:16', 132),
  publisherData('Pub_3', 87, 21, 2.71, '7:25', 423)
]

const initialData = LocationData.slice(0, 3)

const DateRangeButtonField = React.forwardRef((props, ref) => {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref: containerRef } = {},
    inputProps: { 'aria-label': ariaLabel } = {}
  } = props

  const handleRef = useForkRef(ref, containerRef)

  return (
    <Button
      disableRipple
      variant='outlined'
      id={id}
      disabled={disabled}
      ref={handleRef}
      aria-label={ariaLabel}
      onClick={() => setOpen?.(prev => !prev)}
      sx={{
        p: '10px 16px',
        border: '1px solid #D0D5DD',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '8px',
        cursor: 'pointer',
        textTransform: 'lowercase',
        background: '#fff',
        '&.MuiButton-root:hover': {
          border: '1px solid #D0D5DD',
          background: '#fff'
        }
      }}
    >
      <Typography component={'img'} mr={2} src='/assets/image/calendarrange.svg' />
      <Typography
        sx={{
          fontWeight: '600',
          fontSize: '14px',
          color: '#667085'
        }}
      >
        {label ? `${label}` : 'Select dates'}
      </Typography>
    </Button>
  )
})

DateRangeButtonField.fieldType = 'single-input'

const ButtonDateRangePicker = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        slots={{ field: DateRangeButtonField, ...props.slots }}
        slotProps={{ field: { setOpen } }}
        ref={ref}
        {...props}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      />
    </LocalizationProvider>
  )
})

const TableData = [
  {
    phone: '+1 651-411-9988	',
    name: 'Olivia Rhye',
    email: 'olivia@email.com',
    contact: '1',
    status: '48 Leads',
    border: '1px solid #ABEFC6',
    bgcolor: '#ECFDF3',
    color: '#067647'
  },
  {
    phone: '+1 555-213-7897',
    name: 'Phoenix Baker',
    email: 'phoenix@email.com',
    contact: '8',
    status: '48 Leads',
    border: '1px solid #ABEFC6',
    bgcolor: '#ECFDF3',
    color: '#067647'
  },
  {
    phone: '+1 555-213-7897',
    name: 'Lana Evans',
    email: 'lana@email.com',
    contact: '1',
    status: 'New Caller',
    border: '1px solid #ABEFC6',
    bgcolor: '#ECFDF3',
    color: '#067647'
  },
  {
    phone: '+1 965-564-5478',
    name: 'Demi Carlos',
    email: 'demi@email.com',
    contact: '2',
    status: 'Coached Caller',
    border: '1px solid #FECDCA',
    bgcolor: '#FEF3F2',
    color: '#B42318'
  },
  {
    phone: '+1 649-242-8854',
    name: 'Candice Myers',
    email: 'candice@email.com',
    contact: '1',
    status: 'New Caller',
    border: '1px solid #ABEFC6',
    bgcolor: '#ECFDF3',
    color: '#067647'
  },
  {
    phone: '+1 372-564-5478',
    name: 'Robert Hynie',
    email: 'robert@email.com',
    contact: '1',
    status: 'Coached Caller',
    border: '1px solid #FECDCA',
    bgcolor: '#FEF3F2',
    color: '#B42318'
  },
  {
    phone: '+1 555-254-4535',
    name: 'Roman Jaquez',
    email: 'roman@email.com',
    contact: '6',
    status: 'Repeat Caller',
    border: '1px solid #E9D7FE',
    bgcolor: '#F9F5FF',
    color: '#6941C6'
  },
  {
    phone: '+1 814-485-2248',
    name: 'Eric Seidel',
    email: 'eric@email.com',
    contact: '1',
    status: 'Litigator',
    border: '1px solid #EAECF0',
    bgcolor: '#F9FAFB',
    color: '#344054'
  }
]

const Auditdata = [
  {
    title: 'Total Audits',
    number: '46',
    img: '/assets/image/totolauditfile.svg',
    bgcolor: '#F9F5FF'
  },
  {
    title: 'Total Audits In Progress',
    number: '22',
    img: '/assets/image/totolprogressfile.svg',
    bgcolor: '#FFFAEB'
  },
  {
    title: 'Total Audits Completed',
    number: '12',
    img: '/assets/image/totalcompletefile.svg',
    bgcolor: '#ECFDF3'
  },
  {
    title: 'Total Audits marked for review',
    number: '10',
    img: '/assets/image/totalreviewfile.svg',
    bgcolor: '#FEF3F2'
  }
]

const Transcriptionsdata = [
  {
    title: 'Total Transcrpitons',
    number: '187',
    img: '/assets/image/transcription.svg',
    bgcolor: '#F2F4F7'
  },
  {
    title: 'Total Transcription Hours',
    number: '3:25',
    img: '/assets/image/totalclock.svg',
    bgcolor: '#F4EBFF',
    hrs: 'Hrs'
  }
]

const DashboardMain = ({ selectedCardData }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isShowMore, setIsShowMore] = useState(false)
  const [progressData, setProgressData] = useState(initialData)
  const [openFilterModal, setOpenFilterModal] = useState(false)
  const [openLocationFilterModal, setOpenLocationFilterModal] = useState(false)
  const [IsOpen, setIsOpen] = useState()
  const [anchorElIndustries, setAnchorElIndustries] = useState(null)
  const [selectedIndustry, setSelectedIndustry] = useState('Select Layout')
  const [selectedButton, setSelectedButton] = useState(null)
  const [rangeVal, setRangeVal] = useState([null, null])

  const screen = useMediaQuery('(min-width:900px)')

  const handleButtonClick = index => {
    setSelectedButton(index)
  }

  const buttons = [
    { label: '12 months', key: 'one' },
    { label: '30 days', key: 'two' },
    { label: '7 days', key: 'three' },
    { label: '24 hours', key: 'four' }
  ]

  const handleClickModal = () => {
    setOpenFilterModal(!openFilterModal)
  }

  const handleCloseModal = () => {
    setOpenFilterModal(false)
  }

  const handleClickLocationamodal = () => {
    setOpenLocationFilterModal(!openLocationFilterModal)
  }

  const handleCloseLoocationModal = () => {
    setOpenLocationFilterModal(false)
  }

  const toggleReadMoreLess = () => {
    if (!isShowMore) {
      setProgressData(LocationData)
    } else {
      setProgressData(initialData)
    }
    setIsShowMore(!isShowMore)
  }

  const handleClickIndustries = event => {
    setAnchorElIndustries(event.currentTarget)
  }

  const handleCloseIndustries = industry => {
    setAnchorElIndustries(null)
    setSelectedIndustry(industry)
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

  const handleNextPage = () => {
    if (currentPage < 10) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(1, prevPage - 1))
  }

  return (
    <>
      {screen ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 24px',
            background: '#F7F3FD',
            gap: '20px',
            ml: selectedCardData ? '315px' : '115px',
            transition: 'all 0.2s'
          }}
        >
          {/* Welcome back, user */}
          <Box
            sx={{
              display: 'flex',
              padding: '30px 26px',
              flexDirection: 'column',
              borderRadius: '10.482px',
              background: 'linear-gradient(90deg, #FFF -1.64%, #FFF 120.64%)',
              border: ' 0.873px solid #EBDDFF',
              boxShadow: '0px 0.873px 1.747px 0px rgba(29, 16, 40, 0.06), 0px 0.873px 2.62px 0px rgba(27, 16, 40, 0.10)'
            }}
          >
            <Typography
              className='inter'
              sx={{
                fontSize: '30px',
                fontWeight: '600',
                lineHeight: '38px',
                color: '#101828',
                mb: '4px'
              }}
            >
              Welcome back, Olivia
            </Typography>
            <Typography
              className='inter'
              sx={{
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px',
                color: '#475467',
                mb: '17px'
              }}
            >
              Your current summary and activity.
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <Box>
                  <ButtonGroup disableRipple aria-label='medium button group' sx={{ paddingRight: '20px' }}>
                    {buttons.map((button, index) => (
                      <Button
                        key={button.key}
                        className='inter'
                        sx={{
                          fontSize: '14px',
                          fontWeight: '600',
                          lineHeight: '20px',
                          color: selectedButton === index ? '#ffffff' : '#1D2939',
                          textTransform: 'capitalize',
                          padding: '10px 16px',
                          border: '1px solid #D0D5DD !important',
                          borderRadius: '10px',
                          backgroundColor: selectedButton === index ? '#7F56D9' : 'transparant',
                          '&:hover': {
                            backgroundColor: selectedButton === index ? '#7F56D9' : '#F5F6F9'
                          }
                        }}
                        onClick={() => handleButtonClick(index)}
                      >
                        {button.label}
                      </Button>
                    ))}
                  </ButtonGroup>
                </Box>
                <Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <ButtonDateRangePicker
                      label={
                        rangeVal[0] === null && rangeVal[1] === null
                          ? null
                          : rangeVal.map(date => (date ? date.format('DD/MM/YYYY') : 'null')).join(' - ')
                      }
                      value={rangeVal}
                      onChange={newValue => {
                        setRangeVal(newValue)
                      }}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                      color: '#6941C6'
                    }}
                  >
                    Edit Layout
                  </Typography>
                  <Box sx={{ mx: '10px' }}>
                    <SwitchTooltip className='inter' title='You can drag, drop & resize widgets in edit mode'>
                      <IOSSwitch />
                    </SwitchTooltip>
                  </Box>
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
                  <Box>
                    <Button
                      variant='contained'
                      sx={{
                        fontSize: '14px',
                        fontWeight: '600',
                        lineHeight: '20px',
                        padding: '10px 16px',
                        borderRadius: '8px',
                        background: '#7F56D9',
                        textTransform: 'capitalize',
                        ml: '10px',
                        hover: {
                          background: '#7F56D9'
                        }
                      }}
                      onClick={() => {
                        setIsOpen(!IsOpen)
                      }}
                    >
                      Manage Widgets
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              {/* Transcriptions */}
              <Box
                sx={{
                  padding: '20px',
                  border: '1.021px solid #EAECF0',
                  background: '#FFF',
                  boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                  borderRadius: '8px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #FAF5FF',
                    pb: '14px'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '18.926px',
                      fontWeight: '600',
                      lineHeight: '29.44px',
                      color: '#101828'
                    }}
                  >
                    Transcriptions
                  </Typography>
                  <Box sx={{}}>
                    <Button
                      variant='outlined'
                      className='inter'
                      sx={{
                        padding: '10.514px 16.823px',
                        borderRadius: '8.411px',
                        border: '1.051px solid #D0D5DD',
                        fontSize: '14.72px',
                        fontWeight: '600',
                        lineHeight: '21.028px',
                        color: '#344054',
                        textTransform: 'capitalize'
                      }}
                      onClick={handleClickModal}
                    >
                      <FilterListIcon sx={{ mr: '8px' }} /> Filters
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ padding: '15px' }}>
                    <Grid container spacing={2}>
                      {Transcriptionsdata.map(item => (
                        <Grid item xs={12} sm={12} md={6}>
                          <Box
                            sx={{
                              display: 'flex',
                              gap: '8.474px',
                              alignItems: 'center'
                            }}
                          >
                            <Box
                              sx={{
                                width: '30px',
                                height: '30px',
                                padding: '9px',
                                borderRadius: '50%',
                                background: item.bgcolor,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                              }}
                            >
                              <Typography component={'img'} src={item.img} />
                            </Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14.829px',
                                fontWeight: '500',
                                lineHeight: '3.178px',
                                color: '#475467'
                              }}
                            >
                              {item.title}
                            </Typography>
                          </Box>
                          <Box sx={{ pl: '56px' }}>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '38.132px',
                                fontWeight: '500',
                                lineHeight: '46.606px',
                                color: '#101828',
                                letterSpacing: '-0.763px'
                              }}
                            >
                              {item.number}{' '}
                              <Typography
                                component={'span'}
                                className='inter'
                                sx={{
                                  fontSize: '15px',
                                  fontWeight: '500',
                                  lineHeight: '46.606px',
                                  color: '#101828',
                                  letterSpacing: '-0.318px'
                                }}
                              >
                                {item.hrs}
                              </Typography>
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Box>

              {/* chart */}
              <Box
                sx={{
                  padding: '39.692px 23.774px 14.859px 23.774px',
                  border: '1.021px solid #EAECF0',
                  background: '#FFF',
                  boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                  borderRadius: '8px',
                  height: '100%',
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #FAF5FF',
                    pb: '14px',
                    alignItems: 'center'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '18.926px',
                      fontWeight: '600',
                      lineHeight: '29.44px',
                      color: '#101828'
                    }}
                  >
                    Trigger Words & Phrases
                  </Typography>
                  <Box sx={{}}>
                    <Button
                      variant='outlined'
                      className='inter'
                      sx={{
                        padding: '10.514px 16.823px',
                        borderRadius: '8.411px',
                        border: '1.051px solid #D0D5DD',
                        fontSize: '14.72px',
                        fontWeight: '600',
                        lineHeight: '21.028px',
                        color: '#344054',
                        textTransform: 'capitalize'
                      }}
                      onClick={handleClickModal}
                    >
                      <FilterListIcon sx={{ mr: '8px', color: '#344054' }} /> Filters
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Box
                    id='chart'
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      py: '30px',
                      maxWidth: '100%'
                    }}
                  >
                    <ReactApexcharts options={chartData.options} series={chartData.series} type='pie' width={'100%'} />
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              {/* audit */}
              <Box
                sx={{
                  padding: '20px',
                  border: '1.021px solid #EAECF0',
                  background: '#FFF',
                  boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                  borderRadius: '8px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #FAF5FF',
                    pb: '14px'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '18.926px',
                      fontWeight: '600',
                      lineHeight: '29.44px',
                      color: '#101828'
                    }}
                  >
                    Audit
                  </Typography>
                  <Box sx={{}}>
                    <Button
                      variant='outlined'
                      className='inter'
                      sx={{
                        padding: '10.514px 16.823px',
                        borderRadius: '8.411px',
                        border: '1.051px solid #D0D5DD',
                        fontSize: '14.72px',
                        fontWeight: '600',
                        lineHeight: '21.028px',
                        color: '#344054',
                        textTransform: 'capitalize'
                      }}
                      onClick={handleClickModal}
                    >
                      <FilterListIcon sx={{ mr: '8px' }} /> Filters
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ padding: '15px' }}>
                    <Grid container spacing={2}>
                      {Auditdata.map((item, index) => (
                        <Grid item xs={12} sm={12} md={6}>
                          <Box
                            sx={{
                              display: 'flex',
                              gap: '8.474px',
                              alignItems: 'center'
                            }}
                          >
                            <Box
                              sx={{
                                width: '30px',
                                height: '30px',
                                padding: '9px',
                                borderRadius: '50%',
                                background: item.bgcolor,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                              }}
                            >
                              <Typography component={'img'} src={item.img} />
                            </Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14.829px',
                                fontWeight: '500',
                                lineHeight: '3.178px',
                                color: '#475467'
                              }}
                            >
                              {item.title}
                            </Typography>
                          </Box>
                          <Box sx={{ pl: '56px' }}>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '38.132px',
                                fontWeight: '500',
                                lineHeight: '46.606px',
                                color: '#101828',
                                letterSpacing: '-0.763px'
                              }}
                            >
                              {item.number}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Box>
              {/* risk score */}
              <Box
                sx={{
                  padding: '20px',
                  border: '1.021px solid #EAECF0',
                  background: '#FFF',
                  boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                  borderRadius: '8px',
                  height: '100%'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #FAF5FF',
                    pb: '14px'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '18.926px',
                      fontWeight: '600',
                      lineHeight: '29.44px',
                      color: '#101828'
                    }}
                  >
                    Risk Score
                  </Typography>
                  <Box sx={{}}>
                    <Button
                      variant='outlined'
                      className='inter'
                      sx={{
                        padding: '10.514px 16.823px',
                        borderRadius: '8.411px',
                        border: '1.051px solid #D0D5DD',
                        fontSize: '14.72px',
                        fontWeight: '600',
                        lineHeight: '21.028px',
                        color: '#344054',
                        textTransform: 'capitalize'
                      }}
                      onClick={handleClickModal}
                    >
                      <FilterListIcon sx={{ mr: '8px' }} /> Filters
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Box id='chart'>
                    <ReactApexcharts
                      options={riskChartdata.options}
                      series={riskChartdata.series}
                      type='radialBar'
                      height={300}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} display={'flex'} flexDirection={'column'} gap='20px'>
              <Grid
                item
                xs={12}
                sx={{
                  display: 'flex',
                  gap: '20px'
                }}
              >
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      padding: '20px',
                      border: '1.021px solid #EAECF0',
                      background: '#FFF',
                      boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                      borderRadius: '8px'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #FAF5FF',
                        pb: '14px'
                      }}
                    >
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '18.926px',
                          fontWeight: '600',
                          lineHeight: '29.44px',
                          color: '#101828'
                        }}
                      >
                        CPA
                      </Typography>
                      <Box sx={{}}>
                        <Button
                          variant='outlined'
                          className='inter'
                          sx={{
                            padding: '10.514px 16.823px',
                            borderRadius: '8.411px',
                            border: '1.051px solid #D0D5DD',
                            fontSize: '14.72px',
                            fontWeight: '600',
                            lineHeight: '21.028px',
                            color: '#344054',
                            textTransform: 'capitalize'
                          }}
                          onClick={handleClickModal}
                        >
                          <FilterListIcon sx={{ mr: '8px' }} /> Filters
                        </Button>
                      </Box>
                    </Box>
                    <Box sx={{ textAlign: 'center', py: '30px' }}>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '38px',
                          fontWeight: '500',
                          lineHeight: '46.606px',
                          letterSpacing: '-0.763px',
                          color: '#101828'
                        }}
                      >
                        $53.56
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      padding: '20px',
                      border: '1.021px solid #EAECF0',
                      background: '#FFF',
                      boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                      borderRadius: '8px'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #FAF5FF',
                        pb: '14px'
                      }}
                    >
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '18.926px',
                          fontWeight: '600',
                          lineHeight: '29.44px',
                          color: '#101828'
                        }}
                      >
                        Profit Margin
                      </Typography>
                      <Box sx={{}}>
                        <Button
                          variant='outlined'
                          className='inter'
                          sx={{
                            padding: '10.514px 16.823px',
                            borderRadius: '8.411px',
                            border: '1.051px solid #D0D5DD',
                            fontSize: '14.72px',
                            fontWeight: '600',
                            lineHeight: '21.028px',
                            color: '#344054',
                            textTransform: 'capitalize'
                          }}
                          onClick={handleClickModal}
                        >
                          <FilterListIcon sx={{ mr: '8px' }} /> Filters
                        </Button>
                      </Box>
                    </Box>
                    <Box sx={{ textAlign: 'center', py: '30px' }}>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '38px',
                          fontWeight: '500',
                          lineHeight: '46.606px',
                          letterSpacing: '-0.763px',
                          color: '#039855'
                        }}
                      >
                        $23.56{' '}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Grid item xs={12} spacing={2}>
                <Box
                  sx={{
                    padding: '20px',
                    border: '1.021px solid #EAECF0',
                    background: '#FFF',
                    boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                    borderRadius: '8px'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid #FAF5FF',
                      pb: '14px'
                    }}
                  >
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '18.926px',
                        fontWeight: '600',
                        lineHeight: '29.44px',
                        color: '#101828'
                      }}
                    >
                      Call Duration
                    </Typography>
                    <Box sx={{}}>
                      <Button
                        variant='outlined'
                        className='inter'
                        sx={{
                          padding: '10.514px 16.823px',
                          borderRadius: '8.411px',
                          border: '1.051px solid #D0D5DD',
                          fontSize: '14.72px',
                          fontWeight: '600',
                          lineHeight: '21.028px',
                          color: '#344054',
                          textTransform: 'capitalize'
                        }}
                        onClick={handleClickModal}
                      >
                        <FilterListIcon sx={{ mr: '8px' }} /> Filters
                      </Button>
                    </Box>
                  </Box>
                  <Box sx={{ py: '30px', textAlign: 'center' }}>
                    <Typography
                      component={'span'}
                      className='inter'
                      sx={{
                        fontSize: '38px',
                        fontWeight: '500',
                        lineHeight: '46.606px',
                        letterSpacing: '-0.763px',
                        color: '#101828',
                        pr: '20px'
                      }}
                    >
                      04:44
                    </Typography>
                    <Typography
                      component={'span'}
                      className='inter'
                      sx={{
                        fontSize: '19px',
                        fontWeight: '500',
                        lineHeight: '6px',
                        color: '#039855'
                      }}
                    >
                      +1:23{' '}
                      <Typography
                        component={'span'}
                        className='inter'
                        sx={{
                          fontSize: '19px',
                          fontWeight: '500',
                          lineHeight: '6px',
                          color: '#98A2B3'
                        }}
                      >
                        than Average
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: '39.692px 23.774px 14.859px 23.774px',
                  border: '1.021px solid #EAECF0',
                  background: '#FFF',
                  boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                  borderRadius: '8px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #FAF5FF',
                    pb: '14px'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '18.926px',
                      fontWeight: '600',
                      lineHeight: '29.44px',
                      color: '#101828'
                    }}
                  >
                    Call Outcome
                  </Typography>
                  <Box sx={{}}>
                    <Button
                      variant='outlined'
                      className='inter'
                      sx={{
                        padding: '10.514px 16.823px',
                        borderRadius: '8.411px',
                        border: '1.051px solid #D0D5DD',
                        fontSize: '14.72px',
                        fontWeight: '600',
                        lineHeight: '21.028px',
                        color: '#344054',
                        textTransform: 'capitalize'
                      }}
                      onClick={handleClickModal}
                    >
                      <FilterListIcon sx={{ mr: '8px' }} /> Filters
                    </Button>
                  </Box>
                </Box>
                <Box id='chart' sx={{ display: 'flex', justifyContent: 'center' }}>
                  <ReactApexcharts
                    options={callOutComedata.options}
                    series={callOutComedata.series}
                    type='donut'
                    width={'420px'}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: '39.692px 23.774px 14.859px 23.774px',
                  border: '1.021px solid #EAECF0',
                  background: '#FFF',
                  boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                  borderRadius: '8px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #FAF5FF',
                    pb: '14px'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '18.926px',
                      fontWeight: '600',
                      lineHeight: '29.44px',
                      color: '#101828'
                    }}
                  >
                    Publisher{' '}
                  </Typography>
                  <Box sx={{}}>
                    <Button
                      variant='outlined'
                      className='inter'
                      sx={{
                        padding: '10.514px 16.823px',
                        borderRadius: '8.411px',
                        border: '1.051px solid #D0D5DD',
                        fontSize: '14.72px',
                        fontWeight: '600',
                        lineHeight: '21.028px',
                        color: '#344054',
                        textTransform: 'capitalize'
                      }}
                      onClick={handleClickModal}
                    >
                      <FilterListIcon sx={{ mr: '8px' }} /> Filters
                    </Button>
                    <Box sx={{ height: '200px' }}></Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: '39.692px 23.774px 14.859px 23.774px',
                  border: '1.021px solid #EAECF0',
                  background: '#FFF',
                  boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                  borderRadius: '8px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #FAF5FF',
                    pb: '14px'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '18.926px',
                      fontWeight: '600',
                      lineHeight: '29.44px',
                      color: '#101828'
                    }}
                  >
                    Buyer{' '}
                  </Typography>
                  <Box sx={{}}>
                    <Button
                      variant='outlined'
                      className='inter'
                      sx={{
                        padding: '10.514px 16.823px',
                        borderRadius: '8.411px',
                        border: '1.051px solid #D0D5DD',
                        fontSize: '14.72px',
                        fontWeight: '600',
                        lineHeight: '21.028px',
                        color: '#344054',
                        textTransform: 'capitalize'
                      }}
                      onClick={handleClickModal}
                    >
                      <FilterListIcon sx={{ mr: '8px' }} /> Filters
                    </Button>
                    <Box sx={{ height: '200px' }}></Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: '39.692px 23.774px 14.859px 23.774px',
                  border: '1.021px solid #EAECF0',
                  background: '#FFF',
                  boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                  borderRadius: '8px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #FAF5FF',
                    pb: '14px'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '18.926px',
                      fontWeight: '600',
                      lineHeight: '29.44px',
                      color: '#101828'
                    }}
                  >
                    Target{' '}
                  </Typography>
                  <Box sx={{}}>
                    <Button
                      variant='outlined'
                      className='inter'
                      sx={{
                        padding: '10.514px 16.823px',
                        borderRadius: '8.411px',
                        border: '1.051px solid #D0D5DD',
                        fontSize: '14.72px',
                        fontWeight: '600',
                        lineHeight: '21.028px',
                        color: '#344054',
                        textTransform: 'capitalize'
                      }}
                      onClick={handleClickModal}
                    >
                      <FilterListIcon sx={{ mr: '8px' }} /> Filters
                    </Button>
                    <Box sx={{ height: '200px' }}></Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: '39.692px 23.774px 14.859px 23.774px',
                  border: '1.021px solid #EAECF0',
                  background: '#FFF',
                  boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                  borderRadius: '8px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #FAF5FF',
                    pb: '14px'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '18.926px',
                      fontWeight: '600',
                      lineHeight: '29.44px',
                      color: '#101828'
                    }}
                  >
                    Campaign{' '}
                  </Typography>
                  <Box sx={{}}>
                    <Button
                      variant='outlined'
                      className='inter'
                      sx={{
                        padding: '10.514px 16.823px',
                        borderRadius: '8.411px',
                        border: '1.051px solid #D0D5DD',
                        fontSize: '14.72px',
                        fontWeight: '600',
                        lineHeight: '21.028px',
                        color: '#344054',
                        textTransform: 'capitalize'
                      }}
                      onClick={handleClickModal}
                    >
                      <FilterListIcon sx={{ mr: '8px' }} /> Filters
                    </Button>
                    <Box sx={{ height: '200px' }}></Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: '39.692px 23.774px 14.859px 23.774px',
                  border: '1.021px solid #EAECF0',
                  background: '#FFF',
                  boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                  borderRadius: '8px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #FAF5FF',
                    pb: '14px'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '18.926px',
                      fontWeight: '600',
                      lineHeight: '29.44px',
                      color: '#101828'
                    }}
                  >
                    Marketing Number{' '}
                  </Typography>
                  <Box sx={{}}>
                    <Button
                      variant='outlined'
                      className='inter'
                      sx={{
                        padding: '10.514px 16.823px',
                        borderRadius: '8.411px',
                        border: '1.051px solid #D0D5DD',
                        fontSize: '14.72px',
                        fontWeight: '600',
                        lineHeight: '21.028px',
                        color: '#344054',
                        textTransform: 'capitalize'
                      }}
                      onClick={handleClickModal}
                    >
                      <FilterListIcon sx={{ mr: '8px' }} /> Filters
                    </Button>
                    <Box sx={{ height: '200px' }}></Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: '39.692px 23.774px 14.859px 23.774px',
                  border: '1.021px solid #EAECF0',
                  background: '#FFF',
                  boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                  borderRadius: '8px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #FAF5FF',
                    pb: '14px'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '18.926px',
                      fontWeight: '600',
                      lineHeight: '29.44px',
                      color: '#101828'
                    }}
                  >
                    Caller Stats{' '}
                  </Typography>
                  <Box sx={{}}>
                    <Button
                      variant='outlined'
                      className='inter'
                      sx={{
                        padding: '10.514px 16.823px',
                        borderRadius: '8.411px',
                        border: '1.051px solid #D0D5DD',
                        fontSize: '14.72px',
                        fontWeight: '600',
                        lineHeight: '21.028px',
                        color: '#344054',
                        textTransform: 'capitalize'
                      }}
                      onClick={handleClickModal}
                    >
                      <FilterListIcon sx={{ mr: '8px' }} /> Filters
                    </Button>
                    <Box sx={{ height: '200px' }}></Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  padding: '39.692px 23.774px 14.859px 23.774px',
                  border: '1.021px solid #EAECF0',
                  background: '#FFF',
                  boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                  borderRadius: '8px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #FAF5FF',
                    pb: '14px'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '18.926px',
                      fontWeight: '600',
                      lineHeight: '29.44px',
                      color: '#101828'
                    }}
                  >
                    Top Locations{' '}
                  </Typography>
                  <Box sx={{}}>
                    <Button
                      variant='outlined'
                      className='inter'
                      sx={{
                        padding: '10.514px 16.823px',
                        borderRadius: '8.411px',
                        border: '1.051px solid #D0D5DD',
                        fontSize: '14.72px',
                        fontWeight: '600',
                        lineHeight: '21.028px',
                        color: '#344054',
                        textTransform: 'capitalize'
                      }}
                      onClick={handleClickLocationamodal}
                    >
                      <FilterListIcon sx={{ mr: '8px' }} /> Filters
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Box sx={{ width: '50%' }}>
                    <MapChart data={progressData} />
                  </Box>
                  <Box sx={{ width: '50%', m: '30px' }}>
                    <Box>
                      {progressData.map(item => {
                        return (
                          <>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px',
                                color: '#344054',
                                mb: '15px'
                              }}
                            >
                              {item.city}
                            </Typography>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: '15px'
                              }}
                            >
                              <Box
                                sx={{
                                  width: '100%',
                                  height: '8px',
                                  background: '#F2F4F7',
                                  borderRadius: '4px'
                                }}
                              >
                                <Box
                                  sx={{
                                    width: `${item.val}%`,
                                    height: '8px',
                                    borderRadius: '4px',
                                    background: item.color
                                  }}
                                ></Box>
                              </Box>
                              <Typography
                                className='inter'
                                sx={{
                                  fontSize: '14px',
                                  fontWeight: '500',
                                  lineHeight: '20px',
                                  color: '#344054',
                                  ml: '10px'
                                }}
                              >
                                {item.val}%
                              </Typography>
                            </Box>
                          </>
                        )
                      })}
                    </Box>
                    <Box
                      sx={{
                        justifyContent: 'end',
                        display: 'flex',
                        py: '20px',
                        borderTop: '1px solid #EAECF0'
                      }}
                    >
                      <Button
                        className='inter'
                        variant='outlined'
                        disableElevation
                        disableRipple
                        disableFocusRipple
                        disableTouchRipple
                        sx={{
                          padding: '10px 16px',
                          borderRadius: '8px',
                          border: '1px solid #D0D5DD',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#344054',
                          textTransform: 'capitalize'
                        }}
                        onClick={toggleReadMoreLess}
                      >
                        {isShowMore ? 'Show Less' : 'View All'}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{}}>
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '15px',
                    fontWeight: '500',
                    color: ' rgba(101, 108, 183, 0.60)',
                    mb: '14px'
                  }}
                >
                  Top 3 Targets
                </Typography>
                <Box sx={{ background: '#fff', borderRadius: '12px' }}>
                  <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                      <TableHead sx={{ background: '#F9FAFB', padding: '12px 0px' }}>
                        <TableRow>
                          <TableCell
                            className='inter'
                            sx={{
                              fontSize: '13px',
                              fontWeight: '500',
                              color: '#475467'
                            }}
                          >
                            Target Name
                          </TableCell>
                          <TableCell
                            className='inter'
                            sx={{
                              fontSize: '13px',
                              fontWeight: '500',
                              color: '#475467'
                            }}
                          >
                            Total Uploaded
                          </TableCell>
                          <TableCell
                            className='inter'
                            sx={{
                              fontSize: '13px',
                              fontWeight: '500',
                              color: '#475467'
                            }}
                          >
                            Negative Triggers
                          </TableCell>
                          <TableCell
                            className='inter'
                            sx={{
                              fontSize: '13px',
                              fontWeight: '500',
                              color: '#475467'
                            }}
                          >
                            Risk Factor
                          </TableCell>
                          <TableCell
                            className='inter'
                            sx={{
                              fontSize: '13px',
                              fontWeight: '500',
                              color: '#475467'
                            }}
                          >
                            Avg. Talk Time
                          </TableCell>
                          <TableCell
                            className='inter'
                            sx={{
                              fontSize: '13px',
                              fontWeight: '500',
                              color: '#475467'
                            }}
                          >
                            Total Transcriptions Mins
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{ padding: '26px 0px' }}>
                        {rows.map((row, index) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              '&:last-child td, &:last-child th': {}
                            }}
                          >
                            <TableCell
                              className='inter'
                              component='th'
                              scope='row'
                              sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#101828'
                              }}
                            >
                              {row.name}
                            </TableCell>
                            <TableCell
                              className='inter'
                              sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#475467'
                              }}
                            >
                              {row.uploded}
                            </TableCell>
                            <TableCell
                              className='inter'
                              sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#475467'
                              }}
                            >
                              {row.trigger}
                            </TableCell>
                            <TableCell
                              className='inter'
                              sx={{
                                color: index === 0 ? '#D92D20' : index === 1 ? '#FDB022' : '#12B76A',
                                fontSize: '16px',
                                fontWeight: '500'
                              }}
                            >
                              {row.risk}
                            </TableCell>
                            <TableCell
                              className='inter'
                              sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#475467'
                              }}
                            >
                              {row.talktime}
                            </TableCell>
                            <TableCell
                              className='inter'
                              sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#475467'
                              }}
                            >
                              {row.totalmins}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Box sx={{ textAlign: 'right', py: '15px', pr: '20px' }}>
                    <Button
                      className='inter'
                      variant='outlined'
                      disableElevation
                      disableRipple
                      disableFocusRipple
                      disableTouchRipple
                      sx={{
                        padding: '10px 16px',
                        borderRadius: '8px',
                        border: '1px solid #D0D5DD',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#344054',
                        textTransform: 'capitalize'
                      }}
                    >
                      Show All
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{}}>
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '15px',
                    fontWeight: '500',
                    color: ' rgba(101, 108, 183, 0.60)',
                    mb: '14px'
                  }}
                >
                  Top 3 Publishers
                </Typography>
                <Box sx={{ background: '#fff', borderRadius: '12px' }}>
                  <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                      <TableHead sx={{ background: '#F9FAFB', padding: '12px 0px' }}>
                        <TableRow>
                          <TableCell
                            className='inter'
                            sx={{
                              fontSize: '13px',
                              fontWeight: '500',
                              color: '#475467'
                            }}
                          >
                            publisher Name
                          </TableCell>
                          <TableCell
                            className='inter'
                            sx={{
                              fontSize: '13px',
                              fontWeight: '500',
                              color: '#475467'
                            }}
                          >
                            Total Uploaded
                          </TableCell>
                          <TableCell
                            className='inter'
                            sx={{
                              fontSize: '13px',
                              fontWeight: '500',
                              color: '#475467'
                            }}
                          >
                            Negative Triggers
                          </TableCell>
                          <TableCell
                            className='inter'
                            sx={{
                              fontSize: '13px',
                              fontWeight: '500',
                              color: '#475467'
                            }}
                          >
                            Risk Factor
                          </TableCell>
                          <TableCell
                            className='inter'
                            sx={{
                              fontSize: '13px',
                              fontWeight: '500',
                              color: '#475467'
                            }}
                          >
                            Avg. Talk Time
                          </TableCell>
                          <TableCell
                            className='inter'
                            sx={{
                              fontSize: '13px',
                              fontWeight: '500',
                              color: '#475467'
                            }}
                          >
                            Total Transcriptions Mins
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{ padding: '26px 0px' }}>
                        {publisherRows.map((row, index) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              '&:last-child td, &:last-child th': {}
                            }}
                          >
                            <TableCell
                              className='inter'
                              component='th'
                              scope='row'
                              sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#101828'
                              }}
                            >
                              {row.name}
                            </TableCell>
                            <TableCell
                              className='inter'
                              sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#475467'
                              }}
                            >
                              {row.uploded}
                            </TableCell>
                            <TableCell
                              className='inter'
                              sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#475467'
                              }}
                            >
                              {row.trigger}
                            </TableCell>
                            <TableCell
                              className='inter'
                              sx={{
                                color: index === 0 ? '#D92D20' : index === 1 ? '#FDB022' : '#12B76A',
                                fontSize: '16px',
                                fontWeight: '500'
                              }}
                            >
                              {row.risk}
                            </TableCell>
                            <TableCell
                              className='inter'
                              sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#475467'
                              }}
                            >
                              {row.talktime}
                            </TableCell>
                            <TableCell
                              className='inter'
                              sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#475467'
                              }}
                            >
                              {row.totalmins}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Box sx={{ textAlign: 'right', py: '15px', pr: '20px' }}>
                    <Button
                      className='inter'
                      variant='outlined'
                      disableElevation
                      disableRipple
                      disableFocusRipple
                      disableTouchRipple
                      sx={{
                        padding: '10px 16px',
                        borderRadius: '8px',
                        border: '1px solid #D0D5DD',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#344054',
                        textTransform: 'capitalize'
                      }}
                    >
                      Show All
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '15px',
            background: '#F7F3FD',
            gap: '10px',
            mt: '77px',
            transition: 'all 0.2s'
          }}
        >
          <Box>
            <Typography
              className='inter'
              sx={{ fontSize: '24px', fontWeight: '600', lineHeight: '32px', color: '#101828', mb: 1 }}
            >
              Welcome back, Olivia
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                sx={{
                  bgcolor: '#fff',
                  p: '16px 10px',
                  borderRadius: '12px',
                  border: '1px solid #EAECF0',
                  boxShadow: '0px 0.82426518201828px 1.64853036403656px 0px rgba(16, 24, 40, 0.06)'
                }}
              >
                <Box sx={{ display: 'flex', gap: '8px' }}>
                  <Box
                    sx={{
                      width: '30px',
                      height: '30px',
                      padding: '9px',
                      borderRadius: '50%',
                      background: '#FFFAEB',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/totolprogressfile.svg' />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '16px',
                        color: '#475467'
                      }}
                    >
                      Total Audits In Progress
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '30px',
                        fontWeight: '500',
                        lineHeight: '36px',
                        color: '#101828'
                      }}
                    >
                      42
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  bgcolor: '#fff',
                  p: '16px 10px',
                  borderRadius: '12px',
                  border: '1px solid #EAECF0',
                  boxShadow: '0px 0.82426518201828px 1.64853036403656px 0px rgba(16, 24, 40, 0.06)'
                }}
              >
                <Box sx={{ display: 'flex', gap: '8px' }}>
                  <Box
                    sx={{
                      width: '30px',
                      height: '30px',
                      padding: '9px',
                      borderRadius: '50%',
                      background: '#ECFDF3',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/totalcompletefile.svg' />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '16px',
                        color: '#475467'
                      }}
                    >
                      Total Audits Completed
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '30px',
                        fontWeight: '500',
                        lineHeight: '36px',
                        color: '#101828'
                      }}
                    >
                      12
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  bgcolor: '#fff',
                  p: '16px 10px',
                  borderRadius: '12px',
                  border: '1px solid #EAECF0',
                  boxShadow: '0px 0.82426518201828px 1.64853036403656px 0px rgba(16, 24, 40, 0.06)'
                }}
              >
                <Box sx={{ display: 'flex', gap: '8px' }}>
                  <Box
                    sx={{
                      width: '30px',
                      height: '30px',
                      padding: '9px',
                      borderRadius: '50%',
                      background: '#FEF3F2',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/totalreviewfile.svg' />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '16px',
                        color: '#475467'
                      }}
                    >
                      Manual Audits Triggered
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '30px',
                        fontWeight: '500',
                        lineHeight: '36px',
                        color: '#101828'
                      }}
                    >
                      10
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  bgcolor: '#fff',
                  p: '16px 10px',
                  borderRadius: '12px',
                  border: '1px solid #EAECF0',
                  boxShadow: '0px 0.82426518201828px 1.64853036403656px 0px rgba(16, 24, 40, 0.06)'
                }}
              >
                <Box sx={{ display: 'flex', gap: '8px' }}>
                  <Box
                    sx={{
                      width: '30px',
                      height: '30px',
                      padding: '9px',
                      borderRadius: '50%',
                      background: '#FEF3F2',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/totalreviewfile.svg' />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '16px',
                        color: '#475467'
                      }}
                    >
                      Total Transcription Hours
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '30px',
                        fontWeight: '500',
                        lineHeight: '36px',
                        color: '#101828'
                      }}
                    >
                      3:25{' '}
                      <Typography
                        component={'span'}
                        className='inter'
                        sx={{
                          fontSize: '13px',
                          fontWeight: '500',
                          lineHeight: '30px',
                          color: '#101828'
                        }}
                      >
                        Hrs
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              bgcolor: '#fff',
              borderRadius: '12px',
              border: '1px solid #EAECF0',
              boxShadow: '0px 0.82426518201828px 1.64853036403656px 0px rgba(16, 24, 40, 0.06)',
              overflow: 'hidden'
            }}
          >
            <Box sx={{ p: '20px' }}>
              <Typography
                className='inter'
                sx={{ fontSize: '13px', fontWeight: '500', lineHeight: '28px', color: '#344054' }}
              >
                Active Streams
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: '#F6F6FF',
                p: '15px 30px',
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '0.92px solid #EAECF0'
              }}
            >
              <Typography
                className='inter'
                sx={{
                  fontSize: '13px',
                  fontWeight: '500',
                  lineHeight: '16px',
                  color: '#475467',
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                Stream Name <ArrowDownward sx={{ fontSize: '15px', pl: '4px' }} />
              </Typography>
              <Typography
                className='inter'
                sx={{ fontSize: '13px', fontWeight: '500', lineHeight: '18px', color: '#344054' }}
              >
                Source
              </Typography>
            </Box>
            <Box sx={{ p: '9px 0px', bgcolor: '#FFF', borderBottom: '1px solid #EAECF0' }}>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', px: '20px', alignItems: 'center', py: '10px' }}
              >
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <Typography component={'img'} src='/assets/image/yellowdot.svg' />
                  <Typography
                    className='inter'
                    sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '16px', color: '#160647' }}
                  >
                    Stream_Name_Ringba_1
                  </Typography>
                </Box>
                <Box>
                  <Typography component={'img'} src='/assets/image/ringba.svg' sx={{ width: '22px' }} />
                </Box>
              </Box>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', px: '20px', alignItems: 'center', py: '10px' }}
              >
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <Typography component={'img'} src='/assets/image/greendot.svg' />
                  <Typography
                    className='inter'
                    sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '16px', color: '#160647' }}
                  >
                    Stream_Name_Trackdrive_2
                  </Typography>
                </Box>
                <Box>
                  <Typography component={'img'} src='/assets/image/track.svg' sx={{ width: '22px' }} />
                </Box>
              </Box>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', px: '20px', alignItems: 'center', py: '10px' }}
              >
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <Typography component={'img'} src='/assets/image/yellowdot.svg' />
                  <Typography
                    className='inter'
                    sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '16px', color: '#160647' }}
                  >
                    Stream_Name_Retreaver_3
                  </Typography>
                </Box>
                <Box>
                  <Typography component={'img'} src='/assets/image/retreaver.svg' sx={{ width: '22px' }} />
                </Box>
              </Box>
            </Box>
            <Box sx={{ padding: '20px ', display: 'flex', justifyContent: 'center' }}>
              <Button
                className='inter'
                variant='outlined'
                disableElevation
                disableRipple
                disableFocusRipple
                disableTouchRipple
                sx={{
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: '1px solid #D0D5DD',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#344054',
                  textTransform: 'capitalize'
                }}
              >
                View all streams
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: '#fff',
              borderRadius: '12px',
              border: '1px solid #EAECF0',
              boxShadow: '0px 0.82426518201828px 1.64853036403656px 0px rgba(16, 24, 40, 0.06)',
              overflow: 'hidden'
            }}
          >
            <Box sx={{ p: '20px' }}>
              <Typography
                className='inter'
                sx={{ fontSize: '16px', fontWeight: '500', lineHeight: '28px', color: '#344054', textAlign: 'center' }}
              >
                File Upload
              </Typography>
            </Box>
            <Box
              sx={{
                padding: '24px ',
                display: 'flex',
                justifyContent: 'center',
                borderTop: '1px solid #EAECF0',
                borderBottom: '1px solid #EAECF0'
              }}
            >
              <Button
                className='inter'
                disableRipple
                disableElevation
                variant='contained'
                sx={{
                  padding: '10px 16px',
                  borderRadius: '8px',
                  bgcolor: '#7F56D9',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#fff',
                  textTransform: 'capitalize',
                  width: '100%',
                  '&.MuiButton-root:hover': {
                    bgcolor: '#7F56D9'
                  }
                }}
              >
                Upload
              </Button>
            </Box>
            <Box sx={{ padding: '23px 30px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <Typography sx={{ fontSize: '12px', fontWeight: '400', lineHeight: '18px', color: '#475467' }}>
                  • MP3, WAV, AAC, WMA (100 MB max file size)
                </Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: '400', lineHeight: '18px', color: '#475467' }}>
                  • Max 100 files per upload.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: '#fff',
              borderRadius: '12px',
              border: '1px solid #EAECF0',
              boxShadow: '0px 0.82426518201828px 1.64853036403656px 0px rgba(16, 24, 40, 0.06)',
              overflow: 'hidden'
            }}
          >
            <Box sx={{ p: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Typography
                className='inter'
                sx={{
                  fontSize: '16px',
                  fontWeight: '500',
                  lineHeight: '28px',
                  color: '#344054'
                }}
              >
                My Files
              </Typography>
              <Box sx={{ borderRight: '1px solid #CECBD6', height: '18px' }}></Box>
              <Box sx={{ bgcolor: '#F6F6FF', p: '3px 16px', borderRadius: '18px' }}>
                <Typography
                  className='inter'
                  sx={{ color: '#6941C6', fontSize: '15px', fontWeight: '500', lineHeight: '21px' }}
                >
                  8 Files
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
                p: '20px',
                borderTop: '1px solid #EAECF0',
                borderBottom: '1px solid #EAECF0'
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
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead
                    sx={{
                      background: '#F9FAFB',
                      padding: '12px 0px',
                      textAlign: 'left'
                    }}
                  >
                    <TableRow sx={{ textAlign: 'left' }}>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                          <Box>
                            <CustomCheckbox />
                          </Box>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '12px',
                              fontWeight: '500',
                              lineHeight: '18px',
                              color: '#475467'
                            }}
                          >
                            Phone Number
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
                        Name
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
                        Email address
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
                        Total Contacts
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
                        Lead Status
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ padding: '26px 0px' }}>
                    {TableData.map((item, index) => (
                      <TableRow>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <Box>
                              <CustomCheckbox />
                            </Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '18px',
                                color: '#475467'
                              }}
                            >
                              {item.phone}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '20px',
                            color: '#101828'
                          }}
                        >
                          {item.name}
                        </TableCell>
                        <TableCell
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#475467'
                          }}
                        >
                          {item.email}
                        </TableCell>
                        <TableCell
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#475467'
                          }}
                        >
                          {item.contact}
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
                              {item.status}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Button
                              variant='outlined'
                              sx={{
                                padding: '10px 16px',
                                border: '1px solid #D0D5DD',
                                borderRadius: '8px',
                                textTransform: 'capitalize',
                                fontSize: '14px',
                                fontWeight: '600',
                                lineHeight: '20px',
                                color: '#344054'
                              }}
                            >
                              View
                            </Button>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 24px 16px 24px'
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
          <Box>
            <MobileFooter />
          </Box>
        </Box>
      )}

      <ManageWidgetsabar isOpen={IsOpen} setisOpen={setIsOpen} />
      <FilterModal open={openFilterModal} onClose={handleCloseModal} />
      <LocationFilterModal open={openLocationFilterModal} onClose={handleCloseLoocationModal} />
    </>
  )
}

export default DashboardMain
