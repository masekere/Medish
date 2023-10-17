import Typography from '@mui/material/Typography'
import Accordion from 'components/common/Accordion'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

const content = {
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
}

const HealthTips = () => (
    <Stack spacing={2}>
        <Typography variant='h5'>{content.h5}</Typography>
        <Typography>{content.desc}</Typography>
        <div>
            <Divider sx={{ borderBottomColor: 'primary.main', borderBottomWidth: 3 }} />
            <Accordion sx={{ mb: 5 }} py={1.1} items={content.accordion} />
        </div>
    </Stack>
)

export default HealthTips