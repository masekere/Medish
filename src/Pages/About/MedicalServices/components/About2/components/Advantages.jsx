import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import AdvantagesList from 'components/AdvantagesList'


const content = {
    advantages: [
        [" Fractures & Dislocations", "Desensitisation Injections", "Home Medicine Review"],
        ["Health Assessments", "High Quality Care"]
    ],
    checkIcon: <CheckCircleIcon color='primary' sx={{ verticalAlign: "middle" }} />
}

const styles = {
    gap: 5,
    display: 'flex',
    mb: 3,
}

export default function Advantages() {
    return (
        <Box sx={styles}>
            <Box>
                <AdvantagesList color={'white'} items={content.advantages[0]} />
            </Box>
            <Box>
                <AdvantagesList color={'white'} items={content.advantages[1]} />
            </Box>
        </Box>
    )
}

