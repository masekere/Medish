import CardContainer from "components/Cards/CardContainer";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SocialMediaBlock from "components/common/SocialMediaBlock";

const Bio = ({ item }) => (
    <CardContainer bgcolor={'primary.light'}>
        <Box mb={3} height={70} width={70} borderRadius={'8px 8px 8px 0'} component="img" src={item.avatar} alt={item.h4} />
        <Typography variant="h4">{item.h4}</Typography>
        <Typography my={2}>{item.desc}</Typography>
        <SocialMediaBlock items={item.social} />
    </CardContainer>
)

export default Bio