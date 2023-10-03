import colors from "assets/theme/base/colors"

const {secondary} = colors

export default {
    styleOverrides: {
        root: {
            button: {
                fontSize: "20px",
                fontWeight: 700,
                width: "50px",
                height: "50px",
                borderRadius: "0px 8px 0 8px",
                border: "2px solid #e6e8eb",
                transition: "300ms ease-in-out",
                ':hover': {
                  backgroundColor: secondary.light,
                  color: 'white',
                }
              },
              '.Mui-selected': {
                backgroundColor: secondary.main + '!important',
                color: 'white',
                ':hover': {
                  backgroundColor: secondary.main + '!important',
                }
              }
        }
    }
}