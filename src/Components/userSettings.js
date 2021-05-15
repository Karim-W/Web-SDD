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
import TextField from "@material-ui/core/TextField";
import "./styles/abt.css";
import firebase from "../firebase";
import { Autocomplete } from "@react-google-maps/api";

export default function Settings(props) {
  const History = useHistory();
  const isInitialMount = useRef(true);
  const [userdetails, setUser] = useState();
  const [loaded, setLoad] = useState(false);
  const [edit, setEdit] = useState(true);
  const [ButtText, setButtText] = useState("Edit");
  var trackChanges = [false, false, false, false];
  var fname;
  var lname;
  var email;
  var phone;
  useEffect(() => {
    if (isInitialMount.current) {
      const db = firebase
        .database()
        .ref()
        .child("users")
        .child(firebase.auth().currentUser.uid.toString());
      db.once("value").then((snap) => {
        console.log(snap.val());
        setUser(snap.val());
        fname = snap.val().First_Name;
        lname = snap.val().Last_Name;
        email = snap.val().Email;
        phone = snap.val().phone;
        setLoad(true);
        isInitialMount.current = false;
      });
    }
  }, [userdetails]);

  function handleEdit() {
    setEdit(!edit);
    if (edit) {
      setButtText("Save");
    } else {
      setButtText("Edit");
      const DB = firebase
        .database()
        .ref()
        .child("users")
        .child(firebase.auth().currentUser.uid);
      if (trackChanges[0]) {
        DB.update({ First_Name: fname });
        firebase.auth().currentUser.updateProfile({
          displayName: fname + " " + userdetails.Last_Name,
        });
      }
      if (trackChanges[1]) {
        DB.update({ Last_Name: lname });
        firebase.auth().currentUser.updateProfile({
          displayName: userdetails.Last_Name + " " + lname,
        });
      }
      if (trackChanges[2]) {
        DB.update({ Email: email });
      }
      if (trackChanges[3]) {
        DB.update({ Phone: phone });
      }
      trackChanges = [false, false, false, false];
    }
  }
  function handlenewfname(event) {
    var t = { value: event.target.value };
    fname = t.value;
    trackChanges[0] = true;
  }
  function handlenewlname(event) {
    var t = { value: event.target.value };
    lname = t.value;
    trackChanges[1] = true;
  }
  function handlenewEmail(event) {
    var t = { value: event.target.value };
    email = t.value;
    trackChanges[2] = true;
  }
  function handlenewPhone(event) {
    var t = { value: event.target.value };
    phone = t.value;
    trackChanges[2] = true;
  }
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
                  User Settings
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
                      href="#/action-2"
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div
                style={{
                  display: "flex",
                  paddingTop: "10px",
                  paddingRight: "5vw",
                }}
              >
                <button
                  onClick={() => handleEdit()}
                  style={{
                    marginLeft: "auto",
                    width: "50px",
                    borderRadius: "25px",
                    marginTop: "auto",
                    marginBottom: "auto",
                    backgroundColor: "#fd8708",
                    border: "2",
                    borderColor: "orange",
                  }}
                >
                  {ButtText}
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: "20px",
                  width: "90vw",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    marginRight: "auto",
                    paddingLeft: "10px",
                    width: "90vw",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      width: "90vw",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        paddingLeft: "0px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        backgroundColor: "#fd8708",
                        width: "15vw",
                        height: "15vw",
                        borderRadius: "7.5vw",
                        textAlign: "center",
                        verticalAlign: "bottom",
                        border: "10px",
                      }}
                    >
                      <img
                        src={firebase.auth().currentUser.photoURL}
                        style={{
                          width: "15vw",
                          height: "15vw",
                          borderRadius: "7.5vw",
                        }}
                      ></img>
                    </div>
                    <div style={{ paddingLeft: "20vw" }}>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-block",
                            textAlign: "left",
                            width: "20vw",
                            lineHeight: "2",
                            paddingTop: "1.3vw",
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "Segoe UI",
                              fontSize: "18px",
                              marginTop: "auto",
                              lineHeight: "2.1",
                            }}
                          >
                            First Name:
                          </h3>
                          <h3
                            style={{
                              fontFamily: "Segoe UI",
                              fontSize: "18px",
                              marginTop: "auto",
                              lineHeight: "2.1",
                            }}
                          >
                            Last Name:
                          </h3>
                          <h3
                            style={{
                              fontFamily: "Segoe UI",
                              fontSize: "18px",
                              marginTop: "auto",
                              lineHeight: "2.1",
                            }}
                          >
                            Email:
                          </h3>
                          <h3
                            style={{
                              fontFamily: "Segoe UI",
                              fontSize: "18px",
                              marginTop: "auto",
                              lineHeight: "2.1",
                            }}
                          >
                            Phone Number:
                          </h3>
                        </div>
                        <div
                          style={{ display: "inline-block", textAlign: "left" }}
                        >
                          <TextField
                            id="standard-secondary"
                            label=" "
                            color="secondary"
                            disabled={edit}
                            placeholder={loaded ? userdetails.First_Name : ""}
                            defaultValue={loaded ? userdetails.First_Name : ""}
                            onChange={handlenewfname}
                            style={{ width: "30vw" }}
                          />
                          <TextField
                            id="standard-secondary"
                            label=" "
                            color="secondary"
                            disabled={edit}
                            placeholder={loaded ? userdetails.Last_Name : ""}
                            defaultValue={loaded ? userdetails.Last_Name : ""}
                            style={{ width: "30vw" }}
                            onChange={handlenewlname}
                          />
                          <TextField
                            id="standard-secondary"
                            label=" "
                            color="secondary"
                            disabled={edit}
                            placeholder={loaded ? userdetails.Email : ""}
                            defaultValue={loaded ? userdetails.Email : ""}
                            style={{ width: "30vw" }}
                            onChange={handlenewEmail}
                          />
                          <TextField
                            id="standard-secondary"
                            label=" "
                            color="secondary"
                            disabled={edit}
                            placeholder={loaded ? userdetails.Phone : ""}
                            defaultValue={loaded ? userdetails.Phone : ""}
                            style={{ width: "30vw" }}
                            onChange={handlenewPhone}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
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
