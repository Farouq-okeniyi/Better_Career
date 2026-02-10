export default {
  theme: {
    extend: {
      keyframes: {
        moveLines: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '1000px 1000px' },
        },
      },
      animation: {
        moveLines: 'moveLines 30s linear infinite',
      },
    },
  },
}