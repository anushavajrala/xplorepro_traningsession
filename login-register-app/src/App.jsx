import { useState } from 'react'
import './App.css'

export default function App() {
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(isLogin) alert(`Welcome ${email}`)
    else { alert(`Account created for ${name}`); setIsLogin(true) }
  }

  return (
    <div className="container">
      <div className="card">
        <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && <input placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} required />}
          <input type="email" placeholder="Email Address" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)} required />
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <p className="link-text">
          {isLogin ? "Don't have account? " : "Already have account? "}
          <span onClick={()=>setIsLogin(!isLogin)}>{isLogin ? 'Register' : 'Login'}</span>
        </p>
      </div>
    </div>
  )
}