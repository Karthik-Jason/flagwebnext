'use client';

import * as React from 'react';
import './PastorsModal.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 600,
//   height: 500,
//   bgcolor: 'background.paper',
//   border: '3px solid #000',
//   p: 6
};

export default function PastorsModal({name,role,description}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [pastorName,pastorRole,pastorDescription] = [name,role,description];

  return (
    <div>
      <Button onClick={handleOpen}>Know More</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="box">
            <h1 id="title">{pastorName}</h1>
            <h2 id="role">{pastorRole}</h2>
            <div id="pastors-details">
            <p id="description">{pastorDescription}</p>
            </div>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
                >
              <CloseIcon />
            </IconButton>
        </Box>
      </Modal>
    </div>
  );
}