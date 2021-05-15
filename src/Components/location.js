import React, { useEffect, useState, Fragment, useRef } from "react";
import {
  Dropdown,
  Spinner,
  Row,
  Col,
  Container,
  Accordion,
  Card,
  Alert,
} from "react-bootstrap";
import AppLogoBW from "./Assets/Images/AppLogoBW.jpg";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Map from "./map";
import EnhancedTable from "./violationsTable";
import Popup from "./popup";
import "./styles/location.css";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

export default function Location(props) {
  var Locations = [];
  const History = useHistory();
  const L = props.location.state.some;
  var theLocation = props.location.state.some;
  const [Tot, SetTot] = useState(0);
  const av = theLocation.activeViolations;
  const days = Object.values(theLocation.violations).length;
  const [dashData, setDashData] = useState([]);
  var avg = 0.0;
  avg = av / days;
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  // const dashData = [
  //     {day:"3",violations:4}
  // ]
  for (var i = 0; i < L.length; i++) {
    var found = false;
    for (var k = 0; k < Locations.length; k++) {
      if (Locations[k].id === L[i].id) {
        found = true;
      }
    }
    if (!found) {
      Locations.push(L[i]);
    }
  }
  // for(var k=0;k<theLocation.violations.length;k++){
  //             for(var i in theLocation.violations[i]){
  //                 console.log(i)
  //                 SetTot(Tot+1)
  //             }
  //         }
  useEffect(() => {
    for (var k = 0; k < theLocation.violations.length; k++) {
      for (var i in theLocation.violations[i]) {
        console.log(i);
        SetTot(Tot + 1);
      }
    }
    var strung = JSON.parse(JSON.stringify(theLocation.violations));
    var rx = [];
    var days = [];
    var count = [];

    for (var k in strung) {
      days.push(k);
      var i = 0;
      for (var L in strung[k]) {
        i++;
      }
      count.push(i);
    }

    var inst;

    for (var ind = 0; ind < days.length; ind++) {
      const d = days[ind];
      const v = count[ind];
      inst = { day: d, violations: v };
      rx.push(inst);
    }

    setDashData(rx);
  }, [Tot]);

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
              height: "170vh",
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
              <Card.Body onClick={dash}>Dashboard</Card.Body>
              <Card.Body>
                <p>Locations</p>
              </Card.Body>
              <Card.Body>Analytics</Card.Body>
              <Card.Body>Devices</Card.Body>
              <Card.Body>About</Card.Body>
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
                width: "89vw",
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
                  {theLocation.name} @ {theLocation.area}
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
                    {props.location.state.fn} {props.location.state.ln}{" "}
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

            <div
              style={{
                display: "flex",
                minWidth: "90vw",
                fontFamily: "Segoe UI",
                fontWeight: "lighter",
                paddingTop: "20px",
              }}
            >
              <Grid style={{ width: "40vw", paddingLeft: "2.5vw" }}>
                <Paper
                  variant="outlined"
                  style={{
                    width: "40.5vw",
                    height: "24vw",
                    justifyContent: "center",
                    boxShadow: "0px 11px 15px -7px grey",
                  }}
                >
                  <img
                    src={theLocation.locImg}
                    style={{ width: "40vw", height: "24vw", padding: "1vw" }}
                  />
                </Paper>
              </Grid>
              <div style={{ minWidth: "2vw" }}>
                <h1> </h1>
              </div>
              <Grid style={{ width: "40vw", paddingLeft: "5vw" }}>
                <Paper
                  variant="outlined"
                  style={{
                    width: "40vw",
                    justifyContent: "center",
                    height: "24vw",
                    paddingLeft: "1vw",
                    paddingRight: "2.5vw",
                    boxShadow: "0px 11px 15px -7px grey",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <h5 style={{ paddingTop: "30px" }}>
                      Name: <h4>{theLocation.name}</h4>
                    </h5>
                    {/* <IconButton onclick={<Popup/>} style={{paddingTop:"30px",marginLeft:"auto"}} edge="end" aria-label="delete">
            <EditIcon/>
        </IconButton> */}
                    <div style={{ marginLeft: "auto", paddingTop: "10px" }}>
                      <Popup />
                    </div>
                  </div>
                  <h5>
                    Area: <h4>{theLocation.area}</h4>
                  </h5>
                  <h5>
                    City: <h4>{theLocation.city}</h4>
                  </h5>
                  <h5>
                    Last Updated on: <h4>{theLocation.LastUpdated}</h4>
                  </h5>
                  <h5>
                    Location ID: <h4>{theLocation.id}</h4>
                  </h5>
                  <h5>
                    Longitude: <h4>{theLocation.long}</h4>
                  </h5>
                  <h5>
                    Latitude: <h4>{theLocation.lat}</h4>
                  </h5>
                  <h5>
                    Total violation(s) Recorded:{" "}
                    <h4>{theLocation.activeViolations}</h4>
                  </h5>
                  <h5>
                    Avg. Violation per day: <h4>{avg}</h4>
                  </h5>
                  <h5>
                    Device Name: <h4>{theLocation.device}</h4>
                  </h5>
                  <h5>
                    Days where a violation is recorded: <h4>{days}</h4>
                  </h5>
                </Paper>
              </Grid>
            </div>
            <div className="innerGraph">
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

              <Paper
                variant="outlined"
                style={{
                  display: "inline",
                  minWidth: "80vw",
                  height: "44vh",
                  boxShadow: "0px 11px 15px -7px grey",
                }}
              >
                <Chart
                  data={dashData}
                  title={dashData.toString}
                  color="black"
                  style={{
                    minWidth: "80vw",
                    maxHeight: "40vh",
                    paddingLeft: "50px",
                  }}
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

            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  minWidth: "43vw",
                  height: "28vw",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingLeft: "2.5vw",
                  paddingRight: "20px",
                  paddingTop: "50px",
                  boxShadow: "0px 11px 15px -7px grey",
                  border: "1px",
                }}
              >
                <EnhancedTable
                  style={{ paddingLeft: "10px" }}
                  vs={theLocation.violations}
                  tr = {theLocation.id}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  minWidth: "40vw",
                  paddingLeft: "4vw",
                  paddingTop: "50px",
                }}
              >
                <Paper
                  variant="outlined"
                  style={{ display: "flex", minWidth: "40vw" }}
                >
                  <Map lat={theLocation.lat} long={theLocation.long} />
                </Paper>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
  async function gettot() {
    var tot = 0;
    for (var k = 0; k < theLocation.violations.length; k++) {
      for (var i in theLocation.violations[i]) {
        tot += 1;
      }
    }
    return tot;
  }
  async function dash() {
    History.push({
      pathname: "/",
    });
  }
}
