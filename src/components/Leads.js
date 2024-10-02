import React, { useState } from 'react'
import {
  Box,
  Button,
  Pagination,
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
import { Add, WestOutlined } from '@mui/icons-material'
import EastIcon from '@mui/icons-material/East'
import CustomCheckbox from '@/components/CustomCheckbox'
import MobileFooter from './MobileFooter'

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

const Leads = ({ selectedCardData }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const screen = useMediaQuery('(min-width:900px)')

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage < 6) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value)
  }

  return (
    <>
      {screen ? (
        <Box
          sx={{
            p: '24px',
            bgcolor: '#F7F3FD',
            transition: 'all 0.2s',
            ml: selectedCardData ? '315px' : '115px'
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
                      Leads
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
                        48 Leads
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
                    Manage your leads here.
                  </Typography>
                </Box>
                <Box>
                  <Button
                    disableElevation
                    disableRipple
                    className='inter'
                    variant='outlined'
                    sx={{
                      padding: '10px 16px',
                      border: '1px solid #D0D5DD',
                      borderRadius: '8px',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                      color: '#344054',
                      mr: '8px'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/downloadcsv.svg' sx={{ mr: '8px' }} />
                    Download CSV
                  </Button>
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
                    Add Lead
                  </Button>
                </Box>
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
                    onClick={handlePreviousClick}
                  >
                    <WestOutlined sx={{ pr: '8px' }} />
                    Previous
                  </Button>
                </Box>
                <Box>
                  <Pagination
                    count={6}
                    page={currentPage}
                    onChange={handlePaginationChange}
                    hideNextButton={currentPage}
                    hidePrevButton={currentPage}
                    className='inter'
                    sx={{
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '20px',
                      color: '#1D2939'
                    }}
                  />
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
                    onClick={handleNextClick}
                  >
                    Next
                    <EastIcon sx={{ pl: '8px' }} />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              p: '15px',
              bgcolor: '#F7F3FD',
              transition: 'all 0.2s',
              mt: '77px'
            }}
          >
            <Box
              sx={{
                border: '1px solid #EAECF0',
                borderRadius: '12px',
                boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
                bgcolor: '#FFF '
              }}
            >
              <Box sx={{ pt: '20px ', px: '20px' }}>
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
                        Leads
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
                          48 Leads
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '10px',
                    p: '20px 0px',
                    mt: '20px',
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
                      onClick={handlePreviousClick}
                    >
                      Previous
                    </Button>
                  </Box>
                  <Box>
                    <Pagination
                      count={6}
                      page={currentPage}
                      onChange={handlePaginationChange}
                      hideNextButton={currentPage}
                      hidePrevButton={currentPage}
                      className='inter'
                      sx={{
                        fontSize: '14px',
                        fontWeight: '500',
                        lineHeight: '20px',
                        color: '#1D2939'
                      }}
                    />
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
                      onClick={handleNextClick}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <MobileFooter/>
        </>
      )}
    </>
  )
}

export default Leads
