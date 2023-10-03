import LogoDesktop from 'assets/images/logo/logo-dark.svg'
import LogoMobile from 'assets/images/logo/logo-mobile.svg'
import MuiIconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom";
import { styled } from '@mui/material';

const IconButton = styled(MuiIconButton)({
    backgroundColor: 'white',
    boxShadow: "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
    marginRight: 20
})

const Logo = ({ xl, sm, openDrawer, setDrawerOpen }) =>
    xl ? (
        <Link to=''>
            <img src={LogoDesktop} alt="logo" />
        </Link>
    ) : (
        <>
            <IconButton onClick={() => setDrawerOpen(!openDrawer)} aria-label="drawer">
                <MenuIcon />
            </IconButton>
            <Link to=''>
                {sm && <img src={LogoMobile} alt="logo" />}
                {!sm && <img src={LogoDesktop} alt="logo" />}
            </Link>
        </>
    )

export default Logo