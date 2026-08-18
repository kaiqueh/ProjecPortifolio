export const theme = {
  colors: {
    bg: '#1f242d',
    bgSecondary: '#323946',
    primary: '#7cf03d',
    white: '#fff',
    disabled: '#fff3',
  },
  fonts: {
    primary: "'Poppins', sans-serif",
  },
  fontSizes: {
    xs: '1.4rem',
    sm: '1.6rem',
    md: '2rem',
    lg: '2.2rem',
    xl: '3rem',
    '2xl': '3.5rem',
    '3xl': '4.5rem',
    '4xl': '5.5rem',
  },
  breakpoints: {
    xl: '1200px',
    lg: '992px',
    md: '810px',
    sm: '768px',
    xs: '600px',
    xxs: '450px',
    xxxs: '400px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    xl: '5rem',
  },
  radii: {
    sm: '0.6rem',
    md: '0.8rem',
    lg: '1rem',
    full: '4rem',
    circle: '50%',
  },
  transitions: {
    fast: '0.2s',
    default: '0.5s',
  },
} as const;

export type Theme = typeof theme;
