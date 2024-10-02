import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  tooltipClasses
} from '@mui/material'
import React, { useState } from 'react'
import FilterListIcon from '@mui/icons-material/FilterList'
import { Add, KeyboardArrowDown } from '@mui/icons-material'
import styled from '@emotion/styled'
import CustomCheckbox from '../CustomCheckbox'
import NewApiKey from '../NewApiKey'
import DeleteApiModal from '../DeleteApikeymodal'
import AddWebhooksModal from '../AddWebhooksModal'
import DeleteKeyDrawer from '../DeleteKeyDrawer'
import CreateApiDrawer from '../CreateApiDrawer'

const TableData = [
  {
    comment: 'DevKey',
    Secret: '*****************',
    role: 'Owner',
    createdby: 'John Doe',
    created: 'May 2, 2023',
    end: 'May 2, 2023'
  }
]

const Role = [
  { value: 'Owner', label: 'Owner' },
  { value: 'Admin', label: 'Admin' },
  { value: 'Member', label: 'Member' }
]

const ApiSettings = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [openNewApiModal, setopenNewApiModal] = useState(false)
  const [openDeleteApiModal, setopenDeleteApiModal] = useState(false)
  const [openAddWebhooksModal, setopenAddWebhooksModal] = useState(false)
  const [anchorElaction, setanchorElaction] = useState(null)
  const [selectedRoles, setSelectedRoles] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [openDeleteKeyDrawer, setopenDeleteKeyDrawer] = useState(false)
  const [openCreateKeyKeyDrawer, setopenCreateKeyKeyDrawer] = useState(false)

  const DeleteKeytoggleDrawer = newOpen => () => {
    setopenDeleteKeyDrawer(newOpen)
  }

  const CreateKeytoggleDrawer = newOpen => () => {
    setopenCreateKeyKeyDrawer(newOpen)
  }

  const handleClickNewApiModal = () => {
    setopenNewApiModal(!openNewApiModal)
  }

  const handleCloseNewApiModal = () => {
    setopenNewApiModal(false)
  }

  const handleClickDeleteApiModal = () => {
    setopenDeleteApiModal(!openDeleteApiModal)
  }

  const handleCloseDeleteApiModal = () => {
    setopenDeleteApiModal(false)
  }

  const handleClickAddWebhooksModal = () => {
    setopenAddWebhooksModal(!openAddWebhooksModal)
  }

  const handleCloseAddWebhooksModal = () => {
    setopenAddWebhooksModal(false)
  }

  const handleClickRole = event => {
    setanchorElaction(event.currentTarget)
  }

  const handlecloseRole = () => {
    setanchorElaction(null)
  }

  const handleRoleSelect = role => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter(r => r !== role))
    } else {
      setSelectedRoles([...selectedRoles, role])
    }
  }

  const handleNextPage = () => {
    if (currentPage < 10) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(0, prevPage - 1))
  }

  const toggleInnerDiv = () => {
    setIsOpen(!isOpen)
  }

  const SecretTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: '#fff'
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#fff',
      boxShadow: '0px 12px 16px 4px rgba(16, 24, 40, 0.08)',
      width: 'auto',
      fontSize: '12px',
      padding: ' 10px 12px',
      borderRadius: '8px',
      color: '#475467',
      fontWeight: '500',
      textAlign: 'center',
      lineHeight: '15px'
    }
  }))

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pb: '14px'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: '28px',
              color: '#101828'
            }}
          >
            API
          </Typography>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#475467'
            }}
          >
            Create and manage API Keys
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          gap: { xs: '10px', sm: '0px' },
          justifyContent: 'space-between',
          pb: '20px',
          borderBottom: '1px solid #EAECF0'
        }}
      >
        <Box sx={{ maxWidth: '534px', width: '100%' }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#475467'
            }}
          >
            Remember to save your API Keys in a safe spot. For security purposes, secrets are not recoverable
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button
            disableRipple
            disableElevation
            variant='contained'
            className='inter'
            sx={{
              width: '100%',
              padding: '10px 16px',
              borderRadius: '8px',
              textTransform: 'capitalize',
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              color: '#fff',
              background: '#7F56D9',
              '&.MuiButton-root:hover': {
                backgroundColor: '#7F56D9 !important'
              }
            }}
            onClick={handleClickNewApiModal}
          >
            Create a New API Key
          </Button>
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Button
            disableRipple
            disableElevation
            variant='contained'
            className='inter'
            sx={{
              width: '100%',
              padding: '10px 16px',
              borderRadius: '8px',
              textTransform: 'capitalize',
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              color: '#fff',
              background: '#7F56D9',
              '&.MuiButton-root:hover': {
                backgroundColor: '#7F56D9 !important'
              }
            }}
            onClick={CreateKeytoggleDrawer(true)}
          >
            Create a New API Key
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pb: '14px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            py: '20px',
            borderBottom: '1px solid #EAECF0',
            width: '100%'
          }}
        >
          <Typography
            className='inter'
            sx={{
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: '28px',
              color: '#101828'
            }}
          >
            API Keys
          </Typography>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#475467'
            }}
          >
            Manage your API Keys here.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '20px', my: '20px' }}>
        <Box sx={{}}>
          <Button
            variant='outlined'
            className='inter'
            sx={{
              padding: '10px 16px',
              borderRadius: '8px',
              border: '1px solid #D0D5DD',
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              color: '#344054',
              textTransform: 'capitalize',
              background: '#fff'
            }}
          >
            <FilterListIcon sx={{ mr: '8px', color: '#344054 !important' }} /> More Filters
          </Button>
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            maxWidth: '640px',
            width: '100%'
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
              background: '#fff',
              width: '100%',
              maxWidth: '620px'
            }}
          >
            <Typography
              className='inter'
              component={'input'}
              type='text'
              placeholder='Filter by comment, Creator, Tag, Identifier or Scope'
              sx={{
                padding: '',
                background: '#FFF',
                border: 'none',
                outline: 'none',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '24px',
                color: '#667085'
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            border: '1px solid #E9D7FE',
            bgcolor: '#F9F5FF',
            borderRadius: '8px',
            padding: '10px 18px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            ml: '26px'
          }}
          onClick={handleClickRole}
        >
          <Typography
            className='inter'
            sx={{ fontSize: '14px', fontWeight: '600', lineHeight: '20px', color: '#6941C6' }}
          >
            Role
          </Typography>
        </Box>
        <Menu
          anchorEl={anchorElaction}
          open={Boolean(anchorElaction)}
          onClose={handlecloseRole}
          PaperProps={{
            sx: {
              boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
              p: '0'
            }
          }}
        >
          {Role.map((role, index) => (
            <MenuItem key={index} onClick={() => handleRoleSelect(role.value)}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Radio
                  value={role.value}
                  disableRipple
                  checked={selectedRoles.includes(role.value)}
                  sx={{
                    color: '#D0D5DD',
                    '&.Mui-checked': {
                      color: '#7F56D9'
                    }
                  }}
                />
                <Typography
                  className='inter'
                  sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
                >
                  {role.label}
                </Typography>
              </Box>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ width: '100%' }}>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: 'none',
            border: '1px solid #EAECF0',
            borderRadius: '12px'
          }}
        >
          <Table sx={{ bgcolor: '#FCFCFD' }} aria-label='simple table'>
            <TableHead
              sx={{
                background: '#F9FAFB',
                padding: '12px 0px',
                textAlign: 'left'
              }}
            >
              <TableRow sx={{ textAlign: 'left', alignItems: 'center' }}>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '18px',
                        color: '#475467'
                      }}
                    >
                      Comment
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  className='inter'
                  sx={{
                    display: { xs: 'none', sm: 'table-cell' },
                    fontSize: '12px',
                    fontWeight: '500',
                    lineHeight: '18px',
                    color: '#475467'
                  }}
                >
                  Secret
                </TableCell>
                <TableCell
                  className='inter'
                  sx={{
                    display: { xs: 'none', sm: 'table-cell' },
                    fontSize: '12px',
                    fontWeight: '500',
                    lineHeight: '18px',
                    color: '#475467'
                  }}
                >
                  Role
                </TableCell>
                <TableCell
                  className='inter'
                  sx={{
                    display: { xs: 'none', sm: 'table-cell' },
                    fontSize: '12px',
                    fontWeight: '500',
                    lineHeight: '18px',
                    color: '#475467'
                  }}
                >
                  Created By
                </TableCell>
                <TableCell
                  className='inter'
                  sx={{
                    display: { xs: 'none', sm: 'table-cell' },
                    fontSize: '12px',
                    fontWeight: '500',
                    lineHeight: '18px',
                    color: '#475467'
                  }}
                >
                  Created
                </TableCell>
                <TableCell
                  className='inter'
                  sx={{
                    display: { xs: 'none', sm: 'table-cell' },
                    fontSize: '12px',
                    fontWeight: '500',
                    lineHeight: '18px',
                    color: '#475467'
                  }}
                >
                  Expires
                </TableCell>
                <TableCell sx={{ width: '0%' }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TableData.map(item => (
                <TableRow>
                  <TableCell>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
                      onClick={toggleInnerDiv}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <KeyboardArrowDown
                          sx={{ transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)', transition: 'all 0.5s' }}
                        />
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '13px',
                            fontWeight: '500',
                            lineHeight: '18px',
                            color: '#101828'
                          }}
                        >
                          {item.comment}
                        </Typography>
                      </Box>
                      <Typography component={'img'} src='/assets/image/secreticon.svg' />
                    </Box>
                    {isOpen && (
                      <Box
                        sx={{
                          display: { xs: 'none', sm: 'block' },
                          position: 'absolute',
                          maxWidth: '600px',
                          width: '100%',
                          bgcolor: '#fff',
                          p: '20px',
                          boxShadow:
                            '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)'
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '11px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#9AA4B2'
                              }}
                            >
                              Identifier: 0756545345-ebd3-cfd23a4-23aedab-e674a99
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', gap: '10px' }}>
                            <Typography component={'img'} src='/assets/image/alert.svg' />
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '11px',
                                fontWeight: '500',
                                lineHeight: '14px',
                                color: '#9AA4B2'
                              }}
                            >
                              Not your secret
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '10px', my: '20px', alignItems: 'center' }}>
                          <Typography component={'img'} src='/assets/image/secreticon.svg' />
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '12px',
                              fontWeight: '500',
                              lineHeight: '18px',
                              color: '#000000'
                            }}
                          >
                            Tags:
                          </Typography>
                          <Box
                            sx={{ border: '1px solid #B2DDFF', bgcolor: '#EFF8FF', p: '2px 8px', borderRadius: '16px' }}
                          >
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '18px',
                                color: '#175CD3'
                              }}
                            >
                              env-dev
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </TableCell>
                  <TableCell>
                    <SecretTooltip title='For security purposes, secrets are not recoverable. If you’ve forgotten the secret, you can delete the API Key and create a new one above.'>
                      <Typography
                        className='inter'
                        sx={{
                          display: { xs: 'none', sm: 'table-cell' },
                          fontSize: '13px',
                          fontWeight: '500',
                          lineHeight: '18px',
                          color: '#101828'
                        }}
                      >
                        {item.Secret}
                      </Typography>
                    </SecretTooltip>
                  </TableCell>
                  <TableCell
                    className='inter'
                    sx={{
                      display: { xs: 'none', sm: 'table-cell' },
                      fontSize: '13px',
                      fontWeight: '500',
                      lineHeight: '18px',
                      color: '#475467'
                    }}
                  >
                    {item.role}
                  </TableCell>
                  <TableCell
                    className='inter'
                    sx={{
                      display: { xs: 'none', sm: 'table-cell' },
                      fontSize: '13px',
                      fontWeight: '500',
                      lineHeight: '18px',
                      color: '#475467'
                    }}
                  >
                    {item.createdby}
                  </TableCell>
                  <TableCell
                    className='inter'
                    sx={{
                      display: { xs: 'none', sm: 'table-cell' },
                      fontSize: '13px',
                      fontWeight: '500',
                      lineHeight: '18px',
                      color: '#475467'
                    }}
                  >
                    {item.created}
                  </TableCell>
                  <TableCell
                    className='inter'
                    sx={{
                      display: { xs: 'none', sm: 'table-cell' },
                      fontSize: '13px',
                      fontWeight: '500',
                      lineHeight: '18px',
                      color: '#475467'
                    }}
                  >
                    {item.end}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: { xs: 'none', sm: 'table-cell' } }}>
                      <SecretTooltip title='Delete API Key'>
                        <IconButton onClick={handleClickDeleteApiModal}>
                          <Typography component={'img'} src='/assets/image/delete.svg' />
                        </IconButton>
                      </SecretTooltip>
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                      <IconButton onClick={DeleteKeytoggleDrawer(true)}>
                        <Typography component={'img'} src='/assets/image/delete.svg' />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          py: '20px'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: '28px',
              color: '#101828'
            }}
          >
            Webhooks
          </Typography>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#475467'
            }}
          >
            List of active webhooks
          </Typography>
        </Box>
        <Box>
          <Button
            disableRipple
            disableElevation
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
              background: '#7F56D9',
              '&.MuiButton-root:hover': {
                backgroundColor: '#7F56D9 !important'
              }
            }}
            onClick={handleClickAddWebhooksModal}
          >
            <Add sx={{ pr: 1 }} />
            Add Webhook
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          border: '1px solid #EAECF0',
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.06)',
          borderRadius: '12px',
          display: { xs: 'none', sm: 'block' }
        }}
      >
        <Box
          sx={{ padding: '20px', borderBottom: '1px solid #EAECF0', display: 'flex', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Box>
              <CustomCheckbox />
            </Box>
            <Box>
              <Typography
                className='inter'
                sx={{
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '18px',
                  color: '#475467'
                }}
              >
                Webhooks
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              className='inter'
              sx={{
                fontSize: '12px',
                fontWeight: '500',
                lineHeight: '18px',
                color: '#475467',
                mr: '60px'
              }}
            >
              Actions
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: '100px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'center' }}>
            <Box>
              <Typography component={'img'} src='/assets/image/webhooks.svg' />
            </Box>
            <Typography
              className='inter'
              sx={{ fontSize: '13px', fontWeight: '500', lineHeight: '18px', color: '#475467' }}
            >
              You currently have no webhooks configured!
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: '12px 22px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #EAECF0'
          }}
        >
          <Box>
            <Typography
              className='inter'
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '20px',
                color: '#344054'
              }}
            >
              Page {currentPage} of 10
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Box>
              <Button
                disableRipple
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
                  padding: '8px 14px',
                  '&.MuiButtonBase-root:hover': {
                    border: '1px solid #D0D5DD'
                  }
                }}
                onClick={handlePreviousPage}
              >
                Previous
              </Button>
            </Box>
            <Box>
              <Button
                disableRipple
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
                  padding: '8px 14px',
                  '&.MuiButtonBase-root:hover': {
                    border: '1px solid #D0D5DD'
                  }
                }}
                onClick={handleNextPage}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <NewApiKey open={openNewApiModal} onClose={handleCloseNewApiModal} />
      <DeleteApiModal open={openDeleteApiModal} onClose={handleCloseDeleteApiModal} />
      <AddWebhooksModal open={openAddWebhooksModal} onClose={handleCloseAddWebhooksModal} />
      <DeleteKeyDrawer openDeleteKeyDrawer={openDeleteKeyDrawer} DeleteKeytoggleDrawer={DeleteKeytoggleDrawer} />
      <CreateApiDrawer openCreateKeyKeyDrawer={openCreateKeyKeyDrawer} CreateKeytoggleDrawer={CreateKeytoggleDrawer} />
    </>
  )
}

export default ApiSettings
