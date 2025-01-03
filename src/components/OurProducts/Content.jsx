import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Team2 from 'components/Team/Team2'
import PresentationVideoCard from 'components/Cards/PresentationVideoCard'
const VideoThumb = 'https://ucarecdn.com/016b9d49-629c-46d5-b633-309d903c95d1/assets_images_video_2.jpg';
import Stack from '@mui/material/Stack'
import AdvantagesList from 'components/common/AdvantagesList'
import HealthTips from 'components/HealthTips'
import HealthPlans from 'components/HealthPlans'
import PriceListCard from 'components/Cards/PriceListCard'
import AppointmentForm from 'components/Forms/AppointmentForm'

const content = {
    h5: 'Overview',
    body1: 'A neurologist is a medical doctor with specialized training in diagnosing, treating, and managing disorders of the brain and nervous system including, but not limited to, Alzheimer’s disease, amyotrophic lateral sclerosis (ALS), concussion, epilepsy, migraine, multiple sclerosis, Parkinson’s disease, and stroke.',
    body2: 'A child or pediatric, neurologist specializes in the diagnosis and treatment of neurologic disorders in children from the neonatal period through adolescence. Some of the conditions overlap with those seen by adult neurologists, and others are unique to this younger population. Child neurologists treat many of the same common conditions found in adults such as migraine, epilepsy, stroke, and Tourette’s and are also trained in conditions related to neurogenetics and developmental problems.',
    introdution: {
        h5: 'Symptoms & Diagnosis',
        body1: 'Neurologists are highly trained clinicians capable of diagnosing complex conditions through detailed history and physical examination, including testing of mental status, vision, speech, strength, sensation, coordination, reflexes, and gait. Even as medicine becomes more dependent on technology, the neurological exam will remain a critical component of the patient evaluation.',
        body2: 'We are different from neurosurgeons as we do not perform brain or spinal cord surgery. However, neurologists and neurosurgeons work closely together for several conditions, sometimes even in the operating room.',
        advantages: [
            ['Computed Tomography (CT) Or (CAT) Scans', 'Magnetic Resonance Imaging (MRI)', 'Electroencephalography (EEG)', 'Nerve Conduction Studies'],
            ['Seizure Disorders, Such As Epilepsy', 'Speech And Language Disorders', 'Spinal Cord Disorders']
        ]
    },
    services: {
        h5: 'Our Services',
        desc: "He actively participates in clinical research trials and has been published in peer reviewed journals such as the Journal of the State Medical Society and Baylor University Medical Center's Proceedings. At Hahnemann Hospital in conjunction with Drexel University, where he received extensive training in coronary as well as peripheral interventions and limb salvage procedures.",
        investigations: {
            h5: 'Investigations Price List',
            prices: [
                {
                    name: 'Umbilical Cord Appearance',
                    price: 50
                },
                {
                    name: 'Cardiac Electrophysiology',
                    price: 50
                },
                {
                    name: 'Repositioning Techniques',
                    price: 60
                },
                {
                    name: 'Geriatric Neurology',
                    price: 75
                },
                {
                    name: 'Nuclear Cardiology',
                    price: 45
                },
                {
                    name: 'Neurocritical Care',
                    price: 55
                },
            ]
        },
        treatments: {
            h5: 'Treatments Price List',
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
                    price: 60
                },
                {
                    name: 'Bronchoscopy',
                    price: 75
                },
                {
                    name: 'Cardiac Ablation',
                    price: 45
                },
                {
                    name: 'Holter Monitoring',
                    price: 55
                },
            ],
        }
    }
}

const styles = {
    prices: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2
    }
}

const OverView = () => (
    <Stack spacing={3}>
        <Typography variant='h5'>{content.h5}</Typography>
        <Typography fontWeight={'bold'} color={'secondary.main'}>{content.body1}</Typography>
        <Typography>{content.body2}</Typography>
    </Stack>
)

const Introduction = () => (
    <Stack spacing={2}>
        <Typography variant='h5'>{content.introdution.h5}</Typography>
        <Typography>{content.introdution.body1}</Typography>
        <Typography>{content.introdution.body2}</Typography>
        <Box gap={2} display={'flex'} flexWrap={'wrap'}>
            <AdvantagesList items={content.introdution.advantages[0]} sx={{ color: 'secondary.light' }} />
            <AdvantagesList items={content.introdution.advantages[1]} sx={{ color: 'secondary.light' }} />
        </Box>
    </Stack>
)

const Services = () => (
    <Stack spacing={2}>
        <Typography variant='h5'>{content.services.h5}</Typography>
        <Typography>{content.services.desc}</Typography>
        <Box sx={styles.prices}>
          <PriceListCard item={content.services.investigations} />
          <PriceListCard item={content.services.treatments} />
        </Box>
    </Stack>
)

export default () => (
    <Stack spacing={8}>
        <OverView />
        <PresentationVideoCard VideoThumb={VideoThumb} />
        <Introduction />
        <Services />
        <HealthTips />
        <HealthPlans />
        <Team2 />
        <Box
            mt={5}
            boxShadow="0px 5px 83px 0px rgba(9, 29, 62, 0.15)"
            children={<AppointmentForm />}
        />
    </Stack>
)