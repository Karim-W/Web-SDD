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
import firebase from "../firebase";
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

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function About(props) {
  const History = useHistory();
  const emailRef = useRef();
  const passRef = useRef();
  const classes = useStyles();

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
                  About
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
                    {firebase.auth().currentUser.displayName}{" "}
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
            <div style={{ width: "90vw" }}>
              <React.Fragment>
                <CssBaseline />
                <main>
                  <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                      <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                      >
                        About
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                      >
                        This WebApp allows you to manage the places that monitor
                        the social distancing violations made by people. It also
                        allows you to view interesting analytics about the
                        violations data recieved.
                      </Typography>
                      <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                          <Grid item>
                            <Button
                              variant="contained"
                              style={{
                                backgroundColor: "#fd8708",
                                color: "white",
                              }}
                            >
                              Developed by
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    </Container>
                  </div>

                  <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                      <Grid item key={1} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            image={Amir}
                            title="Amir"
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              Amir Mohideen
                            </Typography>
                            <Typography>
                              Computer Engineer - Senior 2 AUS
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item key={2} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            image="./Assets/Images/Karim.jpg"
                            title="Karim"
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              Karim Hassan
                            </Typography>
                            <Typography>
                              Computer Engineer - Senior 1 AUS
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item key={3} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            image={Raza}
                            title="Raza"
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              Syed Raza
                            </Typography>
                            <Typography>
                              Computer Engineer - Senior 1 AUS
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Container>
                </main>
              </React.Fragment>
            </div>
            <div className="Sub">
              <h1 className="Sub" id="sub">
                Implement SDD in Your Store Today
              </h1>
              <Form>
                <Form.Group id="email">
                  <Form.Label style={{ fontFamily: "Segoe UI" }}>
                    E-mail:{" "}
                  </Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label style={{ fontFamily: "Segoe UI" }}>
                    Password:{" "}
                  </Form.Label>
                  <Form.Control type="password" ref={passRef} required />
                </Form.Group>
                <Button
                  className="w-100"
                  type="submit"
                  style={{ backgroundColor: "#fd8708", border: "0px" }}
                >
                  Sign in
                </Button>
              </Form>
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
