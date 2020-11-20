module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ["_site/**/*.html"],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      DEFAULT: {
        css: {
          color: '#2D3748',
          'max-width': '100%',
          'h1:first': {
            'margin-bottom': 0,
          },
          a: {
            color: 'blue',
            '&:hover': {
              color: '#2c5282',
            },
          },
          // ...
        },
      }, 
    },
    typography: {
      
    },
    
  },
  variants: {},
  
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
