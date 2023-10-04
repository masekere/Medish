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

/** @type {import("@mui/material").SxProps} */
const styles = {
    card: {
        position: 'relative',
        m: 2,
        pb: 1,
        maxWidth: "412px",
        boxShadow: "none",
        transition: "0.3s ease-in-out",
        borderRadius: '1rem',
        ":hover img": {
            transform: "scale3d(1, 1, 1)"
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
            position: "absolute",
            opacity: { xs: .9, xl: 0 },
            transform: { xl: 'translateY(58px)' },
            bottom: 0,
            bgcolor: 'secondary.main',
            borderRadius: '8px 8px 0 0',
            transition: '0.3s ease-in-out',
            p: 2,
            ml: { xs: '2rem', lg: '2.5rem' },
            hr: {
                borderColor: 'secondary.light'
            },
            a: {
                display: 'flex',

                svg: {
                    color: 'white'
                },
                ':hover svg': {
                    color: 'primary.main'
                }
            }
        },
        '&:hover': {
            '.social': {
                opacity: .9,
                transform: 'translateY(0)',
            },
            ':before': {
                bgcolor: "secondary.main",
            }
        },
        ':before': {
            content: "''",
            bgcolor: "primary.main",
            transition: '0.3s ease-in-out',
            position: 'absolute',
            bottom: 0,
            height: 20,
            width: '100%'
        },
        ':after': {
            content: "''",
            borderRadius: '0 0 1rem 1rem',
            bgcolor: "white",
            position: 'absolute',
            bottom: 5,
            height: 15,
            width: '100%'
        }
    },
    media: {
        position: 'relative',
        overflow: 'hidden',
    },
    content: {
        px: { xs: '2rem', lg: '2.5rem' },
    },
    btn: {
        px: { xs: '2rem', lg: '2.5rem' },
        pb: 5,
        display: 'block'
    },
}
const cta = "Read Me"


const TeamCard = ({ item }) => (
    <Card className='card' sx={styles.card}>
        <CardMedia className='animate-media' style={styles.media}>
            <Box pb={7} component="img" src={item.img} alt={'team'} />
            <Stack
                className='social'
                direction="row"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}

            >
                {item.social.map((item, index) => (
                    <Box component={Link} to={item.url} key={index}>
                        {item.icon}
                    </Box>
                ))}
            </Stack>
        </CardMedia>
        <CardContent sx={styles.content}>
            <Typography variant='h4'>{item.name}</Typography>
            <Typography component={Link} to={item.url} variant='underline2'>{item.category}</Typography>
            <Typography mt={1} color={'#8790a2'} >
                {item.desc} <PrimaryLink sx={{display: 'block'}}>{cta}</PrimaryLink>
            </Typography>
        </CardContent>
    </Card>
)

TeamCard.propTypes = {
  item: PropTypes.object.isRequired
}

export default TeamCard