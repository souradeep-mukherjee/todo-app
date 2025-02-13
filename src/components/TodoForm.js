import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function TodoForm({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2, mt: 2 }}>
      <TextField
        fullWidth
        label="New Task"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Add
      </Button>
    </Box>
  );
}

export default TodoForm;