import Team1 from "assets/images/team/grid/1.jpg"
import Team2 from "assets/images/team/grid/2.jpg"
import Team3 from "assets/images/team/grid/3.jpg"
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import TeamCard from 'components/Cards/TeamCard'
// import Box from '@mui/material/Box'
import CardSwiper from "components/Cards/CardSwiper"

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
                    url: "#"
                },
                {
                    icon: <TwitterIcon />,
                    url: "#"
                },
                {
                    icon: <EmailIcon />,
                    url: "#"
                },
                {
                    icon: <PhoneIcon />,
                    url: "#"
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
                    url: "#"
                },
                {
                    icon: <TwitterIcon />,
                    url: "#"
                },
                {
                    icon: <EmailIcon />,
                    url: "#"
                },
                {
                    icon: <PhoneIcon />,
                    url: "#"
                },
            ]
        },
        {
            img: Team3,
            name: "Maria Andaloro",
            url: '#',
            category: "Pediatrician",
            desc: "Andaloro graduated from medical school and completed 3 years residency program in pediatrics. She passed by the American Board of Pediatrics.",
            social: [
                {
                    icon: <FacebookIcon />,
                    url: "#"
                },
                {
                    icon: <TwitterIcon />,
                    url: "#"
                },
                {
                    icon: <EmailIcon />,
                    url: "#"
                },
                {
                    icon: <PhoneIcon />,
                    url: "#"
                },
            ]
        },
    ]
}

export default function TeamCards() {
    return (
        // <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} mt={5}>
        //   {content.teams.map( (item, index) => (
        //     <TeamCard key={index} item={item} />
        //   ) )}
        // </Box>
        <CardSwiper mt={4} items={content.teams} Card={TeamCard} />
    )
}