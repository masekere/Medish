import Process from "components/Process";
import Box from '@mui/material/Box'

const styles = {
    '.Process': {
      pb: 30
    }
}

export default function ProcessContainer() {
  return (
    <Box sx={styles}>
      <Process />
    </Box>
  )
}