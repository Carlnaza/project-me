// Library
import {
    Paper,
    TextField,
    Grid,
    Container
} from '@material-ui/core'
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });

const Account = () => {

    return (
        <ThemeProvider theme={theme}>
        <Paper variant="outlined">
            <Grid container direction="column">
                <TextField variant="outlined" margin="normal" fullWidth disabled />
                <TextField variant="outlined" margin="normal" fullWidth disabled />
                <TextField variant="outlined" margin="normal" fullWidth disabled />
                <TextField variant="outlined" margin="normal" fullWidth disabled />
                <TextField variant="outlined" margin="normal" fullWidth disabled />
                <TextField variant="outlined" margin="normal" fullWidth disabled />
                <TextField variant="outlined" margin="normal" fullWidth disabled />
                <TextField variant="outlined" margin="normal" fullWidth disabled />
                <TextField variant="outlined" margin="normal" fullWidth disabled />
                <TextField variant="outlined" margin="normal" fullWidth disabled />
            </Grid>
        </Paper>
        </ThemeProvider>
    )
}

export default Account
