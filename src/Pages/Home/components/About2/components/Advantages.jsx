import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'


const content = {
    advantages: [
        [" Fractures & Dislocations", "Desensitisation Injections", "Home Medicine Review"],
        ["Health Assessments", "High Quality Care"]
    ],
    checkIcon: <CheckCircleIcon color='primary' sx={{ verticalAlign: "middle" }} />
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    gap: 5,
    display: 'flex',
    mb: 3,
}

const Advantage = ({ advantages }) => advantages.map((advantage, i) => (
    <Typography color={'white'} mt={1} key={i}>
        {content.checkIcon} {advantage}
    </Typography>
))

export default function Advantages() {
    return (
        <Box sx={styles}>
            <Box>
                <Advantage advantages={content.advantages[0]} />
            </Box>
            <Box>
                <Advantage advantages={content.advantages[1]} />
            </Box>
        </Box>
    )
}

