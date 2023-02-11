import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function PasteBinForm() {
  type State = { [key: string]: string };
  const [state, setState] = React.useState(
    JSON.parse(
      localStorage.getItem("pbinfo") ||
        '{"api_dev_key":"", "api_user_name":"","api_user_password":""}'
    )
  );

  function saveClick(e: React.SyntheticEvent): void {
    console.log(state);
    localStorage.setItem("pbinfo", JSON.stringify(state));
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    type Update = { [key: string]: string };
    const update: Update = { ...state };
    update[e.target.id] = e.target.value;
    setState(update);
  }

  return (
    <>
      <Typography variant="h4">Pastebin Authentication Information</Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          overflow: "auto",
          columnGap: "8px",
        }}
      >
        {Object.keys(state).map((e, i) => (
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
            sx={{ flex: { xs: "1 100%", sm: "1 46%" } }}
            key={i}
            type={e.indexOf("assword") > 0 ? "password" : ""}
          />
        ))}
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button variant="contained" onClick={saveClick}>
          Save
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Typography sx={{ flex: "0 0 100%" }} variant="h4">
          User
        </Typography>
        <ApiUserCode pbinfo={state}></ApiUserCode>
      </Box>
    </>
  );
}

interface Props {
  pbinfo: { [key: string]: string };
}

const ApiUserCode: React.FC<Props> = (props) => {
  const [state, setState] = React.useState({ text: "no", ...props });
  /**
   * TODO:
   *
   * Flesh this out, POST, pass in pbinfo and convert to body(form)
   * figure out the fetch or trucking switch to axios already
   *  ***** https://cors.sh/playground/
   */
  async function _fetchApiUserKey() {
    let text;
    try {
      const response = await fetch("/pastebin.com/api/api_login.php", {
        method: "POST",
        body: new URLSearchParams(state.pbinfo),
      });
      text = await response.text();
      console.log({ text });
    } catch (e: any) {
      text = e.toString();
    }
    return text;
  }

  React.useEffect(() => {
    _fetchApiUserKey();
  });

  return (
    <Box>
      <pre>{state.text + ""}</pre>
    </Box>
  );
};

export default PasteBinForm;
