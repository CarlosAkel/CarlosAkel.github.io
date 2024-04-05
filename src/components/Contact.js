import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import '../css/Contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: '',
  });

  const notify = () => toast("Email Sended");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target; // Get the HTML form element
    emailjs
      .sendForm('service_zxhbe6i', 'template_k3duxdm', form, {
        publicKey: 'wBMPwVAT9HnS4sB2a',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          notify();
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      setFormData({
        from_name: '',
        email: '',
        message: '',
      });
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
                name="from_name"
                value={formData.from_name}
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
                type="email"
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
      <ToastContainer />
    </div>
  );
};

export default Contact;
