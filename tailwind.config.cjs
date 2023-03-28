/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    borderRadius: {
      sm: "0.1875rem",
      md: "0.375rem",
      lg: "0.75rem",
      full: "9999px",
    },
    extend: {
      colors: {
        "fg-default": "#adbac7",
        "fg-muted": "#768390",
        "fg-subtle": "#636e7b",
        "bg-default": "#22272e",
        "bg-inset": "#1c2128",
        "bg-subtle": "#2d333b",
        "border-default": "#444c56",
        "border-contrast": "rgba(205,217,229,0.2)",
        "neutral-muted": "rgba(99,110,123,0.4)",
        "accent-fg": "#539bf5",
        javascript: "#f1e05a",
        typescript: "#3178C6",
        react: "#61DAFB",
        markdown: "#FCB32C",
        web: "#ffffff",
        "data-structures-and-algorithms": "#2F8D46",
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans-serif",
        ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.fg-default"),
            a: {
              color: theme("colors.accent-fg"),
              textDecoration: "none",
              fontWeight: "400",
            },
            "a:hover": {
              textDecoration: "underline",
            },
            strong: {
              color: theme("colors.fg-default"),
            },
            "ol > li::marker": {
              color: theme("colors.fg-default"),
            },
            "ul > li::marker": {
              color: theme("colors.fg-default"),
            },
            hr: {
              borderColor: theme("colors.border-default"),
              borderTopWidth: 4,
            },
            h1: {
              color: theme("colors.fg-default"),
              fontWeight: "600",
            },
            h2: {
              color: theme("colors.fg-default"),
              fontWeight: "600",
            },
            h3: {
              color: theme("colors.fg-default"),
            },
            h4: {
              color: theme("colors.fg-default"),
            },
            blockquote: {
              color: theme("colors.fg-muted"),
              borderLeftColor: theme("colors.border-default"),
            },
            code: {
              color: theme("colors.fg-default"),
              fontWeight: "400",
              padding: "0.2em 0.4em",
              backgroundColor: theme("colors.neutral-muted"),
              borderRadius: theme("borderRadius.md"),
            },
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
            },
            pre: {
              backgroundColor: theme("colors.bg-subtle"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
