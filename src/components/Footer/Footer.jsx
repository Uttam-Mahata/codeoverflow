// src/components/Footer.js
import { Container, Grid, Typography, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom className="font-bold">
              CodeOverflow
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              Your go-to platform for coding resources, contests, and community support.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom className="font-bold">
              Useful Links
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link href="/chapters" color="inherit" className="hover:underline">
                  Chapters
                </Link>
              </li>
              <li>
                <Link href="/features" color="inherit" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/support" color="inherit" className="hover:underline">
                  Support
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom className="font-bold">
              Connect with Us
            </Typography>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" color="inherit" className="hover:text-blue-500">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Link>
              <Link href="https://twitter.com" color="inherit" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
              <Link href="https://github.com" color="inherit" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Link>
              <Link href="mailto:support@codeoverflow.com" color="inherit" className="hover:text-red-400">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </Link>
            </div>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" className="mt-6 text-gray-500">
          &copy; {new Date().getFullYear()} CodeOverflow. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
