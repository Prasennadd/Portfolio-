const output = document.getElementById('output');
const fakeInput = document.getElementById('fake-input');
const imgContainer = document.getElementById('img');
const inputLine = document.getElementById('input-line');
const commands = {
help: 'Available commands:\nhelp - show commands\nabout - about this site\nprojects - process\nskills - pro\nexperience - pro\ncontact - \neducation - pro\ncertifications - pro\nclear - clear screen',
about: 'pro',
projects: 'pro',
skills: 'pro',
experience: 'pro',
contact: 'pro',
education: 'pro',
certifications: 'pro',
date: new Date().toString(),
};
// Blink control
function setBlinking(active) {
if (active) {
    console.log("true");
    fakeInput.style.opacity= '1';
    inputLine.classList.remove('hover-border');
    // blink.classList.add('blinking');
} else {
    console.log("false");
    fakeInput.style.opacity = '0';
    inputLine.classList.add('hover-border');
    // blink.classList.remove('blinking');
}
}

// Start blinking when inside fake input
fakeInput.addEventListener('focus', () => setBlinking(true));
fakeInput.addEventListener('click', () => setBlinking(true));
inputLine.addEventListener('click', () => setBlinking(true));
// Stop blinking when clicking outside
document.addEventListener('click', (e) => {
if (!inputLine.contains(e.target)) {
    setBlinking(false);
}
// if (fakeInput.style.display === 'none') {
//     setBlinking(true);}
// else if(!fakeInput.contains(e.target)){
//     setBlinking(false);
// }
});

fakeInput.focus();

fakeInput.addEventListener('keydown', (e) => {
if (e.key === 'Enter') {
    e.preventDefault();
    const input = fakeInput.innerText.trim();
    // input.innerHTML.style.margin='2px';
    appendOutput(`user@site:~$ ${input}`);

    if (input === 'clear') {
    output.innerHTML = '';
    imgContainer.innerHTML = '';
    } else if (commands[input]) {
    appendOutput(commands[input]);
    } else {
    appendOutput(`Command not found: ${input}`);
    }
    const B=document.createElement('div');
    B.style.marginBottom='10px';
    output.appendChild(B);
    fakeInput.innerText = '';
}
});

function appendOutput(text) {
  const line = document.createElement('div');
  
  line.textContent = text;
  line.style.marginBottom = '2px'; // Apply margin here
  output.appendChild(line);
  
  output.scrollTop = output.scrollHeight;
}


// Resizer
const terminal = document.getElementById('terminal');
const resizer = document.getElementById('resizer');

let isResizing = false;

resizer.addEventListener('mousedown', () => {
isResizing = true;
document.body.style.cursor = 'ew-resize';
});

document.addEventListener('mousemove', (e) => {
if (!isResizing) return;
const newWidth = e.clientX;
terminal.style.width = newWidth + 'px';
});

document.addEventListener('mouseup', () => {
isResizing = false;
document.body.style.cursor = 'default';
});
setBlinking(true); // Initial blinking on page load
