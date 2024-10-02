import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function CustomCheckbox() {
  const [showImage, setShowImage] = useState(false)
  const [borderColor, setBorderColor] = useState('#D0D5DD')
  const [bgColor, setBgColor] = useState('#fff')

  const handleClick = () => {
    setShowImage(!showImage)
    setBorderColor(showImage ? '#D0D5DD' : '#7F56D9')
    setBgColor(showImage ? '#fff' : '#F4EBFF')
  }

  return (
    <Box
      sx={{
        cursor: 'pointer',
        width: '20px',
        height: '20px',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.2s',
        border: `1px solid ${borderColor}`,
        bgcolor: `${bgColor}`,
        '&:hover': { border: '1px solid #7F56D9', bgcolor: '#F4EBFF' }
      }}
      onClick={handleClick}
    >
      {showImage && <Typography component={'img'} src='/assets/image/check1.svg' />}
    </Box>
  )
}

export default CustomCheckbox
