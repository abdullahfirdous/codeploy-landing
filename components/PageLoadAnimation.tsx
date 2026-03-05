'use client'

import { useState, useEffect } from 'react'

export default function PageLoadAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Short delay for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#212121] transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Center Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-fade-scale">
          {/* Logo */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F9A619] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#F9A619]/50">
            <span className="text-[#212121] font-display font-bold text-2xl md:text-3xl">CP</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-scale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-scale {
          animation: fade-scale 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}