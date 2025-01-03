import EmergencyCasesCard from "components/Cards/EmergencyCasesCard"
import OpeningHoursCard from "components/Cards/OpeningHoursCard"
import Button from "components/common/button"
import { DownloadReportIcon, InfoIcon } from "assets/Svg"
import Stack from '@mui/material/Stack'
import CategoryCard from "components/Cards/CategoryCard"
import SearchCard from "components/Cards/SearchCard"
import Products from "components/Products"
import PriceRange from "components/PriceRange"
import Tags from "components/Tags"

const styles = {
    action1: {
        ':after': {
            bgcolor: 'primary.main'
        }
    },
    action2: {
        ':after': {
            bgcolor: 'secondary.light'
        }
    }
}

const content = {
    action1: <><InfoIcon />covid-19 latest update</>,
    action2: <><DownloadReportIcon />2020 patient reports</>,
    services: {
        h5: 'Medical Services',
        categories: [
            {
                category: 'Neurology',
                count: 9,
                url: '#'
            },
            {
                category: 'Cardiology',
                count: 2,
                url: '#'
            },
            {
                category: 'Pathology',
                count: 5,
                url: '#'
            },
            {
                category: 'Laboratory',
                count: 1,
                url: '#'
            },
            {
                category: 'Pediatric',
                count: 7,
                url: '#'
            },
        ]
    },
    ProductTags: {
        h5: 'Tags',
        tags: [
            {
                name: 'Life style',
                url: '#'
            },
            {
                name: 'Nutrition',
                url: '#'
            },
            {
                name: 'Infectious',
                url: '#'
            },
            {
                name: 'Disease',
                url: '#'
            },
            {
                name: 'Insights',
                url: '#'
            },
            {
                name: 'Urinary',
                url: '#'
            },
            {
                name: 'Tips',
                url: '#'
            },
        ]
    }
}
const OurProductsSiderbar = () => (
    <>
            <SearchCard />
            <PriceRange />
            <CategoryCard items={content.services}  />
            <Products />
            <Tags items={content.ProductTags} />
        </>
)

export default OurProductsSiderbar