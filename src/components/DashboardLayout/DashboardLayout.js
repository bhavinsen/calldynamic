import { Box } from '@mui/material'
import React, { useState } from 'react'
import DashboadSiadebar from '../Dashboadsiadebar'
import DashboardSearch from '../DashboardSearch'

const DashboardLayout = ({ children, selectedCardData, setSelectedCardData, toggleWidth }) => {
  return (
    <>
      <Box>
        <DashboadSiadebar
          toggleWidth={toggleWidth}
          selectedCardData={selectedCardData}
          setSelectedCardData={setSelectedCardData}
        />
        <DashboardSearch selectedCardData={selectedCardData} />
        {children}
      </Box>
    </>
  )
}

export default DashboardLayout
