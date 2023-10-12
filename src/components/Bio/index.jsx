import CardContainer from "components/Cards/CardContainer";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from "components/common/Chip";
import { Link } from "react-router-dom";


const bgColor = (color) => ({
    background: (color ? color : '#435ba1') + '!important',
})

const Bio = ({ item }) => (
    <CardContainer bgcolor={'primary.light'}>
        <Box mb={3} height={70} width={70} borderRadius={'8px 8px 8px 0'} component="img" src={item.avatar} alt={item.h4} />
        <Typography variant="h4">{item.h4}</Typography>
        <Typography my={2}>{item.desc}</Typography>
        <Box gap={1} display={'flex'}>
            {item.social.map((({ icon, url, color }, index) => (
                <Chip label={icon} key={index} component={Link} to={url} sx={bgColor(color)} variant="icon" />
            )))}
        </Box>
    </CardContainer>
)

export default Bio