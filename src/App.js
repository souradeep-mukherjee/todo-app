import React, { useState } from "react";
import { Container, Typography, Paper, Grid } from "@mui/material";
import TodoForm from "./components/TodoForm";
import TaskCard from "./components/TaskCard";
import "./index.css";

const categories = ["To Do", "In Progress", "Completed"];

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, category: "To Do" }]);
  };

  const moveTask = (id, direction) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          const currentIndex = categories.indexOf(task.category);
          const newIndex = currentIndex + direction;
          if (newIndex >= 0 && newIndex < categories.length) {
            return { ...task, category: categories[newIndex] };
          }
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <Container maxWidth="lg" className="app-container">
      <Typography variant="h3" align="center" gutterBottom color="primary">
        To-Do App
      </Typography>
      <TodoForm addTask={addTask} />
      <Grid container spacing={3} style={{ marginTop: 20 }}>
        {categories.map((category, index) => (
          <Grid item xs={12} md={4} key={category}>
            <Paper elevation={6} className={`task-column column-${index}`}>
              <Typography variant="h5" align="center" gutterBottom>
                {category}
              </Typography>
              {tasks
                .filter((task) => task.category === category)
                .map((task) => (
                  <TaskCard key={task.id} task={task} moveTask={moveTask} deleteTask={deleteTask} />
                ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;