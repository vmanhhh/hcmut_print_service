import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const InfoDialog = ({ open, onClose, user, onLogout }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "300px",
          height: "300px",
          borderRadius: "20px",
          backgroundColor: "#e3f2fd", // Light blue background
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)", // Soft shadow
        },
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* User Title */}
        <Typography variant="h5" fontWeight="bold">
          {user.name}
        </Typography>

        {/* Page Balance */}
        <Typography>
          Số dư trang: <strong>30</strong>
        </Typography>
        <Typography>
          Đã in trong tháng: <strong>12</strong>
        </Typography>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
            marginTop: "16px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#90caf9",
              color: "#000",
              fontWeight: "bold",
              ":hover": { backgroundColor: "#64b5f6" },
            }}
          >
            Mua thêm giấy
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#90caf9",
              color: "#000",
              fontWeight: "bold",
              ":hover": { backgroundColor: "#64b5f6" },
            }}
            onClick={onLogout}
          >
            Đăng xuất
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default InfoDialog;
