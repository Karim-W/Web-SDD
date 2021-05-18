import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./modal";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import firebase from "../firebase";

import "./styles/popup.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    var t = {
      name: -1,
      city: -1,
      area: -1,
      lat: -1,
      long: -1,
      url: -1,
    };
    this.state = {
      modal: false,
      name: "",
      modalInputName: "",
      loc: t,
      selectedFile: null,
      fileUploaded: false,
      oldloc: this.props.ll,
    };
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    var type = " ";
    type = this.state.selectedFile.type;
    console.log(this.state.selectedFile.type);
    if (type.includes("image")) {
      console.log("it is");
      this.state.fileUploaded = true;
      var t = this.props.ll.id;
      firebase
        .storage()
        .ref()
        .child("locImgs")
        .child(t)
        .put(this.state.selectedFile)
        .on("state_changed", alert("success"), alert);
      var temp = firebase
        .storage()
        .ref()
        .child("locImgs")
        .child(t)
        .getDownloadURL()
        .then((res) => {
          console.log(res);
          this.state.loc.locImg = res;
        });
      console.log("temp");
      console.log(temp);

    } else {
      this.state.fileUploaded = false;
      console.log("it is not");
      alert("Error! File uploaded is not an image");
      this.state.selectedFile = null;
    }
  };

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    const theDb = firebase
      .database()
      .ref()
      .child("Locations")
      .child(this.props.ll.id);
    if (
      this.state.loc.name != this.props.ll.name &&
      this.state.loc.name != -1
    ) {
      console.log(this.state.loc.name);
      console.log("diffrentname");
      theDb.update({ name: this.state.loc.name });
    }
    if (
      this.state.loc.area != this.state.oldloc.area &&
      this.state.loc.area != -1
    ) {
      theDb.update({ area: this.state.loc.area });
    }
    if (
      this.state.loc.city != this.state.oldloc.city &&
      this.state.loc.city != -1
    ) {
      theDb.update({ city: this.state.loc.city });
    }
    if (
      this.state.loc.long != this.state.oldloc.long &&
      this.state.loc.long != -1
    ) {
      theDb.update({ long: this.state.loc.long });
    }
    if (
      this.state.loc.lat != this.state.oldloc.lat &&
      this.state.loc.lat != -1
    ) {
      theDb.update({ lat: this.state.loc.lat });
    }
    
      if (this.state.fileUploaded
      ) {
        theDb.update({ locImg: this.state.loc.locImg });
      }
    

    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false,
    });
  }

  render() {
    console.log(this.props.ll);

    var imUrl;
    return (
      <div className="App">
        <div>
          <IconButton
            className="modalButt"
            edge="end"
            aria-label="edit"
            onClick={(e) => this.modalOpen(e)}
          >
            <EditIcon />
          </IconButton>
        </div>

        <Modal show={this.state.modal} handleClose={(e) => this.modalClose(e)}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div></div>
            <h2>Edit Location Details</h2>
            <IconButton
              className="modalButt"
              edge="end"
              aria-label="edit"
              onClick={(e) => this.modalClose(e)}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div
            className="form-group"
            style={{ display: "inline", marginRight: "auto" }}
          >
            <label style={{ display: "flex", marginTop: "auto" }}>Name:</label>
            <input
              type="text"
              // value={this.props.ll.name}
              placeholder={this.props.ll.name}
              name="modalInputName"
              onChange={(e) => (this.state.loc.name = e.target.value)}
              className="form-control"
            />
          </div>
          <div
            className="form-group"
            style={{ display: "inline", marginRight: "auto" }}
          >
            <label style={{ display: "flex", marginTop: "auto" }}>Area:</label>
            <input
              type="text"
              // value={this.props.ll.name}
              placeholder={this.props.ll.area}
              name="modalInputName"
              onChange={(e) => (this.state.loc.area = e.target.value)}
              className="form-control"
            />
          </div>
          <div
            className="form-group"
            style={{ display: "inline", marginRight: "auto" }}
          >
            <label style={{ display: "flex", marginTop: "auto" }}>City:</label>
            <input
              type="text"
              // value={this.props.ll.name}
              placeholder={this.props.ll.city}
              name="modalInputName"
              onChange={(e) => (this.state.loc.city = e.target.value)}
              className="form-control"
            />
          </div>
          <div
            className="form-group"
            style={{ display: "inline", marginRight: "auto" }}
          >
            <label style={{ display: "flex", marginTop: "auto" }}>
              Longitude:
            </label>
            <input
              type="text"
              // value={this.props.ll.name}
              placeholder={this.props.ll.long}
              name="modalInputName"
              onChange={(e) => (this.state.loc.long = e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group" style={{ display: "inline" }}>
            <label style={{ display: "flex", marginTop: "auto" }}>
              Latitude:
            </label>
            <input
              type="text"
              // value={this.props.ll.name}
              placeholder={this.props.ll.lat}
              name="modalInputName"
              onChange={(e) => (this.state.loc.lat = e.target.value)}
              className="form-control"
            />
          </div>
          {/* <div
            className="form-group"
            style={{ display: "inline", marginRight: "auto" }}
          >
            <label style={{ display: "flex", marginTop: "auto" }}>
              Image URL:
            </label>
            <input
              type="text"
              // value={this.props.ll.name}
              placeholder={this.props.ll.locImg}
              name="modalInputName"
              onChange={(e) => (this.state.loc.lat = e.target.value)}
              className="form-control"
            />
          </div> */}
          <div
            className="form-group"
            style={{ display: "flex", paddingTop: "20px" }}
          >
            <label style={{ display: "flex", marginTop: "auto" }}>
              Upload Image:
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                textAlign: "right",
                alignSelf: "right",
              }}
            >
              <input type="file" onChange={this.onFileChange} />
              <button className="modalButt" onClick={this.onFileUpload}>
                Upload!
              </button>
            </div>
          </div>

          <div className="form-group">
            <button
              className="modalButt"
              onClick={(e) => this.handleSubmit(e)}
              type="button"
            >
              Submit Changes
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
