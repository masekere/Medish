const primaryBorder = "2px solid #4ed4e6"
const secondaryBorder = "2px solid #283b6a"

export default {
    // contained primary
    cp: {
        variant: 'contained',
        color: 'primary',
    },
    // contained secondary
    cs: {
        variant: 'contained',
        style: {
            backgroundColor: 'secondary.main',
            '&:hover': {
                backgroundColor: 'secondary.main',
            },
            ':before': {
                backgroundColor: 'secondary.light',
            },
        },
        color: 'secondary',
    },
    // contained white
    cw: {
        variant: 'contained',
        style: {
            backgroundColor: 'white',
            '&:hover': {
                background: 'white',
                color: 'white'
            },
            ':before': {
                background: 'secondary.main',
            },
        },
        color: 'white'
    },
    co: {
        variant: 'contained',
        style: {
            boxShadow: 'none !important',
            backgroundColor: 'transparent',
            '&:hover': {
                background: 'transparent',
            },
            ':before': {
                background: 'secondary.main',
                border: secondaryBorder,
            },
            ':after': {
                content: "''",
                position: "absolute",
                border: primaryBorder,
                width: "calc(100%)",
                height: "calc(100%)",
                top: "0px",
                left: "0px",
                zIndex: -2,
                transition: "all 0.34s cubic-bezier(0.37, 0.31, 0.31, 0.9)",
                borderRadius: "inherit",
            },
        },
    },
    tp: {
        variant: 'text'
    },
    ts: {
        variant: 'text',
        style: {
            color: 'secondary.main',
        },
    },
}