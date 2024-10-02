import styled from '@emotion/styled'
import { Switch } from '@mui/material'
import React from 'react'

const IOSSwitch = styled((props, { checked, onChange }) => (
  <Switch
    focusVisibleClassName='.Mui-focusVisible'
    disableRipple
    {...props}
    checked={checked}
    onChange={onChange}
    inputProps={{ 'aria-label': 'ios switch checkbox' }}
  />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 1,
    margin: 1,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: 'black' ? '#7F56D9' : '#000',
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#fff',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: 'dark' ? 'gray' : 'blue'
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 'dark' ? 0.7 : 0.3
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: 'all 0.5s'
  }
}))

export default IOSSwitch
