import React, { useEffect, useState } from 'react'
import HeaderNav from '../header'
import Sidebar from '../Sidebar'
import { Box } from '@mui/material'
import Loader from '../Loader'

const Layout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Box>
            <HeaderNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            {children}
          </Box>
        </>
      )}
    </>
  )
}

export default Layout
