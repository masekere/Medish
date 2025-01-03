import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { useMediaQuery } from '@mui/material'










const content = {
    time: ['08.00', '09.00', '10.00', '11.00', '12.00', '13.00'],
    departments: [
        {
            label: 'All Clinics',
            value: '*'
        },
        {
            label: 'NeurologyClinic',
            value: 'Neurology'
        },
        {
            label: 'Maternity Clinic',
            value: 'Maternity'
        },
        {
            label: 'Physiotherapy Clinic',
            value: 'Physiotherapy'
        },
        {
            label: 'Oncology Clinic',
            value: 'Oncology'
        },
        {
            label: 'Cardiology Clinic',
            value: 'Cardiology'
        },
        {
            label: 'Gynaecology Clinic',
            value: 'Gynaecology'
        },
        {
            label: 'Audiology Clinic',
            value: 'Audiology'
        },
        {
            label: 'Pathology Clinic',
            value: 'Pathology'
        },
        {
            label: 'Laboratory Analysis',
            value: 'Laboratory'
        },
        {
            label: 'Urology Clinic',
            value: 'Urology'
        },
        {
            label: 'Pediatric Clinic',
            value: 'Pediatric'
        }
    ],
    schedules: [
        {
            header: 'Sunday',
            data: [
                {
                    clinic: 'Neurology',
                    type: 'Consultation',
                    works_hours: ['08:00', '09:00'],
                    doctor: 'Dr. Muldoone. R',
                    row: 2
                },
                {
                    clinic: 'Maternity',
                    type: 'Consultation',
                    works_hours: ['09:00', '10:00'],
                    doctor: 'Dr. Muldoone. R',
                    row: 3
                },
                {
                    clinic: 'Neurology',
                    type: 'Consultation',
                    works_hours: ['12:00', '13:00'],
                    doctor: 'Dr. Muldoone. R',
                    row: 4
                },
                {
                    clinic: 'Physiotherapy',
                    type: 'Consultation',
                    works_hours: ['11:00', '12:00'],
                    doctor: 'Dr. Muldoone. R',
                    row: 5
                },
                {
                    clinic: 'Neurology',
                    type: 'Consultation',
                    works_hours: ['12:00', '13:00'],
                    doctor: 'Dr. Muldoone. R',
                    row: 6
                },
                {
                    clinic: 'Oncology',
                    type: 'Consultation',
                    works_hours: ['13:00', '14:00'],
                    doctor: 'Dr. Muldoone. R',
                    row: 7
                },
            ]
        },
        {
            header: 'Monday',
            data: [
                {
                    clinic: 'Cardiology',
                    type: 'Consultation',
                    works_hours: ['08:00', '09:00'],
                    doctor: 'Dr. Brain.M',
                    row: 2
                },
                {
                    clinic: 'Oncology',
                    type: 'Consultation',
                    works_hours: ['09:00', '10:00'],
                    doctor: 'Dr. Brain.M',
                    row: 3
                },
                {
                    clinic: 'Cardiology',
                    type: 'Consultation',
                    works_hours: ['11:00', '12:00'],
                    doctor: 'Dr. Brain.M',
                    row: 4
                },
                {
                    clinic: 'Cardiology',
                    type: 'Consultation',
                    works_hours: ['11:00', '12:00'],
                    doctor: 'Dr. Brain.M',
                    row: 5
                },
                {
                    clinic: 'Gynaecology',
                    type: 'Consultation',
                    works_hours: ['12:00', '13:00'],
                    doctor: 'Dr. Brain.M',
                    row: 6
                },
                {
                    clinic: 'Audiology',
                    type: 'Consultation',
                    works_hours: ['13:00', '14:00'],
                    doctor: 'Dr. Brain.M',
                    row: 7
                },
            ]
        },
        {
            header: 'Tuesday',
            data: [
                {
                    clinic: 'Pathology',
                    type: 'Consultation',
                    works_hours: ['08:00', '09:00'],
                    doctor: 'Dr. Andaloro',
                    row: 2
                },
                {
                    clinic: 'Pathology',
                    type: 'Consultation',
                    works_hours: ['09:00', '10:00'],
                    doctor: 'Dr. Andaloro',
                    row: 3
                },
                {
                    clinic: 'Pathology',
                    type: 'Consultation',
                    works_hours: ['11:00', '12:00'],
                    doctor: 'Dr. Andaloro',
                    row: 4
                },
                {
                    clinic: 'Maternity',
                    type: 'Consultation',
                    works_hours: ['11:00', '12:00'],
                    doctor: 'Dr. Andaloro',
                    row: 5
                },
                {
                    clinic: 'Oncology',
                    type: 'Consultation',
                    works_hours: ['12:00', '13:00'],
                    doctor: 'Dr. Andaloro',
                    row: 6
                },
                {
                    clinic: 'Pathology',
                    type: 'Consultation',
                    works_hours: ['13:00', '14:00'],
                    doctor: 'Dr. Andaloro',
                    row: 7
                },
            ]
        },
        {
            header: 'Wednesday',
            data: [
                {
                    clinic: 'Laboratory',
                    type: 'Consultation',
                    works_hours: ['08:00', '09:00'],
                    doctor: 'Dr. Markus.S',
                    row: '2 / span 2',
                },
                {
                    clinic: 'Gynaecology',
                    type: 'Consultation',
                    works_hours: ['10:00', '12:00'],
                    doctor: 'Dr. Markus.S',
                    row: '4 / span 2',
                },
                {
                    clinic: 'Pediatric',
                    type: 'Consultation',
                    works_hours: ['12:00', '13:00'],
                    doctor: 'Dr. Markus.S',
                    row: 6
                },
                {
                    clinic: 'Physiotherapy',
                    type: 'Consultation',
                    works_hours: ['13:00', '14:00'],
                    doctor: 'Dr. Markus.S',
                    row: 7
                },
            ]
        },
        {
            header: 'Thursday',
            data: [
                {
                    clinic: 'Pediatric',
                    type: 'Consultation',
                    works_hours: ['08:00', '09:00'],
                    doctor: 'Dr. Alex.K',
                    row: 2
                },
                {
                    clinic: 'Audiology',
                    type: 'Consultation',
                    works_hours: ['09:00', '10:00'],
                    doctor: 'Dr. Alex.K',
                    row: 3
                },
                {
                    clinic: 'Maternity',
                    type: 'Consultation',
                    works_hours: ['11:00', '12:00'],
                    doctor: 'Dr. Alex.K',
                    row: 4
                },
                {
                    clinic: 'Cardiology',
                    type: 'Consultation',
                    works_hours: ['11:00', '12:00'],
                    doctor: 'Dr. Alex.K',
                    row: 5
                },
                {
                    clinic: 'Physiotherapy',
                    type: 'Consultation',
                    works_hours: ['12:00', '13:00'],
                    doctor: 'Dr. Alex.K',
                    row: 6
                },
                {
                    clinic: 'Maternity',
                    type: 'Consultation',
                    works_hours: ['13:00', '14:00'],
                    doctor: 'Dr. Alex.K',
                    row: 7
                },
            ]
        },
        {
            header: 'Friday',
            data: [
                {
                    clinic: 'Physiotherapy',
                    type: 'Consultation',
                    works_hours: ['08:00', '09:00'],
                    doctor: 'Dr. Alex.K',
                    row: 2
                },
                {
                    clinic: 'Cardiology',
                    type: 'Consultation',
                    works_hours: ['09:00', '10:00'],
                    doctor: 'Dr. Alex.K',
                    row: 3
                },
                {
                    clinic: 'Oncology',
                    type: 'Consultation',
                    works_hours: ['10:00', '12:00'],
                    doctor: 'Dr. Alex.K',
                    row: '4 / span 2',
                },
                {
                    clinic: 'Cardiology',
                    type: 'Laboratory',
                    works_hours: ['12:00', '14:00'],
                    doctor: 'Dr. Alex.K',
                    row: '6 / span 2',
                },
            ]
        },
        {
            header: 'Saturday',
            data: [
                {
                    clinic: 'Urology',
                    type: 'Consultation',
                    works_hours: ['08:00', '09:00'],
                    doctor: 'Dr. Darlen.G',
                    row: 2
                },
                {
                    clinic: 'Urology',
                    type: 'Consultation',
                    works_hours: ['09:00', '10:00'],
                    doctor: 'Dr. Darlen.G',
                    row: 3
                },
                {
                    clinic: 'Urology',
                    type: 'Consultation',
                    works_hours: ['11:00', '12:00'],
                    doctor: 'Dr. Darlen.G',
                    row: 4
                },
                {
                    clinic: 'Urology',
                    type: 'Consultation',
                    works_hours: ['11:00', '12:00'],
                    doctor: 'Dr. Darlen.G',
                    row: 5
                },
                {
                    clinic: 'Urology',
                    type: 'Consultation',
                    works_hours: ['12:00', '13:00'],
                    doctor: 'Dr. Darlen.G',
                    row: 6
                },
                {
                    clinic: 'Gynaecology',
                    type: 'Consultation',
                    works_hours: ['13:00', '14:00'],
                    doctor: 'Dr. Darlen.G',
                    row: 7
                },
            ]
        },
    ]
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    ".TimeTableGrid": {
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)",
        gap: "5px",
        mb: 10
    },
    '.grid-col': {
        display: "grid",
        gap: "5px",
        gridTemplateRows: "50px repeat(6, 200px)",
    },
    '.grid-col > div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        borderRadius: '4px'
    },
    '.light > div': {
        bgcolor: 'primary.light'
    },
    '.timetableCard': {
        bgcolor: 'secondary.light',
        color: 'white',

        '.MuiTypography-root': {
            color: 'white'
        }
    }
}

const TimeColumn = () => (
    <div className='grid-col light'>
        <Box />
        {content.time.map((item, index) => (
            <Box key={index}>
                <Typography>{item}</Typography>
            </Box>
        ))}
    </div>
)

const SchedulesColumn = ({ timetable }) => timetable.map((schedule, index) => (
    <div key={index} className='grid-col'>
        <Box gridRow={1} bgcolor={'primary.light'}>
            <Typography>{schedule.header}</Typography>
        </Box>
        {schedule.data.map((item, index) => (
            <Box key={index} gridRow={item.row} className='timetableCard'>
                <Typography fontSize={17} fontWeight={500}>{item.clinic}</Typography>
                <Typography fontSize={13}>{item.type}</Typography>
                <Typography fontSize={14}>{item.works_hours[0]}</Typography>
                <Typography fontSize={14}>{item.works_hours[1]}</Typography>
                <Typography fontSize={14}>{item.doctor}</Typography>
            </Box>
        ))}
    </div>
))

const TimeTableGrid = ({ timetable }) => (
    <div className='TimeTableGrid'>
        <TimeColumn />
        <SchedulesColumn timetable={timetable} />
    </div>
)

const TimeTableStack = ({timetable}) => (
    <Stack mb={10} alignItems={'center'} spacing={2}>
    {timetable.map(((item, index) => (
        <Box key={index} width={696}>
            <Typography mb={2} textAlign={'center'} bgcolor={'primary.light'} py={2}>{item.header}</Typography>

            <Stack
                spacing={2}
                divider={<Divider />}
            >
                {item.data.map(n => (
                    <Box px={2} justifyContent={'space-between'} display={'flex'}>
                        <Typography>{n.clinic}</Typography>
                        <Typography>{n.works_hours[0]} - {n.works_hours[1]}</Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    )))}
</Stack>
)


export default function TimeTable() {
    const [timetable, setTimetable] = useState(content.schedules)
    const [department, setDepartment] = useState('*')
    const lg = useMediaQuery('@media (min-width: 992px)');

    useEffect(() => {
        setTimetable(content.schedules.map(
            n => department === '*' ? n : ({
                header: n.header,
                data: n.data.filter(
                    i => i.clinic === department
                )
            })
        ))
    }, [department])

    return (
        <Container sx={styles} maxWidth="xxl">
            <Stack alignItems={'center'} my={5}>
                <TextField
                    sx={{ width: 300 }}
                    id={'department'}
                    select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    InputProps={{ id: 'department' }}
                >
                    {content.departments.map((item, index) => (
                        <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                    ))}
                </TextField>
            </Stack>
            {lg && <TimeTableGrid timetable={timetable} />}
            {!lg && <TimeTableStack timetable={timetable} />}
        </Container>
    )
}