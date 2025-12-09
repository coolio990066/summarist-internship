'use client'

import { useState } from 'react'
import LoginModal from './LoginModal'

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <nav className="nav">
        <div className="nav__wrapper">
          <figure className="nav__img--mask">
            <img className="nav__img" src="/assets/logo.png" alt="logo" />
          </figure>
          <ul className="nav__list--wrapper">
            <li className="nav__list nav__list--login" onClick={() => setShowModal(true)}>Login</li>
            <li className="nav__list nav__list--mobile">About</li>
            <li className="nav__list nav__list--mobile">Contact</li>
            <li className="nav__list nav__list--mobile">Help</li>
          </ul>
        </div>
      </nav>
      
      <section id="landing">
        <div className="container">
          <div className="row">
            <div className="landing__wrapper">
              <div className="landing__content">
                <div className="landing__content__title">
                  Gain more knowledge <br className="remove--tablet" />
                  in less time
                </div>
                <div className="landing__content__subtitle">
                  Great summaries for busy people,
                  <br className="remove--tablet" />
                  individuals who barely have time to read,
                  <br className="remove--tablet" />
                  and even people who don&apos;t like to read.
                </div>
                <button className="btn home__cta--btn" onClick={() => setShowModal(true)}>Login</button>
              </div>
              <figure className="landing__image--mask">
                <img src="/assets/landing.png" alt="landing" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <LoginModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
