import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContainer from './CardContainer'
import Stack from '@mui/material/Stack'

const RecentPostsCard = ({ item }) => (
    <CardContainer width={'100%'} bgcolor={'primary.light'}>
        <Typography mb={3} variant='h5'>{item.h5}</Typography>
        <Stack spacing={1.5}>
            {item.posts.map((item, index) => (
                <Box sx={{cursor: 'pointer'}} key={index} display={'flex'} gap={2}>
                    <Box>
                        <Box borderRadius={'8px 0 8px 8px'} component="img" src={item.url} alt={item.subtitle} />
                    </Box>
                    <Stack spacing={.5}>
                      <Typography fontWeight={500} color={'secondary.light'} fontSize={'small'}>{item.subtitle}</Typography>
                      <Typography variant='body2'>{item.title}</Typography>
                    </Stack>
                </Box>
            ))}
        </Stack>
    </CardContainer>
)

export default RecentPostsCard