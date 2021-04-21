import React,{useEffect,useState,Fragment,useRef} from 'react'
import { Dropdown,Spinner,Row,Col,Container,Accordion,Card,Alert} from 'react-bootstrap'
import AppLogoBW from './Assets/Images/AppLogoBW.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

export default function LocList(props){
var Locations = []
const L = props.location.state.some;
for (var i =0;i<L.length;i++){
    var found = false;
    for(var k=0;k<Locations.length;k++){
        if(Locations[k].id===L[i].id){
            found=true
        }
    }
    if(!found){
        Locations.push(L[i])
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  console.log("ello govna")
  console.log(props.location.state.some[0].id)
  
    return (
        <>
        <Container style={{marginLeft:"0px",padding:"0px"}}>
    <Row md={4} style={{marginLeft:"0px"}}>
        <Col style={{maxWidth:"10vw",height:"110vh",backgroundColor:"black",padding:"0px"}}>
            <img src={AppLogoBW} alt="logo"style={{width:"6vw",display:"flex",marginRight:"auto",marginLeft:"auto",paddingBottom:"50px",paddingTop:"50px"}}></img>
                <Card style={{backgroundColor:"#fd8708",borderRadius:"0px",textAlign:"center",color:"white"}}>
                <Card.Body >
                                Dashboard
                            </Card.Body>
                    <Card.Body>
                        <p>Locations</p>
                    </Card.Body>
                    <Card.Body >
                        Analytics
                    </Card.Body>
                    <Card.Body >
                        Devices
                    </Card.Body>
                    <Card.Body >
                        About
                    </Card.Body>
                </Card>
       
        <p style={{color:"grey",backgroundColor:"black",display:"flex",marginTop:"auto",paddingTop:"50vh",textAlign:"center",padding:"8px",fontFamily:"Segoe UI",fontSize:"15px",fontWeight:"lighter",}}>
            Copyright© 2021 SDD. All rights reserved.</p>
        </Col>
        <Col xs={6} style={{paddingLeft:"0px"}}>
        <div style={{marginRight:"auto",backgroundColor:"Black",width:"90vw",marginLeft:"0px",height:"50px",textAlign:"center",justifyContent:"center",display:"inline-block"}}>
        <div style={{marginTop:"auto",marginBottom:"auto",color:"White",fontFamily:"Segoe UI",fontSize:"38px",fontWeight:"lighter",display:"flex"} }>
            <h1 onClick="loadInItems()" style={{fontFamily:"Segoe UI",fontSize:"30px",fontWeight:"lighter",marginLeft:"auto"}}>Locations</h1>
            
            <Dropdown style={{display:"flex",marginTop:"auto",marginBottom:"auto",marginLeft:"auto",backgroundColor:"Black"}}>
                <Dropdown.Toggle id="dropdown-basic"style={{backgroundColor:"Black",borderColor:"Black",fontFamily:"Segoe UI",fontWeight:"lighter"}}>
                    {props.location.state.fn} {props.location.state.ln} <Spinner animation="grow" variant="success" size="sm" />
                </Dropdown.Toggle>

                <Dropdown.Menu style={{backgroundColor:"black",color:"#fd8708"}}>
                    <Dropdown.Item style={{backgroundColor:"black",color:"white",fontFamily:"Segoe UI",fontWeight:"lighter"}} href="#/action-1">Settings</Dropdown.Item>
                    <Dropdown.Item style={{backgroundColor:"black",color:"white",fontFamily:"Segoe UI",fontWeight:"lighter"}} href="#/action-2">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
</div>
<div style={{display:"flex",marginLeft:"auto",marginRight:"auto",paddingLeft:"30%",paddingRight:"30%",paddingTop:"80px"}}>

<Grid container className={classes.root} spacing={2} style={{minWidth:"80vw",minHeight:"95vh"}}>
      <Grid item xs={12}>
        <Grid container justify="left" spacing="10" width>
          {Locations.map((value) => (
            <Grid key={value.id}>
                <div style={{minWidth:"40vw",padding:"5%",justifyContent:"center"}}>
                    {/* <div style={{minWidth:"30vw",backgroundColor:"#fd8708",padding:"5%",borderRadius:"20px",minHeight:"30vw"}}> */}
                        
                        <div class="container">
                            <img src={value.locImg} alt="Snow" style={{width:"30vw",height:"30vw",position:"relative"}}/>
                            <p style={{position:"absolute"}}>{value.name}</p>
                            </div> 
                    {/* </div> */}
                    
                </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>

</div>


        </Col>
    </Row>
</Container>
</>
    )
}
