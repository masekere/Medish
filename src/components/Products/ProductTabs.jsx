import Typography from '@mui/material/Typography'
import Tabs from 'components/common/Tabs'
import { useState } from 'react'
import Box from '@mui/material/Box'
const Avatar = 'https://ucarecdn.com/1730c8f6-3a5c-4eb2-9b7c-3c7d59829a2b/assets_images_blog_author_2.jpg';
import Stack from '@mui/material/Stack'
import Rating from '@mui/material/Rating'
import TextField from '@mui/material/TextField'
import Button from 'components/common/button'



const content = {
    tabs: [
        {
            label: 'Description',
            // icon: <MedicalServices />
        },
        {
            label: 'Additional Information',
            // icon: <MedicalInformation />
        },
        {
            label: 'Reviews',
            // icon: <Reviews />
        },
    ],
    description: 'It doesn’t contain as much as coffee, but enough to produce a response without causing the jittery effects associated with taking in too much caffeine. Caffeine affects the brain by blocking an inhibitory neurotransmitter called adenosine. This way, it increases the firing of neurons and the concentration of neurotransmitters like dopamine and norepinephrine (4Trusted Source, 5). Research has consistently shown that caffeine can improve various aspects of brain function, including mood, vigilance, reaction time, and memory (6).',
    technichal: {
        title: 'Technichal Details',
        details: [
            {
                name: 'Part Number',
                value: '60-MCTE'
            },
            {
                name: 'Item Weight',
                value: '54 pounds'
            },
            {
                name: 'Product Dimensions',
                value: '92.8 x 92.8 x 92.8 inches'
            },
            {
                name: 'Item model number',
                value: '60-MCTE'
            },
            {
                name: 'Item Package Quantity',
                value: '1'
            },
            {
                name: 'Batteries Required?',
                value: 'No'
            },
        ]
    },
    reviews: [
        {
            name: 'Marko Smith',
            date: '22/02/2016',
            img: Avatar,
            rating: 3,
            desc: 'Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio'
        },
        {
            name: 'Mohamed Habaza',
            date: '21/02/2016',
            img: Avatar,
            rating: 5,
            desc: 'Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio'
        },
    ],
    action: 'post your review'
}

const TechnichalDetails = () => (
    <Box mb={5}>
      <Typography my={3} variant='h5'>{content.technichal.title}</Typography>

      {content.technichal.details.map((item, index) => (
        <Box p={1} display={'flex'} bgcolor={ index%2 ? 'white' : 'rgb(242 242 242)' } >
          <Typography flex={1} fontWeight={500}>{item.name}</Typography>
          <Typography flex={1}>{item.value}</Typography>
        </Box>
      ))}
    </Box>
)

const Reviews = () => (
    <Box>
        {
            content.reviews.map((item, index) => (
                <Stack mb={3} spacing={2} key={index}>
                    <Box gap={3} display={'flex'}>
                        <Box height={70} width={70} borderRadius={'8px 8px 8px 0'} component="img" src={item.img} alt={item.name} />
                        <Box>
                          <Typography color={'secondary.main'} fontWeight={700}>{item.name}</Typography>
                          <Typography variant='body2'>{item.date}</Typography>
                          <Rating name="rating" value={item.rating} />
                        </Box>
                    </Box>
                    <Typography>{item.desc}</Typography>
                </Stack>
            ))
        }
        <Stack spacing={3}>
            <TextField
            id=""
            label="Your Name"
            />
            <TextField
            id=""
            label="Your Email"
            />
            <Box>
            <Typography component="legend">Rating</Typography>
            <Rating name="product rating" />
            </Box>   
            <TextField
            id="review"
            multiline
            rows={3}
            label="Your Email"
            />
            <div>
                <Button variant={'cs'}>{content.action}</Button>
            </div>   
        </Stack>
    </Box>
)

const TabContent = [
    <Typography>{content.description}</Typography>,
    <TechnichalDetails />,
    <Reviews />
]

export default function ProductTabs() {
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <Box>
            <Tabs
                items={content.tabs}
                tabIndex={tabIndex}
                setTabIndex={setTabIndex} />
            <Box mt={3}>
                {TabContent[tabIndex]}
            </Box>
        </Box>
    )
}