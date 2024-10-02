import { Add, Delete } from '@mui/icons-material'
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import DeleteModal from '../DeleteModal'
import EditModal from '../Editmodal'
import CustomCheckbox from '../CustomCheckbox'
import AddTeamDrawer from '../AddTeamDrawer'

const admindata = [
  {
    adminimage: '/assets/image/userphoto.png',
    name: 'Olivia Rhye',
    email: 'olivia@email.com',
    dateadded: 'Feb 22, 2022',
    lastactive: 'Mar 14, 2022',
    owner: 'Account Owner'
  },
  {
    adminimage: '/assets/image/user2.png',
    name: 'Phoenix Baker',
    email: 'phoenix@email.com',
    dateadded: 'Feb 22, 2022',
    lastactive: 'Mar 14, 2022'
  },
  {
    adminimage: '/assets/image/user3.png',
    name: 'Lana Steiner',
    email: 'lana@email.com',
    dateadded: 'Feb 22, 2022',
    lastactive: 'Mar 14, 2022'
  },
  {
    adminimage: '/assets/image/user4.png',
    name: 'Demi Wilkinson',
    email: 'demi@email.com',
    dateadded: 'Feb 22, 2022',
    lastactive: 'Mar 14, 2022'
  },
  {
    adminimage: '/assets/image/user5.svg',
    name: 'Candice Wu',
    email: 'candice@email.com',
    dateadded: 'Feb 22, 2022',
    lastactive: 'Mar 14, 2022'
  }
]

const userdata = [
  {
    adminimage: '/assets/image/user6.png',
    name: 'Natali Craig',
    email: 'natali@email.com',
    dateadded: 'Feb 22, 2022',
    lastactive: 'Mar 14, 2022'
  },
  {
    adminimage: '/assets/image/user7.png',
    name: 'Drew Cano',
    email: 'drew@email.com',
    dateadded: 'Feb 22, 2022',
    lastactive: 'Mar 14, 2022'
  },
  {
    adminimage: '/assets/image/user8.png',
    name: 'Orlando Diggs',
    email: 'orlando@email.com',
    dateadded: 'Feb 22, 2022',
    lastactive: 'Mar 14, 2022'
  },
  {
    adminimage: '/assets/image/user9.png',
    name: 'Andi Lane',
    email: 'andi@email.com',
    dateadded: 'Feb 22, 2022',
    lastactive: 'Mar 14, 2022'
  },
  {
    adminimage: '/assets/image/user10.png',
    name: 'Kate Morrison',
    email: 'kate@email.com',
    dateadded: 'Feb 22, 2022',
    lastactive: 'Mar 14, 2022'
  }
]

const MyTeam = () => {
  const [openDeleteModal, setopenDeleteModal] = useState(false)
  const [openEditModal, setopenEditModal] = useState(false)
  const [open, setOpen] = useState(false)

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

  const handleClickModal = () => {
    setopenDeleteModal(!openDeleteModal)
  }

  const handleCloseModal = () => {
    setopenDeleteModal(false)
  }

  const handleClickEditModal = () => {
    setopenEditModal(!openEditModal)
  }

  const handleCloseEditModal = () => {
    setopenEditModal(false)
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          gap: { xs: '10px', sm: '0px' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: '1px solid #EAECF0',
          pb: '20px'
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
            Team Members
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
            Manage your team members and their account permissions here.
          </Typography>
          <Button
            disableRipple
            className='inter'
            sx={{
              display: { xs: 'flex', sm: 'none' },
              padding: '10px 16px',
              borderRadius: '8px',
              textTransform: 'capitalize',
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              color: '#fff',
              bgcolor: '#7F56D9',
              mt: '10px',
              '&.MuiButton-root:hover': {
                backgroundColor: '#7F56D9 !important'
              }
            }}
            onClick={toggleDrawer(true)}
          >
            <Add sx={{ pr: 1 }} />
            Add team member
          </Button>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button
            className='inter'
            variant='outlined'
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
          >
            <Add sx={{ pr: 1 }} />
            Add team member
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          gap: '20px',
          py: '20px',
          borderBottom: '1px solid #EAECF0'
        }}
      >
        <Box sx={{ maxWidth: '300px', width: '100%' }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              color: '#475467'
            }}
          >
            Admin users
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
            Admins can add and remove users, streams, and manage organization-level settings including billing.
          </Typography>
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
            <Table sx={{ minWidth: 650, bgcolor: '#FCFCFD' }} aria-label='simple table'>
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
                      <CustomCheckbox />
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '12px',
                          fontWeight: '500',
                          lineHeight: '18px',
                          color: '#475467'
                        }}
                      >
                        Name
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    className='inter'
                    sx={{
                      fontSize: '12px',
                      fontWeight: '500',
                      lineHeight: '18px',
                      color: '#475467'
                    }}
                  >
                    Date added
                  </TableCell>
                  <TableCell
                    className='inter'
                    sx={{
                      fontSize: '12px',
                      fontWeight: '500',
                      lineHeight: '18px',
                      color: '#475467'
                    }}
                  >
                    Last active
                  </TableCell>
                  <TableCell sx={{ width: '0px' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {admindata.map(item => (
                  <TableRow>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <CustomCheckbox />
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center'
                          }}
                        >
                          <Box
                            sx={{
                              bgcolor: '#D7E3E8',
                              borderRadius: '100%',
                              width: '40px',
                              height: '40px'
                            }}
                          >
                            <Typography
                              sx={{ width: '40px', borderRadius: '100%' }}
                              component={'img'}
                              src={item.adminimage}
                            />
                          </Box>
                          <Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px',
                                color: '#101828'
                              }}
                            >
                              {item.name}
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
                              {item.email}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              p: '2px 8px',
                              bgcolor: '#ECFDF3',
                              borderRadius: '16px',
                              ml: '20px'
                            }}
                          >
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '18px',
                                color: '#027A48'
                              }}
                            >
                              {item.owner}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '20px',
                          color: '#475467'
                        }}
                      >
                        {item.dateadded}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '20px',
                          color: '#475467'
                        }}
                      >
                        {item.lastactive}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: '20px' }}>
                        <IconButton onClick={handleClickModal}>
                          <Typography component={'img'} src='/assets/image/delete.svg' />
                        </IconButton>
                        <IconButton onClick={handleClickEditModal}>
                          <Typography component={'img'} src='/assets/image/edit.svg' />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          gap: '20px',
          py: '20px',
          borderBottom: '1px solid #EAECF0'
        }}
      >
        <Box sx={{ maxWidth: '300px', width: '100%' }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              color: '#475467'
            }}
          >
            Account users
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
            Account users can access audit reports and upload new files manually.
          </Typography>
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
            <Table sx={{ minWidth: 650, bgcolor: '#FCFCFD' }} aria-label='simple table'>
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
                      <CustomCheckbox />
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '12px',
                          fontWeight: '500',
                          lineHeight: '18px',
                          color: '#475467'
                        }}
                      >
                        Name
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    className='inter'
                    sx={{
                      fontSize: '12px',
                      fontWeight: '500',
                      lineHeight: '18px',
                      color: '#475467'
                    }}
                  >
                    Date added
                  </TableCell>
                  <TableCell
                    className='inter'
                    sx={{
                      fontSize: '12px',
                      fontWeight: '500',
                      lineHeight: '18px',
                      color: '#475467'
                    }}
                  >
                    Last active
                  </TableCell>
                  <TableCell sx={{ width: '0px' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userdata.map(item => (
                  <TableRow>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <CustomCheckbox />
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                          <Box
                            sx={{
                              bgcolor: '#E9DCBB',
                              borderRadius: '100%',
                              width: '40px',
                              height: '40px'
                            }}
                          >
                            <Typography
                              sx={{ width: '40px', borderRadius: '100%' }}
                              component={'img'}
                              src={item.adminimage}
                            />
                          </Box>
                          <Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px',
                                color: '#101828'
                              }}
                            >
                              {item.name}
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
                              {item.email}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '20px',
                          color: '#475467'
                        }}
                      >
                        {item.dateadded}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '20px',
                          color: '#475467'
                        }}
                      >
                        {item.lastactive}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: '20px' }}>
                        <IconButton onClick={handleClickModal}>
                          <Typography component={'img'} src='/assets/image/delete.svg' />
                        </IconButton>
                        <IconButton onClick={handleClickEditModal}>
                          <Typography component={'img'} src='/assets/image/edit.svg' />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      <DeleteModal open={openDeleteModal} onClose={handleCloseModal} />
      <EditModal open={openEditModal} onClose={handleCloseEditModal} />
      <AddTeamDrawer open={open} toggleDrawer={toggleDrawer}/>
    </>
  )
}

export default MyTeam
