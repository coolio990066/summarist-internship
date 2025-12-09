'use client'

import { useState } from 'react'
import { auth, provider, signInWithPopup, signInWithEmailAndPassword, signInAnonymously } from '../firebase'
import { useRouter } from 'next/navigation'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      console.log('Google sign in successful:', result.user)
      onClose()
      router.push('/for-you')
    } catch (error: any) {
      console.error('Error signing in with Google:', error)
      alert('Failed to sign in with Google: ' + error.message)
    }
  }

  const handleGuestSignIn = async () => {
    try {
      const result = await signInAnonymously(auth)
      console.log('Guest sign in successful:', result.user)
      onClose()
      router.push('/for-you')
    } catch (error: any) {
      console.error('Error signing in as guest:', error)
      alert('Failed to sign in as guest: ' + error.message)
    }
  }

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      console.log('Email sign in successful:', result.user)
      onClose()
      router.push('/for-you')
    } catch (error: any) {
      console.error('Error signing in with email:', error)
      alert('Failed to sign in: ' + error.message)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal" style={{ display: 'flex' }} onClick={(e) => {
      if (e.target === e.currentTarget) onClose()
    }}>
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>&times;</span>
        <h2 className="modal__title">Log in to Summarist</h2>
        
        <button className="btn btn--google" onClick={handleGoogleSignIn}>
          <i className="fab fa-google"></i>
          Login with Google
        </button>
        
        <button className="btn btn--guest" onClick={handleGuestSignIn}>
          <i className="fas fa-user"></i>
          Login as Guest
        </button>
        
        <div className="modal__separator">
          <span>or</span>
        </div>
        
        <form className="login__form" onSubmit={handleEmailSignIn}>
          <input 
            type="email" 
            className="login__input" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            className="login__input" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit" className="btn btn--login">Login</button>
        </form>
        
        <div className="modal__footer">
          Don&apos;t have an account? <a href="#" className="modal__link">Sign up</a>
        </div>
      </div>
    </div>
  )
}
   