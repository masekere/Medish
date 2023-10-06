import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone'
import { MedicalCallIcon } from 'assets/Svg'
import IconButton from '@mui/material/IconButton'


const content = {
  h5: "Emergency Cases",
  desc: "Please feel welcome to contact our friendly reception staff with any general or medical enquiry call us",
  phone: "0106123214",
  PhoneIcon: <PhoneIcon/>
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    bgcolor: 'secondary.light',
    mt: 'auto',
    display: {xs: 'block', md: 'flex'},
    gap: 3,
    p: "35px 40px 31px",
    borderTopRightRadius: {xs: 0, xl: "32px"},

    ".medical-icon": {
      color: 'white',
      fontSize: '50px'
    },

    h5: {
      color: 'white',
      mb: 2
    },

    ".desc": {
      color: 'white',
      mb: 2
    },

    ".tel": {
      fontWeight: 'bold', 
      fontSize: 24, 
      color: 'white', 
      display: 'flex',
      alignItems: 'center',
      gap: 2,

      div: {
        bgcolor: 'secondary.light',
        justifyContent: 'center',
        p: 1,
        transition: '0.3s ease-in-out',
        borderRadius: "8px 8px 0 8px",
        color: 'white',
        cursor: 'pointer',
      },

      ':hover':{
        color: 'white !important',
        
        svg: {
          color: 'primary.main',
        }
      },
      
      svg: {
        transition: '0.3s ease-in-out',
        fontSize: '30px',
        verticalAlign: 'middle'
      }
    }
}

const EmergencyCasesCard = () => (
  <Box className='EmergencyCasesCard' sx={styles}>
    <MedicalCallIcon />
    <Box>
      <Typography variant='h5'>{content.h5}</Typography>
      <Typography className='desc' >{content.desc}</Typography>
      <Typography className='tel' component={Link} to={`tel:${content.phone}`}>
        <Box>
          {content.PhoneIcon}
        </Box>
        {content.phone}
      </Typography>
    </Box>
  </Box>
)

export default EmergencyCasesCard