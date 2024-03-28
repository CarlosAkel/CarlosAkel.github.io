import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import '../css/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send the data to your backend
    console.log(formData);
  };

  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <div style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Contact Me
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                className='field'
              />
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                className='field'
              />
              <TextField
                label="Message"
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={5}
                required
                className='field'
              />
              <Button type="submit" variant="contained" color="primary" className='send_button'>
                Send Message
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
