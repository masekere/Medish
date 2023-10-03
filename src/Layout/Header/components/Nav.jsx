import { ArrowDropDown } from "@mui/icons-material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import { Link, useLocation } from "react-router-dom"

const navigationLinks = [
    ['Departments', [
        {
            name: 'our departments',
            path: 'departments'
        },
        {
            name: 'neurology clinic',
            path: 'departments/neurology-clinic'
        },
        {
            name: 'pathology clinic',
            path: 'departments/pathology-clinic'
        },
        {
            name: 'laboratory analysis',
            path: 'departments/laboratory-analysis'
        },
        {
            name: 'pediatric clinic',
            path: 'departments/pediatric-clinic'
        },
        {
            name: 'cardiac clinic',
            path: 'departments/cardiac-clinic'
        },
        {
            name: 'ophthalmology clinic',
            path: 'departments/ophthalmology-clinic'
        },
    ]],
    ['About Us', [
        {
            name: 'about us',
            path: 'about'
        },
        {
            name: 'medical services',
            path: 'about/medical-services'
        },
        {
            name: 'pricing & plans',
            path: 'about/pricing'
        },
        {
            name: 'appointments',
            path: 'about/appointments'
        },
        {
            name: 'help & fAQs',
            path: 'about/FAQ'
        }
    ]],
    ['Doctors', [
        {
            name: 'our doctors',
            path: 'doctors'
        },
        {
            name: "doctor's timetable",
            path: 'doctors/timetable'
        },
    ]],
    ['Shop', [
        {
            name: 'our products',
            path: 'shop'
        },
        {
            name: 'cart',
            path: 'shop/cart'
        },
        {
            name: 'checkout',
            path: 'shop/checkout'
        },
        {
            name: 'my account',
            path: 'shop/my-account'
        },
    ]],
    [{
        name: 'blog',
        path: 'blog'
    }],
    [{
        path: 'contacts',
        name: 'Contact'
    }],
]

const styles = {
    menu: {
        width: 'max-content',
        cursor: 'pointer',
        // bgcolor: 'red',
        height: '100%',
        h6: {
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'all 300ms ease-in-ou',
        },
        ':hover': {
            h6: {
                color: 'primary.main'
            },
            ul: {
                transform: "translateY(0)",
                opacity: 1,
                visibility: 'visible',
                display: 'block'

            }
        },
    },
    menuList: {
        display: 'flex',
        gap: '20px',
        height: '100%'
    },
    menuLink: {
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    },
    dropdown: {
        top: '105px',
        boxShadow: "0px 5px 83px 0px rgba(9, 29, 62, 0.15)",
        transition: "all 300ms linear",
        opacity: 0,
        visibility: "hidden",
        position: "absolute",
        transformOrigin: "left top",
        transform: "translateY(20px)",
        display: "block",
        width: "210px",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "0px 0px 8px 8px",
        a: {
            fontSize: "15px",
            textTransform: "capitalize",
            padding: "0 15px",
            marginBottom: "3px",
            borderRadius: "8px 8px 0 8px",
            ':hover': {
                bgcolor: 'primary.light',
            },
            span: {
                fontSize: '14px'
            }
        },
        ':hover': {
            transform: "translateY(20px)",

        }
    }
}

const Menu = ({ menu }) => (
    <Typography sx={styles.menuLink} component={Link} to={menu[0].path} variant="h6">
        {menu[0].name}
    </Typography>
)

const DropdownMenu = ({ menu, path }) => (
    <>
        <Typography variant="h6">
            {menu[0]} <ArrowDropDown />
        </Typography>
        <List className="drop" sx={styles.dropdown}>
            {menu[1].map((item, key) => (
                <ListItem key={key} disablePadding>
                    <ListItemButton LinkComponent={Link} to={item.path} sx={styles.btn} selected={path === '/' + item.path}>
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </>
)

const Nav = () => {
    const path = useLocation().pathname

    return (
        <Box height={'100%'} alignItems={'center'} display={{ xs: 'none', xl: 'flex' }} component={'nav'} ml={5}>
            <List disablePadding sx={styles.menuList}>
                {
                    navigationLinks.map((menu, key) => (
                        <ListItem sx={styles.menu} disablePadding key={key}>
                            {menu[1] ?
                                <DropdownMenu path={path} menu={menu} />
                                : <Menu path={path} menu={menu} />
                            }
                            {key === 0 && (
                                <Divider sx={{ ml: 2, height: 29 }} orientation="vertical" />
                            )}
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
}



export default Nav