import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import AdvantagesList from 'components/common/AdvantagesList'
import ButtonActions from 'components/common/ButtonActions'
import Button from 'components/common/button'

const content = {
    h5: 'Health Care Plans',
    desc: 'Our doctors include highly qualified practitioners came from a range of backgrounds and bring with a diversity of skills and special interests. Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.',
    advantages: [
        [' Review your medical records.', 'Check and test blood pressure.', 'Run tests such as blood tests.'],
        ['Check and test lung function.', 'Narrowing of the arteries.', 'Other specialized tests.']
    ],
    plan: <><Typography component={'span'} fontSize={50} children='$50' /> / Monthly</>,
    action: 'Explore Other Plans'
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    padding: { xs: "45px 25px 50px", sm: "45px 50px 50px" },
    border: "2px solid #e6e8eb",
    borderRadius: "8px 8px 0 8px",
    gap: 3,
    mx: { xs: '-1rem', sm: 0 },

    advantages: {
        p: { xs: '35px 25px', sm: '32px 40px' },
        borderRadius: '8px 8px 0 8px',
        bgcolor: 'primary.light',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
}

const HealthPlans = () => (
    <Stack sx={styles}>
        <Typography fontSize={24} variant='h5'>{content.h5}</Typography>
        <Typography variant='body2'>{content.desc}</Typography>
        <Box sx={styles.advantages}>
            <AdvantagesList items={content.advantages[0]} />
            <AdvantagesList items={content.advantages[1]} />
        </Box>
        <ButtonActions>
            <Typography mr={2} color={'secondary.light'}>{content.plan}</Typography>
            <Button variant='cs'>{content.action}</Button>
        </ButtonActions>
    </Stack>
)

export default HealthPlans