/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Container, Grid, Card, CardContent, CardActions, Typography,
  IconButton, Button, TextField
} from '@mui/material';
import {
  Search as SearchIcon, ShoppingCart as ShoppingCartIcon, FilterList as FilterIcon,
  Book as BookIcon
} from '@mui/icons-material';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <AppBar position="static" style={{ marginBottom: '32px', background: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)', boxShadow: '0px 4px 12px rgba(0,0,0,0.2)' }}>
        <Toolbar style={{ padding: '0 16px', justifyContent: 'space-between', color: '#fff', animation: 'slideInDown 0.5s ease-out' }}>
          <Link to="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: 'inherit', textDecoration: 'none' }}>
            <BookIcon style={{ height: '30px', width: '30px', transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.2)' } }} />
            <span style={{ fontSize: '26px', background: '-webkit-linear-gradient(#fff, #ffce00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Padh Le</span>
          </Link>
          <nav style={{ display: 'flex', gap: '24px', fontSize: '17px', fontWeight: '500' }}>
            {['/courses', '/pdfs', '/notes', '#', '#'].map((path, index) => (
              <Link key={index} to={path} style={{ 
                color: 'inherit', textDecoration: 'none', padding: '5px 10px', borderRadius: '4px',
                boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', transition: 'color 0.3s ease-in-out, transform 0.5s, box-shadow 0.5s, background 0.5s',
                '&:hover': { color: '#ffce00', transform: 'translateY(-2px) rotate(5deg)', boxShadow: '0px 4px 12px rgba(0,0,0,0.2)', background: 'rgba(255, 206, 0, 0.2)' }
              }}>
                {['Courses', 'PDFs', 'Notes', 'About', 'Contact'][index]}
              </Link>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconButton style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.2)', transition: 'transform 0.3s ease-in-out, box-shadow 0.5s' }}>
              <SearchIcon style={{ color: 'white', '&:hover': { transform: 'scale(1.2) rotate(360deg)', boxShadow: '0px 4px 12px rgba(0,0,0,0.3)' } }} />
            </IconButton>
            <IconButton style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.2)', transition: 'transform 0.3s ease-in-out, box-shadow 0.5s' }}>
              <ShoppingCartIcon style={{ color: 'white', '&:hover': { transform: 'scale(1.2) rotate(360deg)', boxShadow: '0px 4px 12px rgba(0,0,0,0.3)' } }} />
            </IconButton>
            <IconButton style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.2)', transition: 'transform 0.3s ease-in-out', '&:hover img': { transform: 'scale(1.2) rotate(360deg)' } }}>
              <img src="/placeholder.svg" width="32" height="32" style={{ borderRadius: '50%', border: '2px solid #ffce00', transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.2)' } }} alt="Avatar" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <main style={{ flex: 1, background: 'linear-gradient(180deg, #e0e0e0 0%, #ffffff 100%)', paddingBottom: '64px' }}>
        <Container>
          <div style={{ marginBottom: '48px', animation: 'fadeIn 1s ease-in-out', textAlign: 'center', position: 'relative' }}>
            <Typography variant="h4" component="h1" gutterBottom style={{ color: '#007bff', fontWeight: '700' }}>Featured Content</Typography>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center' }}>
              <Button variant="contained" startIcon={<FilterIcon />} style={{ backgroundColor: '#fc466b', color: 'white', transition: 'background-color 0.3s, transform 0.3s', '&:hover': { backgroundColor: '#3f5efb', transform: 'scale(1.1)' } }}>
                Filter
              </Button>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search content..."
                style={{ backgroundColor: 'white', borderRadius: '5px', boxShadow: '0px 4px 6px rgba(0,0,0,0.15)', transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 4px 12px rgba(0,0,0,0.2)' } }}
                InputProps={{
                  startAdornment: <SearchIcon style={{ color: '#007bff' }} position="start" />,
                }}
              />
            </div>
            <div style={{ position: 'absolute', top: '40px', right: '40px', width: '50px', height: '50px', background: 'rgba(0, 123, 255, 0.2)', borderRadius: '50%', animation: 'pulse 1.5s infinite' }}></div>
          </div>
          <Grid container spacing={3}>
            {[...Array(8).keys()].map(index => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                <Card style={{
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)', transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
                  borderRadius: '10px', overflow: 'hidden', '&:hover': { transform: 'translateY(-10px) rotate(-1deg) scale(1.05)', boxShadow: '0 6px 30px rgba(0,0,0,0.2)' }
                }}>
                  <Link to="#" className="group" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                      <img
                        src="/placeholder.svg"
                        alt="Course thumbnail"
                        style={{
                          width: '100%', height: '200px', objectFit: 'cover', transition: 'transform 0.3s ease-in-out',
                          '&:hover': { transform: 'scale(1.2)' }
                        }}
                      />
                      <div style={{
                        position: 'absolute', top: '8px', right: '8px',
                        backgroundColor: 'rgba(0, 0, 0, 0.75)', color: 'white',
                        padding: '4px 8px', borderRadius: '8px', fontSize: '14px', fontWeight: '600'
                      }}>
                        $29
                      </div>
                    </div>
                    <CardContent>
                      <Typography variant="h6" component="h3">Introduction to Web Development</Typography>
                      <Typography variant="body2" color="textSecondary" style={{ animation: 'fadeSlideIn 1s ease-in-out' }}>
                        Learn the fundamentals of web development and build your first website.
                      </Typography>
                    </CardContent>
                  </Link>
                  <CardActions>
                    <Button variant="contained" size="small" fullWidth style={{ backgroundColor: '#007bff', color: 'white', transition: 'background-color 0.3s ease-in-out', '&:hover': { backgroundColor: '#0056b3', transform: 'scale(1.1)' } }}>
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '16px 48px', display: 'flex', justifyContent: 'space-between', animation: 'slideInUp 0.5s ease-out' }}>
        <Typography variant="body2">&copy; 2023 Acme Learning. All rights reserved.</Typography>
        <nav style={{ display: 'flex', gap: '16px' }}>
          <Link to="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease-in-out, transform 0.5s', '&:hover': { color: '#ffce00', textDecoration: 'underline', transform: 'rotateY(360deg)' } }}>Terms of Service</Link>
          <Link to="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease-in-out, transform 0.5s', '&:hover': { color: '#ffce00', textDecoration: 'underline', transform: 'rotateY(360deg)' } }}>Privacy Policy</Link>
          <Link to="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease-in-out, transform 0.5s', '&:hover': { color: '#ffce00', textDecoration: 'underline', transform: 'rotateY(360deg)' } }}>Help</Link>
        </nav>
        <div style={{ position: 'absolute', bottom: '30px', left: '30px', width: '60px', height: '60px', background: 'rgba(0, 123, 255, 0.2)', borderRadius: '50%', animation: 'pulse 1.5s infinite' }}></div>
      </footer>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideInDown {
            from { transform: translateY(-100%); }
            to { transform: translateY(0); }
          }
          @keyframes slideInUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
         
          nav a:hover, .MuiIconButton-root:hover {
            color: #ffce00 !important;
            transform: translateY(-2px) !important;
            box-shadow: 0px 4px 12px rgba(0,0,0,0.2) !important;
          }
        `}
      </style>
    </div>
  );
}

export default Dashboard;
