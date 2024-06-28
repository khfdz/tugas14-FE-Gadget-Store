/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        pr09: "#0A568E",
        pr08: "#226799",
        pr07: "#3B77A4",
        pr06: "#5388B0",
        pr05: "#6C99BB",
        pr04: "#84AAC6",
        pr03: "#9DBBD2",
        pr02: "#B5CCDD",
        pr01: "#CEDDE8",
        pr00: "#E6EEF4",

        sc09: "#AD144E",
        sc08: "#B62B60",
        sc07: "#BE4371",
        sc06: "#C65A83",
        sc05: "#CE7295",
        sc04: "#D689A6",
        sc03: "#DEA1B8",
        sc02: "#E7B8CA",
        sc01: "#EFD0DC",
        sc00: "#F7E7ED",

        tr09: "#E59500",
        tr08: "#E8A01A",
        tr07: "#EAAA33",
        tr06: "#EDB54D",
        tr05: "#EFBF66",
        tr04: "#F2CA80",
        tr03: "#F5D599",
        tr02: "#F7DFB2",
        tr01: "#FAEACC",
        tr00: "#FCF4E5",
        
        nt09: "#02040F",
        nt08: "#1B1D27",
        nt07: "#35363F",
        nt06: "#4E4F57",
        nt05: "#67686F",
        nt04: "#808187",
        nt03: "#9A9B9F",
        nt02: "#B3B4B7",
        nt01: "#CCCDCF",
        nt00: "#F6F6F6",

        btn1: "#00A3FF",

        colorPrimary1: "#00A3FF",

        ellipse1: "#D9D9D9",
        ellipse2: "#AD144E",
        ellipse3: "#E59500",
        ellipse4: "#0A568E",

        navActive: "#00A3FF",

        colorsHijja1: "#cb9d4e"

    },

    borderRadius: {
      'cusnavbl': '4.6875rem',
      'cusnavbr': '4.6875rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
    },

    fontSize: {
      'sz1': '43.75rem'
    }
  },
  plugins: [],
}
}