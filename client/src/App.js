import React, { useState } from 'react';
import CustomDialog from './components/CustomDialog';
import CustomButton from './components/Button';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1>Hello</h1>
      <CustomButton text="Open form dialog" onClick={handleOpen} />
      <CustomDialog
        open={open}
        onClose={handleClose}
        title="Subscribe"
      >
        <p>Hello my friends</p>
      </CustomDialog>
    </div>
  );
}

export default App;