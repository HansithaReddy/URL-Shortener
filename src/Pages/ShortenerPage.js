import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
const ShortenerPage = () => {
  const [longUrl, setLongUrl] = useState('');
  const [validity, setValidity] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [shortLinks, setShortLinks] = useState([]);
  const handleShorten = () => {
    if (!longUrl.startsWith('http')) {
      alert('Enter a valid URL');
      return;
    }
    const code = shortcode || Math.random().toString(36).substring(2, 7);
    const expiry = validity ? parseInt(validity) : 30;
    const shortUrl = `http://localhost:3000/short/${code}`;
    const newLink = {
      longUrl,
      shortUrl,
      expiresAt: new Date(Date.now() + expiry * 60000).toLocaleString(),
    };
    setShortLinks([...shortLinks, newLink]);
    setLongUrl('');
    setValidity('');
    setShortcode('');
  };
  return (
    <Box p={3}>
      <Typography variant="h5">React URL Shortener</Typography>
      <TextField fullWidth label="Long URL" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} margin="normal" />
      <TextField fullWidth label="Validity (minutes)" value={validity} onChange={(e) => setValidity(e.target.value)} margin="normal" />
      <TextField fullWidth label="Custom Shortcode (optional)" value={shortcode} onChange={(e) => setShortcode(e.target.value)} margin="normal" />
      <Button variant="contained" onClick={handleShorten} sx={{ mt: 2 }}>Shorten URL</Button>
      <Box mt={4}>
        {shortLinks.map((link, index) => (
          <Box key={index} mb={2}>
            <Typography><strong>Short:</strong> {link.shortUrl}</Typography>
            <Typography><strong>Original:</strong> {link.longUrl}</Typography>
            <Typography><strong>Expires at:</strong> {link.expiresAt}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default ShortenerPage;