import colors from "assets/theme/base/colors";
import theme from "assets/theme/base/initialTheme";
import breakpoints from "assets/theme/base/breakpoints";

const {values: {xs, sm, md, lg, xl, xxl}} = breakpoints

const {primary, secondary, grey} = colors

const fonts = {
    body: "'Roboto', sans-serif",
    secondary: "'Heebo', sans-serif",
    heading: "'Rubik', sans-serif",
}

/** @type {import("@mui/material").SxProps} */
const headingStyle = {
    fontFamily: fonts.heading,
    fontWeight: 700,
    color: secondary.main,
    textTransform: 'capitalize',
}

const subtitle = {
    textTransform: "capitalize",
    fontWeight: 700,
    lineHeight: 1,
    [theme.breakpoints.up(lg)]: {
        lineHeight: 1.5
    },
}

export default {
/** @type {import("@mui/material").SxProps} */
    h1: {
        ...headingStyle,
        fontSize: '32px',
        lineHeight: 1.4,
        mb: '32px',
        color: 'white',
        // textAlign: 'center',
        // [theme.breakpoints.up(md)]: {
        //     // textAlign: 'left',
        //     fontSize: '50px'
        // },
        [theme.breakpoints.up(xl)]: {
            fontSize: '54px'
        }
    },
    h1_desc: {
        fontFamily: fonts.body,
        fontWeight: 700,
        fontSize: "17px",
        lineHeight: "26px",
        color: '#f9f9f9',
        textAlign: 'center',
        [theme.breakpoints.up(lg)]: {
            textAlign: 'left',
        }
    },
    h2: {
        ...headingStyle,
        fontSize: '42px',
        fontFamily: fonts.heading,
        textTransform: "capitalize",
        // fontSize: "40px",
        lineHeight: "55px",
        color: "#0e204d",
        [theme.breakpoints.down(lg)]: {
            fontSize: '35px',
            lineHeight: 1.4,
        },
        [theme.breakpoints.down(md)]: {
            fontSize: '32px'
        }
    },
    h3: {
        fontSize: '38px'
    },
    // link wrapper 1
    h4: {
        ...headingStyle,
        fontSize: "21px"
    },
    primaryLink: {
        fontWeight: 'bold',
        color: primary.main + '!important',
        ':hover': {
            color: secondary.main + '!important'
        }
    },
    primaryLink: {
        fontWeight: 'bold',
        color: primary.main + '!important',
        ':hover': {
            color: secondary.main + '!important'
        }
    },
    // secondary link
    sl: {
        fontWeight: 'bold',
        color: secondary.main + '!important',
        ':hover': {
            color: primary.main + '!important'
        }
    },
    // underline link
    underline: {
        position: 'relative',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        color: primary.main + '!important',
        paddingBottom: '8px',
        ':before': {
          content: "''",
          transition: "0.3s ease-in-out",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "2px",
          backgroundColor: primary.main,
        },
        ':hover::before': {
          width: "70%",
        }
    },
    underline2: {
        position: 'relative',
        fontSize: '14px',
        fontWeight: 'inherit',
        color: primary.main + '!important',
        paddingBottom: '8px',
        ':before': {
          content: "''",
          transition: "0.3s ease-in-out",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "0",
          height: "2px",
          backgroundColor: primary.main,
        },
        ':hover::before': {
          width: "100%",
        }
    },
    more: {
        fontFamily: fonts.body,
        fontSize: "13px",
        lineHeight: "22px",
        // color: grey.dark,
        a: {
            color: 'white',
            display: "inline-flex",
            alignItems: "center",
            textTransform: "capitalize",
            svg: {
            },
                        '&:hover': {
                color: primary.main
            }
        }
    },
    update: {
        fontFamily: fonts.heading,
        fontSize: "14px",
        lineHeight: "28px",
        display: "flex",
        alignItems: "center",
        svg: {
            color: 'white',
        },
        a: {
            color: 'white',
            '&:hover': {
                color: primary.main
            }
        }
    },
    nav_link: {
        fontFamily: fonts.body,
        lineHeight: "36px",
        fontSize: "15px",
        fontWeight: 700,
        backgroundColor: 'green',
        display: "inline-flex",
        alignItems: "center",
        height: '56px',
        svg: {
        }
    },
    h5: {
        ...headingStyle,
        fontSize: "19px",
    },
    h6: {
        ...headingStyle,
        fontSize: "15px",
        lineHeight: "29px",   
    },
    p: {
        fontSize: '16px',
        lineHeight: '28px'
    },
    lead: {
        lineHeight: '1.8',
        fontWeight: 'bold',
        fontSize: 17,
        color: '#f9f9f9',
        // textAlign: 'center',
        // [theme.breakpoints.up(md)]: {
        //     textAlign: 'left',
        // }
        // #848e9f
    },
    body1: {
        color: grey[700],
        lineHeight: "27px",

    },
    // body2: {
    //     fontSize: '15px',
    //     lineHeight: "25px",
    // },
    subtitle1: {
        color: primary.main,
        fontSize: "15px",
        ...subtitle
    },
    subtitle2: {
        color: secondary.main,
        fontSize: "16px",
        ...subtitle
    },

    testimonial_p: {
        fontFamily: fonts.heading,
        color: 'white',
        fontSize: "25px",
        fontWeight: 400,
        lineHeight: "43px",
    },
}