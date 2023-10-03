import { Link } from 'react-router-dom'
import MuiCard from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import PrimaryLink from 'components/PrimaryLink'
import PropTypes from 'prop-types'

const styles = {
    card: {
        mt: 8,
        pb: 2,
        maxWidth: "412px",
        boxShadow: "0px 5px 83px 0px rgba(40, 40, 40, 0.06)",
        transition: "0.3s ease-in-out",
        borderRadius: '1rem',
        overflow: 'visible',

        button: {
            m: { xs: 'auto', sm: 0 }
        },
        img: {
            mt: '-3rem',
            mb: '-4rem',
            borderRadius: "8px 8px 8px 0px",
            width: '100%'
            // width:  372,

        },
        '@media (max-width: 887px)': {
            maxWidth: '100%',
            mx: 2
        }
    },
    content: {
        px: { xs: '2rem', lg: '2.5rem' },
    },
    btn: {
        px: { xs: '2rem', lg: '2.5rem' },
        pb: 5,
        display: 'block'
    },
    date: {
        bgcolor: 'white',
        position: 'absolute',
        right: 70,
        top: '-1rem',
        py: '18px',
        px: '15px',
        boxShadow: '0px 5px 83px 0px rgba(9, 29, 62, 0.15)',
        borderRadius: '8px 8px 8px 0px',

        ':before': {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 18,
            bottom: 18,
            bgcolor: 'primary.main',
            width: '3px',
        }
    },
    category: {
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        textTransform: 'Capitalize',
        mb: 1,
        a: {
            fontWeight: '400'
        }
    }
}


const BlogCard = ({item}) => (
    <MuiCard  sx={styles.card}>
        <CardMedia sx={{ pr: '40px', position: 'relative', mb: 8 }}>
            <Box component="img" src={item.img} alt={'team'} />
            <Stack spacing={'-10px'} sx={styles.date}>
                <Typography pb={.5} color={'secondary.light'} fontWeight={'bold'} fontSize={26}>{item.date[0]}</Typography>
                <Typography color={'secondary'} fontSize={13}>{item.date[1]}</Typography>
                <Typography color={'secondary'} fontSize={13}>{item.date[2]}</Typography>
            </Stack>
        </CardMedia>
        <CardContent sx={styles.content}>
            <Box sx={styles.category}>
                <PrimaryLink fontSize={14}>{item.category[0].name}</PrimaryLink>
                <Divider orientation="vertical" sx={{ height: 14 }} />
                <PrimaryLink fontSize={14}>{item.category[1].name}</PrimaryLink>
                <Typography ml={3} fontSize={14}>{item.author}</Typography>
            </Box>
            <Typography pb={.5} component={Link} variant='h4'>{item.title}</Typography>
            <Typography pt={2} color={'#8790a2'} >
                {item.bio}
                <PrimaryLink ml={1}>Read More</PrimaryLink>
            </Typography>
        </CardContent>
    </MuiCard>
)

BlogCard.propTypes = {
  propName: PropTypes.string
}

export default BlogCard