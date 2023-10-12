import Box from '@mui/material/Box'
import { styled } from '@mui/material'

const PrimaryIMageBackground = styled(Box)(({ img}) => ({
  background: `linear-gradient(-90deg, #13C1D9BF 18%, #13c5dd 70%),url(${img})`
}));

export default PrimaryIMageBackground