'use client'

import { useState } from 'react'
import { auth, provider, signInWithPopup, signInWithEmailAndPassword, signInAnonymously, createUserWithEmailAndPassword } from '../firebase'
import { useRouter } from 'next/navigation'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
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

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      console.log('Sign up successful:', result.user)
      onClose()
      router.push('/for-you')
    } catch (error: any) {
      console.error('Error signing up:', error)
      alert('Failed to sign up: ' + error.message)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal" style={{ display: 'flex' }} onClick={(e) => {
      if (e.target === e.currentTarget) onClose()
    }}>
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>&times;</span>
        <h2 className="modal__title">{isSignUp ? 'Sign up to Summarist' : 'Log in to Summarist'}</h2>
        
        <button className="btn btn--google" onClick={handleGoogleSignIn}>
          <i className="fab fa-google"></i>
          {isSignUp ? 'Sign up with Google' : 'Login with Google'}
        </button>
        
        <button className="btn btn--guest" onClick={handleGuestSignIn}>
          <i className="fas fa-user"></i>
          {isSignUp ? 'Sign up as Guest' : 'Login as Guest'}
        </button>
        
        <div className="modal__separator">
          <span>or</span>
        </div>
        
        <form className="login__form" onSubmit={isSignUp ? handleEmailSignUp : handleEmailSignIn}>
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
          <button type="submit" className="btn btn--login">{isSignUp ? 'Sign up' : 'Login'}</button>
        </form>
        
        <div className="modal__footer">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"} <a href="#" className="modal__link" onClick={(e) => { e.preventDefault(); setIsSignUp(!isSignUp) }}>{isSignUp ? 'Log in' : 'Sign up'}</a>
        </div>
      </div>
    </div>
  )
}
   