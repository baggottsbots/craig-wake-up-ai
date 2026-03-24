tailwind.config = {
      theme: {
        extend: {
          boxShadow: { glow: '0 0 0 1px rgba(255,255,255,.06), 0 20px 80px rgba(99,102,241,.35)' },
          animation: {
            float: 'float 6s ease-in-out infinite',
            pulseSlow: 'pulse 4s ease-in-out infinite',
            'bounce-subtle': 'bounceSubtle 3s ease-in-out infinite'
          },
          keyframes: {
            float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
            bounceSubtle: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-5px)' } }
          }
        }
      }
    }