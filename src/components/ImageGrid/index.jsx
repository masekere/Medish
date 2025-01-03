import Box from '@mui/material/Box'
const about1 = 'https://ucarecdn.com/34bfe8ca-c876-471b-a876-98836d52d5c7/assets_images_about_avatars_avatar1.png';
const about2 = 'https://ucarecdn.com/e259f7a2-af51-42ff-a3d0-decb63f108a3/assets_images_about_avatars_2.jpg';
const about3 = 'https://ucarecdn.com/55bddaa4-fdd3-4cac-9996-3d5327a6e187/assets_images_about_avatars_3.jpg';
const about4 = 'https://ucarecdn.com/2b69b8e8-e68c-4bee-98c3-eb626cbceeee/assets_images_about_avatars_4.jpg';
const about5 = 'https://ucarecdn.com/c253f9a9-5f70-4f97-8a34-01bd5d2c6348/assets_images_about_avatars_5.jpg';
const about6 = 'https://ucarecdn.com/dd8d6812-24a0-4744-8c27-274d02659cbb/assets_images_about_avatars_avatar6.png';
import MuiContainer from '@mui/material/Container'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Button from 'components/common/button'

const content = {
    lead: 'With modern, busy lifestyles, it’s easy to neglect your health as you put everyone else’s needs first. So, we’re here to care for you and your entire family.',
    cta: 'Find A Doctor'
}

const styles = {
    avatar2: {
        width: {xs: '100%', md: 527},
        height: 307,
        borderRadius: "0px 32px 32px 32px",
        p: "2rem 50px 50px",
        pt: {xs: '2rem', sm: '60px'},
        background: `linear-gradient(180deg, #13C1D9BF 18%, #13c5dd 70%), url(${about2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
    }
}

const Container = styled(MuiContainer)({
    display: 'flex',
    justifyContent: 'center',  
    alignItems: 'center',  
    marginTop: 96, 
    gap: 24
})

const Row = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-end',  
    marginBottom: 24, 
    gap: 24
})

export default function ImageGrid() {
  return (
    <Container maxWidth="xxl">
        <Box>
            <Row alignItems={'flex-end'}>
                <Box display={{xs: 'none', lg: 'block'}} component="img" src={about1} alt={'about-4'} borderRadius="32px 0 32px 32px" height="170px" />
                <Box sx={styles.avatar2}>
                    <Typography mb={2} variant="lead">{content.lead}</Typography>
                    <Button variant='co' icon='start'>{content.cta}</Button>
                </Box>
                <Box display={{xs: 'none', md: 'block'}} component="img" src={about3} alt={'about-3'} borderRadius="32px 32px 32px 0px" width={196} height={225} />
            </Row>
            <Row display={{xs: 'none', lg: 'flex'}} >
                <Box component="img" src={about5} alt={'about-4'} borderRadius="32px 32px 32px 0px" height="180px" />
                <Box component="img" src={about6} alt={'about-6'} borderRadius="0 32px 32px 32px" height={307} />
            </Row>
        </Box>
        <Box display={{xs: 'none', xl: 'block'}} component="img" src={about4} alt={'about-4'} borderRadius="0 32px 32px 32px" height="405px" />
                        {/* <Box sx={styles.avatar2}>
                    <Typography mb={1} variant="lead">{content.lead}</Typography>
                    <Button variant='co' icon='start'>{content.cta}</Button>
                </Box> */}
    </Container>
  )
}