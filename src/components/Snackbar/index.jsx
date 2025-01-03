import { useState, useImperativeHandle, forwardRef } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Box from '@mui/material/Box'

const AlertSnackBar = forwardRef((props, ref) => {
  const { children, action, severity } = props
  const [open, setOpen] = useState(false);

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    dispatchAlert() {
      setOpen(!open)
    }
  }))

  return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        // sx={{top: '11rem !important'}}
      >
        <Alert
           severity={severity}
          action={action}
        >
          {children}
        </Alert>

      </Snackbar>
  )
})

export default AlertSnackBar