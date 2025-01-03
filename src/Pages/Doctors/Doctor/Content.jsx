import Typography from '@mui/material/Typography'
import { EntryAwardIcon } from 'assets/Svg'
import Box from '@mui/material/Box'
import AppointmentForm from 'components/Forms/AppointmentForm'
import Stack from '@mui/material/Stack'




const content = {
  bio: {
    h5: 'Biography',
    body1: "Muldoone obtained his undergraduate degree in Biomedical Engineering at Tulane University (2001) prior to attending St George's University School of Medicine (2006). He then returned to his home to attend State University in New Orleans (2006-09) for his internship in Internal Medicine.",
    body2: "He then traveled to Philadelphia, Pennsylvania to complete a Fellowship in Intervention Cardiology at Hahnemann Hospital in conjunction with Drexel University, where he received extensive training in coronary as well as peripheral interventions and limb salvage procedures. He actively participates in clinical research trials and has been published in peer reviewed journals such as the Journal of the State Medical Society and Baylor University Medical Center's Proceedings",
    body3: "In his spare time, watches college and professional football and enjoys traveling, swimming and playing chess. He is currently Board Certified in Cardiovascular Disease and Interventional Cardiology. He moved to California where he completed both his Internship at the University of California."
  },
  entry_info: [
    {
      header: 'Speciality',
      data: 'Cardiology'
    },
    {
      header: 'Degrees',
      data: 'M.D. Of Medicine'
    },
    {
      header: 'Area Of Experties',
      data: ['Cardiac Imaging – Non-Invasive.', 'Cardiac Rehabilitation And Exercise.', 'Hypertrophic Cardiomyopathy.', 'Inherited Heart Diseases.']
    },
    {
      header: 'Office',
      data: '2307 Beverley Rd Brooklyn, New York 11226 United States.'
    },
    {
      header: 'University',
      data: 'Harvard University'
    },
  ],
  services: {
    h5: "Doctor's Services",
    desc: "He actively participates in clinical research trials and has been published in peer reviewed journals such as the Journal of the State Medical Society and Baylor University Medical Center's Proceedings. At Hahnemann Hospital in conjunction with Drexel University, where he received extensive training in coronary as well as peripheral interventions and limb salvage procedures.",
    h6: 'Treatments Price List',
    prices: [
      [
        {
          name: 'Treatments Price List',
          price: 50
        },
        {
          name: 'Cardiac Electrophysiology',
          price: 80
        },
        {
          name: 'Repositioning Techniques',
          price: 60
        },
        {
          name: 'Geriatric Neurology',
          price: 75
        },
      ],
      [
        {
          name: 'Cardiac Rehabilitation',
          price: 70
        },
        {
          name: 'Nuclear Cardiology',
          price: 45
        },
        {
          name: 'Neurocritical Care',
          price: 55
        },
      ],
    ],
  },
  awards: {
    h5: 'Awards And Honours',
    desc: 'Today the hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, but improving the outcomes for all through a comprehensive medical research. For over 20 years, our hospital has touched lives of millions of people, and provide care and treatment for the sickest in our community including rehabilitation and aged care.',
    data: [
      {
        icon: EntryAwardIcon,
        h5: 'Edison Awards',
        subtext: 'Honoring In Innovation'
      },
      {
        icon: EntryAwardIcon,
        h5: 'Edwin Grant Medal',
        subtext: 'Research In Biology'
      },
      {
        icon: EntryAwardIcon,
        h5: 'Robert L. Noble Prize',
        subtext: 'Canadian Cancer Society'
      },
      {
        icon: EntryAwardIcon,
        h5: 'The National Prize',
        subtext: 'Chilean Academy Of Medicine.'
      },
    ]
  },
  education: {
    h5: 'Medical Education',
    desc: 'He then went to LSU Medical School in New Orleans where he was an Honors Program Graduate and finished in the top quartile of his graduating class. He completed his Internal Medicine Residency at the University of Alabama in Birmingham, AL where he was selected as a Chief Internal Medicine Resident.',
    timeline: [
      {
        year: '2020',
        h5: 'Royal College of Surgeons of Harvard',
        desc: 'He then traveled to Philadelphia, Pennsylvania to complete a Fellowship in Intervention Cardiology at Hahnemann Hospital in conjunction with Drexel University, where he received extensive training in coronary as well as salvage procedures.',
      },
      {
        year: '2015',
        h5: 'Fellowship, Royal College of Physicians of Harvard',
        desc: 'After relocating to Louisiana he served as Director of the Cardiac Catheterization Lab at Regional Medical Center of Acadiana. He was honored by the Medical Association for Physician Recognition Award from March of 2015 through May 2016.',
      },
      {
        year: '2010',
        h5: 'Residency, St. Harvard University Hospital',
        desc: 'Dr has also had professional accomplishments at the University of Southern California School of Medicine and Medical Center including Instructor of Medicine, Chief Administrative Fellow, Division of Cardiology University of Southern California.',
      },
    ]
  },
  skills: {
    h5: "Doctor’s Skills",
    desc: 'He completed his Internal Medicine Residency at the University of Alabama in Birmingham, AL where he was selected as a Chief Internal Medicine Resident. He then went to LSU Medical School in New Orleans where he was an Honors Program Graduate and finished the top of his class.',
    data: [
      {
        title: 'Cardiac Rehabilitation',
        value: 95
      },
      {
        title: 'Nuclear Cardiology',
        value: 85
      },
      {
        title: 'Neurocritical Care',
        value: 77
      },
    ]
  }
}

const styles = {
  h5: {
    fontSize: 24
  }
}

const Bio = () => (
  <Stack spacing={2}>
    <Typography variant='h5'>{content.bio.h5}</Typography>
    <Typography fontWeight={'bold'} color={'secondary'}>{content.bio.body1}</Typography>
    <Typography fontWeight={'bold'}>{content.bio.body2}</Typography>
    <Typography fontWeight={'bold'}>{content.bio.body3}</Typography>
  </Stack>
)

const EntryInfo = () => (
  <Typography>Entry Info</Typography>
)

const Services = () => (
  <Stack spacing={2}>
    <Typography variant='h5'>{content.services.h5}</Typography>
    <Typography fontWeight={'bold'} color={'secondary'}>{content.services.desc}</Typography>
  </Stack>
)

const Awards = () => (
  <Stack spacing={2}>
    <Typography variant='h5'>{content.awards.h5}</Typography>
    <Typography fontWeight={'bold'} color={'secondary'}>{content.awards.desc}</Typography>
  </Stack>
)

const Education = () => (
  <Stack spacing={2}>
    <Typography variant='h5'>{content.education.h5}</Typography>
    <Typography fontWeight={'bold'} color={'secondary'}>{content.education.desc}</Typography>
  </Stack>
)

const Skills = () => (
  <Stack spacing={2}>
    <Typography variant='h5'>{content.skills.h5}</Typography>
    <Typography fontWeight={'bold'} color={'secondary'}>{content.skills.desc}</Typography>
  </Stack>
)

export default function Content() {
  return (
    <Stack sx={styles} spacing={5}>
      <Bio />
      <EntryInfo />
      <Services />
      <Awards />
      <Education />
      <Skills />
      <Box
        mt={5}
        boxShadow="0px 5px 83px 0px rgba(9, 29, 62, 0.15)"
        children={<AppointmentForm />}
      />
    </Stack>
  )
}
