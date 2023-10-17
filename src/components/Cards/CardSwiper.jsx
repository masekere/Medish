import Box from '@mui/material/Box'
import { useMediaQuery, useTheme, Container } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function CardSwiper({ Card, items ,sx,...other }) {
    const theme = useTheme();
    const xl = useMediaQuery(theme.breakpoints.up("xl"));
    const md = useMediaQuery('@media (min-width: 850px)');

    return (
        <Container disableGutters maxWidth="xxl">
            <Box
                component={Swiper}
                slidesPerView={xl ? 3 : md ? 2 : 1}
                loop
                // spaceBetween={'-1rem'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                pb={8}
                sx={{
                    '.swiper-slide': {
                        display: 'flex',
                        justifyContent: 'center',
                    },
                    pt: 10,
                    mt: '-5rem',
                    px: '3rem',
                    mx: '-3rem'
                }}
                {...other}
            >
                {items.map((item, key) => (
                    <SwiperSlide key={key}>
                        <Card item={item} sx={sx} />
                    </SwiperSlide>
                ))}
            </Box>
        </Container>
    )
}