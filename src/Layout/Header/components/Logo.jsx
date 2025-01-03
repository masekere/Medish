const LogoDesktop = 'https://ucarecdn.com/40b2eab7-4caf-42fb-9060-da412555c196/assets_images_logo_logodark.svg';
const LogoMobile = 'https://ucarecdn.com/92c88944-09cc-4c7e-9565-6150ea0dab4d/assets_images_logo_logomobile.svg';
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