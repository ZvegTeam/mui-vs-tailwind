import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FC } from 'react';

export const MaterialUI: FC = () => {
  return (
    <Box
      border={1}
      borderRadius={2}
      borderColor={'lightgray'}
      mt={4}
      mx={5}
      style={{ boxShadow: '4px 4px 8px lightgray' }}
    >
      <Typography variant="h6" p={2.5} textAlign={'center'}>
        Request for a sample of goods
      </Typography>
      <Box px={3} pt={0} pb={2.5}>
        <Stack p={1.5} spacing={2}>
          <Stack direction={{ xs: 'column', sm: 'row' }} gap={2}>
            <Stack direction="column" gap={2} flex={1}>
              <TextField label="First name" variant="outlined" size="small" />
              <TextField label="Last name" variant="outlined" size="small" />
            </Stack>
            <Stack direction="column" gap={2} flex={1}>
              <Stack direction={{ sm: 'row', xs: 'column' }} gap={2}>
                <TextField
                  label="Country"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                <TextField
                  label="ZIP code"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Stack>
              <TextField label="City" variant="outlined" size="small" />
              <TextField label="Address" variant="outlined" size="small" />
            </Stack>
          </Stack>
          <Divider />
          <Stack>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <>
                  I agree with <Link href="#">Term and conditions</Link>
                </>
              }
            />
            <Stack gap={2} direction={{ xs: 'column', sm: 'row' }} mt={2}>
              <Button fullWidth variant="contained" color="error">
                Cancel
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="success"
                size="large"
              >
                Send request
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
