module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      animation: {
        'move-left': 'moveLeft 20s linear infinite',        // Left to right movement animation
        'move-right': 'moveRight 20s linear infinite',      // Right to left movement animation
        'zoom-slow': 'zoomSlow 20s infinite ease-in-out',   // Slow zoom effect
        'fade-in-up': 'fadeInUp 1s ease-out both',          // Fade-in with slide-up effect
      },
      keyframes: {
        zoomSlow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },  // Slowly zoom in
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' }, // Start from bottom with no opacity
          '100%': { opacity: 1, transform: 'translateY(0)' },  // Fade in and slide up
        },
        zoomInOut: {
          '0%, 50%': { transform: 'scale(1.3)' },  // Slight zoom-in at the start and mid-way
          '100%': { transform: 'scale(1.5)' },     // Zoom in a bit more at the end
        },
        moveLeft: {
          '0%': { transform: 'translateX(100%)' },  // Start from the right side
          '100%': { transform: 'translateX(-100%)' }, // Move to the left (infinite loop)
        },
        moveRight: {
          '0%': { transform: 'translateX(-100%)' }, // Start from the left side
          '100%': { transform: 'translateX(100%)' }, // Move to the right (infinite loop)
        },
      },
    },
  },
};
