import { styled } from '@mui/material'
import MuiContainer from '@mui/material/Container'
import Heading from './Heading'
import TeamCards from './TeamCards'
import Notice from './Notice'

const Container = styled(MuiContainer)({
    px: {xs: '2rem',sm: '3rem',md: '4rem',lg: '5rem'},
})

export default function Team({bgcolor}) {
  return (
   <Container sx={{bgcolor}} component={'section'} maxWidth='xxl'>
     <Heading />
     <TeamCards />
     <Notice />
   </Container> 
  )
}



