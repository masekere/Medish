import { forwardRef, useImperativeHandle, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'


const DeleteDialog = forwardRef((props, ref) => {
    const { count, setDelete } = props
    const [open, setOpen] = useState(false);

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false)
    };

    useImperativeHandle(ref, () => ({
        dispatchDelete() {
            setOpen(!open)
        }
    }))

    const handleYes = () => {
        setOpen(false)
        setDelete(true)

    }

    const handleNo = () => {
        setOpen(false)
        setDelete(false)

    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby={'delete-dialog'}>
            <DialogTitle id={'delete-dialog'}>
                {count} Items
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure youe want to delete
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleNo}
                    color="primary"
                >
                    No
                </Button>
                <Button
                    onClick={handleYes}
                    color="primary"
                >
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
})

export default DeleteDialog

DeleteDialog.propTypes = {
    count: PropTypes.number,
    setDelete: PropTypes.any
}