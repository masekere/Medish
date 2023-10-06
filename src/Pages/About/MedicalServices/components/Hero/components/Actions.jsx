import Button from "components/button";
import PlayButton from "components/button/PlayButton";
import ButtonActions from 'components/ButtonActions';

const content = {
    action1: 'More About Us',
}

const Actions = () => (
    <ButtonActions>
        <Button variant="cw">
            {content.action1}
        </Button>
        <PlayButton />
    </ButtonActions>
)

export default Actions
