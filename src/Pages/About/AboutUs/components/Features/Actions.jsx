import ButtonActions from 'components/ButtonActions'
import Button from 'components/button'

const content = {
    action1: 'our core values',
    action2: 'more about us'
}

const Actions = () => (
    <ButtonActions>
        <Button variant="co">
            {content.action1}
        </Button>
        <Button icon='none' variant="cw">
            {content.action2}
        </Button>
    </ButtonActions>
)

export default Actions