
const bottomBorder = (width,) => ({
    ':before': {
        content: "''",
        position: 'absolute',
        bottom: 0,
        height: 3,
        width: width ? width : 'calc(100% - 80px)',
        backgroundColor: '#13c5dd',
        transform: 'translateX(-50%)',
        left: '50%'
    }
})

export default bottomBorder