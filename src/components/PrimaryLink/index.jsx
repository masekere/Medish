import { styled } from '@mui/material';
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';

const PrimaryLink = styled((props) => (
    <Typography variant='primaryLink' component={Link} {...props} />
))(({ theme }) => ({
  
}));

export default PrimaryLink