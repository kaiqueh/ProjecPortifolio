/**
 * Design tokens do portfólio.
 *
 * `palette` guarda as cores cruas definidas nas diretrizes visuais.
 * `colors`, `glass` e `glow` expõem os papéis semânticos usados pelos
 * componentes — assim uma troca de paleta acontece em um único lugar.
 */
const palette = {
  // Base / Dark
  black: '#0A0A0A',
  carbonBlack: '#212529',
  gunmetal: '#343A40',
  ironGrey: '#495057',

  // Grayscale
  slateGrey: '#6C757D',
  paleSlate2: '#ADB5BD',
  paleSlate: '#CED4DA',
  alabasterGrey: '#DEE2E6',
  platinum: '#E9ECEF',
  brightSnow: '#F8F9FA',

  // Personality / Accent
  orange: '#F3722C',
  orangeHover: '#FF7A3D',
  orangeDark: '#D95D1F',
} as const;

export const theme = {
  palette,

  colors: {
    bg: palette.black,
    bgElevated: palette.carbonBlack,

    text: palette.brightSnow,
    textSecondary: palette.paleSlate2,
    textTertiary: palette.paleSlate,
    textMuted: palette.slateGrey,
    textSubtle: palette.ironGrey,

    accent: palette.orange,
    accentHover: palette.orangeHover,
    accentDark: palette.orangeDark,
    onAccent: palette.black,

    surface: 'rgba(255, 255, 255, 0.02)',
    surfaceHover: 'rgba(255, 255, 255, 0.05)',

    hairline: 'rgba(255, 255, 255, 0.07)',
    border: 'rgba(255, 255, 255, 0.09)',
    borderStrong: 'rgba(255, 255, 255, 0.14)',

    accentSurface: 'rgba(243, 114, 44, 0.09)',
    accentBorder: 'rgba(243, 114, 44, 0.4)',
  },

  /** Efeito de vidro — usar de forma pontual, nunca em toda a interface. */
  glass: {
    background: 'rgba(233, 236, 239, 0.05)',
    backgroundStrong: 'rgba(233, 236, 239, 0.055)',
    border: 'rgba(255, 255, 255, 0.12)',
    blur: 'blur(18px)',
    blurStrong: 'blur(22px)',
    shadow: '0 24px 70px rgba(0, 0, 0, 0.5)',
  },

  /** Halos difusos que dão profundidade ao fundo escuro. */
  glow: {
    soft: 'rgba(243, 114, 44, 0.2)',
    medium: 'rgba(243, 114, 44, 0.26)',
    strong: 'rgba(243, 114, 44, 0.34)',
    accentShadow: '0 8px 34px rgba(243, 114, 44, 0.3)',
    accentShadowHover: '0 14px 44px rgba(243, 114, 44, 0.45)',
  },

  fonts: {
    display: "'Archivo', system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, monospace",
  },

  /** Escalas fluidas: o mesmo token serve desktop, tablet e mobile. */
  fontSizes: {
    label: '10px',
    caption: '11px',
    small: '12px',
    body: '13px',
    bodyLg: '14px',
    lead: 'clamp(15px, 1.4vw, 17px)',
    statement: 'clamp(18px, 2vw, 24px)',
    cardTitle: 'clamp(18px, 1.9vw, 22px)',
    cardTitleLg: 'clamp(24px, 2.9vw, 34px)',
    navItem: 'clamp(26px, 3.8vw, 44px)',
    heading: 'clamp(20px, 2.4vw, 28px)',
    displaySm: 'clamp(40px, 6.4vw, 74px)',
    display: 'clamp(46px, 7.4vw, 86px)',
    displayLg: 'clamp(44px, 8.2vw, 96px)',
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
  },

  letterSpacings: {
    display: '-0.048em',
    tight: '-0.03em',
    wide: '0.14em',
    wider: '0.18em',
    widest: '0.2em',
  },

  spacing: {
    /** Recuo lateral das páginas: 56px no desktop, 20px no mobile. */
    page: 'clamp(20px, 4.7vw, 56px)',
    /** Respiro vertical entre blocos de conteúdo. */
    section: 'clamp(40px, 5vw, 56px)',
    sectionLg: 'clamp(56px, 7vw, 88px)',
    xs: '6px',
    sm: '10px',
    md: '16px',
    lg: '24px',
    xl: '34px',
    '2xl': '48px',
  },

  radii: {
    sm: '6px',
    md: '10px',
    lg: '14px',
    xl: '16px',
    '2xl': '18px',
    pill: '999px',
    circle: '50%',
  },

  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '834px',
    lg: '1024px',
    xl: '1180px',
  },

  /** Largura máxima do conteúdo, espelhando o artboard de 1180px. */
  layout: {
    maxWidth: '1180px',
    navHeight: '64px',
  },

  transitions: {
    fast: '0.25s ease',
    default: '0.3s ease',
    slow: '0.35s ease',
    spring: '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
  },

  zIndices: {
    base: 1,
    glow: 0,
    nav: 50,
    overlay: 100,
  },
} as const;

export type Theme = typeof theme;

/** Helpers de media query: `${media.md} { ... }` dentro de um styled. */
export const media = {
  xs: `@media (max-width: ${theme.breakpoints.xs})`,
  sm: `@media (max-width: ${theme.breakpoints.sm})`,
  md: `@media (max-width: ${theme.breakpoints.md})`,
  lg: `@media (max-width: ${theme.breakpoints.lg})`,
  xl: `@media (max-width: ${theme.breakpoints.xl})`,
  motionSafe: '@media (prefers-reduced-motion: no-preference)',
} as const;
