import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone'
import { MedicalCallIcon } from 'assets/Svg'

const content = {
  h5: "Emergency Cases",
  desc: "Please feel welcome to contact our friendly reception staff with any general or medical enquiry call us",
  phone: "0106123214",
  PhoneIcon: <PhoneIcon sx={{ verticalAlign: "middle", fontSize: "30px", mr: 1.8 }} />
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
    }
}

const EmergencyCasesCard2 = () => (
  <Box className='EmergencyCasesCard2' sx={styles}>
    <MedicalCallIcon />
    <Box>
      <Typography variant='h5'>{content.h5}</Typography>
      <Typography className='desc' >{content.desc}</Typography>
      <Typography className='tel' component={Link} to={`tel:${content.phone}`}>
        {content.PhoneIcon}{content.phone}
      </Typography>
    </Box>
  </Box>
)

export default EmergencyCasesCard2