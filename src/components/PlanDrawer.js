import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { IconButton } from '@mui/material'

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

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))

function PlanDrawer(props) {
  const { window, openPlan, PlantoggleDrawer } = props
  const [clickedItemId, setClickedItemId] = useState(null)

  const handleClickedItem = itemId => {
    setClickedItemId(prevState => (prevState === itemId ? null : itemId))
  }

  return (
    <Root>
      <SwipeableDrawer
        sx={{
          '.MuiPaper-root': {
            height: 'auto',
            overflow: 'scroll',
            borderTopLeftRadius: '16px !important',
            borderTopRightRadius: '16px !important'
          }
        }}
        anchor='bottom'
        open={openPlan}
        onClose={PlantoggleDrawer(false)}
        onOpen={PlantoggleDrawer(true)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: false
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px',
            overflow: 'visible'
          }}
        >
          <Box sx={{ padding: '13px ', borderBottom: '1px solid #E9E9E9' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <IconButton onClick={PlantoggleDrawer(false)}>
                <KeyboardArrowLeft sx={{ color: '#667085' }} />
              </IconButton>
              <Typography
                className='inter'
                sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#667085' }}
              >
                Plans
              </Typography>
              <Box></Box>
            </Box>
          </Box>
          <Box sx={{ p: '15px' }}>
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
        </Box>
      </SwipeableDrawer>
    </Root>
  )
}
export default PlanDrawer
