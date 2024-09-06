/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      dg: '#191919',
      lg: '#202020',
      tcd: '#686868', // text color dark
      tcl: '#D3D3D3' // text color light
    },
    extend: {
      spacing: {
        '-1/8': '15%'
      },
      backgroundColor: ['hover']
    }
  },
  plugins: []
};
