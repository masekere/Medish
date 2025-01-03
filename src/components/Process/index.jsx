import { Cardiogram2Icon, MedicalHistoryIcon, MedicalReportIcon, QualifiedIcon } from "assets/Svg";
import ProcessCard from "components/Cards/ProcessCard";
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
const Bg = 'https://ucarecdn.com/9f006919-f7a9-4d2f-a8d2-275421671389/assets_images_background_1.jpg';
import PrimaryIMageBackground from "components/common/Background/Primary";

const content = [
    {
        number: '01.',
        icon: <MedicalHistoryIcon />,
        h5: 'Fill Our Medical Application',
        desc: 'Medisch offers free or low-cost health coverage for adults.',
        action: 'doctors timetable'
    },
    {
        number: '02.',
        icon: <Cardiogram2Icon />,
        h5: 'Review Your Family History',
        desc: 'Health exams help find problems with early chances which helps.',
        action: 'Start A Check Up'
    },
    {
        number: '03.',
        icon: <MedicalReportIcon />,
        h5: 'Choose Between Our Programs',
        desc: 'We have protocols to protect our patients to provide necessary care.',
        action: 'explore programs'
    },
    {
        number: '04.',
        icon: <QualifiedIcon />,
        h5: 'Introduce To Qualified Doctors',
        desc: 'Our administration and support staff all have exceptional people skills',
        action: 'meet our doctors'
    },
]

/** @type {import("@mui/material").SxProps} */
const styles = {
   '.processcard:nth-of-type(1)': {
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: {xs: '1rem', md: 0}
   },
   '.processcard:nth-of-type(2)': {
        borderTopRightRadius: {md: '1rem'}
   },
   '.processcard:nth-of-type(3)': {
        borderBottomLeftRadius: {md: '1rem'}
   },
   '.processcard:nth-of-type(4)': {
        borderBottomRightRadius: '1rem',
        borderBottomLeftRadius: {xs: '1rem', md: 0}
   },
}

export default function Process({pb}) {
    return (
        <PrimaryIMageBackground pb={pb} component={'section'} img={Bg}>   
            <Container maxWidth='xl'>
                <Box sx={styles} borderRadius={'1rem'} bgcolor={'white'} display={'flex'} flexWrap={'wrap'} border={'2px solid #e6e8eb'}>
                    {content.map((item, index) => (
                        <ProcessCard item={item} key={index} />
                    ))}
                </Box>
            </Container>
        </PrimaryIMageBackground>
    )
}

Process.defaultProps = {
  pb: {xs: '70px', lg: '120px'}
}