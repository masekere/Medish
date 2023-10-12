import Team1 from "assets/images/team/grid/1.jpg"
import Team2 from "assets/images/team/grid/2.jpg"
import Team3 from "assets/images/team/grid/3.jpg"
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import Box from '@mui/material/Box'
import TeamCard2 from "components/Cards/TeamCard2"

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
        <Box display={'flex'} flexWrap={'wrap'} gap={3}  mt={5}>
            {content.teams.map((item, index) => (
                <TeamCard2 item={item} key={index} />
            ))}
        </Box>
    )
}