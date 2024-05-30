import React from 'react';
import { Modal, Box } from '@mui/material';

const CustomModal = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ bgcolor: 'white', padding: 2, margin: 'auto', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute' }}>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
