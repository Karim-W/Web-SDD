import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./modaladd";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Add';
import firebase from '../firebase'

import "./styles/popup.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      modalInputName: ""
    };
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    const db = firebase.database().ref().child("Locations")
    console.log(this.props.user.currentUser.uid)
    var me = " "
    var value =" "
    value = this.state.modalInputName
    me = this.props.user.currentUser.uid
    db.child(this.state.modalInputName).once('value').then(function(snap){
        if(snap.val()!==null){
            console.log("exsists ay")
            const fuckthisloudassguy = firebase.database().ref().child("users").child(me).child("pairedLocations").child(value)
            fuckthisloudassguy.set({
                'id':value
            })
        }else{
            console.log("really doesnt")
        }
    })
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false
    });
  }
  


  render() {
    // this.modalOpen() style={{paddingTop:"30px",marginLeft:"auto"}} style={{paddingTop:"30px"}}
    return (
      <div className="App">
        {/* <h1>Hello!! {this.state.name}</h1>
        <a href="javascript:;" onClick={e => this.modalOpen(e)}>
          Open Modal
        </a> */}
        <div>
        <IconButton  edge="end" aria-label="Add">
          <EditIcon onClick={e => this.modalOpen(e)}/>
        </IconButton>
        </div>
        
        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
          <h2>Add location</h2>
          <div className="form-group">
            <label>Enter Location ID:</label>
            <input
              type="text"
              value={this.state.modalInputName}
              name="modalInputName"
              onChange={e => this.handleChange(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button onClick={e => this.handleSubmit(e)} type="button" style={{borderRadius:"20px",backgroundColor:"black",color:"white"}}>
              Submit
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App