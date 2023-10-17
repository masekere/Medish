import { styled, Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import Button from 'components/common/button';

const Card = styled(Box)(({ reversed }) => ({
    boxShadow: '0px 5px 83px 0px rgba(9, 29, 62, 0.15)',
    padding: '30px 40px 34px',
    borderRadius: reversed ? '0 8px 8px 8px' : '8px 0px 8px 8px',
    display: 'flex',
    gap: 24,
    backgroundColor: 'white',
    textAlign: reversed ? 'left' : 'right',
    flexDirection: reversed ? 'row-reverse' : 'row',

    svg: {
        color: reversed ? '#435ba1' : '#13c5dd'
    },
/** @type {import("@mui/material").SxProps} */
    '@media (max-width: 575px)': {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        textAlign: 'center'
    },
    '@media (min-width: 992px)': {
        width: 'calc(50% - 20px)',
    },

}));


const Features2Card = ({ item }) => {
    const { reversed, h4, desc, Icon, action,  url } = item

    return (
        <Card reversed={reversed}>
            <Stack spacing={2}>
                <Typography variant='h4'>{h4}</Typography>
                <Typography>{desc}</Typography>
                <div>
                    <Button variant={reversed ? 'ts' : 'tp'} icon={reversed ? 'start' : 'end'}>{action}</Button>
                </div>
            </Stack>
            <Icon sx={{ fontSize: 65 }} />
        </Card>
    )
}

export default Features2Card

Features2Card.propTypes = {
  item: PropTypes.object.isRequired
}