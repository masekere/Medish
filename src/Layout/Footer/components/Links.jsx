import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Box, ListItem } from '@mui/material'

const content = [
    {
        header: "Departments",
        path: [
            {
                name: "Neurology Clinic",
                url: "#"
            },
            {
                name: "Pathology Clinic",
                url: "#"
            },
            {
                name: "Laboratory Analysis",
                url: "#"
            },
            {
                name: "Pediatric Clinic",
                url: "#"
            },
            {
                name: "Cardiac Clinic",
                url: "#"
            },
        ]
    },
    {
        header: "Links",
        path: [
            {
                name: "Abouts Us",
                url: "#"
            },
            {
                name: "Our Clinic",
                url: "#"
            },
            {
                name: "Our Doctors",
                url: "#"
            },
            {
                name: "News & Media",
                url: "#"
            },
            {
                name: "Appointments",
                url: "#"
            },
        ]
    },
    {
        header: "Help",
        path: [
            {
                name: "Help & FAQs",
                url: "#"
            },
            {
                name: "Contacts",
                url: "#"
            },
            {
                name: "Careers",
                url: "#"
            },
            {
                name: "Site Map",
                url: "#"
            },
        ]
    },
]

export default function Links() {
    return (
        <>
            {content.map( (item, index) => (
                <Box key={index} className='links '>
                    <Typography className='header' mb={3} variant='lead'>{item.header}</Typography>
                    {item.path.map((path, index) => (
                        <Typography key={index} component={Link} to={path.url} variant='body2'>{path.name}</Typography>
                    ))}
                </Box>
            ))}
        </>
    )
}