/**
 * Switch
 */
let color = 'green';
switch (color) {
    case 'red':
        console.log('Red color');
        break;
    case 'yellow':
        console.log('Yellow color');
        break;
    case 'green':
        console.log('Green color');
        break;
    default:
        console.log('Unknown color');
}

/**
 * Grouping cases
 */
let day = 'Monday';
switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log('Weekday');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Weekend');
        break;
    default:
        console.log('Unknown day');
}
