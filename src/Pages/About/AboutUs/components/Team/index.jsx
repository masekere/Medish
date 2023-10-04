import Container from '@mui/material/Container'
import Heading from './components/Heading'
import TeamCards from './components/TeamCards'
import Button from 'components/button'
import Box from '@mui/material/Box'
import Notice from './components/Notice'

const content = {
  action: 'Make Appointemt'
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    position: 'relative',
    overflow: 'visible',
    px: {xs: '2rem',sm: '3rem',md: '4rem',lg: '5rem'},

  },
  button: {
    height: 60,
    position: 'absolute',
    bottom: '-30px'
  }

}

export default function Team() {
  return (
    <Box bgcolor='primary.light'>
      <Container sx={styles.container} component={'section'} maxWidth='xxl'>
        <Heading />
        <TeamCards />
        <Notice />
        <Button sx={styles.button}>{content.action}</Button>
      </Container> 
    </Box>
  )
}



