import React,{useRef,useState} from 'react'
import { Form,Button, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import logo from './Assets/Images/AppLogo.jpg'
import {Link,useHistory} from 'react-router-dom'

export default function SignUp() {
    const emailRef = useRef()
    const passRef = useRef()
    const confPassRef = useRef()
    const {SignUp} = useAuth()
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const History = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passRef.current.value !== confPassRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await SignUp(emailRef.current.value, passRef.current.value)
          History.push("/")
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }

    return (
        <>
            <img src={logo} alt="SDD Logo" style={{width:"300px",paddingTop:"auto",paddingBottom:"auto",display:"flex",justifyContent:"center",marginLeft:"auto",marginRight:"auto"}}></img>
                <h1 className="text-center mb-4"style={{fontFamily:"Segoe UI",fontWeight:"lighter"}}>Create Account</h1>
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
                      <Form.Group id="password-confirm">
                            <Form.Label style={{fontFamily:"Segoe UI"}}>Confirm Password: </Form.Label>
                            <Form.Control type="password" ref={confPassRef} required/>
                            {/* ref={confPassRef} */}
                      </Form.Group>
                      <Button className="w-100" type="submit" disabled={loading} style={{backgroundColor:"#fd8708",border:"0px"}}>Sign Up</Button>
                  </Form>
          <div className="w-100 text-center mt-2">
              Already registered? <Link to='/login'>Log in</Link>   
          </div> 
        </>
    )
}
