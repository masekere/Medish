import Button from "components/button";
import ButtonActions from 'components/ButtonActions';

const content = {
    action1: 'find a doctor',
    action2: 'our core values',
}

const Actions = () => (
    <ButtonActions>
        <Button variant="cw">
            {content.action1}
        </Button>
        <Button variant="co">
            {content.action2}
        </Button>
    </ButtonActions>
)

export default Actions