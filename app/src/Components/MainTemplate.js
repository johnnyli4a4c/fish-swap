import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { MenuItem } from 'material-ui/Menu';
import { Link, withRouter } from 'react-router-dom';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 12,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: 0,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
    paddingTop: '64px'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingLeft: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  link: {
    textDecoration: 'none'
  }
});

const options = [
  {
    link: "/login",
    text: "Login"
  },
  {
    link: "/prices",
    text: "Prices"
  },
  {
    link: "/add",
    text: "Add Transaction"
  },
  {
    link: "/history",
    text: "Transaction History"
  },
];


class MainTemplate extends React.Component {
  getCurrentRouteIndex = (pathname) => {
    return options.findIndex(option => {
      return pathname === option.link
    });
  }

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  }

  handleMenuItemClick = index => e => {
    this.setState({selectedIndex: index});
  }
  state = {
    open: true,
    selectedIndex: this.getCurrentRouteIndex(this.props.location.pathname)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({selectedIndex: this.getCurrentRouteIndex(nextProps.location.pathname)});
  }

  render() {
    const { classes } = this.props;
    let nav = [];
    options.forEach((option, index) => {
      nav.push(
        <Link className={classNames(classes.link)} key={index} to={option.link}>
          <MenuItem selected={index === this.state.selectedIndex} onClick={this.handleMenuItemClick(index)}>{option.text}</MenuItem>
        </Link>
      );
    });
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar)}>
            <Toolbar disableGutters>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classNames(classes.menuButton)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                {this.props.title}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.drawerInner}>
              {nav}
            </div>
          </Drawer>
          <main className={classes.content}>
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

MainTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(MainTemplate));