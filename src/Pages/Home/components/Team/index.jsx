import { styled } from '@mui/material'
import MuiContainer from '@mui/material/Container'
import Heading from './components/Heading'
import TeamCards from './components/TeamCards'

const Container = styled(MuiContainer)({
    px: {xs: '2rem',sm: '3rem',md: '4rem',lg: '5rem'}
})

export default function Team() {
  return (
   <Container component={'section'} maxWidth='xxl'>
     <Heading />
     <TeamCards />
   </Container> 
  )
}



