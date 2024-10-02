import { useTheme } from '@emotion/react'
import { KeyboardArrowDown } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import FilterListIcon from '@mui/icons-material/FilterList'

import { Box, Button, IconButton, Menu, MenuItem, MenuList, Modal, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'

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

const SavedFilter = [
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

const targetMenu = ['+1 547 2314', '+1 863 5633', '+1 522 5657', '+1 632 8734']

const buyerMenu = ['Buyer_1', 'Buyer_2', 'Buyer_3', 'Buyer_4']

const campaignMenu = ['Campaign_1', 'Campaign_2', 'Campaign_3', 'Campaign_4']

const publisherMenu = ['Pub_1', 'Pub_2', 'Pub_3', 'Pub_4']

const FilterModal = props => {
  const { open, onClose } = props
  const [anchorElSavedFilter, setAnchorElSavedFilter] = useState(null)
  const [anchorElIndustries, setAnchorElIndustries] = useState(null)
  const [anchorElTarget, setAnchorElTarget] = useState(null)
  const [anchorElBuyer, setAnchorElBuyer] = useState(null)
  const [anchorElCampaign, setAnchorElCampaign] = useState(null)
  const [anchorElPublisher, setAnchorElPublisher] = useState(null)

  const [selectedSavedFilter, setSavedFilter] = useState('Select Saved filter')
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [selectedTarget, setSelectedTarget] = useState('All')
  const [selectedBuyer, setSelectedBuyer] = useState('All')
  const [selectedCampaign, setSelectedCampaign] = useState('All')
  const [selectedPublisher, setSelectedPublisher] = useState('All')

  // handleClick
  const handleClickSavedFilter = event => {
    setAnchorElSavedFilter(event.currentTarget)
  }

  const handleClickIndustries = event => {
    setAnchorElIndustries(event.currentTarget)
  }

  const handleClickTarget = event => {
    setAnchorElTarget(event.currentTarget)
  }

  const handleClickBuyer = event => {
    setAnchorElBuyer(event.currentTarget)
  }

  const handleClickCampaign = event => {
    setAnchorElCampaign(event.currentTarget)
  }

  const handleClickPublisher = event => {
    setAnchorElPublisher(event.currentTarget)
  }

  // handleClose
  const handleCloseSavedFilter = savedfilter => {
    setAnchorElSavedFilter(null)
    setSavedFilter(savedfilter)
  }

  const handleCloseIndustries = industry => {
    setAnchorElIndustries(null)
    setSelectedIndustry(industry)
  }

  const handleCloseTarget = Target => {
    setAnchorElTarget(null)
    setSelectedTarget(Target)
  }

  const handleCloseBuyer = Buyer => {
    setAnchorElBuyer(null)
    setSelectedBuyer(Buyer)
  }

  const handleCloseCampaign = Campaign => {
    setAnchorElCampaign(null)
    setSelectedCampaign(Campaign)
  }

  const handleClosePublisher = Publisher => {
    setAnchorElPublisher(null)
    setSelectedPublisher(Publisher)
  }

  const fieldStyle = {
    px: '14px',
    py: '10px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    color: '#475467',
    width: '100%',
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

  const theme = useTheme()

  return (
    <Fragment>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <Box
            sx={{
              width: { xs: '250px', sm: '400px' },
              height: 'auto',
              borderRadius: '22px',
              background: '#FFF',
              boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                pt: '20px',
                px: '20px'
              }}
            >
              <Typography
                className='inter'
                sx={{
                  fontSize: '20px',
                  fontWeight: '600',
                  lineHeight: '30px',
                  color: '#101828',
                  mb: '4px'
                }}
              >
                Filters
              </Typography>
              <IconButton>
                <CloseIcon onClick={onClose} />
              </IconButton>
            </Box>
            <Box sx={{ mx: '20px' }}>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  color: '#475467'
                }}
              >
                Apply filters to Locations
              </Typography>{' '}
            </Box>
            <Box sx={{ my: '24px', mx: '20px' }}>
              <Button
                variant='outlined'
                className='inter'
                sx={{
                  width: '100%',
                  padding: '10px 14px ',
                  display: 'flex',
                  justifyContent: 'space-between',
                  textTransform: 'capitalize',
                  verticalAlign: 'center',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  borderRadius: '8px',
                  border: '1px solid #D0D5DD',
                  color: '#667085'
                }}
                onClick={handleClickSavedFilter}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FilterListIcon sx={{ mr: '5px' }} />
                  {selectedSavedFilter}
                </Box>
                <KeyboardArrowDown />
              </Button>
              <Menu
                anchorEl={anchorElSavedFilter}
                open={Boolean(anchorElSavedFilter)}
                onClose={() => handleCloseSavedFilter(selectedSavedFilter)}
              >
                {SavedFilter.map(savedfilter => (
                  <MenuItem key={savedfilter} onClick={() => handleCloseSavedFilter(savedfilter)}>
                    {savedfilter}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                mx: '20px'
              }}
            >
              {/* industries */}
              <Box>
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    color: '#475467',
                    mb: '10px'
                  }}
                >
                  Industry
                </Typography>
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

              {/* target */}
              <Box>
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    color: '#475467',
                    mb: '10px'
                  }}
                >
                  Target
                </Typography>
                <Button sx={fieldStyle} disableRipple onClick={handleClickTarget} variant='outlined' className='inter'>
                  <Box>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '14px',
                        fontWeight: '500',
                        lineHeight: '19px'
                      }}
                    >
                      {selectedTarget}
                    </Typography>
                  </Box>
                  <KeyboardArrowDown />
                </Button>
                <Menu
                  anchorEl={anchorElTarget}
                  open={Boolean(anchorElTarget)}
                  onClose={() => handleCloseTarget(selectedTarget)}
                >
                  {targetMenu.map(Target => (
                    <MenuItem key={Target} onClick={() => handleCloseTarget(Target)}>
                      {Target}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Buyer */}
              <Box>
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    color: '#475467',
                    mb: '10px'
                  }}
                >
                  Buyer
                </Typography>
                <Button sx={fieldStyle} disableRipple onClick={handleClickBuyer} variant='outlined' className='inter'>
                  <Box>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '14px',
                        fontWeight: '500',
                        lineHeight: '19px'
                      }}
                    >
                      {selectedBuyer}
                    </Typography>
                  </Box>
                  <KeyboardArrowDown />
                </Button>
                <Menu
                  anchorEl={anchorElBuyer}
                  open={Boolean(anchorElBuyer)}
                  onClose={() => handleCloseBuyer(selectedBuyer)}
                >
                  {buyerMenu.map(Buyer => (
                    <MenuItem key={Buyer} onClick={() => handleCloseBuyer(Buyer)}>
                      {Buyer}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Campaign */}
              <Box>
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    color: '#475467',
                    mb: '10px'
                  }}
                >
                  Campaign
                </Typography>
                <Button
                  sx={fieldStyle}
                  disableRipple
                  onClick={handleClickCampaign}
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
                      {selectedCampaign}
                    </Typography>
                  </Box>
                  <KeyboardArrowDown />
                </Button>
                <Menu
                  anchorEl={anchorElCampaign}
                  open={Boolean(anchorElCampaign)}
                  onClose={() => handleCloseCampaign(selectedCampaign)}
                >
                  {campaignMenu.map(Campaign => (
                    <MenuItem key={Campaign} onClick={() => handleCloseCampaign(Campaign)}>
                      {Campaign}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Publisher */}
              <Box>
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    color: '#475467',
                    mb: '10px'
                  }}
                >
                  Publisher
                </Typography>
                <Button
                  sx={fieldStyle}
                  disableRipple
                  onClick={handleClickPublisher}
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
                      {selectedPublisher}
                    </Typography>
                  </Box>
                  <KeyboardArrowDown />
                </Button>
                <Menu
                  anchorEl={anchorElPublisher}
                  open={Boolean(anchorElPublisher)}
                  onClose={() => handleClosePublisher(selectedPublisher)}
                >
                  {publisherMenu.map(Publisher => (
                    <MenuItem key={Publisher} onClick={() => handleClosePublisher(Publisher)}>
                      {Publisher}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
            <Box sx={{ borderTop: '1px solid #EAECF0', mt: '30px' }}>
              <Box
                padding={'16px 24px'}
                sx={{
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
                      fontWeight: '600',
                      lineHeight: '20px',
                      color: '#6941C6'
                    }}
                  >
                    Save filter
                  </Typography>
                </Box>
                <Box display={'flex'} gap={'10px'}>
                  <Button
                    variant='outlined'
                    className='inter'
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
                    onClick={onClose}
                  >
                    Cancle
                  </Button>
                  <Button
                    variant='contained'
                    className='inter'
                    sx={{
                      padding: '10px 16px',
                      borderRadius: '8px',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                      color: '#fff',
                      background: '#7F56D9'
                    }}
                  >
                    Apply
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Fragment>
  )
}

export default FilterModal
