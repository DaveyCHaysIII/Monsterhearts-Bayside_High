const colors = [
    'blue',
    'red',
    'green',
    'purple',
    'orange',
    'dead'
   ] 

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const box = button.closest('.box')
        const classes= box.classList;
        const colorClass = classes[classes.length - 1];
        let colorIndex = 0;

        //initializes colorIndex from 0
        if (colorClass) {
            console.log('yusss')
            colorIndex = colors.indexOf(colorClass);
            console.log(colorIndex)
        };
    
        //case in which we're already at the end of the array
        if (colorIndex >= colors.length -1) {
            colorIndex = 0;
            box.classList.remove(colors[colors.length-1])
            box.classList.add(colors[colorIndex])
            return;
        };
        //remove current, increment index, add next 
        if (box.classList.contains(colors[colorIndex])) {
            box.classList.remove(colors[colorIndex])
            colorIndex++;
            box.classList.add(colors[colorIndex]);
        } else {
            box.classList.add(colors[colorIndex]);
        }
    });
});
