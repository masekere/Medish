import Button from 'components/common/button'
import { ListItem, TextField, Box, FormControlLabel, Checkbox, Typography } from '@mui/material'

const content = {
    header: 'Newsletter',
    label: "Your Email Address",
    cta: "i accept the privacy and terms"
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    box: {
        minWidth: 300,
        width: {xs: '100%', xl: 'auto'}
    },
    email: {
        mb: 3,
        mt: 0,
        display: 'flex',
        // alignItems: 'flex-start',
        button: {
            height: 56.5,
            ml: '-6px',
            mt: '9.5px',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        }
    },
    terms: {
        span: {
            fontSize: 14,
            // color: 'white'
        },
        svg: {
            color: 'white'
        }
    }
}

export default function Newletter() {
    return (
        <Box sx={styles.box}>
            <Typography mb={3} variant='lead'>{content.header}</Typography>

            <Box sx={styles.email}>
                <TextField
                fullWidth
                id="newsletter"
                label={content.label}            
                />
              <Button />
            </Box>
            <FormControlLabel
                sx={styles.terms}
              label={content.cta}
              control={
                <Checkbox
                //   value=""
                //   checked={}
                //   onChange={}
                  color="primary"
                />
              }
            />
        </Box>
    )
}