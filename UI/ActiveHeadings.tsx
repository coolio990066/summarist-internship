'use client'

import { useEffect, useState } from 'react'

export default function ActiveHeadings() {
  useEffect(() => {
    const headings = document.querySelectorAll('.statistics__heading')
    let currentIndex = 0

    const interval = setInterval(() => {
      headings[currentIndex]?.classList.remove('active')
      currentIndex = (currentIndex + 1) % headings.length
      headings[currentIndex]?.classList.add('active')
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return null // This component just adds functionality
}
