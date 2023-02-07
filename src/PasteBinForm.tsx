import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const apiKeys = ["api_dev_key", "api_option", "api_paste_code"];

function PasteBinForm() {
  const [state, setState] = React.useState(
    apiKeys.reduce((acc, e, i) => ((acc[e] = ""), acc), {})
  );
  function saveClick(e: React.SyntheticEvent): void {
    console.log(state);
  }
  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const update = { ...state };
    update[e.target.id as keyof typeof apiKeys] = e.target.value;
    setState(update);
  }
  return (
    <>
      <Typography variant="h4">Pastebin API play</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          overflow: "auto",
          columnGap: "8px",
        }}
      >
        {apiKeys.map((e, i) => (
          <TextField
            id={e}
            label={e}
            variant="standard"
            color="primary"
            margin="none"
            size="small"
            value={state[e]}
            onChange={onChange}
            required
            helperText="* Required"
            sx={{ flex: "1 46%" }}
            key={i}
          />
        ))}
      </Box>
      <Button variant="contained" onClick={saveClick}>
        Save
      </Button>
    </>
  );
}

export default PasteBinForm;
