// src/pages/SearchPage.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Typography, Button, Chip, Rating, Divider } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visibleFlights, setVisibleFlights] = useState(3);
  
  // Extract search parameters from URL
  const queryParams = new URLSearchParams(location.search);
  const from = queryParams.get('from') || 'New York (JFK)';
  const to = queryParams.get('to') || 'Los Angeles (LAX)';
  const date = queryParams.get('date') || 'June 15, 2023';

  const flights = [
    // ... your flight data array remains the same
  ];

  const handleBook = (flightId) => {
    navigate(`/booking?flightId=${flightId}`);
  };

  const handleLoadMore = () => {
    setVisibleFlights(prev => Math.min(prev + 3, flights.length));
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Available Flights
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {from} to {to} • {date}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {flights.slice(0, visibleFlights).map((flight) => (
          <Box 
            key={flight.id} 
            sx={{
              border: 1,
              borderColor: 'divider',
              borderRadius: 2,
              p: 3,
              boxShadow: 1,
              transition: 'box-shadow 0.3s',
              '&:hover': {
                boxShadow: 3
              }
            }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                mb: 2
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  bgcolor: 'primary.main', 
                  color: 'white', 
                  p: 1.5, 
                  borderRadius: 1 
                }}>
                  <FlightTakeoffIcon fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    {flight.airline}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Rating 
                      value={flight.rating} 
                      precision={0.1} 
                      readOnly 
                      size="small"
                    />
                    <Typography variant="body2" color="text.secondary">
                      {flight.rating}/5
                    </Typography>
                  </Box>
                </Box>
              </Box>
              
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  ${flight.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  per passenger
                </Typography>
              </Box>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold">
                  {flight.departure}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  JFK
                </Typography>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                flexGrow: 1,
                maxWidth: 300,
                px: 2
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  width: '100%',
                  position: 'relative',
                  mb: 1
                }}>
                  <Box sx={{ 
                    height: 1, 
                    bgcolor: 'divider', 
                    position: 'absolute', 
                    top: '50%',
                    left: 0,
                    right: 0,
                    zIndex: 1 
                  }} />
                  <Box sx={{ 
                    position: 'relative', 
                    zIndex: 2, 
                    bgcolor: 'background.paper',
                    px: 1
                  }}>
                    <AccessTimeIcon color="action" />
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {flight.duration}
                  {flight.stops > 0 && (
                    <span> • {flight.stops} {flight.stops === 1 ? 'stop' : 'stops'}</span>
                  )}
                </Typography>
              </Box>
              
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold">
                  {flight.arrival}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  LAX
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {flight.amenities.map((amenity, index) => (
                <Chip 
                  key={index} 
                  label={amenity} 
                  size="small"
                  variant="outlined"
                />
              ))}
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button 
                variant="outlined"
                onClick={() => console.log('Flight details', flight.id)}
              >
                Details
              </Button>
              <Button 
                variant="contained"
                onClick={() => handleBook(flight.id)}
              >
                Select Flight
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      
      {visibleFlights < flights.length && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="outlined"
            onClick={handleLoadMore}
            sx={{ px: 4, py: 1.5 }}
          >
            Load More Flights
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SearchPage;