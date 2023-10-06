import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Accordion from 'components/Accordion'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

const content = {
    body1: 'We help create a care plan that addresses your specific condition and we are here to answer all of your questions & acknowledge your concerns. Today the hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, but improving the outcomes.',
    accordions: [
        {
            summary: 'Which Plan Is Right For Me?',
            details: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.'
        },
        {
            summary: 'Do I have to commit to a contract? ',
            details: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.'
        },
        {
            summary: 'What Payment Methods Are Available? ',
            details: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.'
        },
        {
            summary: 'What are your office hours?',
            details: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.'
        },
        {
            summary: 'Are your services covered by insurance?',
            details: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.'
        },
        {
            summary: 'What do I need to know about lab testing?',
            details: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.'
        },
        {
            summary: 'What if I need to cancel or reschedule an appointment?',
            details: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.'
        },
        {
            summary: 'What types of diagnostic testing does the clinic perform?d',
            details: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.'
        },
        {
            summary: 'What costs can I expect to see?',
            details: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.'
        },
        {
            summary: 'Is testing included in my membership fee?',
            details: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.'
        },
        {
            summary: 'What Happens if i need to go to a hospital?',
            details: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.'
        },
        {
            summary: 'What Should i expect from my care at your hospital?',
            details: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.'
        },
        {
            summary: 'What can i do if i can not afford my membership fee?',
            details: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.'
        },
        {
            summary: 'What can i do if i have questions about privacy and security?',
            details: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.'
        },
    ]
}

export default () => (
    <Box>
        <Typography mb={5}>{content.body1}</Typography>
        <Divider sx={{borderBottomColor: 'primary.main', borderBottomWidth: 3}} />
        <Accordion sx={{mb: 5}} py={1.1}  items={content.accordions} />
    </Box>
)