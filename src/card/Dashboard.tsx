import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems } from "./listItems";
import {
  Breadcrumbs,
  Button,
  Slider,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import HomeIcon from "@mui/icons-material/Home";
import MyTabs from "./MyTabs";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Vighting
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const arabicTheme = createTheme({
  direction: "rtl", // Right-to-left layout
  typography: {
    fontFamily: '"Arial", sans-serif', // Change the font family to one supporting Arabic
  },
});

// -----------------------  breadcrumb --------------------------
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // ---------------------- carousel -----------------------------
  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <ThemeProvider theme={arabicTheme}>
      <Box dir="rtl" sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
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
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
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
       
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container dir="rtl" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={15}>
                <div role="presentation" onClick={handleClick}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <HomeIcon sx={{ fontSize: 20 }} />
                    <Link underline="hover" color="inherit" href="/">
                      جيولوجيا
                    </Link>
                    <Link
                      underline="hover"
                      color="inherit"
                      href="/material-ui/getting-started/installation/"
                    >
                      الدروس
                    </Link>
                    <Link
                      underline="hover"
                      color="text.primary"
                      href="/material-ui/react-breadcrumbs/"
                      aria-current="page"
                    >
                      مراجعة
                    </Link>
                  </Breadcrumbs>
                </div>
              </Grid>

              <Grid item xs={12} md={8} lg={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button size="large" startIcon={<Icon>filter_list</Icon>} />
                </Box>
              </Grid>

              <Grid item xs={12} md={8} lg={10}>
                <Slider
                  size="small"
                  aria-label="Small steps"
                  defaultValue={0.00000005}
                  getAriaValueText={valuetext}
                  step={0.00000001}
                  marks
                  min={-0.00000005}
                  max={0.0000001}
                  valueLabelDisplay="auto"
                  sx={{ width: "70%" }}
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
                  <MyTabs />
                </Box>
              </Grid>

            
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
