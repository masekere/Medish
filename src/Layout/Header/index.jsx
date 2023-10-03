import { useState } from 'react'
import { useMediaQuery, useScrollTrigger, useTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Nav from './components/Nav'
import Logo from './components/Logo'
import Cta from './components/Cta'
import Search from './components/Search'
import Drawer from './components/Drawer'
import Topbar from './components/Topbar'

export default function Header() {
const theme = useTheme();
const xl = useMediaQuery(theme.breakpoints.up("xl"));
const lg = useMediaQuery(theme.breakpoints.up("lg"));
const sm = useMediaQuery(theme.breakpoints.down("sm"));
const [open, setOpen] = useState(false)
const [openDrawer, setDrawerOpen] = useState(false)

const trigger = useScrollTrigger({
  disableHysteresis: true,
  threshold: 0,
});

  return (
    <>
        <Topbar lg={lg} />
        <AppBar sx={{backdropFilter: trigger ? 'saturate(200%) blur(1.875rem)' : null, bgcolor: 'rgba(255, 255, 255, 0.8)'}} position="sticky">
          <Container maxWidth="1500px">
            <Toolbar sx={{height: 105}} >
              <Logo xl={xl} sm={sm} openDrawer={openDrawer} setDrawerOpen={setDrawerOpen} />
              <Nav />
              <Cta  setOpen={setOpen} open={open}/>
              <Search setOpen={setOpen} open={open} />
              <Drawer setDrawerOpen={setDrawerOpen} openDrawer={openDrawer} />
            </Toolbar>
          </Container>
        </AppBar>
    </>
  )
}