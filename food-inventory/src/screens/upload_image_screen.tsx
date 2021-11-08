import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Input = styled('input')({
    display: 'none',
});

export default function UploadImage() {
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
    ></Grid>

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>

            <Box
                sx={{
                    width: 800,
                    height: 650,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            />
        </Grid>
    );
}