const output = document.getElementById('output');
const a = document.getElementById('f');
const fakeInput = document.getElementById('fake-input');
const imgg = document.getElementById('imgg');
const t = document.getElementById('back');
const inputLine = document.getElementById('input-line');
const commands = {
help: 'Available commands:\nhelp - show commands\nabout -\nprojects -\nskills -\nexperience -\ncontact -\neducation -\ncertifications -\nclear - clear screen',
about: 'Hi, This is Prasenna Raj,\nA passionate Web Developer,had a good knowledge in Frontend , Backend and API. I enjoy building dynamic web applications , played with DSA and exploring data science.\nType "skills" to see my technical stack \nType "projects" to view my work.',
hi:"\nHow may I assist you...,\n:), just type help or /help\n...\nDon't type hacker",
hacker:"Yes, that's me \nHow do u know!!",
projects: 'Hello, Once again, i had done 4 projects with one embbeded project.\n|Manga reader (Used API call and index searching)\n|Search engine\n|Next word predict(meachine learning based)\n|A on going game project\n|Thristy roots (Which is embedded)',
skills: 'Technical Skills:\nProgramming Languages:\n|Java |C++ |JavaScript \nWeb Technologies:\n|HTML |CSS |React |.NET |REST API ',
experience: 'As an engineer, i am eger to learn and explore. Which is why i seeking for job to satitify my part and grow with them.i had done a 4-5 projects',
contact: 'This is most important part of the site, This is displayed only when u eger to make a touch with me and i will also touch u.\nMy Contact INFO:\nph 91+ 6382025728 \ngmail : prasennadraj@gmail.com\nHence, this is the END, SEE U SOON!!!',
education: 'As common, i had done 12th , 10th and B.E.\n|12th with score of 80% and \n|10th with score of 83%\nBE ECE current CGPA of 8',
certifications: 'hello!! Visitor\nI had done \n|Meachine learning ()through instshall\n|IOT (through NPETL)  ',
date: new Date().toString(),
};

const mask = document.getElementById("front");
const hoverTarget = document.getElementById("f");

let isHovered = false;

document.addEventListener("mousemove", (e) => {
    
    const rect = mask.getBoundingClientRect();
    const size = isHovered ? 200 : 30;

    if(isHovered==true) {
        mask.style.transition='0.3';
        mask.style.background='transparent';
    }
    else{
        // mask.style.background='rgb(54, 187, 239)';
        mask.style.transition='0.3';
    }
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    mask.style.maskPosition = `${x}px ${y}px`;
    mask.style.maskSize = `${size}px`;
    mask.style.transition = 'mask-size 0.1s ease, mask-position 0.1s ease';
});


hoverTarget.addEventListener("mouseenter", () => {
    isHovered = true;
});

hoverTarget.addEventListener("mouseleave", () => {
    isHovered = false;
});
console.log(isHovered);



// Blink control
function setBlinking(active) {
if (active) {
    console.log("true");
    fakeInput.style.opacity= '1';
    inputLine.classList.remove('hover-border');
} else {
    console.log("false");
    fakeInput.style.opacity = '0';
    inputLine.classList.add('hover-border');
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
});
const body = document.body;
// -----------------------------terminal output-----------------------------
fakeInput.focus();
fakeInput.addEventListener('keydown', (e) => {
if (e.key === 'Enter') {
    e.preventDefault();

    const input = fakeInput.innerText.trim();
    appendOutput(`user@site:~$ ${input}`);
    const firstWord = input.split(" ")[0].toLowerCase();
    if (input.toLowerCase() === 'clear') {
    fakeInput.innerText = '';
    output.innerHTML = '';
    body.style.overflow='hidden';
    // imgContainer.innerHTML = '';
    }
    else if(['hi', 'hii', 'hello'].includes(firstWord)){
        append(`${firstWord},${commands['hi']}`);
        appendOutputAnimated(`${firstWord},${commands['hi']}`);
    }
    else if(['/help', 'help'].includes(input.toLowerCase()))
    {
        append(commands['help']);
        appendOutputAnimated(commands['help']);
    }
    else if (commands[input.toLowerCase()]) 
    {
        append(commands[input.toLowerCase()]);
        appendOutputAnimated(commands[input.toLowerCase()]);
        
    } else 
    {
        appendOutputAnimated(`Command not found: ${input}`);
    }
    if(['skills','projects','contact','education','certifications'].includes(input.toLowerCase()))
    {
      
      const below=document.getElementById('below');
    below.style.display = 'block';
    below.style.width = '100%';
    below.style.height = '800px';
    below.style.minHeight = '100px';
    below.style.background = 'blue';
    below.style.position = 'relative';
    below.style.marginTop = '20px';
    body.style.overflowX = 'hidden'; 
    body.style.overflowY = 'auto';
    below.textContent = `This is the ${input} section`;

      // console.log("okk");
    }
    const B=document.createElement('div');
    B.style.marginBottom='10px';
    output.appendChild(B);
    fakeInput.innerText = '';

}
});
function appendOutputAnimated(text) {
    const line = document.createElement('div');
    output.appendChild(line);

    let i = 0;
    const interval = setInterval(() => {
        line.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
        clearInterval(interval);
        const spacer = document.createElement('div');
        spacer.style.marginBottom = '10px';
        output.appendChild(spacer);
        output.scrollTop = output.scrollHeight;
    }
  }, 50);
    output.scrollTop = output.scrollHeight;


  const h1 = document.createElement('h1');
  h1.textContent = text;
  h1.style.fontSize = '3rem';
  h1.style.fontFamily = 'monospace';
}


const g = document.getElementById('g');
t.style.opacity = '0';
t.style.transition = 'opacity 0.5s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out';

imgg.addEventListener("mouseenter", () => {
    t.style.opacity = '1';
    t.style.borderRadius = '40px';
    t.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    g.style.border = 'none';
});

imgg.addEventListener("mouseleave", () => {
    t.style.opacity = '0';
    t.style.boxShadow = '0 0 0 transparent';
    g.style.border = '2px solid white';
});





function appendOutput(text) {
  const line = document.createElement('div');
  
  line.textContent = text;
  line.style.marginBottom = '2px'; // Apply margin here
  output.appendChild(line);
  
  output.scrollTop = output.scrollHeight;
}
function append(text) {
  const line = document.createElement('div');
  output.appendChild(line);

  const totalBars = 20;
  let filledBars = 0;

  // Use same timing as appendOutputAnimated
  const typingSpeed = 50; // same as animated typing
  const textDuration = text.length * typingSpeed; // total time to type text
  const intervalTime = textDuration / totalBars;

  const interval = setInterval(() => {
    const progress = '#'.repeat(filledBars).padEnd(totalBars, '-');
    line.textContent = `[${progress}]`;
    filledBars++;

    if (filledBars > totalBars) {
      clearInterval(interval);
    }
  }, intervalTime);
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

  const containerLeft = terminal.parentElement.getBoundingClientRect().left;
  const newWidth = e.clientX - containerLeft;

  // Set minimum and maximum width to avoid collapse
  if (newWidth > 300 && newWidth < window.innerWidth - 100) {
    terminal.style.width = newWidth + 'px';
  }
});



document.addEventListener('mouseup', () => {
isResizing = false;
document.body.style.cursor = 'default';
});
setBlinking(true); // Initial blinking on page load
