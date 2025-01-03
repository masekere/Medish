import colors from "assets/theme/base/colors"

const {primary} = colors

export default {
    styleOverrides: {
        root: {
            marginTop: '10px',
            '.MuiInputLabel-root.Mui-focused': {
              color: 'white',
            },
            '.MuiInputLabel-shrink': {
              color: 'white',
              top: 3,
              height: "26px",
              padding: "0 10px",
              backgroundColor: primary.main,
              fontWeight: 700,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px 8px 0 0",
              textTransform: "capitalize",
              left: '-14px',
            },
            '.MuiInputBase-root.Mui-focused': {
              '.MuiOutlinedInput-notchedOutline': {
                // borderColor: primary.main
              },
            },
            '.MuiInputBase-root': {
              backgroundColor: primary.light,
              borderRadius: '0 8px 8px 8px',
              transition: '0.3s ease-in-out',
              '.MuiOutlinedInput-notchedOutline': {
                border: '2px solid #e6f8fb'
              },
              '&:hover': {
                backgroundColor: 'white',
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: primary.main
                }
              }
            },
            legend: {
              width: 0
            }
        },
    },
}