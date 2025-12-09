import { auth, provider, signInWithPopup, signInWithEmailAndPassword, signInAnonymously } from '../firebase.js';

// Get modal elements
const modal = document.getElementById('loginModal');
const loginBtns = document.querySelectorAll('.nav__list--login, .home__cta--btn');
const closeBtn = document.querySelector('.modal__close');
const googleBtn = document.querySelector('.btn--google');
const guestBtn = document.querySelector('.btn--guest');
const loginForm = document.querySelector('.login__form');

// Open modal when any login button is clicked
loginBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});

// Close modal when X is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Google Sign In
googleBtn.addEventListener('click', async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('Google sign in successful:', user);
    modal.style.display = 'none';
    // Redirect to dashboard after successful login
    window.location.href = '/for-you';
  } catch (error) {
    console.error('Error signing in with Google:', error);
    alert('Failed to sign in with Google: ' + error.message);
  }
});

// Guest Sign In
guestBtn.addEventListener('click', async () => {
  try {
    const result = await signInAnonymously(auth);
    const user = result.user;
    console.log('Guest sign in successful:', user);
    modal.style.display = 'none';
    // Redirect to dashboard after successful login
    window.location.href = '/for-you';
  } catch (error) {
    console.error('Error signing in as guest:', error);
    alert('Failed to sign in as guest: ' + error.message);
  }
});

// Email/Password Sign In
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;
  
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    console.log('Email sign in successful:', user);
    modal.style.display = 'none';
    // Redirect to dashboard after successful login
    window.location.href = '/for-you';
  } catch (error) {
    console.error('Error signing in with email:', error);
    alert('Failed to sign in: ' + error.message);
  }
});


