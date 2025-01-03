const Team1 = 'https://ucarecdn.com/eca7b0ed-6ea8-4668-afcb-cccdddb4e9a3/assets_images_team_grid_1.jpg';
const Team2 = 'https://ucarecdn.com/0ee44534-0c3a-46c1-b881-0a4ed68819c0/assets_images_team_grid_2.jpg';
const Team3 = 'https://ucarecdn.com/bc90f20b-8a53-46f5-931f-fa1398b0c68a/assets_images_team_grid_3.jpg';
const Team4 = 'https://ucarecdn.com/01e96be8-c131-4ae1-8337-0ac7e95214a3/assets_images_team_grid_4.jpg';
const Team5 = 'https://ucarecdn.com/7139aa2d-b07e-4156-9bd0-c6c237421fe7/assets_images_team_grid_5.jpg';
const Team6 = 'https://ucarecdn.com/c934580b-a617-4fc4-9928-4f1760b0c18a/assets_images_team_grid_6.jpg';
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import TeamCard from 'components/Cards/TeamCard'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'

const content = {
    cta: "Read More",
    teams: [
        {
            img: Team1,
            name: "Richard Muldoone",
            url: '#',
            category: "Cardiology Specialist",
            desc: "Muldoone obtained his undergraduate degree in Biomedical Engineering at Tulane University prior to attending St George University School of Medicine.",
            social: [
                {
                    icon: <FacebookIcon />,
                    url: "#",
                    color: 'rgb(72 109 181)'
                },
                {
                    icon: <TwitterIcon />,
                    url: "#",
                    color: 'rgb(39 164 243)'
                },
                {
                    icon: <EmailIcon />,
                    url: "#",
                    color: '#1d7ef2',
                    // color: 'rgb(39 164 243)'
                },
                {
                    icon: <PhoneIcon />,
                    url: "#",
                    color: 'rgb(72 109 181)'
                },
            ]
        },
        {
            img: Team2,
            name: "Michael Brian",
            url: '#',
            category: "Dermatologists",
            desc: "Brian specializes in treating skin, hair, nail, and mucous membrane. He also address cosmetic issues, helping to revitalize the skin, hair, and...",
            social: [
                {
                    icon: <FacebookIcon />,
                    url: "#",
                    color: 'rgb(72 109 181)'
                },
                {
                    icon: <TwitterIcon />,
                    url: "#",
                    color: 'rgb(39 164 243)'
                },
                {
                    icon: <EmailIcon />,
                    url: "#",
                    color: '#1d7ef2',
                    // color: 'rgb(39 164 243)'
                },
                {
                    icon: <PhoneIcon />,
                    url: "#",
                    color: 'rgb(72 109 181)'
                },
            ]
        },
        {
            img: Team3,
            name: "Maria Andaloro",
            url: '#',
            category: "Pediatrician",
            desc: "Andaloro graduated from medical school and completed 3 years residency program in pediatrics. She passed by the American Board",
            social: [
                {
                    icon: <FacebookIcon />,
                    url: "#",
                    color: 'rgb(72 109 181)'
                },
                {
                    icon: <TwitterIcon />,
                    url: "#",
                    color: 'rgb(39 164 243)'
                },
                {
                    icon: <EmailIcon />,
                    url: "#",
                    color: '#1d7ef2',
                },
                {
                    icon: <PhoneIcon />,
                    url: "#",
                    color: 'rgb(72 109 181)'
                },
            ]
        },
        {
            img: Team4,
            name: "Dupree Black",
            url: '#',
            category: "Urologist",
            desc: "Black diagnose and treat diseases of the urinary tract in both men and women. He also diagnose and treat anything involving...",
            social: [
                {
                    icon: <FacebookIcon />,
                    url: "#",
                    color: 'rgb(72 109 181)'
                },
                {
                    icon: <TwitterIcon />,
                    url: "#",
                    color: 'rgb(39 164 243)'
                },
                {
                    icon: <EmailIcon />,
                    url: "#",
                    color: '#1d7ef2',
                },
                {
                    icon: <PhoneIcon />,
                    url: "#",
                    color: 'rgb(72 109 181)'
                },
            ]
        },
        {
            img: Team5,
            name: "Markus Skar",
            url: '#',
            category: "Laboratory",
            desc: "Skar play a very important role in your health care. People working in the clinical laboratory are responsible for conducting tests.",
            social: [
                {
                    icon: <FacebookIcon />,
                    url: "#",
                    color: 'rgb(72 109 181)'
                },
                {
                    icon: <TwitterIcon />,
                    url: "#",
                    color: 'rgb(39 164 243)'
                },
                {
                    icon: <EmailIcon />,
                    url: "#",
                    color: '#1d7ef2',
                },
                {
                    icon: <PhoneIcon />,
                    url: "#",
                    color: 'rgb(72 109 181)'
                },
            ]
        },
        {
            img: Team6,
            name: "Kiano Barker",
            url: '#',
            category: "Pathologist",
            desc: "Barker help care for patients every day by providing their doctors with the information needed to ensure appropriate care.",
            social: [
                {
                    icon: <FacebookIcon />,
                    url: "#",
                    color: 'rgb(72 109 181)'
                },
                {
                    icon: <TwitterIcon />,
                    url: "#",
                    color: 'rgb(39 164 243)'
                },
                {
                    icon: <EmailIcon />,
                    url: "#",
                    color: '#1d7ef2',
                },
                {
                    icon: <PhoneIcon />,
                    url: "#",
                    color: 'rgb(72 109 181)'
                },
            ]
        },
    ]
}

export default function TeamsGrid() {
    return (
        <section>
            <Stack alignItems={'center'} spacing={2}>          
                <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} mt={5}>
                    {content.teams.map((item, index) => (
                        <TeamCard item={item} key={index} />
                    ))}
                </Box>
                <Pagination count={3} />
            </Stack>
        </section>
    )
}