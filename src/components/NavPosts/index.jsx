import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CardContainer from 'components/Cards/CardContainer';

const NavPost = ({item, index}) => (
    <Box sx={{
        flexDirection: index == 0 ? 'row' : 'row-reverse',
        width: {sm: 'max-content', lg: '50%'},
        cursor: 'pointer',
        '.MuiTypography-body2': {
            transition: "0.3s ease-in-out"
        },

        svg: {
            color: 'white',
            fontSize: 50,
            bgcolor: 'primary.main',
            borderRadius: '50%',
            transform: index === 0 ? null : "rotate(180deg)"
        },

        ':hover': {
            '.overlay': {
                transform: "scale(1)"
            },
            '.MuiTypography-body2': {
                color: 'primary.main'
            }
        }
    }} display={'flex'} gap={2}>
    <Box position={'relative'}>
        <Box zIndex={1} borderRadius={'8px 0 8px 8px'} component="img" src={item.url} alt={item.subtitle} />
        <Box className='overlay' sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            bottom: 0,

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: "0.3s ease-in-out",
            transform: "scale(0)",
        }}>                              
            <ArrowCircleLeftIcon /> 
        </Box>
    </Box>
    <Stack spacing={.5}>
      <Typography fontWeight={500} color={'secondary.light'} fontSize={'small'}>{item.subtitle}</Typography>
      <Typography variant='body2'>{item.title}</Typography>
    </Stack>
</Box>
)


const NavPosts = ({ items }) => (
    <CardContainer bgcolor={'primary.light'}>
        <Stack flexDirection={{lg: 'row'}} spacing={1.5}>
                {items.map((item, index) => (
                    <NavPost key={index} item={item} index={index} />
                ))}
        </Stack>
    </CardContainer>
)

export default NavPosts