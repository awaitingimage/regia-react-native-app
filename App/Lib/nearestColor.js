"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A map from the names of standard CSS colors to their hex values.
 */
var STANDARD_COLORS = {
    aqua: "#0ff",
    black: "#000",
    blue: "#00f",
    fuchsia: "#f0f",
    gray: "#808080",
    green: "#008000",
    lime: "#0f0",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    orange: "#ffa500",
    purple: "#800080",
    red: "#f00",
    silver: "#c0c0c0",
    teal: "#008080",
    white: "#fff",
    yellow: "#ff0",
};
var trim = function (str) {
    return str.replace(/^\s+|\s+$/gm, "");
};
var rgbaToHex = function (rgba) {
    var parts = rgba.substring(rgba.indexOf("(")).split(",");
    var r = parseInt(trim(parts[0].substring(1)), 10);
    var g = parseInt(trim(parts[1]), 10);
    var b = parseInt(trim(parts[2]), 10);
    var a = parseFloat(trim(parts[3].substring(0, parts[3].length - 1))).toFixed(2);
    return ("#" + r.toString(16) + g.toString(16) + b.toString(16));
};
exports.rgbaToHex = rgbaToHex;
/**
 * Parses a value between 0-255 from a string.
 *
 * @example
 * parseComponentValue('100');  // => 100
 * parseComponentValue('100%'); // => 255
 * parseComponentValue('50%');  // => 128
 */
function parseComponentValue(text) {
    if (text.charAt(text.length - 1) === "%") {
        return Math.round(parseInt(text, 10) * 255 / 100);
    }
    return Number(text);
}
/**
 * Converts an {@link RGB} color to its hex representation.
 *
 * @example
 * rgbToHex({ r: 255, g: 128, b: 0 }); // => '#ff8000'
 */
function rgbToHex(rgb) {
    return "#" + leadingZero(rgb.r.toString(16)) +
        leadingZero(rgb.g.toString(16)) + leadingZero(rgb.b.toString(16));
}
/**
 * Puts a 0 in front of a numeric string if it's only one digit. Otherwise
 * nothing (just returns the value passed in).
 *
 *
 * @example
 * leadingZero('1');  // => '01'
 * leadingZero('12'); // => '12'
 */
function leadingZero(value) {
    if (value.length === 1) {
        value = "0" + value;
    }
    return value;
}
/**
 * Parses a color from a string.
 *
 * @example
 * parseColorToRGB({ r: 3, g: 22, b: 111 }); // => { r: 3, g: 22, b: 111 }
 * parseColorToRGB('#f00');                  // => { r: 255, g: 0, b: 0 }
 * parseColorToRGB('#04fbc8');               // => { r: 4, g: 251, b: 200 }
 * parseColorToRGB('#FF0');                  // => { r: 255, g: 255, b: 0 }
 * parseColorToRGB('rgb(3, 10, 100)');       // => { r: 3, g: 10, b: 100 }
 * parseColorToRGB('rgb(50%, 0%, 50%)');     // => { r: 128, g: 0, b: 128 }
 * parseColorToRGB('aqua');                  // => { r: 0, g: 255, b: 255 }
 */
function parseColorToRGB(source) {
    var red;
    var green;
    var blue;
    if (typeof source === "object") {
        return source;
    }
    if (source in STANDARD_COLORS) {
        return parseColorToRGB(STANDARD_COLORS[source]);
    }
    var hexMatch = source.match(/^#((?:[0-9a-f]{3}){1,2})$/i);
    if (hexMatch) {
        hexMatch = hexMatch[1];
        if (hexMatch.length === 3) {
            hexMatch = [
                hexMatch.charAt(0) + hexMatch.charAt(0),
                hexMatch.charAt(1) + hexMatch.charAt(1),
                hexMatch.charAt(2) + hexMatch.charAt(2),
            ];
        }
        else {
            hexMatch = [
                hexMatch.substring(0, 2),
                hexMatch.substring(2, 4),
                hexMatch.substring(4, 6),
            ];
        }
        red = parseInt(hexMatch[0], 16);
        green = parseInt(hexMatch[1], 16);
        blue = parseInt(hexMatch[2], 16);
        return { r: red, g: green, b: blue };
    }
    var rgbMatch = source.match(/^rgb\(\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?)\s*\)$/i);
    if (rgbMatch) {
        red = parseComponentValue(rgbMatch[1]);
        green = parseComponentValue(rgbMatch[2]);
        blue = parseComponentValue(rgbMatch[3]);
        return { r: red, g: green, b: blue };
    }
    return null;
}
/**
 * Creates a {@link ColorSpec} from either a string or an {@link RGB}.
 *
 * @example
 * createColorSpec('#800'); // => {
 *   source: '#800',
 *   rgb: { r: 136, g: 0, b: 0 }
 * }
 *
 * createColorSpec('#800', 'maroon'); // => {
 *   name: 'maroon',
 *   source: '#800',
 *   rgb: { r: 136, g: 0, b: 0 }
 * }
 */
function createColorSpec(input, name) {
    var color = {};
    if (name) {
        color.name = name;
    }
    if (typeof input === "string") {
        color.source = input;
        var rgb = parseColorToRGB(input);
        if (rgb == null) {
            return null;
        }
        color.rgb = rgb;
    }
    else if (typeof input === "object") {
        color.rgb = input;
        color.source = rgbToHex(input);
    }
    return color;
}
/**
 * Given either an array or object of colors, returns an array of
 * {@link ColorSpec} objects (with {@link RGB} values).
 *
 * @private
 * @param {Array.<string>|Object} colors An array of hex-based color strings, or
 *     an object mapping color *names* to hex values.
 * @return {Array.<ColorSpec>} An array of {@link ColorSpec} objects
 *     representing the same colors passed in.
 */
function mapColors(colors, name, hexCode) {
    if (name === void 0) { name = "name"; }
    if (hexCode === void 0) { hexCode = "value"; }
    if (colors instanceof Array) {
        return colors.reduce(function (result, color) {
            var newColor = createColorSpec(color[hexCode], color[name]);
            if (newColor !== null) {
                result.push(newColor);
            }
            return result;
        }, []);
    }
    return Object.keys(colors).reduce(function (result, name) {
        var newColor = createColorSpec(colors[name], name);
        if (newColor !== null) {
            result.push(newColor);
        }
        return result;
    }, []);
}
function compare(color1, color2) {
    if (color1.distance < color2.distance)
        return -1;
    if (color1.distance > color2.distance)
        return 1;
    return 0;
}
/**
 * Gets the nearest color, from the given list of {@link ColorSpec} objects
 * (which defaults to {@link nearestColor.DEFAULT_COLORS}).
 *
 * Probably you wouldn't call this method directly. Instead you'd get a custom
 * color matcher by calling {@link nearestColor.from}.
 *
 * @public
 * @param needle Either an {@link RGB} color or a hex-based
 *     string representing one, e.g., '#FF0'
 * @param colors An optional list of available colors
 *     (defaults to {@link DEFAULT_COLORS})
 * @return If the colors in the provided list had names,
 *     then a {@link ColorMatch} object with the name and (hex) value of the
 *     nearest color from the list. Otherwise, simply the hex value.
 *
 * @example
 * nearestColor({ r: 200, g: 50, b: 50 }); // => '#f00'
 * nearestColor('#f11');                   // => '#f00'
 * nearestColor('#f88');                   // => '#f80'
 * nearestColor('#ffe');                   // => '#ff0'
 * nearestColor('#efe');                   // => '#ff0'
 * nearestColor('#abc');                   // => '#808'
 * nearestColor('red');                    // => '#f00'
 * nearestColor('foo');                    // => null
 */
function nearestColor(needle, colors, amount) {
    if (amount === void 0) { amount = 1; }
    var convertedNeedle = parseColorToRGB(needle);
    if (convertedNeedle == null) {
        throw new Error("Provided colour does not compute!");
    }
    var distance;
    var minDistance = Infinity;
    var rgb;
    var value;
    var colorMatchArray = [];
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color = colors_1[_i];
        distance = Math.sqrt(Math.pow(convertedNeedle.r - color.rgb.r, 2) +
            Math.pow(convertedNeedle.g - color.rgb.g, 2) +
            Math.pow(convertedNeedle.b - color.rgb.b, 2));
        colorMatchArray.push({
            name: color.name ? color.name : color.source,
            value: color.source,
            rgb: color.rgb,
            distance: distance,
        });
    }
    colorMatchArray.sort(compare);
    if (amount <= 1) {
        return colorMatchArray[0];
    }
    else {
        return colorMatchArray.slice(0, amount);
    }
}
/**
 * Provides a matcher to find the nearest color based on the provided list of
 * available colors.
 *
 * @public
 * @param {Array.<string>|Object} availableColors An array of hex-based color
 *     strings, or an object mapping color *names* to hex values.
 * @return {function(string):ColorMatch|string} A function with the same
 *     behavior as {@link nearestColor}, but with the list of colors
 *     predefined.
 *
 * @example
 * var colors = {
 *   'maroon': '#800',
 *   'light yellow': { r: 255, g: 255, b: 51 },
 *   'pale blue': '#def'
 * };
 *
 * const CUSTOM_COLORS = [{
    "appletonColourCode": "Bright Yellow 3/4",
    "naturalDye": "Weld",
    "mordent": "Alum",
    "Yarn": "White wool",
    "colourProduced": "Strong",
    "hexCode": "#F7EB34",
  },{
    "appletonColourCode": "Heraldic Gold 4",
    "naturalDye": "Weld",
    "mordent": "Alum",
    "Yarn": "White wool",
    "colourProduced": "Dark",
    "hexCode": "#D1BD3D",
  }];
 *
 * var getColor = nearestColor.from(colors);
 * var getCustomColor = getColor.from(CUSTOM_COLORS);
 *
 * getColor('#f00');
 * // => { name: 'maroon', value: '#800', rgb: { r: 136, g: 0, b: 0 }, distance: 119}
 *
 * getColor('#ff0');
 * // => { name: 'light yellow', value: '#ffff33', rgb: { r: 255, g: 255, b: 51 }, distance: 51}
 *
 * getCustomColor('#fff', 'appletonColourCode', 'hexCode').value; // => '#F7EB34'
 * getCustomColor('#000', 'appletonColourCode', 'hexCode').value; // => '#D1BD3D'
 */
function nearestFrom(availableColors, name, hexCode) {
    if (name === void 0) { name = "name"; }
    if (hexCode === void 0) { hexCode = "value"; }
    var colors = mapColors(availableColors, name, hexCode);
    var nearestColorBase = nearestColor;
    var matcher = function nearestColorFrom(hex, amount) {
        if (amount === void 0) { amount = 1; }
        return nearestColorBase(hex, colors, amount);
    };
    return matcher;
}
exports.nearestFrom = nearestFrom;
