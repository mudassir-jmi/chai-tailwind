document.addEventListener("DOMContentLoaded", () => {
    applyChaiStyles();
});

function applyChaiStyles() {

    const elements = document.querySelectorAll("*");

    elements.forEach((el) => {

        const classes = [...el.classList];

        classes.forEach((cls) => {

            if (!cls.startsWith("chai-")) return;

            const utility = cls.replace("chai-", "");
            const parts = utility.split("-");

            /*
            =========================================
            PADDING
            =========================================
            */

            if (parts[0] === "p") {
                el.style.padding = `${parts[1]}px`;
            }

            if (parts[0] === "pt") {
                el.style.paddingTop = `${parts[1]}px`;
            }

            if (parts[0] === "pb") {
                el.style.paddingBottom = `${parts[1]}px`;
            }

            if (parts[0] === "pl") {
                el.style.paddingLeft = `${parts[1]}px`;
            }

            if (parts[0] === "pr") {
                el.style.paddingRight = `${parts[1]}px`;
            }

            /*
            =========================================
            MARGIN
            =========================================
            */

            if (parts[0] === "m") {
                el.style.margin = `${parts[1]}px`;
            }

            if (parts[0] === "mt") {
                el.style.marginTop = `${parts[1]}px`;
            }

            if (parts[0] === "mb") {
                el.style.marginBottom = `${parts[1]}px`;
            }

            if (parts[0] === "ml") {
                el.style.marginLeft = `${parts[1]}px`;
            }

            if (parts[0] === "mr") {
                el.style.marginRight = `${parts[1]}px`;
            }

            if (parts[0] === "mx" && parts[1] === "auto") {
                el.style.marginLeft = "auto";
                el.style.marginRight = "auto";
            }

            /*
            =========================================
            COLORS
            =========================================
            */

            if (parts[0] === "bg") {

                let color = parts.slice(1).join("-");

                if (/^[0-9a-fA-F]{6}$/.test(color)) {
                    color = "#" + color;
                }

                el.style.backgroundColor = color;
            }

            /*
            =========================================
            TEXT
            =========================================
            */

            if (parts[0] === "text") {

                const value = parts.slice(1).join("-");

                const alignments = [
                    "left",
                    "center",
                    "right",
                    "justify"
                ];

                if (alignments.includes(value)) {
                    el.style.textAlign = value;
                } else {

                    let color = value;

                    if (/^[0-9a-fA-F]{6}$/.test(color)) {
                        color = "#" + color;
                    }

                    el.style.color = color;
                }
            }

            /*
            =========================================
            FONT SIZE
            =========================================
            */

            if (parts[0] === "fs") {
                el.style.fontSize = `${parts[1]}px`;
            }

            /*
            =========================================
            FONT WEIGHT
            =========================================
            */

            if (parts[0] === "fw") {
                el.style.fontWeight = parts[1];
            }

            /*
            =========================================
            BORDER
            =========================================
            */

            if (parts[0] === "border") {

                // chai-border
                if (parts.length === 1) {
                    el.style.border = "1px solid black";
                }

                // chai-border-2
                else if (!isNaN(parts[1])) {
                    el.style.borderWidth = `${parts[1]}px`;
                    el.style.borderStyle = "solid";
                }

                // chai-border-gray
                else {
                    let color = parts[1];

                    if (/^[0-9a-fA-F]{6}$/.test(color)) {
                        color = "#" + color;
                    }

                    el.style.border = `1px solid ${color}`;
                }
            }

            /*
            =========================================
            BORDER RADIUS
            =========================================
            */

            if (parts[0] === "radius") {
                el.style.borderRadius = `${parts[1]}px`;
            }

            /*
            =========================================
            DISPLAY
            =========================================
            */

            if (parts[0] === "flex") {
                el.style.display = "flex";
            }

            if (parts[0] === "block") {
                el.style.display = "block";
            }

            if (parts[0] === "inline") {
                el.style.display = "inline";
            }

            /*
            =========================================
            FLEX DIRECTION
            =========================================
            */

            if (parts[0] === "flex" && parts[1] === "col") {
                el.style.flexDirection = "column";
            }

            /*
            =========================================
            JUSTIFY CONTENT
            =========================================
            */

            if (parts[0] === "justify") {
                el.style.justifyContent = parts[1];
            }

            /*
            =========================================
            ALIGN ITEMS
            =========================================
            */

            if (parts[0] === "items") {
                el.style.alignItems = parts[1];
            }

            /*
            =========================================
            GAP
            =========================================
            */

            if (parts[0] === "gap") {
                el.style.gap = `${parts[1]}px`;
            }

            /*
            =========================================
            WIDTH
            =========================================
            */

            if (parts[0] === "w") {
                el.style.width = `${parts[1]}px`;
            }

            /*
            =========================================
            MAX WIDTH
            =========================================
            */

            if (parts[0] === "maxw") {
                el.style.maxWidth = `${parts[1]}px`;
            }

            /*
            =========================================
            HEIGHT
            =========================================
            */

            if (parts[0] === "h") {
                el.style.height = `${parts[1]}px`;
            }

            /*
            =========================================
            CURSOR
            =========================================
            */

            if (parts[0] === "cursor") {
                el.style.cursor = parts[1];
            }

            /*
            =========================================
            TRANSITION
            =========================================
            */

            if (parts[0] === "transition") {
                el.style.transition = "all 0.3s ease";
            }

            /*
            =========================================
            HOVER BACKGROUND
            =========================================
            */

            if (parts[0] === "hoverbg") {

                let hoverColor = parts[1];

                if (/^[0-9a-fA-F]{6}$/.test(hoverColor)) {
                    hoverColor = "#" + hoverColor;
                }

                const originalColor = el.style.backgroundColor;

                el.addEventListener("mouseenter", () => {
                    el.style.backgroundColor = hoverColor;
                });

                el.addEventListener("mouseleave", () => {
                    el.style.backgroundColor = originalColor;
                });
            }

            /*
            =========================================
            REMOVE CLASS
            =========================================
            */

            el.classList.remove(cls);

        });

    });

}

(function () {

    document.addEventListener("DOMContentLoaded", () => {
        applyChaiStyles();
    });

})();