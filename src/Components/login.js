import React,{useRef,useState} from 'react'
import { Form,Button, Alert,Container} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import logo from './Assets/Images/AppLogo.jpg'
import {Link,useHistory} from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passRef = useRef()
    const {SignIn,currentUser}= useAuth()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const History = useHistory()
    if(currentUser!==null){
        History.push("dashboard")
    }

    async function handleSubmit(e){
        
        e.preventDefault()
        try{
        setError('')
        setLoading(true)
        await SignIn(emailRef.current.value,passRef.current.value)
        History.push('/')
        }catch{
            setError('failed to login')
        }
        setLoading(false)
    }

    return (
         <Container className="d-flex align-items-center justify-content-center" style = {{minHeight:"100vh",paddingBottom:"15vh"}} >
             <div>
            <img src={logo} alt="SDD Logo" style={{width:"300px",paddingTop:"5vh",paddingBottom:"auto",display:"flex",justifyContent:"center",marginLeft:"auto",marginRight:"auto"}}></img>
                <h1 className="text-center mb-4"style={{fontFamily:"Segoe UI",fontWeight:"lighter"}}>Sign In</h1>
                  {error && <Alert variant="danger" style={{textAlign:"center"}}>{error}</Alert>}
                  <Form onSubmit={handleSubmit} style={{paddingBottom:"auto"}}>
                      <Form.Group id="email">
                            <Form.Label style={{fontFamily:"Segoe UI"}}>E-mail: </Form.Label>
                            <Form.Control type="email"  ref={emailRef} required/>
                      </Form.Group>
                      <Form.Group id="password">
                            <Form.Label style={{fontFamily:"Segoe UI"}}>Password: </Form.Label>
                            <Form.Control type="password" ref={passRef} required/>
                      </Form.Group>
                      <Button className="w-100" type="submit" disabled={loading} style={{backgroundColor:"#fd8708",border:"0px"}}>Sign in</Button>
                  </Form>
          <div className="w-100 text-center mt-2">
              Not a Registered User? <Link to='/signup'>Create an account </Link> 
          </div> 
        </div>
        </Container>
    )
}
