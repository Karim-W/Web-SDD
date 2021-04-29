import React,{useEffect,useState,Fragment,useRef} from 'react'
import AppLogoBW from './Assets/Images/AppLogoBW.jpg'
import "bootstrap/dist/css/bootstrap.min.css"
import firebase from '../firebase'
import {useAuth} from '../contexts/AuthContext'
import { Dropdown,Spinner,Row,Col,Container,Accordion,Card,Alert, Button} from 'react-bootstrap'
import MainGraph from './maingraph' 
import SideCard from './sideCards'
import {Link,useHistory} from 'react-router-dom'
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import Paper from '@material-ui/core/Paper';
import './styles/stats.css'
import PieChart, {
    Legend,
    Export,
    Series,
    Label,
    Font,
    Connector
  } from 'devextreme-react/pie-chart';


import {
    Chart,
    BarSeries,
    PieSeries,
    ArgumentAxis,
    ValueAxis,
    Title,
  } from '@devexpress/dx-react-chart-material-ui';
import { render } from 'react-dom'
import SelectInput from '@material-ui/core/Select/SelectInput'
import { Animation } from '@devexpress/dx-react-chart';



export default function Analytics() {
    const [dashData,setDashData] = useState([])
    const [buffer,setbuffer] = useState()
    const [fname,setFname] = useState(1)
    const [lname,setLname] = useState()
    // const [locs,setLocs] = useState(2)
    const [locsNames,setLocsNames] = useState([])
    const [locIDs,setLocIDs] = useState([])
    const [gLocations,setGLocations] = useState([])
    const {currentUser} = useAuth()
    const [graph,setgraph] = useState()
    const History = useHistory()
    const [load,setLoad] = useState([])
    const [isBusy, setBusy] = useState(true)
    const isInitialMount = useRef(true);
    const [pie,setPie] = useState([])
    var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    
    useEffect(() => {
        
        if(isInitialMount.current){
        const db = firebase.database().ref().child("users")
        db.child(currentUser.uid).once('value').then(function(snap){
            var iDs =[]
            var data = snap.val()
            setFname(data.First_Name)
            setLname(data.Last_Name)
            var parent = Object.values(data.pairedLocations)
            for(var i=0;i<parent.length;i++){
                if(locIDs.indexOf(parent[i].id)==-1){
                setLocIDs(locIDs=>[...locIDs,parent[i].id])
                iDs.push(parent[i].id)
            }}
            var Ns = []
            for(var t =0;t<iDs.length;t++){
                const dbt = firebase.database().ref().child("Locations")
                dbt.child(iDs[t]).once('value').then(function(sap){
                    var instLocation =  sap.val()
                    // if(Ns.length<=iDs.length){
                    if(gLocations.indexOf(instLocation)===-1){
                    setGLocations(gLocations=>[...gLocations,instLocation])
                    setLocsNames(locsNames=>[...locsNames,instLocation.name])
                    Ns.push(instLocation.name)
            }
            }).catch(err2 => console.log(err2))
            }
            var violations = []
            var rx = []
            var days = []
            var count = []
            gLocations.forEach(element => {
                violations.push(element.violations)
            });
            var strung = JSON.parse(JSON.stringify(violations))
            console.log("dashData.length")
            // console.log(strung)
            //var t = strung[]
            var tot = 0
            var pies = []
            for(var si =0;si<gLocations.length;si++){//gLocations.length
                tot =0
            for (var k in strung[si]){
                days.push(k)
                var i = 0
                for(var L in strung[si][k]) {
                    i++
                    tot++
                }
                count.push(i)
            }
            // console.log(tot)
            pies.push({name:gLocations[si].name,value:tot})
            }
            setPie(pies)
            var inst

            for (var ind =0;ind<days.length;ind++){
                const d =days[ind]
                const v = count[ind]
                inst = {'day':d,'violations':v} 
                rx.push(inst)
            }
            setBusy(false)
            setDashData(rx)
            
            if(dashData.length!==0){
            isInitialMount.current = false;
        }
            }).catch(err => console.log(err))
        
    }},[dashData])
    return (
        <>
                <Container style={{marginLeft:"0px",padding:"0px"}}>
            <Row md={4} style={{marginLeft:"0px"}}>
                <Col style={{maxWidth:"10vw",height:"100vh",backgroundColor:"black",padding:"0px"}}>
                    <img src={AppLogoBW} alt="logo"style={{width:"6vw",display:"flex",marginRight:"auto",marginLeft:"auto",paddingBottom:"50px",paddingTop:"50px"}}></img>
                        <Card style={{backgroundColor:"#fd8708",borderRadius:"0px",textAlign:"center",color:"white"}}>
                        <Card.Body >
                                Anaytics
                            </Card.Body>
                            <Card.Body>
                                <p onClick={loclist}>Locations</p>
                            </Card.Body>
                            <Card.Body onClick={stats}>
                                Analytics
                            </Card.Body>
                            <Card.Body >
                                Devices
                            </Card.Body>
                            <Card.Body onClick={abt}>
                                About
                            </Card.Body>
                        </Card>
               
                <p style={{color:"grey",backgroundColor:"black",display:"flex",marginTop:"auto",paddingTop:"50vh",textAlign:"center",padding:"8px",fontFamily:"Segoe UI",fontSize:"15px",fontWeight:"lighter",}}>
                    Copyright© 2021 SDD. All rights reserved.</p>
                </Col>
                <Col xs={6} style={{paddingLeft:"0px"}}>
                <div style={{marginRight:"auto",backgroundColor:"Black",width:"90vw",marginLeft:"0px",height:"50px",textAlign:"center",justifyContent:"center",display:"inline-block"}}>
                <div style={{marginTop:"auto",marginBottom:"auto",color:"White",fontFamily:"Segoe UI",fontSize:"38px",fontWeight:"lighter",display:"flex"} }>
                    <h1 onClick="loadInItems()" style={{fontFamily:"Segoe UI",fontSize:"30px",fontWeight:"lighter",marginLeft:"auto"}}>Analytics </h1>
                    
                    <Dropdown style={{display:"flex",marginTop:"auto",marginBottom:"auto",marginLeft:"auto",backgroundColor:"Black"}}>
                        <Dropdown.Toggle id="dropdown-basic"style={{backgroundColor:"Black",borderColor:"Black",fontFamily:"Segoe UI",fontWeight:"lighter"}}>
                            {fname} {lname} <Spinner animation="grow" variant="success" size="sm" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{backgroundColor:"black",color:"#fd8708"}}>
                            <Dropdown.Item style={{backgroundColor:"black",color:"white",fontFamily:"Segoe UI",fontWeight:"lighter"}} href="#/action-1">Settings</Dropdown.Item>
                            <Dropdown.Item style={{backgroundColor:"black",color:"white",fontFamily:"Segoe UI",fontWeight:"lighter"}} href="#/action-2">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
        </div>
        <h1 style={{minWidth:"80vw",fontFamily:"Segoe UI",fontWeight:"lighter",textAlign:"center",paddingTop:"10px"}}>Total Violations per day     </h1>
        <div style={{display:"flex",marginLeft:"auto",marginRight:"auto",paddingLeft:"30%",paddingRight:"30%",paddingTop:"10px"}}>
        <div>
        {/* {isBusy?<p>hello</p>:renderchart(dashData)} */}
        <Paper style={{minWidth:"80vw",maxHeight:"40vh",boxShadow:"2px 2px 5px grey"}}>
          <Chart style={{color:"white"}}
            data={dashData}
             title={dashData.toString}color="black"
            style={{minWidth:"80vw",maxHeight:"40vh"}}
          >
              {/* title="Total Violation per day" */}
            <ArgumentAxis />
            <ValueAxis />

            <BarSeries
              valueField="violations"
              argumentField="day"
              color="#fd8708"
            />
          </Chart>
        </Paper>
      </div>
        </div>
        <Paper style={{width:"90vw"}}>
        <Chart
          data={pie}
        >
          <PieSeries
            valueField="value"
            argumentField="name"
          />
          <Title
            text="Area of Countries"
          />
          <Animation />
        </Chart>
      </Paper>
      {/* {options} */}
        
                </Col>
            </Row>
        </Container>
        </>
            
      )
      async function loclist() {
        History.push({
            pathname: '/loc',
            state: { fn:fname,ln:lname,some: gLocations }
          })}

    async function abt() {
        History.push({
            pathname: '/abt',
            state: { fn:fname,ln:lname}
            })
        }
    async function stats() {
        History.push('/analytics')
    }

    }



