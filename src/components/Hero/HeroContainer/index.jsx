import Box from '@mui/material/Box'
// import button from 'assets/theme/components/button'

export default function HeroContainer({ src, sx, children, other }) {
    return (
        <Box
            className='Hero'
            sx={{
                position: 'relative',
                background: `linear-gradient(0deg, rgba(0, 35, 82, 0.6), rgba(0, 35, 82, 0.1)), url(${src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '8rem' },
                button: {
                    height: 60
                },
                ...sx
            }}
            component={'section'}
            {...other}
        >
            {children}
        </Box>
    )
}

/* 
Shop
file:///Users/macbook/Documents/untitled%20folder/Complex%20Website/consuloan-package/consuloan/shop.html
file:///Users/macbook/Documents/untitled%20folder/Complex%20Website/consuloan-package/consuloan/shop-default.html
file:///Users/macbook/Documents/untitled%20folder/Complex%20Website/consuloan-package/consuloan/shop-single.html

News
file:///Users/macbook/Documents/untitled%20folder/Complex%20Website/consuloan-package/consuloan/new-list.html
file:///Users/macbook/Documents/untitled%20folder/Complex%20Website/consuloan-package/consuloan/new-grid.html

Projects
file:///Users/macbook/Documents/untitled%20folder/Complex%20Website/consuloan-package/consuloan/projects.html
file:///Users/macbook/Documents/untitled%20folder/Complex%20Website/consuloan-package/consuloan/team-v2.html

Home
file:///Users/macbook/Documents/untitled%20folder/Complex%20Website/consuloan-package/consuloan/index.html
*/

/* 
Hero
file:///Users/macbook/Documents/untitled%20folder/Complex%20Website/elements-oxybuild-construction-bootstrap-bQb1EfjH-template-M5QYF4Z-2021-06-19/oxybuild/index.html

*/

