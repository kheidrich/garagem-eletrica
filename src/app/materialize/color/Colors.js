const backgroundColors = [
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'light-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deep-orange',
    'brown',
    'grey',
    'blue-grey',
    'black',
    'white'
];
const textColors = backgroundColors.map(color => `${color}-text`);

export default {
    backgroundColors,
    textColors
}
