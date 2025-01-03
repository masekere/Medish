import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import PrimaryLink from 'components/PrimaryLink'
import PropTypes from 'prop-types'
import Chip from 'components/common/Chip'



/** @type {import("@mui/material").SxProps} */
const styles = {
    card: {
        position: 'relative',
        m: 2,
        // pb: 1,
        // width: '300px',
        width: {xs: '100%', lg: 'calc(100% / 3 - 80px )'},
        display: {sm: 'flex', lg: 'block'},
        minWidth: {lg: 280},
        maxWidth: {xs: 783, lg: "412px"},
        boxShadow: "0px 5px 83px 0px rgba(9, 29, 62, 0.15)",
        transition: "0.3s ease-in-out",
        borderRadius: '8px 8px 4px 4px',
        ":hover img": {
            transform: "scale3d(1, 1, 1)"
        },
        ":hover .social": {
            opacity: .9
        },
        button: {
            m: { xs: 'auto', sm: 0 }
        },
        img: {
            mb: '-4rem',
            borderRadius: "8px 0 8px 8px",
            transition: "transform 0.35s",
            maxWidth: "100%",
            height: "auto",
            transform: "scale3d(1.05, 1.05, 1)",
        },

        ".social": {
            // display: {sm: 'none', lg: 'flex'},
            // mt: '-3rem',
            // transform: 'scale(0.7)',
            position:  "absolute",
            opacity: { xs: .9, lg: 0 },
            // transform: { xl: 'translateY(58px)' },
            top: 20,
            right: {xs: 20, sm: 'auto', lg: 20},
            left: {sm: 20, lg: 'auto'},
            borderRadius: '8px 8px 0 0',
            transition: '0.3s ease-in-out',
            alignItems: 'center',
            pb: 2,
            ml: { xs: '2rem',sm: 0, lg: '2.5rem' },
            // flexWrap: 'wrap',
            hr: {
                borderColor: 'secondary.light'
            }, 
            flexDirection: 'column',           
            a: {
                opacity: .9,
                transform: 'scale(0.7)'
                // display: 'flex',
                // bgcolor: 'red',
                // py: 2,
                // flex: "1",
                // width: 'calc(50% - 8px)',
                // m: 0,
            }
        },
    },
    media: {
        position: 'relative',
        overflow: 'hidden',
    },
    content: {
        px: { xs: '2rem', lg: '2.5rem' },

        '.social2': {
            display: {xs: 'none', sm: 'block', lg: 'none'}
        }
    },
    btn: {
        px: { xs: '2rem', lg: '2.5rem' },
        pb: 5,
        display: 'block'
    },
}
const content = {
    action: "Read More"
}

const bgColor = (color) => ({
    background: (color ? color : '#435ba1') + '!important',
})


const TeamCard = ({ item }) => (
    <Card className='card' sx={styles.card}>
        <CardMedia className='animate-media' style={styles.media}>
            <Box pb={7} component="img" src={item.img} alt={'team'} />
            <Stack
                className='social'
                // direction="row"
                // spacing={1}
                // divider={<Divider orientation="vertical" flexItem />}
            >
                {item.social.map(({icon, color, url}, index) => (
                    // <Box component={Link} to={item.url} key={index}>
                    //     {item.icon}
                    // </Box>
                    <Chip label={icon} key={index} component={Link} to={url} sx={bgColor(color)} variant="icon" />
                ))}
            </Stack>
        </CardMedia>
        <CardContent sx={styles.content}>
            <Typography variant='h4'>{item.name}</Typography>
            <Typography component={Link} to={item.url} variant='underline2'>{item.category}</Typography>
            <Typography mt={1} color={'#8790a2'} >
                {item.desc} <PrimaryLink sx={{display: 'block'}}>{content.action}</PrimaryLink>
            </Typography>
            {/* <Stack className='social2' mt={1} direction="row" spacing={2}>
                {item.social.map(({icon, color, url}, index) => (
                    <Chip label={icon} key={index} component={Link} to={url} sx={bgColor(color)} variant="icon" />
                ))}
            </Stack> */}
        </CardContent>
    </Card>
)

TeamCard.propTypes = {
  item: PropTypes.object.isRequired
}

export default TeamCard