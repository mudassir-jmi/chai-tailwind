document.addEventListener("DOMContentLoaded", () => {
    applyChaiStyles();
});

function applyChaiStyles() {
    const elements = document.querySelectorAll('*');
    elements.forEach(el => {
        const classes = Array.from(el.classList);
        classes.forEach(cls => {
            if (cls.startsWith('chai-')) {
                const parts = cls.split('-');
                if (parts[1] === 'p' && parts.length === 3) {
                    el.style.padding = parts[2] + 'px';
                } else if (parts[1] === 'p' && parts[2] === 't' && parts.length === 4) {
                    el.style.paddingTop = parts[3] + 'px';
                } else if (parts[1] === 'p' && parts[2] === 'b' && parts.length === 4) {
                    el.style.paddingBottom = parts[3] + 'px';
                } else if (parts[1] === 'p' && parts[2] === 'l' && parts.length === 4) {
                    el.style.paddingLeft = parts[3] + 'px';
                } else if (parts[1] === 'p' && parts[2] === 'r' && parts.length === 4) {
                    el.style.paddingRight = parts[3] + 'px';
                } else if (parts[1] === 'm' && parts.length === 3) {
                    el.style.margin = parts[2] + 'px';
                } else if (parts[1] === 'm' && parts[2] === 't' && parts.length === 4) {
                    el.style.marginTop = parts[3] + 'px';
                } else if (parts[1] === 'm' && parts[2] === 'b' && parts.length === 4) {
                    el.style.marginBottom = parts[3] + 'px';
                } else if (parts[1] === 'm' && parts[2] === 'l' && parts.length === 4) {
                    el.style.marginLeft = parts[3] + 'px';
                } else if (parts[1] === 'm' && parts[2] === 'r' && parts.length === 4) {
                    el.style.marginRight = parts[3] + 'px';
                } else if (parts[1] === 'bg' && parts.length >= 3) {
                    let color = parts.slice(2).join('-');
                    if (/^[0-9a-fA-F]{6}$/.test(color)) {
                        color = '#' + color;
                    }
                    el.style.backgroundColor = color;
                } else if (parts[1] === 'text') {
                    if (parts.length === 3) {
                        const val = parts[2];
                        if (['left', 'center', 'right', 'justify'].includes(val)) {
                            el.style.textAlign = val;
                        } else {
                            el.style.color = val;
                        }
                    } else if (parts.length > 3) {
                        let color = parts.slice(2).join('-');
                        if (/^[0-9a-fA-F]{6}$/.test(color)) {
                            color = '#' + color;
                        }
                        el.style.color = color;
                    }
                } else if (parts[1] === 'fs' && parts.length === 3) {
                    el.style.fontSize = parts[2] + 'px';
                } else if (parts[1] === 'border' && parts.length === 2) {
                    el.style.border = '1px solid black';
                } else if (parts[1] === 'border' && parts.length === 3) {
                    el.style.borderWidth = parts[2] + 'px';
                } else if (parts[1] === 'radius' && parts.length === 3) {
                    el.style.borderRadius = parts[2] + 'px';
                } else if (parts[1] === 'flex' && parts.length === 2) {
                    el.style.display = 'flex';
                } else if (parts[1] === 'block' && parts.length === 2) {
                    el.style.display = 'block';
                } else if (parts[1] === 'inline' && parts.length === 2) {
                    el.style.display = 'inline';
                } else if (parts[1] === 'w' && parts.length === 3) {
                    el.style.width = parts[2] + 'px';
                } else if (parts[1] === 'h' && parts.length === 3) {
                    el.style.height = parts[2] + 'px';
                } else if (parts[1] === 'justify' && parts[2] === 'center' && parts.length === 3) {
                    el.style.justifyContent = 'center';
                } else if (parts[1] === 'items' && parts[2] === 'center' && parts.length === 3) {
                    el.style.alignItems = 'center';
                } else if (parts[1] === 'flex' && parts[2] === 'col' && parts.length === 3) {
                    el.style.flexDirection = 'column';
                }
                // Remove the class after applying style
                el.classList.remove(cls);
            }
        });
    });
}