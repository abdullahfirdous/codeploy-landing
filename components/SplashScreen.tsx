'use client'

import { useState, useEffect } from 'react'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    // Check if user has seen splash screen in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash')
    
    if (hasSeenSplash) {
      setIsVisible(false)
      return
    }

    // Auto hide after 5 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setIsVisible(false)
        sessionStorage.setItem('hasSeenSplash', 'true')
      }, 600) // Wait for fade out animation
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleSkip = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      sessionStorage.setItem('hasSeenSplash', 'true')
    }, 600)
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-600 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleSkip}
      style={{ cursor: 'pointer' }}
    >
      {/* Background - Primary Color */}
      <div className="absolute inset-0 bg-[#F9A619]">
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
       <div className="w-20 h-20 md:w-24 md:h-24 bg-[#212121] rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-[#F9A619] font-display font-bold text-3xl md:text-4xl">CP</span>
            </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-[#212121] animate-fade-in">
            CodePloy
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-[#212121]/80 font-light animate-fade-in-up delay-800">
            Deploy Innovation
          </p>

        <div className="w-48 h-1 bg-[#212121]/20 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-[#212121] rounded-full animate-loading-bar"></div>
          </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes scale-in {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes loading-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
          animation-delay: 0.3s;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-loading-bar {
          animation: loading-bar 4.5s ease-out forwards;
        }

        .delay-800 { animation-delay: 0.8s; }
        .delay-1200 { animation-delay: 1.2s; }
      `}</style>
    </div>
  )
}