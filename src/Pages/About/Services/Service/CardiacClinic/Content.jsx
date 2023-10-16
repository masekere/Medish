import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Accordion from 'components/common/Accordion'
import Divider from '@mui/material/Divider'
import Team2 from 'components/Team/Team2'
import PresentationVideoCard from 'components/Cards/PresentationVideoCard'
import VideoThumb from 'assets/images/video/1.jpg'
import SignatureBlock from 'components/common/SignatureBlock'
import Stack from '@mui/material/Stack'
import AdvantagesList from 'components/common/AdvantagesList'
import ButtonActions from 'components/common/ButtonActions'
import Button from 'components/common/button'
import { AidIcon, EducationIcon, MedicineIcon, StethoscopeIcon } from 'assets/Svg'
import CoreValuesCard from 'components/Cards/CoreValuesCard'
import PriceListCard from 'components/Cards/PriceListCard'

const content = {
    lead: 'Pediatric providers see patients from birth into early adulthood to make sure children achieve stay healthy. Our care includes preventive health checkups. Cardiologists study the disorders of the heart, but the study of adult and child heart disorders are through different training.',
    introdution: {
        body1: 'We provide all aspects of medical practice for your whole family, including general check-ups or assisting you with injuries.',
        body2: 'We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries in the strictest confidence.',
        body3: 'Today hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, but improving the outcomes for all through a comprehensive medical research.',
        body4: 'We’re here to care for you and your entire family. Regular visits to the doctor will depend on your age and general health!',
        advantages: ['Health Assessments', 'Home Medicine Review', 'Fractures And Dislocations', 'Desensitisation Injections']
    },
    healthPlans: {
        h5: 'Health Care Plans',
        desc: 'Our doctors include highly qualified practitioners came from a range of backgrounds and bring with a diversity of skills and special interests. Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.',
        advantages: [
            [' Review your medical records.', 'Check and test blood pressure.', 'Run tests such as blood tests.'],
            ['Check and test lung function.', 'Narrowing of the arteries.', 'Other specialized tests.']
        ],
        plan: <><Typography component={'span'} fontSize={50} children='$50' /> / Monthly</>,
        action: 'Explore Other Plans'
    },
    coreValues: {
        h5: 'Our Core Values',
        desc: 'Today the hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, but improving the outcomes for all through a comprehensive medical research. For over 20 years, our hospital has touched lives of millions of people, and provide care and treatment for the sickest in our community including rehabilitation and aged care.',
        cards: [
            {
                icon: <StethoscopeIcon />,
                h5: 'Medical Check Ups',
                desc: 'Recognised As A World Renowned Institution. Consult Our Doctors By Visiting Us.'
            },
            {
                icon: <EducationIcon />,
                h5: 'Medical Treatment',
                desc: 'Free Or Low Cost Coverage Adults With Limited Income Recognised.'
            },
            {
                icon: <AidIcon />,
                h5: 'Emergency 24/7',
                desc: 'Contact Our Reception With Any Medical Enquiry For Low Cost Coverage Adults.'
            },
            {
                icon: <MedicineIcon />,
                h5: 'Research Pros',
                desc: 'All Medical Aspects Practice For Family, Our Reception Staff With Any Medical Enquiry.'
            },
        ]
    },
    info: {
        h5: 'Health & Tips Info',
        desc: 'We help create a care plan that addresses your specific condition and we are here to answer all of your questions & acknowledge your concerns. Today the hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, but improving the outcomes.',
        accordion: [
            {
              summary: "Which Plan Is Right For Me?",
              details: "Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases."
            },
            {
              summary: "Do I Have To Commit To A Contract?",
              details: "Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases."
            },
            {
              summary: "What Payment Methods Are Available?",
              details: "Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases."
            },
        ],
        body1: 'Three years of internal medicine residency, three years of Clinical Cardiology fellowship, and one to two (in most instances) years of clinical cardiac electrophysiology.',
        body2: 'We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.',
        body3: 'We provide all aspects of medical practice for your whole family, including general check-ups or assisting with specific injuries.',
        treatment: {
            h6: 'Treatments Price List',
            prices: [
                {
                    name: 'Colonoscopy',
                    price: 50
                },
                {
                    name: 'Allergy Testing',
                    price: 50
                },
                {
                    name: 'Gastroscopy',
                    price: 50
                },
                {
                    name: 'Bronchoscopy',
                    price: 50
                },
                {
                    name: 'Cardiac Ablation',
                    price: 50
                },
                {
                    name: 'Holter Monitoring',
                    price: 50
                },
            ]
        }
    }
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    introdution: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        // my: 5
    },
    healthPlans: {
        padding: { xs: "45px 25px 50px", sm: "45px 50px 50px" },
        border: "2px solid #e6e8eb",
        borderRadius: "8px 8px 0 8px",
        // my: 5,
        gap: 3,
        mx: { xs: '-1rem', sm: 0 }
    },
    advantages: {
        p: { xs: '35px 25px', sm: '32px 40px' },
        borderRadius: '8px 8px 0 8px',
        bgcolor: 'primary.light',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    coreValues: {
        gap: 3,

        cards: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2
        },

        svg: {
            fontSize: 49
        }
    },
    info: {
        treatment: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2
        }
    }
}

const Introduction = () => (
    <Box sx={styles.introdution}>
        <Stack spacing={2} minWidth={300} flex={8}>
            <Typography color={'secondary.main'} fontWeight={'bold'}>{content.introdution.body1}</Typography>
            <Typography>{content.introdution.body2}</Typography>
            <Typography>{content.introdution.body3}</Typography>
        </Stack>
        <Stack spacing={2} flex={4}>
            <Typography>{content.introdution.body4}</Typography>
            <AdvantagesList items={content.introdution.advantages} sx={{ color: 'secondary.light' }} />
        </Stack>
    </Box>
)

const HealthPlans = () => (
    <Stack sx={styles.healthPlans}>
        <Typography fontSize={24} variant='h5'>{content.healthPlans.h5}</Typography>
        <Typography variant='body2'>{content.healthPlans.desc}</Typography>
        <Box sx={styles.advantages}>
            <AdvantagesList items={content.healthPlans.advantages[0]} />
            <AdvantagesList items={content.healthPlans.advantages[1]} />
        </Box>
        <ButtonActions>
            <Typography mr={2} color={'secondary.light'}>{content.healthPlans.plan}</Typography>
            <Button variant='cs'>{content.healthPlans.action}</Button>
        </ButtonActions>
    </Stack>
)

const CoreValue = () => (
    <Stack sx={styles.coreValues}>
        <Typography fontSize={24} variant='h5'>{content.coreValues.h5}</Typography>
        <Typography>{content.coreValues.desc}</Typography>
        <Box sx={styles.coreValues.cards}>
            {content.coreValues.cards.map((item, index) => (
                <CoreValuesCard item={item} key={index} />
            ))}
        </Box>
    </Stack>
)

const Info = () => (
    <Stack spacing={2}>
        <Typography variant='h5'>{content.info.h5}</Typography>
        <Typography>{content.info.desc}</Typography>
        <div>
            <Divider sx={{ borderBottomColor: 'primary.main', borderBottomWidth: 3 }} />
            <Accordion sx={{ mb: 5 }} py={1.1} items={content.info.accordion} />
        </div>
        <Box sx={styles.info.treatment}>
          <Stack flex={1} spacing={3} minWidth={400}>
            <Typography fontWeight={'bold'} color={'secondary.main'}>{content.info.body1}</Typography>
            <Typography>{content.info.body2}</Typography>
            <Typography>{content.info.body3}</Typography>
          </Stack>
          <PriceListCard item={content.info.treatment} />
        </Box>
    </Stack>
)

export default () => (
    <Stack spacing={8}>
        <Typography color={'secondary.main'} variant='lead'>{content.lead}</Typography>
        <PresentationVideoCard VideoThumb={VideoThumb} />
        <Introduction />
        <SignatureBlock />
        <HealthPlans />
        <CoreValue />
        <Info />
        <Team2 />
    </Stack>
)