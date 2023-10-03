import Box from '@mui/material/Box'
import { useMediaQuery, useTheme, Container } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function CardSwiper({ Card, items ,...other }) {
    const theme = useTheme();
    const xl = useMediaQuery(theme.breakpoints.up("xl"));
    const md = useMediaQuery('@media (min-width: 850px)');

    return (
        <Container disableGutters maxWidth="xxl">
            <Box
                component={Swiper}
                slidesPerView={xl ? 3 : md ? 2 : 1}
                loop
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                pb={8}
                sx={{
                    '.swiper-slide': {
                        display: 'flex',
                        justifyContent: 'center',
                    }
                }}
                {...other}
            >
                {items.map((item, key) => (
                    <SwiperSlide key={key}>
                        <Card item={item} />
                    </SwiperSlide>
                ))}
            </Box>
        </Container>
    )
}