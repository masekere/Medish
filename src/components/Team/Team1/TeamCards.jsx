const Team1 = 'https://ucarecdn.com/eca7b0ed-6ea8-4668-afcb-cccdddb4e9a3/assets_images_team_grid_1.jpg';
const Team2 = 'https://ucarecdn.com/0ee44534-0c3a-46c1-b881-0a4ed68819c0/assets_images_team_grid_2.jpg';
const Team3 = 'https://ucarecdn.com/bc90f20b-8a53-46f5-931f-fa1398b0c68a/assets_images_team_grid_3.jpg';
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import TeamCard from 'components/Cards/TeamCard'
import Box from '@mui/material/Box'

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
                    // color: 'rgb(39 164 243)'
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

export default function TeamCards() {
    return (
        <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} mt={5}>
            {content.teams.map((item, index) => (
                <TeamCard item={item} key={index} />
            ))}
        </Box>
    )
}