import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'

const Breadcrumbs = ({items}) => (
    <>
    <Box mt={2} />
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{
        a: {
            color: 'white !important',
            fontSize: 14,
            fontWeight: 550,
            textTransform: 'capitalize',

            ':hover': {
                color: '#13c5dd !important',
            }
        },
        svg: {
            color: 'white'
        },
        position: 'absolute',
        bottom: 20,
      }}
    >
      {
        items.map((item, index) => (
            <Typography key={index} component={Link} to={item.url}>{item.name}</Typography>
        ))
      }
    </MuiBreadcrumbs>
    </>
)

export default Breadcrumbs