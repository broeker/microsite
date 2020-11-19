module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      
    },
    typography: {
      default: {
        css: {
          color: '#2D3748',
          'max-width': '100%',
          'h1:first': {
            'margin-bottom': 0,
          },
          a: {
            color: '#ff9900',
            '&:hover': {
              color: '#2c5282',
            },
          },
          // ...
        },
      },
    },
    
  },
  variants: {},
  
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
