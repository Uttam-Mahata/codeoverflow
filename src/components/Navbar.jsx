import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openChapters, setOpenChapters] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenu('');
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMenuClick = (menu) => {
    switch (menu) {
      case 'chapters':
        setOpenChapters(!openChapters);
        break;
      case 'features':
        setOpenFeatures(!openFeatures);
        break;
      case 'support':
        setOpenSupport(!openSupport);
        break;
      default:
        break;
    }
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(true)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => handleMenuClick('chapters')}>
          <ListItemText primary="Chapters" />
          {openChapters ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openChapters} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/chapters/cpdsa">
              <ListItemText primary="CP/DSA" />
            </ListItem>
            <ListItem button component={Link} to="/chapters/web-development">
              <ListItemText primary="Web Dev" />
            </ListItem>
            <ListItem button component={Link} to="/chapters/app-development">
              <ListItemText primary="App Dev" />
            </ListItem>
            <ListItem button component={Link} to="/chapters/machine-learning">
              <ListItemText primary="ML" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleMenuClick('features')}>
          <ListItemText primary="Features" />
          {openFeatures ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openFeatures} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/features/contests">
              <ListItemText primary="Contests" />
            </ListItem>
            <ListItem button component={Link} to="/features/questions">
              <ListItemText primary="Questions" />
            </ListItem>
            <ListItem button component={Link} to="/features/bug-squashing">
              <ListItemText primary="Bug Squashing" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleMenuClick('support')}>
          <ListItemText primary="Support" />
          {openSupport ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSupport} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/support/help-center">
              <ListItemText primary="Help Center" />
            </ListItem>
            <ListItem button component={Link} to="/support/guidepaths-materials">
              <ListItemText primary="Guidepaths" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CodeOverflow
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawerContent}
            </Drawer>
          </>
        ) : (
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
        )}
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
