import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import MuiListItem from '@mui/material/ListItem'
import MuiListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import MuiListItemIcon from '@mui/material/ListItemIcon'
import MuiStack from '@mui/material/Stack'
import ExpandMore from "@mui/icons-material/ExpandMore"
import MenuOpen from "@mui/icons-material/MenuOpen"
import styled from '@emotion/styled'
import LogoDesktop from 'assets/images/logo/logo-dark.svg'
import { useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import Button from 'components/button'

const routes = {
  about: {
    path: 'about',
    name: 'About Us'
  },
  doctors: {
    path: 'doctors',
    name: 'Doctors'
  },
  blog: {
    path: 'blog',
    name: 'Blog'
  },
  shop: {
    path: 'shop',
    name: 'Shop'
  },
  departments: {
    path: 'departments',
    name: 'Departments'
  },
  contact: {
    path: 'contacts',
    name: 'Contact'
  },
}

const navigationLinks = [
  ['Departments', [
    {
      name: routes.departments.name,
      path: routes.departments.path
    }
  ]],
  ['About Us', [
    {
      name: routes.about.name,
      path: routes.about.path
    }
  ]],
  ['Doctors', [
    {
      name: routes.doctors.name,
      path: routes.doctors.path
    }
  ]],
  ['Blog', [
    {
      name: routes.blog.name,
      path: routes.blog.path
    }
  ]],
  ['Shop', [
    {
      name: routes.shop.name,
      path: routes.shop.path
    }
  ]],
  [{
    path: 'contacts',
    name: 'Contact'
  }],
]

const drawerWidth = 240

const ListItem = styled(MuiListItem)({
  paddingTop: 0,
  paddingBottom: 0
})

const ListItemButton = styled(MuiListItemButton)({
  //
})

const ListItemLink = styled(MuiListItemButton)({
  '&.Mui-selected': {
    span: {
      color: "#13c5dd"
    },
    backgroundColor: "transparent",
  },
})

const Stack = styled(MuiStack)({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const ListItemIcon = styled(MuiListItemIcon)({
  justifyContent: 'flex-end'
})

const Drawer = ({ openDrawer, setDrawerOpen }) => {
  const [currentIndex, setIndex] = useState(null)
  const path = useLocation().pathname

  const Menu = ({ link, index }) => (
    <ListItem onClick={() => setIndex(index)}>
      <ListItemLink component={Link} to={link[0].path} selected={currentIndex === index}>
        <ListItemText primary={link[0].name} />
      </ListItemLink>
    </ListItem>
  )

  const DropdownMenu = ({ link, index}) => (
    <ListItem onClick={() => setIndex(index)} sx={{ display: 'block' }}>
      <ListItemButton selected={currentIndex === index}>
        <ListItemText primary={link[0]} />
        <ListItemIcon><ExpandMore /></ListItemIcon>
      </ListItemButton>
      <Collapse in={currentIndex === index}>
        {link[1].map((menuLink, index) => (
          <ListItemLink onClick={() => setDrawerOpen(!openDrawer)} component={Link} to={menuLink.path} key={index} selected={path === '/' + menuLink.path}>
            <ListItemText primary={menuLink.name} />
          </ListItemLink>
        ))}
      </Collapse>
    </ListItem>
  )

  const Header = () => (
    <Stack px={1} py={3}>
        <Link to={'/'}>
            <Box component="img" src={LogoDesktop} alt={"Medish Logo"} />
        </Link>
        <MenuOpen onClick={() => setDrawerOpen(!openDrawer)} sx={{cursor: 'pointer'}} color='primary' fontSize='large' />
      </Stack>
  )

  return (
    <MuiDrawer
      anchor="left"
      open={openDrawer}
      onClose={() => setDrawerOpen(!openDrawer)}
      ModalProps={{
        keepMounted: true
      }}
      sx={{
        display: { xs: 'block', xl: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      <Header />
      <List>
        {
          navigationLinks.map((link, key) => link[1] ?
            <DropdownMenu index={key} link={link} key={key} />
            : <Menu index={key} link={link} key={key} />
          )
        }
      </List>
      <Button sx={{mx: '1rem', mt: 2}}>Make Appointment</Button>
    </MuiDrawer>
  )
}

export default Drawer