import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

interface HeaderProps {
  onAddPostClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddPostClick }) => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            Awesome Blog
          </Typography>

          <Button onClick={onAddPostClick} color="inherit" variant="outlined">
            Add Post
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
