const EmergencyCasesCardImg = 'https://ucarecdn.com/9d646c4b-3b99-49a8-a254-250ca46e281e/assets_images_blog_sidebar_reservation.jpg';

const styles = {
    px: {xs: '2rem',sm: '3rem',md: '4rem',lg: '5rem'},

    '.EmergencyCasesCard': {
        display: 'block',
        mt: 0,
        background: `linear-gradient(-90deg, #13C1D9BF 18%, #13c5dd 70%),url(${EmergencyCasesCardImg})`,
        borderRadius: '8px 8px 0 8px',

        width: {xs: '100%', lg: 'calc(100% - 335.7px)', xl: 'auto'},
        '.medical-icon': {
            mt: 5,
            mb: 2,
        },
        h5: {
            mb: 3
        }
    },
    '.Btn': {
        height: 100,
        display: 'flex',
        gap: 3,
        justifyContent: 'flex-start',
        px: 5,

        ':before': { height: 0 },
        ':after': {
            content: "''",
            height: 3,
            width: 'calc(100% - 80px)',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 0,
        }
    },
}

export default styles