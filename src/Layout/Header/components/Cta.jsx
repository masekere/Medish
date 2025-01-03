import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import SearchIcon from "@mui/icons-material/Search";
import Button from 'components/common/button';
import { Link } from "react-router-dom"

const styles = {
  btn: {
    color: 'white !important',
    ':hover': {
      color: 'white !important',
    },
    display: {xs: 'none', sm: 'flex'}
  }
}
const cta = {
  timetable: {
    name: "View Doctor's Timetable",
    path: "/doctors/timetable"
  },
  appointment: {
    name: "Make Apppointement",
    path: "doctors"
  }
}

const Cta = ({setOpen, open}) => (
  <>
    <IconButton sx={{ml: 'auto'}} aria-label="search" onClick={() => setOpen(!open)}>
      <SearchIcon />
    </IconButton>
    <Divider sx={{height: 29, mr: 2, ml: 1, display: {xs: 'none', md: 'block'}}} orientation='vertical' />
    <Typography sx={{display: {xs: 'none', md: 'block'}}} to={cta.timetable.path} component={Link} mr={5} variant='h6'>{cta.timetable.name}</Typography>
    <Button sx={styles.btn} to={cta.appointment.path} component={Link}>
      {cta.appointment.name}
    </Button>
  </>
)

export default Cta