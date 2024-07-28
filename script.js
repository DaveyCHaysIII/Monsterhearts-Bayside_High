const colors = [
    'blue',
    'red',
    'green',
    'purple',
    'orange',
    'dead'
   ] 
let colorIndex = 0;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const box = button.closest('.box')
        if (colorIndex >= colors.length -1) {
            colorIndex = 0;
            box.classList.remove(colors[colors.length-1])
            box.classList.add(colors[colorIndex])
            return;
        }
        if (box.classList.contains(colors[colorIndex])) {
            box.classList.remove(colors[colorIndex])
            colorIndex++;
            box.classList.add(colors[colorIndex]);
        } else {
            box.classList.add(colors[colorIndex]);
        }
    });
});
