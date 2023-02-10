import "./App.css";
import PasteBinForm from "./PasteBinForm";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/icons-material/Menu";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";

function App() {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography
            sx={{
              ">sub": {
                textTransform: "lowercase",
                fontSize: "60%",
                fontStyle: "italic",
                fontWeight: 300,
              },
            }}
            variant="h6"
          >
            watch<sub>ED</sub>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Paper square sx={{ px: 4, py: 1, height: "100%" }}>
        <Typography>Output</Typography>
        <FormGroup></FormGroup>
        <PasteBinForm></PasteBinForm>
      </Paper>
    </>
  );
}

export default App;
