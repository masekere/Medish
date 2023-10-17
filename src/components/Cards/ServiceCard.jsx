// import { Box, CardContent, Typography } from '@mui/material'
// import Card from '@mui/material/Card'
// import PrimaryLink from 'components/PrimaryLink'

// /** @type {import("@mui/material").SxProps} */
// const styles = {
//     card: {
//         // position: 'relative',
//         // mt: 8,
//         pb: 2,
//         overflow: 'visible',
//         maxWidth: "412px",
//         marginBottom: "80px",
//         boxShadow: "0px 5px 83px 0px rgba(40, 40, 40, 0.06)",
//         transition: "0.3s ease-in-out",
//         borderRadius: "1rem",
//         button: {
//             m: { xs: 'auto', sm: 0 }
//         },
//         '@media (max-width: 887px)': {
//             maxWidth: '100%',
//             textAlign: 'center',
//             mx: 2,
//             p: {
//                 // maxWidth: '20%',
//                 bgcolor: 'red'
//             }
//         }
//     },
//     content: {
//         px: { xs: '2rem', lg: '2.5rem' },
//         '@media (max-width: 887px)': {
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//         }
//         // textAlign: 'center'
//     },
//     imageContainer: {
//         px: { xs: '2rem', lg: '2.5rem' },
//         img: {
//             mb: '-4rem',
//             borderRadius: ".5rem",
//             width: "100%",


//         }
//     }
// }

// const content = {
//     action: 'Read More'
// }

// export default function ServiceCard({ item, sx }) {
//     return (
//         <Card sx={{...styles.card, ...sx}}>
//             <CardContent sx={styles.content}>
//                 <Box borderRadius={'0 0 .5rem .5rem'} width={'max-content'} p={2} mt={'-16px'} bgcolor={'primary.light'}>
//                     <item.icon sx={{ fontSize: 65 }} />
//                 </Box>
//                 <Typography pb={1} pt={5} variant='h4'>{item.title}</Typography>
//                 <Typography color={'#8790a2'} >
//                     {item.desc} <PrimaryLink to={item.url} >{content.action}</PrimaryLink>
//                 </Typography>
//             </CardContent>
//             <Box sx={styles.imageContainer}>
//                 <Box component={'img'} src={item.img} alt={item.title} />
//             </Box>
//         </Card>
//     )
// }
import { styled, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import PrimaryLink from 'components/PrimaryLink'
import AdvantagesList from 'components/common/AdvantagesList'

const Card = styled(Box)({
    boxShadow: '0px 5px 83px 0px rgba(9, 29, 62, 0.08)',
    borderRadius: 8,
    maxWidth: 400,
    height: '100%'
})

const styles = {
    // m: '4rem',

    img: {
        width: '100%',
        borderRadius: '8px 8px 0 0'
    },
    content: {
        p: '10px 50px 40px'
    }
}

const content = {
    advantages: ['Neurocritical Care', 'Neuro Oncolgy','Geriatric Neurology'],
    action: 'Read more'
}

const ServiceCard = ({item, sx}) => (
   <Card sx={styles}>
        <Box component={'img'} src={item.img} alt={item.title} />
        <Stack sx={styles.content} spacing={2}>
          <Typography variant='h4'>{content.h4}</Typography>
          <Typography>{item.desc} <PrimaryLink>{content.action}</PrimaryLink></Typography>
          <AdvantagesList items={content.advantages}  />
        </Stack>
   </Card>
)

export default ServiceCard