import Box from '@mui/material/Box'
import { styled } from '@mui/material'

const SecondaryImageBackground = styled(Box)(({ img}) => ({
  background: `linear-gradient(90deg, rgba(6, 23, 51, 0) 0%, rgba(29, 42, 77, 0) 0%, #1d2a4d 80%),url(${img})`
}));

export default SecondaryImageBackground