import React from 'react';
import { Box, Typography } from '@mui/material';
const StatsPage = () => {
  return (
    <Box p={3}>
      <Typography variant="h5">Short URL Statistics</Typography>
      <Box mt={2}>
        <Typography><strong>Short URL:</strong> http://localhost:3000/short/abc12</Typography>
        <Typography><strong>Clicks:</strong> 5</Typography>
        <Typography><strong>Click Info:</strong></Typography>
        <ul>
          <li>Time: 2025-08-01 10:30 | Source: WhatsApp | Location: Hyderabad</li>
          <li>Time: 2025-08-01 10:35 | Source: Chrome | Location: Bengaluru</li>
        </ul>
      </Box>
    </Box>
  );
};
export default StatsPage;