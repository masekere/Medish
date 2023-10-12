import { styled } from '@mui/material'
import Stack from '@mui/material/Stack'
import bottomBorder from 'components/common/styles/bottomBorder';

const border = (disableBorder) => disableBorder ? null : bottomBorder()
    
const CardContainer = styled(Stack)(({ disableBorder }) => ({
    borderRadius: '8px 8px 0 8px',
    padding: '33px 40px 40px',
    position: 'relative',
    h5: {
        fontWeight: 500,
        color: '#26365e'
    },

    ...bottomBorder(disableBorder)
}));

export default CardContainer