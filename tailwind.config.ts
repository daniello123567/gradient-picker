import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes:{
        blink:{
          '0%':{"background-color":'red'},
          '50%':{"background-color":'white'},
          '100%':{"background-color":'red'},
        },
        marque:{
          '0%': { transform: 'translateX(100%)', opacity: '1' },

          '90%': { opacity: '1' },

          '100%': { transform: 'translateX(-90%)', opacity: '0' }
        },

      },
    animation:{
      'error':'blink 2s linear infinite',
      'marque':'marque 10s linear infinite'
    }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(red|orange|pink|rose|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|stone|neutral|zinc|gray|slate)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },{
      pattern: /from-(red|orange|pink|rose|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|stone|neutral|zinc|gray|slate)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    {
      pattern: /via-(red|orange|pink|rose|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|stone|neutral|zinc|gray|slate)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    {
      pattern: /to-(red|orange|pink|rose|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|stone|neutral|zinc|gray|slate)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    {
      pattern: /bg-gradient-to-(t|tt|tr|r|br|b|bl|l|tl)/,
    },
  ],

};
export default config;
