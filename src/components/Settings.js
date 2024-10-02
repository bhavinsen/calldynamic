import DashboardLayout from '@/components/DashboardLayout/DashboardLayout'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Dashfooter from '@/components/Dashfooter'
import MyDetail from '@/components/myDetail'
import Password from '@/components/Password/Password'
import MyTeam from '@/components/MyTeam/MyTeam'
import Notification from '@/components/Notification'
import BillingPlan from '@/components/BillingPlan/BillingPlan'
import Intigrations from '@/components/Intigrations'
import ApiSettings from '@/components/API'
import { KeyboardArrowDown } from '@mui/icons-material'
import Drawer from './Drawer'

const Settings = ({ selectedCardData }) => {
  const [value, setValue] = useState('1')
  const [data, setData] = useState('My Detail')
  const [open, setOpen] = useState(false)
  
  const screen = useMediaQuery('(min-width:900px)')
  
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  
  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

  return (
    <>
      {screen ? (
        <Box
          sx={{
            p: '32px',
            bgcolor: '#F9FAFB',
            transition: 'all 0.2s',
            ml: selectedCardData ? '315px' : '115px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '24px'
            }}
          >
            <Box>
              <Typography
                className='inter'
                sx={{
                  fontSize: '30px',
                  fontWeight: 600,
                  lineHeight: '38px',
                  color: '#101828'
                }}
              >
                Settings
              </Typography>
            </Box>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: '8px',
                  padding: '10px 14px',
                  border: '1px solid #D0D5DD',
                  borderRadius: '8px',
                  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                  pr: '5px',
                  background: '#fff'
                }}
              >
                <Typography component={'img'} src='/assets/image/search-lg.svg' />
                <Typography
                  className='inter'
                  component={'input'}
                  type='search'
                  placeholder='Search'
                  sx={{
                    padding: '',
                    background: '#FFF',
                    border: 'none',
                    outline: 'none',
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    color: '#667085'
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{}}>
                <TabList
                  onChange={handleChange}
                  aria-label='lab API tabs example'
                  sx={{
                    '.Mui-selected': { color: '#6941C6 !important' },
                    '.MuiTabs-indicator': { backgroundColor: '#6941C6' }
                  }}
                >
                  <Tab
                    className='inter'
                    label='My details'
                    value='1'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                  <Tab
                    className='inter'
                    label='Password'
                    value='2'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                  <Tab
                    className='inter'
                    label='My Team '
                    value='3'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                  <Tab
                    className='inter'
                    label='Mapping'
                    value='4'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                  <Tab
                    className='inter'
                    label='Billing & Plan'
                    value='5'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                  <Tab
                    className='inter'
                    label='Notifications'
                    value='6'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                  <Tab
                    className='inter'
                    label='Integrations'
                    value='7'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                  <Tab
                    className='inter'
                    label='API'
                    value='8'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                </TabList>
              </Box>
              <TabPanel value='1' sx={{ p: '0', pt: '20px' }}>
                <MyDetail />
              </TabPanel>
              <TabPanel value='2' sx={{ p: '0', pt: '20px' }}>
                <Password />
              </TabPanel>
              <TabPanel value='3' sx={{ p: '0', pt: '20px' }}>
                <MyTeam />
              </TabPanel>
              <TabPanel value='5' sx={{ p: '0', pt: '20px' }}>
                <BillingPlan />
              </TabPanel>
              <TabPanel value='6' sx={{ p: '0', pt: '20px' }}>
                <Notification />
              </TabPanel>
              <TabPanel value='7' sx={{ p: '0', pt: '20px' }}>
                <Intigrations />
              </TabPanel>
              <TabPanel value='8' sx={{ p: '0', pt: '20px' }}>
                <ApiSettings />
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            p: '20px',
            bgcolor: '#F9FAFB',
            transition: 'all 0.2s',
            mt: '77px'
          }}
        >
          <Box
            sx={{
              mb: '24px'
            }}
          >
            <Box>
              <Typography
                className='inter'
                sx={{
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  color: '#101828'
                }}
              >
                Settings
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              disableRipple
              sx={{
                border: '1px solid #D0D5DD',
                borderRadius: '8px',
                padding: '10px 14px',
                width: '100%',
                textTransform: 'capitalize'
              }}
            >
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                onClick={toggleDrawer(true)}
              >
                <Typography
                  className='inter'
                  sx={{ fontSize: '16px', fontWeight: '500', lineHeight: '24px', color: '#101828' }}
                >
                  {data}
                </Typography>
                <KeyboardArrowDown sx={{ color: '#101828' }} />
              </Box>
            </Button>
          </Box>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <TabList
                  onChange={handleChange}
                  aria-label='lab API tabs example'
                  sx={{
                    '.Mui-selected': { color: '#6941C6 !important' },
                    '.MuiTabs-indicator': { backgroundColor: '#6941C6' }
                  }}
                >
                  <Tab
                    className='inter'
                    label='My details'
                    value='1'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                  <Tab
                    className='inter'
                    label='Password'
                    value='2'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                  <Tab
                    className='inter'
                    label='My Team '
                    value='3'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                  <Tab
                    className='inter'
                    label='Mapping'
                    value='4'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                  <Tab
                    className='inter'
                    label='Billing & Plan'
                    value='5'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                  <Tab
                    className='inter'
                    label='Notifications'
                    value='6'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                  <Tab
                    className='inter'
                    label='Integrations'
                    value='7'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                  <Tab
                    className='inter'
                    label='API'
                    value='8'
                    disableTouchRipple
                    sx={{
                      borderBottom: '1px solid #EAECF0',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: '#667085'
                    }}
                  />
                </TabList>
              </Box>
              <TabPanel value={1} sx={{ p: '0', pt: '20px' }}>
                <MyDetail />
              </TabPanel>
              <TabPanel value={2} sx={{ p: '0', pt: '20px' }}>
                <Password />
              </TabPanel>
              <TabPanel value={3} sx={{ p: '0', pt: '20px' }}>
                <MyTeam />
              </TabPanel>
              <TabPanel value={4} sx={{ p: '0', pt: '20px' }}>
                <BillingPlan />
              </TabPanel>
              <TabPanel value={5} sx={{ p: '0', pt: '20px' }}>
                <Notification />
              </TabPanel>
              <TabPanel value={6} sx={{ p: '0', pt: '20px' }}>
                <Intigrations />
              </TabPanel>
              <TabPanel value={7} sx={{ p: '0', pt: '20px' }}>
                <ApiSettings />
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      )}
      <Drawer open={open} toggleDrawer={toggleDrawer} setValue={setValue} setData={setData} />
    </>
  )
}

export default Settings
