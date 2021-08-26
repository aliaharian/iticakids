import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Lang from "../../../../Language";

const StaffDeleteDialog = props => {

  
  const { openDialog , onDialogClosed , current_staff} = props;

  const [open, setOpen] = React.useState(false);

  if(openDialog != open){
      setOpen(true);  
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (can_delete) => {
      if(onDialogClosed){
          onDialogClosed(can_delete);
      }
      setOpen(false);
  };


  return (
      <div>
      <Dialog
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{Lang.common.warning}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {Lang.staffs.delete}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(true)} color="secondary">
            {Lang.common.delete}
          </Button>
          <Button onClick={() => handleClose()} color="primary" autoFocus>
            {Lang.common.cancel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};


export default StaffDeleteDialog;
