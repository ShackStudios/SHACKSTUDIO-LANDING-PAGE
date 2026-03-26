tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#000000",
                surface: "#F5F5F5",
            },
            fontFamily: {
                "headline": ["Public Sans", "sans-serif"],
                "body": ["Public Sans", "sans-serif"],
                "label": ["JetBrains Mono", "monospace"],
                "mono": ["JetBrains Mono", "monospace"]
            },
            borderRadius: {
                "DEFAULT": "0px",
                "lg": "0px",
                "xl": "0px",
                "full": "9999px"
            },
        },
    },
};
