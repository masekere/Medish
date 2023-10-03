import colors from "assets/theme/base/colors"

const {primary, secondary} = colors

const iconButton = {
    /** @type {import("@mui/material").SxProps} */
    variants: [
        {
            props: { variant: 'primary' },
            style: {
                marginTop: 4,
                background: primary.main,
                color: 'white',
                ':hover': {
                    background: secondary.main
                }
            }
        },
        {
            props: { variant: 'secondary' },
            style: {
                marginTop: 4,
                background: secondary.main,
                color: 'white',
                ':hover': {
                    background: primary.main
                }
            }
        },
    ]
}

export default iconButton