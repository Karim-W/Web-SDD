import React,{useEffect,useState} from 'react'
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebar from "./sidebar";
import logo from './Assets/Images/AppLogo.jpg'
import AppLogoBW from './Assets/Images/AppLogoBW.jpg'
import "bootstrap/dist/css/bootstrap.min.css"
import firebase from '../firebase'
import {useAuth} from '../contexts/AuthContext'
import { Card} from 'react-bootstrap'
// import '../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';


function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

const items = [
    { name: 'home', label: 'Dashboard' },
    {
      name: 'loc',
      label: 'Paired Locations',
      items: [
      ],
    },
    {
      name: 'devices',
      label: 'Devices',
      items: [{
        name: 'settings',
        label: 'Settings',}
      ],
    },
    {
        name: 'settings',
        label: 'Settings',
        items: [
        ],
      },
  ]
  

  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];
  

export default function Dashboard() {
    const [fname,setFname] = useState()
    const {currentUser} = useAuth()
    useEffect(() => {
        const DBref = firebase.database().ref().child("users").child(currentUser.uid)
        DBref.on('value',(snapshot)=>{
            var myUser = (snapshot.val())
            var locs = myUser.pairedLocations
            setFname(myUser.First_Name)
            console.log(Object.keys(locs).length)
            console.log(fname)
        })
    }, [])

    console.log("Ayo")
    return (
        <>
        <div class="row">
            <div class="column">
                <div style={{display:"flex",maxWidth:"10vw"}}>
                    <div>
                        <div style={{backgroundColor:"Black",paddingTop:"20px"}}>
                            <img src={AppLogoBW} style={{width:"6vw",paddingBottom:"50px",display:"flex",marginLeft:"auto",marginRight:"auto"}}></img>
                        </div> 
                            <Sidebar items={items}/>
                            <div style={{backgroundColor:"black",height:"100vh"}}> hi
                            </div>
                    </div>
                    
                </div>
                
            </div>
            <div class="column">
                <div style={{display:"flex",marginRight:"auto",backgroundColor:"Black",width:"91.87vw",marginLeft:"0px",height:"100px",textAlign:"center",justifyContent:"center"}}>
                    <div style={{marginTop:"auto",marginBottom:"auto",color:"White",fontFamily:"Segoe UI",fontSize:"38px",fontWeight:"lighter"} }>
                        <h1 onClick="loadInItems()" style={{fontFamily:"Segoe UI",fontSize:"30px",fontWeight:"lighter"}}>Hello, {fname} </h1>
                    </div>
                    
                    
                </div>
                <div style={{padding:"20px"}}>
                <Card  style={{height:"40vh",textAlign:"center",borderRadius:"20px",boxShadow:"5px 10px #AAAAAA"}}>
                        
                    </Card></div>
            </div>
            {/* <div style={{backgroundColor:"Black",width:"1000%"}}>
                hiiiiiiiiiiiiiiiiiiiiiiiiiii
            
            </div> */}
            
        </div>
    

      

      </>
      )
}


