import React, { useState } from 'react';
import CustomDialog from './components/CustomDialog';
import CustomButton from './components/Button';
import InfoDialog from './components/InfoDialog';

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
      <InfoDialog
        open={true}
        onClose={handleClose}
      >
      </InfoDialog>
    </div>
  );
}

export default App;