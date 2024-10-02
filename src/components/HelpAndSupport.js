import GetInTouch from '@/components/getintouch'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import MobileFooter from './MobileFooter'

const HelpAndSupport = ({ selectedCardData }) => {
  const [expanded, setExpanded] = useState(null)

  const screen = useMediaQuery('(min-width:900px)')

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null)
  }
  return (
    <>
      {screen ? (
        <Box
          sx={{
            p: '24px',
            bgcolor: '#fff',
            ml: selectedCardData ? '315px' : '115px',
            transition: 'all 0.2s'
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: '50px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                <Typography
                  className='inter'
                  sx={{ fontSize: '13px', fontWeight: '600', lineHeight: '19px', color: '#6941C6' }}
                >
                  Support
                </Typography>
                <Typography
                  className='inter'
                  sx={{ fontSize: '38px', fontWeight: '600', lineHeight: '47px', color: '#101828' }}
                >
                  FAQs
                </Typography>
                <Typography
                  className='inter'
                  sx={{ fontSize: '15px', fontWeight: '400', lineHeight: '24px', color: '#475467' }}
                >
                  Need something cleared up? Here are our most frequently asked questions.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ my: '50px', mx: '20px', maxWidth: '800px', width: '100%' }}>
            <Box>
              <Accordion
                sx={{
                  my: '10px',
                  boxShadow: 'none',
                  borderBottom: 'none',
                  bgcolor: '#F9FAFB',
                  borderRadius: '13px !important'
                }}
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === 'panel1' ? (
                      <RemoveCircleOutlineIcon sx={{ mx: '10px' }} />
                    ) : (
                      <AddCircleOutlineIcon sx={{ mx: '10px' }} />
                    )
                  }
                  aria-controls='panel1-content'
                  id='panel1-header'
                  sx={{ flexDirection: 'row-reverse' }}
                >
                  <Typography
                    className='inter'
                    sx={{ fontSize: '15px', fontWeight: '500', lineHeight: '23px', color: '#101828' }}
                  >
                    Is there a free trial available?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '19px', color: '#475467', ml: '20px' }}
                  >
                    Yes, you can try us for free for up to 30 minutes of free transcription.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{ my: '10px', boxShadow: 'none', bgcolor: '#F9FAFB', borderRadius: '13px !important' }}
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === 'panel2' ? (
                      <RemoveCircleOutlineIcon sx={{ mx: '10px' }} />
                    ) : (
                      <AddCircleOutlineIcon sx={{ mx: '10px' }} />
                    )
                  }
                  aria-controls='panel2-content'
                  id='panel2-header'
                  sx={{ flexDirection: 'row-reverse' }}
                >
                  <Typography
                    className='inter'
                    sx={{ fontSize: '15px', fontWeight: '500', lineHeight: '23px', color: '#101828' }}
                  >
                    Can I change my plan later?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '19px', color: '#475467' }}
                  >
                    Yes, you can upgrade or downgrade your plan at any time. You can do this under settings, then click
                    on billing. You will see all your plan details and credits on this page. If you still need help, you
                    can always reach out via chat or phone.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{ my: '10px', boxShadow: 'none', bgcolor: '#F9FAFB', borderRadius: '13px !important' }}
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === 'panel3' ? (
                      <RemoveCircleOutlineIcon sx={{ mx: '10px' }} />
                    ) : (
                      <AddCircleOutlineIcon sx={{ mx: '10px' }} />
                    )
                  }
                  aria-controls='panel2-content'
                  id='panel2-header'
                  sx={{ flexDirection: 'row-reverse' }}
                >
                  <Typography
                    className='inter'
                    sx={{ fontSize: '15px', fontWeight: '500', lineHeight: '23px', color: '#101828' }}
                  >
                    What is your cancellation policy?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '19px', color: '#475467' }}
                  >
                    You can cancel anytime as there are no contracts with CallDynamics. 
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{ my: '10px', boxShadow: 'none', bgcolor: '#F9FAFB', borderRadius: '13px !important' }}
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === 'panel4' ? (
                      <RemoveCircleOutlineIcon sx={{ mx: '10px' }} />
                    ) : (
                      <AddCircleOutlineIcon sx={{ mx: '10px' }} />
                    )
                  }
                  aria-controls='panel2-content'
                  id='panel2-header'
                  sx={{ flexDirection: 'row-reverse' }}
                >
                  <Typography
                    className='inter'
                    sx={{ fontSize: '15px', fontWeight: '500', lineHeight: '23px', color: '#101828' }}
                  >
                    Can other info be added to an invoice?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '19px', color: '#475467' }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{ my: '10px', boxShadow: 'none', bgcolor: '#F9FAFB', borderRadius: '13px !important' }}
                expanded={expanded === 'panel5'}
                onChange={handleChange('panel5')}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === 'panel5' ? (
                      <RemoveCircleOutlineIcon sx={{ mx: '10px' }} />
                    ) : (
                      <AddCircleOutlineIcon sx={{ mx: '10px' }} />
                    )
                  }
                  aria-controls='panel2-content'
                  id='panel2-header'
                  sx={{ flexDirection: 'row-reverse' }}
                >
                  <Typography
                    className='inter'
                    sx={{ fontSize: '15px', fontWeight: '500', lineHeight: '23px', color: '#101828' }}
                  >
                    How does billing work?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '19px', color: '#475467' }}
                  >
                    Depending on your plan, you will pre-pay on your account for minutes. These minutes never expire and
                    roll over after each month. This excludes the included minutes in the Basic and Business plans. 
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{ my: '10px', boxShadow: 'none', bgcolor: '#F9FAFB', borderRadius: '13px !important' }}
                expanded={expanded === 'panel6'}
                onChange={handleChange('panel6')}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === 'panel6' ? (
                      <RemoveCircleOutlineIcon sx={{ mx: '10px' }} />
                    ) : (
                      <AddCircleOutlineIcon sx={{ mx: '10px' }} />
                    )
                  }
                  aria-controls='panel2-content'
                  id='panel2-header'
                  sx={{ flexDirection: 'row-reverse' }}
                >
                  <Typography
                    className='inter'
                    sx={{ fontSize: '15px', fontWeight: '500', lineHeight: '23px', color: '#101828' }}
                  >
                    How do I change my account email?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '19px', color: '#475467' }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
          <Box>
            <GetInTouch />
          </Box>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              p: '10px',
              bgcolor: '#fff',
              mt: '90px'
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: '50px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '13px', fontWeight: '600', lineHeight: '19px', color: '#6941C6' }}
                  >
                    Support
                  </Typography>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '38px', fontWeight: '600', lineHeight: '47px', color: '#101828' }}
                  >
                    FAQs
                  </Typography>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '15px', fontWeight: '400', lineHeight: '24px', color: '#475467' }}
                  >
                    Need something cleared up? Here are our most frequently asked questions.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ my: '50px', mx: '10px' }}>
              <Box>
                <Accordion
                  sx={{
                    my: '10px',
                    boxShadow: 'none',
                    borderBottom: 'none',
                    bgcolor: '#F9FAFB',
                    borderRadius: '13px !important'
                  }}
                  expanded={expanded === 'panel1'}
                  onChange={handleChange('panel1')}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === 'panel1' ? (
                        <RemoveCircleOutlineIcon sx={{ mx: '10px' }} />
                      ) : (
                        <AddCircleOutlineIcon sx={{ mx: '10px' }} />
                      )
                    }
                    aria-controls='panel1-content'
                    id='panel1-header'
                    sx={{ flexDirection: 'row-reverse' }}
                  >
                    <Typography
                      className='inter'
                      sx={{ fontSize: '15px', fontWeight: '500', lineHeight: '23px', color: '#101828' }}
                    >
                      Is there a free trial available?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      className='inter'
                      sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '19px', color: '#475467', ml: '20px' }}
                    >
                      Yes, you can try us for free for up to 30 minutes of free transcription.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ my: '10px', boxShadow: 'none', bgcolor: '#F9FAFB', borderRadius: '13px !important' }}
                  expanded={expanded === 'panel2'}
                  onChange={handleChange('panel2')}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === 'panel2' ? (
                        <RemoveCircleOutlineIcon sx={{ mx: '10px' }} />
                      ) : (
                        <AddCircleOutlineIcon sx={{ mx: '10px' }} />
                      )
                    }
                    aria-controls='panel2-content'
                    id='panel2-header'
                    sx={{ flexDirection: 'row-reverse' }}
                  >
                    <Typography
                      className='inter'
                      sx={{ fontSize: '15px', fontWeight: '500', lineHeight: '23px', color: '#101828' }}
                    >
                      Can I change my plan later?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      className='inter'
                      sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '19px', color: '#475467' }}
                    >
                      Yes, you can upgrade or downgrade your plan at any time. You can do this under settings, then
                      click on billing. You will see all your plan details and credits on this page. If you still need
                      help, you can always reach out via chat or phone.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ my: '10px', boxShadow: 'none', bgcolor: '#F9FAFB', borderRadius: '13px !important' }}
                  expanded={expanded === 'panel3'}
                  onChange={handleChange('panel3')}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === 'panel3' ? (
                        <RemoveCircleOutlineIcon sx={{ mx: '10px' }} />
                      ) : (
                        <AddCircleOutlineIcon sx={{ mx: '10px' }} />
                      )
                    }
                    aria-controls='panel2-content'
                    id='panel2-header'
                    sx={{ flexDirection: 'row-reverse' }}
                  >
                    <Typography
                      className='inter'
                      sx={{ fontSize: '15px', fontWeight: '500', lineHeight: '23px', color: '#101828' }}
                    >
                      What is your cancellation policy?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      className='inter'
                      sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '19px', color: '#475467' }}
                    >
                      You can cancel anytime as there are no contracts with CallDynamics. 
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ my: '10px', boxShadow: 'none', bgcolor: '#F9FAFB', borderRadius: '13px !important' }}
                  expanded={expanded === 'panel4'}
                  onChange={handleChange('panel4')}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === 'panel4' ? (
                        <RemoveCircleOutlineIcon sx={{ mx: '10px' }} />
                      ) : (
                        <AddCircleOutlineIcon sx={{ mx: '10px' }} />
                      )
                    }
                    aria-controls='panel2-content'
                    id='panel2-header'
                    sx={{ flexDirection: 'row-reverse' }}
                  >
                    <Typography
                      className='inter'
                      sx={{ fontSize: '15px', fontWeight: '500', lineHeight: '23px', color: '#101828' }}
                    >
                      Can other info be added to an invoice?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      className='inter'
                      sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '19px', color: '#475467' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ my: '10px', boxShadow: 'none', bgcolor: '#F9FAFB', borderRadius: '13px !important' }}
                  expanded={expanded === 'panel5'}
                  onChange={handleChange('panel5')}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === 'panel5' ? (
                        <RemoveCircleOutlineIcon sx={{ mx: '10px' }} />
                      ) : (
                        <AddCircleOutlineIcon sx={{ mx: '10px' }} />
                      )
                    }
                    aria-controls='panel2-content'
                    id='panel2-header'
                    sx={{ flexDirection: 'row-reverse' }}
                  >
                    <Typography
                      className='inter'
                      sx={{ fontSize: '15px', fontWeight: '500', lineHeight: '23px', color: '#101828' }}
                    >
                      How does billing work?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      className='inter'
                      sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '19px', color: '#475467' }}
                    >
                      Depending on your plan, you will pre-pay on your account for minutes. These minutes never expire
                      and roll over after each month. This excludes the included minutes in the Basic and Business
                      plans. 
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ my: '10px', boxShadow: 'none', bgcolor: '#F9FAFB', borderRadius: '13px !important' }}
                  expanded={expanded === 'panel6'}
                  onChange={handleChange('panel6')}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === 'panel6' ? (
                        <RemoveCircleOutlineIcon sx={{ mx: '10px' }} />
                      ) : (
                        <AddCircleOutlineIcon sx={{ mx: '10px' }} />
                      )
                    }
                    aria-controls='panel2-content'
                    id='panel2-header'
                    sx={{ flexDirection: 'row-reverse' }}
                  >
                    <Typography
                      className='inter'
                      sx={{ fontSize: '15px', fontWeight: '500', lineHeight: '23px', color: '#101828' }}
                    >
                      How do I change my account email?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      className='inter'
                      sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '19px', color: '#475467' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
            <Box>
              <GetInTouch />
            </Box>
          </Box>
          <MobileFooter />
        </>
      )}
    </>
  )
}

export default HelpAndSupport
