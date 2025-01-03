import MuiTypography from '@mui/material/Typography'
import ReportIcon from "@mui/icons-material/Report";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ArrowRightIcon from "@mui/icons-material/ArrowRightAlt";
import { styled, Container, Box } from '@mui/material';
import { Link } from "react-router-dom"


const Typography = styled(MuiTypography)({
    fontSize: '13px',
    color: 'white !important',
    paddingRight: '10px',
    textTransform: 'capitalize',

    svg: {
        color: '#788fc8',
        verticalAlign: "middle"
    }
})

const content = {
    info: {
        name: "Our Clinic sees over 10,000 patients every year.",
        icon: <ReportIcon />
    },
    info2: {
        tips: ["tips for eating healthy", "Hear their real stories",  "why coronavirus cases rise ?", " why wearing a mask"],
        icon: <ArrowRightIcon />
    },
    info3: [
        {
            name: "Emergency Line: 002 010612457410",
            icon: <CallIcon />,
            path: 'contacts'
        },
        {
            name: "Location: Brooklyn, New York",
            icon: <PlaceIcon />,
            path: 'contacts'
        },
        {
            name: "Mon-Fri: 8am – 7pm",
            icon: <WatchLaterIcon />,
            path: 'contacts'
        }
    ]
}

const styles = {
    container: {
        display: 'flex',
        py: {xs: 1, lg: 2}
    },
    info: {
        color: '#788fc8 !important'
    },
    info2: {
        svg: {
            color: 'white'
        },
        ':hover': {
            svg: {
                color: 'primary.main'
            }
        },
        mr: {xs: 0, lg: 'auto'},
        ml: {xs: 'auto', lg: 0}
    }
}

export default function Topbar({lg}) {
    return (
        <Box id="back-to-top-anchor" bgcolor={'secondary.main'}> 
            <Container sx={styles.container} maxWidth="1500px">
                    <Typography sx={styles.info}>
                        {content.info.icon} {content.info.name}
                    </Typography>
                    <Typography sx={styles.info2} component={Link}>
                        {content.info2.tips[0]} {content.info2.icon}
                    </Typography>
                    {content.info3.map((info, key) => (lg && 
                        <Typography sx={styled.info3} component={Link} to={info.path} key={key}>
                            {info.icon} {info.name}
                        </Typography>
                    ))}
            </Container>
        </Box>
    )
}

