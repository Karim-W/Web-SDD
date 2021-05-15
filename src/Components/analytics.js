// import React,{useEffect,useState,Fragment,useRef} from 'react'
// import AppLogoBW from './Assets/Images/AppLogoBW.jpg'
// import "bootstrap/dist/css/bootstrap.min.css"
// import firebase from '../firebase'
// import {useAuth} from '../contexts/AuthContext'
// import { Dropdown,Spinner,Row,Col,Container,Accordion,Card,Alert, Button} from 'react-bootstrap'
// import MainGraph from './maingraph'
// import SideCard from './sideCards'
// import {Link,useHistory} from 'react-router-dom'
// import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
// import Paper from '@material-ui/core/Paper';
// import './styles/stats.css'
// // import PieChart, {
// //     Legend,
// //     Export,
// //     Series,
// //     Label,
// //     Font,
// //     Connector
// //   } from 'devextreme-react/pie-chart';

// import {
//     Chart,
//     BarSeries,
//     PieSeries,
//     ArgumentAxis,
//     ValueAxis,
//     Title,
//   } from '@devexpress/dx-react-chart-material-ui';
// import { render } from 'react-dom'
// import SelectInput from '@material-ui/core/Select/SelectInput'
// import { Animation } from '@devexpress/dx-react-chart';
// import { PieChart } from 'react-minimal-pie-chart';

// export default function Analytics() {
//     const [dashData,setDashData] = useState([])
//     const [buffer,setbuffer] = useState()
//     const [fname,setFname] = useState(1)
//     const [lname,setLname] = useState()
//     // const [locs,setLocs] = useState(2)
//     const [locsNames,setLocsNames] = useState([])
//     const [locIDs,setLocIDs] = useState([])
//     const [gLocations,setGLocations] = useState([])
//     const {currentUser} = useAuth()
//     const [graph,setgraph] = useState()
//     const History = useHistory()
//     const [load,setLoad] = useState([])
//     const [isBusy, setBusy] = useState(true)
//     const isInitialMount = useRef(true);
//     const [pie,setPie] = useState([])
// //     var CanvasJSReact = require('./canvasjs.react');
// // var CanvasJS = CanvasJSReact.CanvasJS;
// // var CanvasJSChart = CanvasJSReact.CanvasJSChart;
//     const colors = ["#fd8708","#FD9C35","#FEA648","#FEBA72","#FECE9A","#FED8AE","#FEE1C2","#FEEBD7","#FEF5EB","#FFFFFF"]

//     useEffect(() => {

//         if(isInitialMount.current){
//         const db = firebase.database().ref().child("users")
//         db.child(currentUser.uid).once('value').then(function(snap){
//             var iDs =[]
//             var data = snap.val()
//             setFname(data.First_Name)
//             setLname(data.Last_Name)
//             var parent = Object.values(data.pairedLocations)
//             for(var i=0;i<parent.length;i++){
//                 if(locIDs.indexOf(parent[i].id)==-1){
//                 setLocIDs(locIDs=>[...locIDs,parent[i].id])
//                 iDs.push(parent[i].id)
//             }}
//             var Ns = []
//             for(var t =0;t<iDs.length;t++){
//                 const dbt = firebase.database().ref().child("Locations")
//                 dbt.child(iDs[t]).once('value').then(function(sap){
//                     var instLocation =  sap.val()
//                     // if(Ns.length<=iDs.length){
//                     if(gLocations.indexOf(instLocation)===-1){
//                     setGLocations(gLocations=>[...gLocations,instLocation])
//                     setLocsNames(locsNames=>[...locsNames,instLocation.name])
//                     Ns.push(instLocation.name)
//             }
//             }).catch(err2 => console.log(err2))
//             }
//             var violations = []
//             var rx = []
//             var days = []
//             var count = []
//             gLocations.forEach(element => {
//                 violations.push(element.violations)
//             });
//             var strung = JSON.parse(JSON.stringify(violations))
//             console.log("dashData.length")
//             // console.log(strung)
//             //var t = strung[]
//             var tot = 0
//             var pies = []
//             for(var si =0;si<gLocations.length;si++){//gLocations.length
//                 tot =0
//             for (var k in strung[si]){
//                 days.push(k)
//                 var i = 0
//                 for(var L in strung[si][k]) {
//                     i++
//                     tot++
//                 }
//                 count.push(i)
//             }
//             // console.log(tot)

//             pies.push({'title':gLocations[si].name,'value':tot,'color':colors[si%10]})
//             }
//             setPie(pies)
//             var inst

//             for (var ind =0;ind<days.length;ind++){
//                 const d =days[ind]
//                 const v = count[ind]
//                 inst = {'day':d,'violations':v}
//                 rx.push(inst)
//             }
//             rx.sort(function(a, b) {
//                 a = new Date(a.day);
//                 b = new Date(b.day);
//                 return a >b ? -1 : a < b ? 1 : 0;
//                })
//             setBusy(false)
//             setDashData(rx)

//             if(dashData.length!==0){
//             isInitialMount.current = false;
//         }
//             }).catch(err => console.log(err))

//     }},[dashData])
//     return (
//         <>
//                 <Container style={{marginLeft:"0px",padding:"0px"}}>
//             <Row md={4} style={{marginLeft:"0px"}}>
//                 <Col style={{maxWidth:"10vw",height:"120vh",backgroundColor:"black",padding:"0px"}}>
//                     <img src={AppLogoBW} alt="logo"style={{width:"6vw",display:"flex",marginRight:"auto",marginLeft:"auto",paddingBottom:"50px",paddingTop:"50px"}}></img>
//                         <Card style={{backgroundColor:"#fd8708",borderRadius:"0px",textAlign:"center",color:"white"}}>
//                         <Card.Body onClick={dash}>
//                                 Dashboard
//                             </Card.Body>
//                             <Card.Body onClick={stats}>
//                                 Analytics
//                             </Card.Body>
//                             <Card.Body onClick={abt}>
//                                 About
//                             </Card.Body>
//                         </Card>

//                 <p style={{color:"grey",backgroundColor:"black",display:"flex",marginTop:"auto",paddingTop:"50vh",textAlign:"center",padding:"8px",fontFamily:"Segoe UI",fontSize:"15px",fontWeight:"lighter",}}>
//                     Copyright© 2021 SDD. All rights reserved.</p>
//                 </Col>
//                 <Col xs={6} style={{paddingLeft:"0px"}}>
//                 <div style={{marginRight:"auto",backgroundColor:"Black",width:"90vw",marginLeft:"0px",height:"50px",textAlign:"center",justifyContent:"center",display:"inline-block"}}>
//                 <div style={{marginTop:"auto",marginBottom:"auto",color:"White",fontFamily:"Segoe UI",fontSize:"38px",fontWeight:"lighter",display:"flex"} }>
//                     <h1 onClick="loadInItems()" style={{fontFamily:"Segoe UI",fontSize:"30px",fontWeight:"lighter",marginLeft:"auto"}}>Analytics </h1>

//                     <Dropdown style={{display:"flex",marginTop:"auto",marginBottom:"auto",marginLeft:"auto",backgroundColor:"Black"}}>
//                         <Dropdown.Toggle id="dropdown-basic"style={{backgroundColor:"Black",borderColor:"Black",fontFamily:"Segoe UI",fontWeight:"lighter"}}>
//                             {fname} {lname} <Spinner animation="grow" variant="success" size="sm" />
//                         </Dropdown.Toggle>

//                         <Dropdown.Menu style={{backgroundColor:"black",color:"#fd8708"}}>
//                             <Dropdown.Item style={{backgroundColor:"black",color:"white",fontFamily:"Segoe UI",fontWeight:"lighter"}} href="#/action-1">Settings</Dropdown.Item>
//                             <Dropdown.Item style={{backgroundColor:"black",color:"white",fontFamily:"Segoe UI",fontWeight:"lighter"}} href="#/action-2">Logout</Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
//                 </div>
//         </div>
//         <h1 style={{minWidth:"80vw",fontFamily:"Segoe UI",fontWeight:"lighter",textAlign:"center",paddingTop:"10px"}}>Total Violations per day     </h1>
//         <div style={{display:"flex",marginLeft:"auto",marginRight:"auto",paddingLeft:"30%",paddingRight:"30%",paddingTop:"10px"}}>
//         <div>
//         {/* {isBusy?<p>hello</p>:renderchart(dashData)} */}
//         <Paper style={{minWidth:"80vw",maxHeight:"40vh",boxShadow:"2px 2px 5px grey"}}>
//           <Chart style={{color:"white"}}
//             data={dashData}
//              title={dashData.toString}color="black"
//             style={{minWidth:"80vw",maxHeight:"40vh"}}
//           >
//               {/* title="Total Violation per day" */}
//             <ArgumentAxis />
//             <ValueAxis />

//             <BarSeries
//               valueField="violations"
//               argumentField="day"
//               color="#fd8708"
//             />
//           </Chart>
//         </Paper>
//       </div>
//         </div>
//         <div className="PieCard">
//         <Paper style={{ boxShadow:"0px 11px 15px -7px grey",paddingBottom:"10px"}}>
//             <h1 className="pieTitle">Portion of violations per store</h1>
//             <div className="piChart">
//                 <PieChart data={pie}
//                 className="pi"
//                 // label={(labelRenderProps: LabelRenderProps) =>
//                 //     ["1","2"]
//                 //   }
//                 label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
//                 />
//             </div>
//             <div className="legend">
//             { pie.map(function(d) {
//                 return (
//                 // <div className="legendItem">
//                 <div className="legend">
//                     <div style={{height:"50px",width: "50px",backgroundColor:d.color,borderRadius: "50%"}}> </div>
//                     <p className="legendTitle">{d.title}:{d.value}</p>
//                 </div>
//                )

//               })
//             }
//             </div>

//       </Paper>
//       </div>
//       {/* {options} */}

//                 </Col>
//             </Row>
//         </Container>
//         </>

//       )
//       async function loclist() {
//         History.push({
//             pathname: '/loc',
//             state: { fn:fname,ln:lname,some: gLocations }
//           })}

//           async function abt() {
//             History.push({
//                 pathname: '/abt',
//                 state: { fn:fname,ln:lname}
//                 })
//             }
//         async function stats() {
//             History.push('/analytics')
//         }

//         }
//         async function dash() {
//             History.push({
//                 pathname: '/dashboard'
//               })

//       }

import React, { useEffect, useState, Fragment, useRef } from "react";
import AppLogoBW from "./Assets/Images/AppLogoBW.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import {
  Dropdown,
  Spinner,
  Row,
  Col,
  Container,
  Accordion,
  Card,
  Alert,
  Button,
} from "react-bootstrap";
import MainGraph from "./maingraph";
import SideCard from "./sideCards";
import { Link, useHistory } from "react-router-dom";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import Paper from "@material-ui/core/Paper";
import "./styles/stats.css";
// import PieChart, {
//     Legend,
//     Export,
//     Series,
//     Label,
//     Font,
//     Connector
//   } from 'devextreme-react/pie-chart';

import {
  Chart,
  BarSeries,
  PieSeries,
  ArgumentAxis,
  ValueAxis,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { render } from "react-dom";
import SelectInput from "@material-ui/core/Select/SelectInput";
import { Animation } from "@devexpress/dx-react-chart";
import { PieChart } from "react-minimal-pie-chart";
import CanvasJSReact from "./canvasjs.react";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Table } from "react-fluid-table";

//var React = require('react');
var Component = React.Component;
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Analytics() {
  const [dashData, setDashData] = useState([]);
  const [buffer, setbuffer] = useState();
  const [fname, setFname] = useState(1);
  const [lname, setLname] = useState();
  // const [locs,setLocs] = useState(2)
  const [locsNames, setLocsNames] = useState([]);
  const [locIDs, setLocIDs] = useState([]);
  const [gLocations, setGLocations] = useState([]);
  const { currentUser } = useAuth();
  const [graph, setgraph] = useState();
  const History = useHistory();
  const [load, setLoad] = useState([]);
  const [isBusy, setBusy] = useState(true);
  const isInitialMount = useRef(true);
  const [pie, setPie] = useState([]);
  //     var CanvasJSReact = require('./canvasjs.react');
  // var CanvasJS = CanvasJSReact.CanvasJS;
  // var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const colors = [
    "#fd8708",
    "#FD9C35",
    "#FEA648",
    "#FEBA72",
    "#FECE9A",
    "#FED8AE",
    "#FEE1C2",
    "#FEEBD7",
    "#FEF5EB",
    "#FFFFFF",
  ];

  //FOR LINE GRAPH
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "Violations per Month",
    },
    axisY: {
      title: "Violations",
      suffix: "",
    },
    axisX: {
      title: "Month of Year",
      prefix: "M",
      interval: 1,
    },
    data: [
      {
        type: "line",
        toolTipContent: "Month {x}: {y}",
        dataPoints: [
          { x: 1, y: 6 },
          { x: 2, y: 1 },
          { x: 3, y: 4 },
          { x: 4, y: 2 },
          { x: 5, y: 14 },
          { x: 6, y: 6 },
          { x: 7, y: 8 },
          { x: 8, y: 11 },
          { x: 9, y: 19 },
          { x: 10, y: 11 },
          { x: 11, y: 10 },
          { x: 12, y: 1 },
        ],
      },
    ],
  };
  //FOR LINE GRAPH

  //FOR TABLE
  const data = [
    {
      violation: 1,
      date: "12-03-2021, 18:30",
      area: "Mall of the Emirates",
      city: "Dubai",
    },
  ];

  const columns = [
    { key: "violation", header: "Violation", width: 90 },
    { key: "date", header: "Time", width: 180 },
    { key: "area", header: "Area", width: 250 },
    { key: "city", header: "City", width: 180 },
  ];
  //FOR TABLE

  useEffect(() => {
    if (isInitialMount.current) {
      const db = firebase.database().ref().child("users");
      db.child(currentUser.uid)
        .once("value")
        .then(function (snap) {
          var iDs = [];
          var data = snap.val();
          setFname(data.First_Name);
          setLname(data.Last_Name);
          var parent = Object.values(data.pairedLocations);
          for (var i = 0; i < parent.length; i++) {
            if (locIDs.indexOf(parent[i].id) == -1) {
              setLocIDs((locIDs) => [...locIDs, parent[i].id]);
              iDs.push(parent[i].id);
            }
          }
          var Ns = [];
          for (var t = 0; t < iDs.length; t++) {
            const dbt = firebase.database().ref().child("Locations");
            dbt
              .child(iDs[t])
              .once("value")
              .then(function (sap) {
                var instLocation = sap.val();
                // if(Ns.length<=iDs.length){
                if (gLocations.indexOf(instLocation) === -1) {
                  setGLocations((gLocations) => [...gLocations, instLocation]);
                  setLocsNames((locsNames) => [
                    ...locsNames,
                    instLocation.name,
                  ]);
                  Ns.push(instLocation.name);
                }
              })
              .catch((err2) => console.log(err2));
          }
          var violations = [];
          var rx = [];
          var days = [];
          var count = [];
          gLocations.forEach((element) => {
            violations.push(element.violations);
          });
          var strung = JSON.parse(JSON.stringify(violations));
          console.log("dashData.length");
          // console.log(strung)
          //var t = strung[]
          var tot = 0;
          var pies = [];
          for (var si = 0; si < gLocations.length; si++) {
            //gLocations.length
            tot = 0;
            for (var k in strung[si]) {
              days.push(k);
              var i = 0;
              for (var L in strung[si][k]) {
                i++;
                tot++;
              }
              count.push(i);
            }
            // console.log(tot)

            pies.push({
              title: gLocations[si].name,
              value: tot,
              color: colors[si % 10],
            });
          }
          setPie(pies);
          var inst;

          for (var ind = 0; ind < days.length; ind++) {
            const d = days[ind];
            const v = count[ind];
            inst = { day: d, violations: v };
            rx.push(inst);
          }
          rx.sort(function (a, b) {
            a = new Date(a.day);
            b = new Date(b.day);
            return a > b ? -1 : a < b ? 1 : 0;
          });
          setBusy(false);
          setDashData(rx);

          if (dashData.length !== 0) {
            isInitialMount.current = false;
          }
        })
        .catch((err) => console.log(err));
    }
  }, [dashData]);
  return (
    <>
      <div
        style={{
          marginLeft: "0px",
          padding: "0px",
          backgroundColor: "white",
          minWidth: "90vw",
        }}
      >
        <Row md={4} style={{ marginLeft: "0px" }}>
          <Col
            style={{
              maxWidth: "10vw",
              height: "120vh",
              backgroundColor: "black",
              padding: "0px",
            }}
          >
            <img
              src={AppLogoBW}
              alt="logo"
              style={{
                width: "6vw",
                display: "flex",
                marginRight: "auto",
                marginLeft: "auto",
                paddingBottom: "50px",
                paddingTop: "50px",
              }}
            ></img>
            <Card
              style={{
                backgroundColor: "#fd8708",
                borderRadius: "0px",
                textAlign: "center",
                color: "white",
              }}
            >
              <Card.Body>Anaytics</Card.Body>
              <Card.Body>
                <p onClick={loclist}>Locations</p>
              </Card.Body>
              <Card.Body onClick={stats}>Analytics</Card.Body>
              <Card.Body>Devices</Card.Body>
              <Card.Body onClick={abt}>About</Card.Body>
            </Card>

            <p
              style={{
                color: "grey",
                backgroundColor: "black",
                display: "flex",
                marginTop: "auto",
                paddingTop: "50vh",
                textAlign: "center",
                padding: "8px",
                fontFamily: "Segoe UI",
                fontSize: "15px",
                fontWeight: "lighter",
              }}
            >
              Copyright© 2021 SDD. All rights reserved.
            </p>
          </Col>
          <Col xs={6} style={{ paddingLeft: "0px" }}>
            <div
              style={{
                marginRight: "auto",
                backgroundColor: "Black",
                width: "90vw",
                marginLeft: "0px",
                height: "50px",
                textAlign: "center",
                justifyContent: "center",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  color: "White",
                  fontFamily: "Segoe UI",
                  fontSize: "38px",
                  fontWeight: "lighter",
                  display: "flex",
                }}
              >
                <h1
                  onClick="loadInItems()"
                  style={{
                    fontFamily: "Segoe UI",
                    fontSize: "30px",
                    fontWeight: "lighter",
                    marginLeft: "auto",
                  }}
                >
                  Analytics{" "}
                </h1>

                <Dropdown
                  style={{
                    display: "flex",
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "auto",
                    backgroundColor: "Black",
                  }}
                >
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "Black",
                      borderColor: "Black",
                      fontFamily: "Segoe UI",
                      fontWeight: "lighter",
                    }}
                  >
                    {fname} {lname}{" "}
                    <Spinner animation="grow" variant="success" size="sm" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{ backgroundColor: "black", color: "#fd8708" }}
                  >
                    <Dropdown.Item
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        fontFamily: "Segoe UI",
                        fontWeight: "lighter",
                      }}
                      href="#/action-1"
                    >
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        fontFamily: "Segoe UI",
                        fontWeight: "lighter",
                      }}
                      href="#/action-2"
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <h1
              style={{
                minWidth: "80vw",
                fontFamily: "Segoe UI",
                fontWeight: "lighter",
                textAlign: "center",
                paddingTop: "10px",
              }}
            >
              Total Violations per day{" "}
            </h1>

            <div
              style={{
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: "30%",
                paddingRight: "30%",
                paddingTop: "10px",
              }}
            >
              <div>
                {/* {isBusy?<p>hello</p>:renderchart(dashData)} */}
                <Paper
                  style={{
                    minWidth: "80vw",
                    maxHeight: "40vh",
                    boxShadow: "2px 2px 5px grey",
                  }}
                >
                  <Chart
                    style={{ color: "white" }}
                    data={dashData}
                    title={dashData.toString}
                    color="black"
                    style={{ minWidth: "80vw", maxHeight: "40vh" }}
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

            <div style={{ display: "flex", width: " 90vw " }}>
              <div className="PieCard">
                <Paper
                  style={{
                    boxShadow: "0px 11px 15px -7px grey",
                    paddingBottom: "10px",
                  }}
                >
                  <h1 className="pieTitle">Portion of violations per store</h1>
                  <div className="piChart">
                    <PieChart
                      data={pie}
                      className="pi"
                      // label={(labelRenderProps: LabelRenderProps) =>
                      //     ["1","2"]
                      //   }
                      label={({ dataEntry }) =>
                        `${Math.round(dataEntry.percentage)} %`
                      }
                    />
                  </div>

                  <div className="legend">
                    {pie.map(function (d) {
                      return (
                        // <div className="legendItem">
                        <div className="legend">
                          <div
                            style={{
                              height: "50px",
                              width: "50px",
                              backgroundColor: d.color,
                              borderRadius: "50%",
                            }}
                          >
                            {" "}
                          </div>
                          <p className="legendTitle">
                            {d.title}:{d.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </Paper>
              </div>

              {/* FOR LINE GRAPH */}
              <div style={{ paddingLeft: "20px", paddingTop: "10px" }}>
                <Paper
                  style={{
                    boxShadow: "0px 11px 15px -7px grey",
                    paddingBottom: "60px",
                    paddingTop: "65px",
                    width: "40vw",
                  }}
                >
                  <div>
                    <CanvasJSChart
                      options={options}
                      /* onRef={ref => this.chart = ref} */
                    />
                    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                  </div>
                </Paper>
              </div>
              {/* FOR LINE GRAPH */}
            </div>

            {/* FOR TABLE */}
            <div>
              <div
                style={{
                  paddingLeft: "60px",
                  paddingTop: "10px",
                  paddingBottom: "40px",
                }}
              >
                <Paper
                  style={{ minWidth: "80vw", boxShadow: "2px 2px 5px grey" }}
                >
                  <Table data={data} columns={columns} />
                </Paper>
              </div>
            </div>
            {/* FOR TABLE */}

            {/* {options} */}
          </Col>
        </Row>
      </div>
    </>
  );
  async function loclist() {
    History.push({
      pathname: "/loc",
      state: { fn: fname, ln: lname, some: gLocations },
    });
  }

  async function abt() {
    History.push({
      pathname: "/abt",
      state: { fn: fname, ln: lname },
    });
  }
  async function stats() {
    History.push("/analytics");
  }
}
