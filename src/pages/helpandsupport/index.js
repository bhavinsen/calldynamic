import React, { useEffect, useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout/DashboardLayout'
import Dashfooter from '@/components/Dashfooter'
import Loader from '@/components/Loader'
import { UseSelectedCardContext } from '@/usecontext/Usecontext'
import HelpAndSupport from '@/components/HelpAndSupport'
import { useMediaQuery } from '@mui/material'
import DashboardHeader from '@/components/DashboardHeader'
import DashMobileSidebar from '@/components/DashMobileSidebar'

const HelpAndSupports = () => {
  const [isCollapsed, setIsCollapsed] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const { selectedCardData, setSelectedCardData, toggleWidth } = UseSelectedCardContext()

  const screen = useMediaQuery('(min-width:900px)')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : (
      )} */}
        <>
          {screen ? (
            <>
              <DashboardLayout
                selectedCardData={selectedCardData}
                setSelectedCardData={setSelectedCardData}
                toggleWidth={toggleWidth}
              />
              <HelpAndSupport selectedCardData={selectedCardData} />
              <Dashfooter selectedCardData={selectedCardData} />
            </>
          ) : (
            <>
              <DashboardHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
              <DashMobileSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
              <HelpAndSupport selectedCardData={selectedCardData} />
            </>
          )}
        </>
    </>
  )
}

export default HelpAndSupports