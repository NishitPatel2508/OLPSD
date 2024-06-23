import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  Modal,
  FormControl,
  FormHelperText,
  Grid,
  useTheme,
  TextField,
  Stack,
} from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function WatchContent({ closeEvent }) {
  useEffect(() => {
    // getAllCourse();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ m: 2 }}>
        <Typography variant="h5" align="center">
          Watch
        </Typography>
        <IconButton
          style={{ position: "absolute", top: "0", right: "0" }}
          onClick={closeEvent}
        >
          <CloseIcon />
        </IconButton>
        <Box height={15} />
        <h1>Nishit</h1>
      </Box>
    </>
  );
}
