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
                } else if (parts[1] === 'm' && parts.length === 3) {
                    el.style.margin = parts[2] + 'px';
                } else if (parts[1] === 'bg' && parts.length >= 3) {
                    const color = parts.slice(2).join('-');
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
                        el.style.color = parts.slice(2).join('-');
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
                }
                // Remove the class after applying style
                el.classList.remove(cls);
            }
        });
    });
}