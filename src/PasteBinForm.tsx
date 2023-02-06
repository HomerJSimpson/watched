import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const apiKeys = ["api_dev_key", "api_option", "api_paste_code"];

function PasteBinForm() {
  return (
    <>
      <Typography variant="h4">Pastebin API play</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 4,
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
            onChange={() => false}
            required
            helperText="* Required"
            sx={{ minWidth: "47%" }}
            key={i}
          />
        ))}
      </Box>
      <Button variant="contained">Save</Button>
    </>
  );
}

export default PasteBinForm;
