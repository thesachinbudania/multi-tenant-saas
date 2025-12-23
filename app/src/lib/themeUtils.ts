export function hexToRgb(hex: string) {
    hex = hex.replace(/^\s*#|\s*$/g, '');
    if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
}

export function rgbToHex(r: number, g: number, b: number) {
    return "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

export function adjustColor(hex: string, percent: number) {
    const { r, g, b } = hexToRgb(hex);
    const step = (val: number) => {
        const adjusted = parseInt((val * (100 + percent) / 100).toString());
        return Math.min(255, Math.max(0, adjusted));
    };
    return rgbToHex(step(r), step(g), step(b));
}

export function getComplementaryColor(hex: string) {
    const { r, g, b } = hexToRgb(hex);
    // Simple inversion or hue rotation could work, but let's do simple inversion to ensure contrast/complement
    // Actually, preserving luminance is better. 
    // Let's do a Hue rotation of 180 degrees.

    // Convert to HSL
    let r1 = r / 255, g1 = g / 255, b1 = b / 255;
    let max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r1: h = (g1 - b1) / d + (g1 < b1 ? 6 : 0); break;
            case g1: h = (b1 - r1) / d + 2; break;
            case b1: h = (r1 - g1) / d + 4; break;
        }
        h /= 6;
    }

    // Rotate Hue 180deg (0.5)
    h = (h + 0.5) % 1;

    // Back to RGB
    let r2, g2, b2;
    if (s === 0) {
        r2 = g2 = b2 = l;
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r2 = hue2rgb(p, q, h + 1 / 3);
        g2 = hue2rgb(p, q, h);
        b2 = hue2rgb(p, q, h - 1 / 3);
    }

    return rgbToHex(Math.round(r2 * 255), Math.round(g2 * 255), Math.round(b2 * 255));
}
