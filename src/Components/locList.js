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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Popup from "./popupadd";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ConfirmDialog from "./confirm";
import firebase from "../firebase";

export default function LocList(props) {
  var Locations = [];
  const History = useHistory();
  const L = props.location.state.some;
  const { currentUser } = useAuth();

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
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        padding: "0px",
      }}
    />
  );

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
              height: "100vh",
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
                  Locations
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
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: "0%",
                paddingRight: "0%",
                paddingTop: "20px",
                minWidth: "80vw",
                fontFamily: "Segoe UI",
                fontWeight: "lighter",
              }}
            >
              <Grid item xs={12} md={6} style={{ minWidth: "90vw" }}>
                <div style={{ display: "flex" }}>
                  <Typography
                    variant="h6"
                    style={{
                      paddingLeft: "20px",
                      fontFamily: "Segoe UI",
                      fontWeight: "lighter",
                    }}
                  >
                    Locations List
                  </Typography>
                  <div
                    style={{
                      marginLeft: "auto",
                      paddingTop: "10px",
                      paddingRight: "20px",
                    }}
                  >
                    <Popup user={{ currentUser }} />
                  </div>
                </div>
                <div>
                  <List>
                    {Locations.map((value) => (
                      <ListItem key={value.id}>
                        <ListItemAvatar>
                          <Avatar style={{ width: "60px", height: "60px" }}>
                            <img
                              src={value.locImg}
                              style={{ width: "100px" }}
                            />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          onClick={() => loc(value)}
                          primary={value.name}
                          secondary={
                            <p>
                              Violations: {value.activeViolations}, Last
                              updated: {value.LastUpdated}, Area: {value.area},
                              City: {value.city}
                            </p>
                          }
                          style={{ width: "60px", paddingLeft: "20px" }}
                        />

                        <ListItemSecondaryAction>
                          <IconButton
                            onClick={() => delet(value.id)}
                            edge="end"
                            aria-label="delete"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </div>
              </Grid>
            </div>
            <div>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
              <ConfirmDialog
                title="Delete Post?"
                // open={}
                setOpen={false}
                // onConfirm={}
              >
                Are you sure you want to delete this post?
              </ConfirmDialog>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
  async function delet(Lid) {
    var id = String(currentUser.uid);
    const db = firebase
      .database()
      .ref()
      .child("users")
      .child(id)
      .child("pairedLocations");
    console.log(currentUser);
    db.child(Lid).remove();
  }
  async function loc(v) {
    History.push({
      pathname: "/manageloc",
      state: {
        fn: props.location.state.fn,
        ln: props.location.state.ln,
        some: v,
      },
    });
  }
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
  History.push({
    pathname: "/",
  });
}
