import React from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Paper,
  Container,
  FormGroup,
  Box,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ModalPopUp from "./Components/ModalPopUp";
import { JsonData, columns } from "./Data/JsonData";

export default function App() {
  const [formState, setFormState] = React.useState({});
  const [todo, setTodo] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
    if (event.target.name === "type") {
      fetch(`https://jsonplaceholder.typicode.com/todos/${event.target.value}`)
        .then((response) => response.json())
        .then((json) => setTodo([json]));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const renderFormField = (field) => {
    switch (field["item-type"] || field["data-buildertype"]) {
      case "header":
        return (
          <>
            <Typography id={field.id} align={field.textAlign} variant="h3">
              {field.content}
            </Typography>
            <Typography align={field.textAlign} mt={1} mb={2} variant="h5">
              {field.subheader}
            </Typography>
          </>
        );
      case "form":
        return field.children.map((item) => renderJson(item));
      case "button":
        return (
          <Grid item xs={12}>
            <Button
              id={field.id}
              variant={"contained"}
              fullWidth={field.fluid ? true : false}
              color={field.primary ? "primary" : "info"}
              type="submit"
              onClick={handleSubmit}
            >
              {field.content}
            </Button>
          </Grid>
        );
      default:
        return null;
    }
  };
  const renderJson = (item) => {
    switch (item["item-type"]) {
      case "input":
        return (
          <TextField
            autoFocus={true}
            key={item.id}
            sx={{ paddingY: "10px" }}
            label={item.label}
            name={item.id}
            onChange={handleChange}
            fullWidth={item.fluid}
            required={item["other-required"]}
          />
        );
      case "formgroup":
        return (
          <Grid container spacing={4}>
            {item.children.map((child) => (
              <Grid item xs={12} sm={6} md={6} key={child.id}>
                {renderJson(child)}
              </Grid>
            ))}
          </Grid>
        );
      case "dropdown":
        return (
          <>
            <FormControl key={item.id} fullWidth sx={{ paddingY: "10px" }}>
              <InputLabel>{item.label}</InputLabel>
              <Select
                value={formState.type || ""}
                name={item.id}
                onChange={handleChange}
                fullWidth={item.fluid}
                required={item["other-required"]}
                disabled={item.selection ? false : true}
                placeholder={item.placeholder}
              >
                {JSON.parse(item["data-elements"]).map((option) => (
                  <MenuItem key={option.key || ""} value={option.value || ""}>
                    {option.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{ height: 200, width: "100%" }}>
              <DataGrid rows={todo} columns={columns} />
            </Box>
          </>
        );
      case "textarea":
        return (
          <TextField
            multiline
            name={item.id}
            onChange={handleChange}
            key={item.id}
            aria-label={item.label}
            placeholder={item.label}
            rows={item.rows || 3}
            fullWidth={item.fluid}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Paper sx={{ marginTop: 4, padding: 5 }}>
          <FormGroup>
            <Grid container spacing={2}>
              {JsonData.map((field) => (
                <Grid item xs={12} key={field.id}>
                  {renderFormField(field)}
                </Grid>
              ))}
            </Grid>
          </FormGroup>
        </Paper>
      </Grid>
      {open && (
        <ModalPopUp
          open={open}
          handleClose={handleClose}
          formState={formState}
          todo={todo}
        />
      )}
    </Container>
  );
}
