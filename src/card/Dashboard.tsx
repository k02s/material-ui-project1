import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import { Breadcrumbs, Button, ButtonGroup, MobileStepper, useTheme } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Icon from '@mui/material/Icon';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Vighting
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const arabicTheme = createTheme({
  direction: 'rtl', // Right-to-left layout
  typography: {
    fontFamily: '"Arial", sans-serif', // Change the font family to one supporting Arabic
  },
});

// -----------------------  breadcrumb --------------------------
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // ---------------------- carousel -----------------------------
//  function ProgressMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
// }

  return (
    <ThemeProvider theme={arabicTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Vighting
            </Typography>  
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            {/* <Divider sx={{ my: 1 }} /> */}
            {/* {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={15}>
                
                  <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                          <Link underline="hover" color="inherit" href="/">
                            MUI
                          </Link>
                          <Link
                            underline="hover"
                            color="inherit"
                            href="/material-ui/getting-started/installation/"
                          >
                            Core
                          </Link>
                          <Link
                            underline="hover"
                            color="text.primary"
                            href="/material-ui/react-breadcrumbs/"
                            aria-current="page"
                          >
                            Breadcrumbs
                          </Link>
                        </Breadcrumbs>
                      </div>
              </Grid>
              
              <Grid item xs={12} md={8} lg={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button size='large'  startIcon={<Icon>filter_list</Icon>} />
                  </Box>
              </Grid>

              <Grid item xs={12} md={8} lg={10}>
                    <MobileStepper
                      variant="progress"
                      steps={6}
                      position="static"
                      activeStep={activeStep}
                      sx={{ maxWidth: 600, flexGrow: 1 }}
                      nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                          Next
                          {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                          ) : (
                            <KeyboardArrowRight />
                          )}
                        </Button>
                      }
                      backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                          {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                          ) : (
                            <KeyboardArrowLeft />
                          )}
                          Back
                        </Button>
                      }
                      />
              </Grid>

              <Grid item xs={12} md={8} lg={15}>
              <Box
                  marginLeft="auto"
                  marginRight="auto"
                  marginTop="auto"
                  marginBottom="auto"
                  width="20%"
                >
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled button group"
                  >
                    <Button>Review</Button>
                    <Button>Practice</Button>
                </ButtonGroup>
              </Box>
              </Grid>



                    <Grid container spacing={3} justifyContent="center" alignItems="center" marginTop= "10px">
                        
                          <Grid item xs={12} md={4} lg={3}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'row', height: 250 }}>
                              <Orders />
                            </Paper>
                          </Grid>
                          <Grid item xs={12} md={4} lg={3}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'row', height: 250 }}>
                              <Orders />
                            </Paper>
                          </Grid>
                    </Grid>
                
         
            
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );      
}