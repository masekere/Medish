import colors from "assets/theme/base/colors"

const {primary, secondary} = colors

const containedButton = {
    background: primary.main,
    // border: '1px solid blue',
    // height: "50px", 
    // 42 50 62 60
    // marginRight: "40px",
    textTransform: "capitalize",
    fontSize: "15px",
    borderRadius: "8px 8px 0 8px",
    // boxShadow: 'none',
    zIndex: 10,
    overflow: 'hidden',
    // transition: 'width 0.3s ease-in-out',
    // svg: {
    //     // transition: "margin-left 0.3s ease-in-out",
    //     marginLeft: '-.5rem',
    //     transition: "all 1s ease-in-out",  
    // },
    '&:hover': {
        // boxShadow: 'none',
        background: '#13c5dd',
        // svg: {
        //     transition: "all 1s ease-in-out",  
        //     animation: "fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both",
        //     marginLeft: 0,
        // },
        ':before': {
            transform: "scaleX(1)",
            transformOrigin: "left center",
            borderRadius: "inherit",
        }
    },
    ':before': {
        content: "''",
        background: secondary.main,
        position: "absolute",
        width: "calc(100%)",
        height: "calc(100%)",
        top: "0px",
        left: "0px",
        zIndex: -1,
        transform: "scaleX(0)",
        transformOrigin: "right center",
        transition: "transform 0.34s cubic-bezier(0.37, 0.31, 0.31, 0.9)",
        borderRadius: "inherit",
    },
}

export default containedButton