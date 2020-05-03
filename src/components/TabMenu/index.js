

import React from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import colors from '../../colors'
import { Grid, Button, Box, Typography } from '@material-ui/core';
let { primary } = colors

const useStyles = makeStyles({
  list: {
    width: '300px',
  },
  fullList: {
  },
  Grid:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  button: {
    flex: 2
  },
  drawerButton: {
    color: primary.lightText,
    backgroundColor: primary.backgroundColor,
    padding: '7px',
    fontSize: '10px',
    margin: '10px 20px 15px 25px',
    borderRadius: '10px',
    '&.active, &:hover, &.active:hover': {
      '& path': {
          fill: primary.backgroundColor,
          opacity: 0.7
      },
      '& span': {
          color: primary.darkText,
          opacity: 0.7
      }
    }
  },
  avatar: {
    width: '125px',
    height: '125px',
    marginLeft: '30%',
    marginTop: '12px'
  },
  userText: {
    color: primary.darkText,
    textAlign: 'center'
  },
});

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: primary.darkText,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '6px',
    maxWidth: 300,
    opacity: 0.5,
    padding: 1,
    margin: '0px 0px -2px -8px',
    backgroundColor: primary.tabColorBackground,
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
      color: primary.darkTextPlus
    },
  },
}))((props) => <Tab disableRipple {...props} />);


const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: primary.tabColorIndicator,
    },
  },
  root:{
    margin: '12px -8px 0px 0px'
  }
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);


function RenderTabs(props, value,setValue, handleChange) {
  const classes = useStyles();
  
  let renderObj = [];
  for(let i = 0; i< props.children.length; i++) {
    renderObj= [...renderObj, RenderTab(props.children[i], [i])]
  } 

  return (
      <>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label={props.aria_label}
          className={classes.tab}
          variant={'fullWidth'}
        >
        { 
          renderObj
        }
      </StyledTabs>
      </>
  )
}

function RenderTab(children, key){ 
  return (
    <StyledTab {...a11yProps(key)} key={key} label={children} />
  )
}


function RenderMenu(){ 
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  let userInfo = {
    name: 'Aroldo Goulart Barros',
    urlImage: 'https://avatars3.githubusercontent.com/u/38509926?s=400&u=97e73e9caf6fe68bebc3019fb7c2c81cf5bda20c&v=4https://avatars3.githubusercontent.com/u/38509926?s=400&u=97e73e9caf6fe68bebc3019fb7c2c81cf5bda20c&v=4'
  }

  let listItems = [
    {
      text: 'Meu Perfil', 
    },
    {
      text: 'Cadastrar Produtos', 
    },
    {
      text: 'Plataformas de Venda', 
    },
    {
      text: 'Configurações', 
    },
    ,{
      text: 'Sair', 
    }
  ]

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <List>
      <Avatar variant={'circle'} className={classes.avatar} alt="Usuario" src={`${userInfo.urlImage}`} />
      <h1 className={classes.userText}>{userInfo.name}</h1>
      <Divider />
        {listItems.map(({text}, index) => (
          <ListItem className={classes.drawerButton} button key={text}>
            <ListItemIcon nameClass={classes.listItemIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText nameClass={classes.text} primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
    {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className={classes.button} onClick={toggleDrawer(anchor, true)}>Menu</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  )
}

function TabMenu(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Meu Perfil', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.icon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Grid
      direction="row"
      justify="space-around"
      alignItems="stretch"
      className={classes.Grid}
      >
        {RenderMenu()}
        {RenderTabs(props, value, setValue, handleChange)}
      </Grid>
    </div>
  )
}



export default TabMenu;