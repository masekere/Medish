import Typography from '@mui/material/Typography'
import CardContainer from 'components/Cards/CardContainer'
import CategoryLink from 'components/CategoryLink'

const styles = {
    bgcolor: 'primary.light',
    gap: .5,
    flex: 1
}

const CategoryCard = ({ items }) => (
    <CardContainer sx={styles}>
        <Typography mb={3} variant='h5'>{items.h5}</Typography>
        {items.categories.map((item, index) => (
            <CategoryLink key={index} item={item} />
        ))}
    </CardContainer>
)

export default CategoryCard