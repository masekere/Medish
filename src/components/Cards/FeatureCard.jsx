import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp'

const styles = {
    main: {
        pt: 6,
        width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(100% / 3 - 16px)', xl: 239 },
        transition: '0.3s ease-in-out',

        ':hover': {
            pt: 0,
            '.card': {
                bgcolor: 'white'
            },


            svg: {
                color: 'primary.main',
                mt: 3
            },
            h4: {
                color: 'black'
            },
            '.MuiTypography-body1': {
                opacity: 1,
                visibility: 'visible',
            }
        }
    },
    card: {
        p: '23px 30px 40px',
        transition: '0.3s ease-in-out',
        border: '1px solid #87dfeb',
        borderRadius: '8px 0px 8px 8px',
        display: 'flex',
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        cursor: "pointer",
        flexDirection: 'column',

        svg: {
            color: 'white',
            transition: "all 300ms ease-in-out",
        },

        h4: {
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "28px",
            textTransform: "capitalize",
            marginBottom: "6px",
            color: "white",
            transition: "0.3s ease-in-out",
        },
        '.MuiTypography-body1': {
            textAlign: "center",
            fontSize: "14px",
            lineHeight: "24px",
            marginBottom: "0px",
            opacity: 0,
            visibility: "hidden",
            transition: "0.3s ease-in-out",
        }
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mb: '-.5rem'
    }
}

const FeatureCard = ({item}) => (
    <Box sx={styles.main}>
        <Box className='card' sx={styles.card}>
            {item.icon}
            <Box sx={styles.content}>
                <Typography variant='h4'>{item.h4}</Typography>
                <Typography>{item.desc}</Typography>
            </Box>
            <ArrowDropDownCircleSharpIcon />
        </Box>
    </Box>
)

export default FeatureCard