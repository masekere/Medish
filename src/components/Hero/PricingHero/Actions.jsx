import Button from "components/common/button";
import PlayButton from "components/common/button/PlayButton";
import ButtonActions from 'components/common/ButtonActions';

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
