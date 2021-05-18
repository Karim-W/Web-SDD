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
  Form,
} from "react-bootstrap";
import AppLogoBW from "./Assets/Images/AppLogoBW.jpg";
import { useHistory } from "react-router-dom";
// import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
// import Card from '@material-ui/core/Card';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Container from '@material-ui/core/Container';
import Link from "@material-ui/core/Link";
import Amir from "./Assets/Images/Amir.jpg";
import Raza from "./Assets/Images/Raza.png";
import "./styles/abt.css";
import firebase from "../firebase";

export default function V_View(props) {
  const History = useHistory();
  const emailRef = useRef();
  const passRef = useRef();
  const [imgurl, setimg] = useState();
  const isInitialMount = useRef(true);
  const [date, setdate] = useState();
  const [time, settime] = useState();
  //   const

  useEffect(() => {
    if (isInitialMount.current) {
      //   firebase
      //     .auth()
      //     .currentUser.updateProfile({ displayName: "Karim Hassan" });
      var str = props.location.state;
      var items = str.date.split(" ");
      setdate(items[0]);
      settime(items[1]);
      console.log(props.location.locid);
      var Lid = String(props.location.locid);
      const db = firebase
        .database()
        .ref()
        .child("Locations")
        .child(Lid)
        .child("violations")
        .child(items[0])
        .child(items[1]);
      db.once("value").then(function (snap) {
        if (snap.val().photo !== "n/a") {
          setimg(snap.val().photo);
        } else {
          setimg(
            "https://miro.medium.com/freeze/max/690/1*N-reHLcavd8i2CtB1BuFjg.gif"
          );
        }
        isInitialMount.current = false;
      });
    }
  }, [imgurl]);

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
              height: "110vh",
              backgroundColor: "black",
              padding: "0px",
            }}
          >
            <img
              src={AppLogoBW}
              href="/"
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
              <Card.Body onClick={() => History.push("/")} href="">
                Dashboard
              </Card.Body>
              <Card.Body onClick={stats}>Analytics</Card.Body>
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
                  Violation View
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
                    {firebase.auth().currentUser.displayName}
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
                      onClick={() => History.push("/settings")}
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
              <div style={{ display: "inline-block", paddingTop: "10vh" }}>
                <img
                  src={imgurl}
                  style={{
                    maxWidth: "70vw",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <div style={{ fontSize: "20px", paddingTop: "20px" }}>
                  <h4>Date: {date}</h4>
                  <h4>Time: {time}</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );

  async function abt() {
    History.push({
      pathname: "/abt",
      state: { fn: props.location.state.fn, ln: props.location.state.ln },
    });
  }
  async function stats() {
    History.push("/analytics");
  }
}
async function dash() {
  // History.push('/')
}
