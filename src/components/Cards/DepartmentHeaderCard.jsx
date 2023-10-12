import { CardiogramIcon } from "assets/Svg";
import CardContainer from "./CardContainer";
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from "components/common/button";
import VideoButton from "components/common/button/Video";

const content = {
    action: 'Find A Doctor'
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    boxShadow: '0px 5px 83px 0px rgba(9, 29, 62, 0.15)',
    maxWidth: 515,

    button: {
        color: 'text.secondary',

        ':hover': {
          color: 'white'
        }
    },
    icon: {
        bgcolor: 'primary.light',
        p: 3,
        borderRadius: '8px 0 8px 8px'
    },

    h1: {
        fontSize: 28,
        color: 'secondary.main'
    },
    svg: {
      fontSize: 65
    }
}

const DepartmentHeaderCard = ({title, desc}) => {
  return (
    <CardContainer sx={styles}>
        <Stack direction={{md: "row"}} spacing={3} alignItems={'flex-start'}>
          <Box sx={styles.icon}><CardiogramIcon /></Box>
          <Stack>
            <Typography variant="h1">{title}</Typography>
            <Typography my={2}>{desc}</Typography>
            <Box><Button variant="co">{content.action}</Button></Box>
          </Stack>
        </Stack>
    </CardContainer>    
  )
}

export default DepartmentHeaderCard