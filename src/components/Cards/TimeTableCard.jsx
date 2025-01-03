import { styled, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { BookIcon } from 'assets/Svg'
import Button from 'components/common/button'
import { Link } from 'react-router-dom'

const Card = styled(Stack)({
    backgroundColor: "white",
    borderRadius: "8px 0 8px 8px",
    padding: "26px 40px 39px",
    gap: 24,

    '@media (min-width: 992px)': {
        maxWidth: "290px",
    },

    button: {
        color: 'rgba(0, 0, 0, 0.6)',

        ':hover': {
            color: 'white'
        }
    },
})

const content = {
    icon: <BookIcon sx={{fontSize: 65}} />,
    h5: 'Doctors Timetable',
    desc: 'Qualified doctors available six days a week, view our timetable to make an appointment.',
    action: 'View Timetable',
    url: '/doctors/timetable'
}

const TimetableCard = () => (
    <Card>
       {content.icon}
       <Typography variant='h5'>{content.h5}</Typography>
       <Typography maxWidth={500}>{content.desc}</Typography>
       <div>
        <Button to={content.url} component={Link} variant={'co'}>{content.action}</Button>
       </div>
    </Card>
)

export default TimetableCard