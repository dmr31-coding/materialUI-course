
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

import Checkbox from '@mui/material/Checkbox';
import { ExpandMore, FavoriteBorder, Menu } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, AppBar, AvatarGroup, Card, CardActions, CardContent, CardHeader, CircularProgress, Divider, FormControlLabel, LinearProgress, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Paper, RadioGroup, Skeleton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Tooltip, Typography } from '@mui/material';

import Radio from '@mui/material/Radio';


import Rating from '@mui/material/Rating';

import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

import Switch from '@mui/material/Switch';

import TextField from '@mui/material/TextField';

import Avatar from '@mui/material/Avatar';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

import Chip from '@mui/material/Chip';

import Grid from '@mui/material/Grid';

import { customStyle } from './styles';

import { customTheme } from './customtheme';
import { ThemeProvider } from '@emotion/react';

function App() {
  const btnStyle = {
    bgcolor: 'green',
    color: 'black'
  }
  return (
    <>
    <h1>Text Button</h1>
    <Button>Click Me</Button>
    <Button color='secondary'>Secondary</Button>
    <Button color='primary' href='https://google.com'>Link</Button>
    <Button disabled>Disabled</Button>

    <h1>Contained Button</h1>
    <Button variant='contained'>Click Me</Button>
    <Button variant='contained' color='secondary'>Secondary</Button>
    <Button variant='contained' color='primary' href='https://google.com'>Link</Button>
    <Button variant='contained' disabled>Disabled</Button>

    <h1>Outlined Button</h1>
    <Button variant='outlined'>Click Me</Button>
    <Button variant='outlined' color='secondary'>Secondary</Button>
    <Button variant='outlined' color='primary' href='https://google.com'>Link</Button>
    <Button variant='outlined' disabled>Disabled</Button>

    <h1>Button Size</h1>
    <Button variant='outlined' color='secondary' size='small'>Secondary</Button>
    <Button variant='outlined' color='primary' size='medium' href='https://google.com'>Link</Button>
    <Button variant='outlined' disabled size='large'>Disabled</Button>

    <h1>Button with Icon</h1>
    <Button variant='outlined' color='secondary' startIcon={<DeleteIcon />}>Delete</Button>
    <Button variant='outlined' color='warning' endIcon={<DeleteIcon />}>Delete</Button>

    <h1>Icon Button</h1>
    <IconButton color='secondary'>
      <DeleteIcon />
    </IconButton>

    <h1>Custom Button</h1>
    <Button variant='contained' style={{backgroundColor: 'green'}}>Custom1</Button>
    <Button variant='contained' style={{backgroundColor: 'gray'}}>Custom2</Button>

    <h1> Button click Event</h1>
    <Button variant='contained' onClick={()=>console.log("Button clicked")}>ButtonEvent</Button>

    <h1> Button Group</h1>
    <ButtonGroup variant='contained' color='secondary'>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
    </ButtonGroup>

    <h1>Vertical Button Group</h1>
    <ButtonGroup variant='contained' color='secondary' orientation='vertical'>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
    </ButtonGroup>

    <h1>Floating Action Button</h1>
    <Fab color='secondary'>R</Fab>
    <Fab color='primary'><AddIcon /></Fab>
    <Fab color='secondary'><EditIcon /></Fab>
    <Fab variant='extended'><NavigationIcon />Navigate</Fab>
    <Fab disabled><FavoriteIcon /></Fab>

    <h1>Checkbox</h1>
    <Checkbox />
    <Checkbox checked />
    <Checkbox checked={true} color='success' />
    <Checkbox defaultChecked indeterminate />
    <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon />} />
    <Checkbox onChange={()=>console.log("Checked Done.")} />
    
    <FormControlLabel control={<Checkbox />} label='Male' />
    <FormControlLabel control={<Checkbox />} label='Female' labelPlacement='start' />

    <h1>Radio Button</h1>
    <Radio value='male' name='radio-button' />
    <Radio value='female' name='radio-button' />
    <FormControlLabel control={<Radio />} label='Female' labelPlacement='end' />

    <RadioGroup row>
    <FormControlLabel control={<Radio />} label='Male' />
    <FormControlLabel control={<Radio />} label='Female' />
    <FormControlLabel control={<Radio />} label='Other' />

    </RadioGroup>

    <h1>Rating</h1>
    <Rating />
    <Rating value={3} readOnly />
    <Rating defaultValue={2.5} precision={0.5} />

    <h1>Slider</h1>
    <Slider />
    <Slider value={5} color='secondary' />
    <Slider defaultValue={20} color='secondary' />
    <Box sx={{height:300}}>
      <Slider orientation='vertical' defaultValue={20} />
    </Box>

    <h1>Switch</h1>
    <Switch />
    <Switch defaultChecked />
    <Switch disabled defaultChecked />
    <FormControlLabel control={<Switch />} label='Dark' />

    <h1>Text Field</h1>
    <TextField />
    <TextField label='Name' />
    <TextField label='Standard' variant='standard' />
    <TextField label='Outlined' variant='outlined' />
    <TextField label='Filled' variant='filled' />

    <h1>Box</h1>
    <Box>Hello Guys</Box>

    <h1>Stack</h1>
    <Stack spacing={2} direction='row'>
    <Button variant='outlined' color='secondary' size='small'>Secondary</Button>
    <Button variant='outlined' color='primary' size='medium' href='https://google.com'>Link</Button>
    <Button variant='outlined' disabled size='large'>Disabled</Button>
    </Stack>
    
    <h1>These are System key/props</h1>
    <h1>Alignment</h1>
    <Box textAlign='left'>Hello</Box>
    <Box textAlign='right'>Hello</Box>
    <Box textAlign='center'>Hello</Box>

    <h1>Font Weight</h1>
    <Box fontWeight="bold">Hello</Box>
    <Box fontWeight={600}>Hello</Box>

    <h1>Font Size</h1>
    <Box fontWeight="9">Hello</Box>

    <h1>Margin</h1>
    <Box m={10}>All side margin</Box>
    <Box mt={10}>margin Top </Box>
    <Box mb={10}>margin Bottom </Box>
    <Box mr={10}>margin right </Box>
    <Box ml={10}>margin left </Box>
    <Box mx={10}>margin left right </Box>
    <Box my={10}>margin Top Boottom </Box>

    <h1>Width Sizing</h1>
    <Box width={1 / 4} bgcolor='red'>Width 1/4</Box>
    <Box width={1} bgcolor='green'>Width 100%</Box>
    <Box width='50%' bgcolor='yellow'>Width 50%</Box>
    <Box width={500} bgcolor='pink'>Width 500px</Box>


    <h1>Avatar</h1>
    <Avatar>J</Avatar>
    <Avatar src='https://www.istockphoto.com/photo/summer-meadow-gm184377306-17482147?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fflowers%2F&utm_term=flowers' />
    <Avatar><DeleteIcon /></Avatar>

    <AvatarGroup max={3}>
    <Avatar src='https://www.istockphoto.com/photo/summer-meadow-gm184377306-17482147?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fflowers%2F&utm_term=flowers' />
    <Avatar src='https://www.istockphoto.com/photo/summer-meadow-gm184377306-17482147?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fflowers%2F&utm_term=flowers' /><Avatar src='https://www.istockphoto.com/photo/summer-meadow-gm184377306-17482147?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fflowers%2F&utm_term=flowers' /><Avatar src='https://www.istockphoto.com/photo/summer-meadow-gm184377306-17482147?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fflowers%2F&utm_term=flowers' /><Avatar src='https://www.istockphoto.com/photo/summer-meadow-gm184377306-17482147?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fflowers%2F&utm_term=flowers' />
    </AvatarGroup>

    <h1>Badge</h1>
    <Stack spacing={4} direction='row'>
      <Badge badgeContent={5} color='primary'><MailIcon /></Badge>
      <Badge badgeContent={99} color='success' max={40}><MailIcon /></Badge>
      <Badge anchorOrigin={{vertical: "bottom", horizontal: "right"}} badgeContent={100} color='primary'><MailIcon /></Badge>
      <Badge badgeContent={5} color='primary' max={50}><MailIcon /></Badge>
      <Badge variant='dot' color='primary'><MailIcon /></Badge>


    </Stack>

    <h1>Chip</h1>
    <Stack direction='row' spacing={1}>
      <Chip label='Chip Filled' />
      <Chip label='Chip Outlined' variant='outlined' />
      <Chip label='Clickable' onClick={()=>console.log("Chip clicked")} />
      <Chip label='Deletable' onDelete={()=>console.log("Chip Delete clicked")} />
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar Chip" />
      <Chip avatar={<Avatar src='https://pixabay.com/photos/hibiscus-red-flower-blossom-bloom-8582876/' />} label="Avatar Chip" />

      


    </Stack>

    <h1>Divider</h1>
    <Divider />
    <Divider orientation='vertical' />
    <Divider>CENTER</Divider>
    <Divider textAlign='left'>LEFT</Divider>

    <h1>List</h1>
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary='Drafts' />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {/* <InboxIcon /> */}
          </ListItemIcon>
          <ListItemText primary='Inbox' />
        </ListItemButton>
      </ListItem>
    </List>

    <h1>Table</h1>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align='right'>Name</TableCell>
            <TableCell align='right'>Roll</TableCell>
            <TableCell align='right'>Class</TableCell>
            <TableCell align='right'>Subject</TableCell>

          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell component='th' scope='row'>1</TableCell>
            <TableCell align='right'>Ram</TableCell>
            <TableCell align='right'>51</TableCell>
            <TableCell align='right'>9</TableCell>
            <TableCell align='right'>Maths</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>2</TableCell>
            <TableCell align='right'>Shyam</TableCell>
            <TableCell align='right'>52</TableCell>
            <TableCell align='right'>8</TableCell>
            <TableCell align='right'>English</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <h1>Tooltip</h1>
    <Tooltip title='Delete'>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>

    <h1>Progress</h1>
    <CircularProgress />
    <CircularProgress color='secondary' />
    <LinearProgress />
    <LinearProgress color='secondary' />

    <h1>Skeleton</h1>
    <Skeleton variant='text' />
    <Skeleton variant='circular' width={40} height={40} />
    <Skeleton variant='rectangular' width={210} height={118} />


    <h1>Accordion</h1>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panella-content' id='panella-header'>
      <Typography>Accordion 1</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error necessitatibus, impedit enim distinctio iusto rerum facilis a perspiciatis quidem fugit iure, in pariatur et omnis ipsam perferendis neque asperiores.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion disabled>
    <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel3a-content' id='panel3a-header'>
      <Typography>Disabled Accordion</Typography>
      </AccordionSummary>

    </Accordion>

    <h1>App Bar</h1>
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='menu'>
          <Menu />
        </IconButton>

        <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
          News
       </Typography>
       <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>

    <h1>Grid</h1>
    <Grid container>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Box bgcolor='yellow' p={5} textAlign="center">1</Box>
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Box bgcolor='green' p={5} textAlign="center">2</Box>
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Box bgcolor='red' p={5} textAlign="center">3</Box>
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Box bgcolor='blue' p={5} textAlign="center">4</Box>
      </Grid>
    </Grid>

    <h1>Paper</h1>
    <Grid container>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Paper elevation={9}>
        <Box p={5} textAlign="center">1</Box>

        </Paper>
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Paper variant='outlined'>
      <Box p={5} textAlign="center">2</Box>
      </Paper>
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Box bgcolor='red' p={5} textAlign="center">3</Box>
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Box bgcolor='blue' p={5} textAlign="center">4</Box>
      </Grid>
    </Grid>

    <h1>Card</h1>
    <Grid container spacing={4}>
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card>
        <CardHeader title='cardhead' subheader='Janauary 20, 2023' />
        <CardContent>
          <Typography color='textsecondary' gutterBotttom>
            Material UI 1
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' >Learn More</Button>
        </CardActions>
      </Card>
    </Grid>

    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card variant='outlined'>
        
        <CardContent>
          <Typography color='textsecondary' gutterBotttom>
            Material UI 2
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' >Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Box bgcolor='red' p={5} textAlign="center">3</Box>
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Box bgcolor='blue' p={5} textAlign="center">4</Box>
      </Grid>
    </Grid>

    <h1>Customization</h1>
    <Button variant='contained' color='secondary'>Hello</Button>
    <Button variant='contained' style={{backgroundColor: 'red', color:'black'}}>Hi</Button>
    <Button variant='contained' sx={{backgroundColor: 'black', color:'white'}}>Hi</Button>
    <Button variant='contained' sx={{bgcolor: 'yellow', color:'black'}}>Hi</Button>
    <Button variant='contained' sx={btnStyle}>Hi</Button>
    <Button variant='contained' sx={customStyle.btnNew}>Hi</Button>

    <ThemeProvider theme={customTheme}>
    <Button variant='contained' color='secondary'>Hello</Button>
    <Button variant='contained' color='mycolor'>Hello</Button>

    </ThemeProvider>

    </>
  );
}

export default App;
