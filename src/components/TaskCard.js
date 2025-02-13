import React from "react";
import { Card, CardContent, CardActions, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward, Delete } from "@mui/icons-material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  backgroundColor: "#f5f5f5",
  marginBottom: "10px",
});

function TaskCard({ task, moveTask, deleteTask }) {
  return (
    <StyledCard>
      <CardContent>
        <Typography>{task.text}</Typography>
      </CardContent>
      <CardActions>
        {task.category !== "To Do" && (
          <IconButton onClick={() => moveTask(task.id, -1)}>
            <ArrowBack />
          </IconButton>
        )}
        {task.category !== "Completed" && (
          <IconButton onClick={() => moveTask(task.id, 1)}>
            <ArrowForward />
          </IconButton>
        )}
        <IconButton onClick={() => deleteTask(task.id)}>
          <Delete />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
}

export default TaskCard;