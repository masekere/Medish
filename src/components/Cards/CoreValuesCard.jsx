import { styled, Stack } from '@mui/material'
import MuiBox from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Card = styled(MuiBox)({
    padding: "34px 38px 32px",
    display: "flex",
    border: "2px solid #e6e8eb",
    borderRadius: "8px 8px 0 8px",
    transition: "0.3s ease-in-out",
    cursor: "pointer",
    gap: 24,
    minWidth: 300,

    '&:hover': {
        boxShadow: '0px 5px 83px 0px rgba(9, 29, 62, 0.15)',
        borderColor: 'white'
    }
})

/** @type {import("@mui/material").SxProps} */
const styles = {
    flexDirection: {xs: 'column', lg: 'row'},
    textAlign: {xs: 'center', lg: 'left'},
    width: {xs: '100%',md: 'calc(50% - 12px)'},


    svg: {
        alignSelf: {xs: 'center', lg: 'baseline'},
    }
}

const CoreValuesCard = ({item}) => (
    <Card sx={styles}>
        {item.icon}
        <Stack spacing={2}>
            <Typography variant='h5'>{item.h5}</Typography>
            <Typography>{item.desc}</Typography>
        </Stack>
    </Card>
)

export default CoreValuesCard