import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Menu, MenuItem } from '@mui/material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState('');

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenu('');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CodeOverflow
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button
            color="inherit"
            onClick={(e) => handleClick(e, 'chapters')}
          >
            Chapters
          </Button>
          <Button
            color="inherit"
            onClick={(e) => handleClick(e, 'features')}
          >
            Features
          </Button>
          <Button
            color="inherit"
            onClick={(e) => handleClick(e, 'support')}
          >
            Support
          </Button>
        </Box>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && menu === 'chapters'}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/chapters/cpdsa" onClick={handleClose}>CP/DSA</MenuItem>
        <MenuItem component={Link} to="/chapters/web-development" onClick={handleClose}>Web Dev</MenuItem>
        <MenuItem component={Link} to="/chapters/app-development" onClick={handleClose}>App Dev</MenuItem>
        <MenuItem component={Link} to="/chapters/machine-learning" onClick={handleClose}>ML</MenuItem>
      </Menu>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && menu === 'features'}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/features/contests" onClick={handleClose}>Contests</MenuItem>
        <MenuItem component={Link} to="/features/questions" onClick={handleClose}>Questions</MenuItem>
        <MenuItem component={Link} to="/features/bug-squashing" onClick={handleClose}>Bug Squashing</MenuItem>
      </Menu>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && menu === 'support'}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/support/help-center" onClick={handleClose}>Help Center</MenuItem>
        <MenuItem component={Link} to="/support/guidepaths-materials" onClick={handleClose}>Guidepaths</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
