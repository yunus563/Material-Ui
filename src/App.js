/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  BottomNavigation,
  BottomNavigationAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@material-ui/core/";

import MenuIcon from "@material-ui/icons/Menu";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import LayerIcon from "@material-ui/icons/Layers";

import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    marginBottom: theme.spacing(4),
    color: theme.palette.common.white,

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    buttom: 0,
    backgroundOverlay: "rgb(0,0,0,.3,)",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(9),
    marginTop: theme.spacing(9),
  },
  CardMedia: {
    paddingTop: "56.25%",
  },
  CardContent: {
    flexGrow: 1,
  },
  CardGrid: {
    MarginTop: theme.spacing(3),
  },
  Footer: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, NewValue) => {
    console.log(NewValue);
    setValue(NewValue);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              Web Developer Blog
            </Typography>

            <Box mr={2}>
              <Button
                color="inherit"
                variant="outlined"
                onClick={handleClickOpen}
              >
                Log in
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see video</DialogContentText>
                  <TextField
                    type="email"
                    fullWidth
                    autoFocus
                    name="name"
                    label="Email Adress"
                    margin="dense"
                  />
                  <TextField
                    type="password"
                    fullWidth
                    autoFocus
                    name="pass"
                    label="Password"
                    margin="dense"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="secondary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Log in
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>

            <Button color="secondary" variant="contained">
              Sign un
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    color="inherit"
                    variant="3"
                    gutterBottom
                  >
                    Web Developer Blog
                  </Typography>
                  <Typography
                    component="h4"
                    color="inherit"
                    variant="6"
                    paragraph
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quasi repellat veritatis facilis veniam dolore. Maiores vel
                    facere suscipit voluptatum odit, quod consequuntur vitae
                    quidem architecto.
                  </Typography>
                  <Button color="secondary" variant="contained">
                    Learn More
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>

        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Web Developer Blog
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Quasi repellat veritatis facilis veniam dolore. Maiores vel facere
              suscipit voluptatum odit, quod consequuntur vitae quidem
              architecto.Quasi repellat veritatis facilis veniam dolore. Maiores
              vel facere suscipit voluptatum odit, quod consequuntur vitae
              quidem architecto.
            </Typography>
            <div className={classes.mainButton}>
              <Grid container justify="center" spacing={3}>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Start Now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.CardGrid} maxWidth="md">
          <Grid container spacing={9}>
            {card.map((card) => (
              <Grid item key={card} xs="12" sm="6" md="4">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.CardMedia}
                    image="https://source.unsplash.com/random"
                    title="image title"
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography variant="h5" color="primary" gutterBottom>
                      Blog Post
                    </Typography>
                    <Typography paragraph>
                      Blog Post. Web Developer Blog Lorem ipsum dolor sit amet.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer className={classes.Footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
      </footer>
    </>
  );
}

export default App;
