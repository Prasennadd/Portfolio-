// import { belowdiv } from "/.below.js";
const output = document.getElementById('output');
const a = document.getElementById('f');
const fakeInput = document.getElementById('fake-input');
const imgg = document.getElementById('imgg');
const t = document.getElementById('back');
const style = document.createElement('style');
const below = document.getElementById('below');
const inputLine = document.getElementById('input-line');
const commands = {
help: 'Available commands:\nhelp - show commands\nabout - who I am\nprojects - things I have built\nskills - my technical stack\nexperience - practice and achievements\ncontact - how to reach me\neducation - my degrees\ncertifications - certificates and achievements\nresume.img - view resume\nclear - clear screen',
about: 'Hi, This is Prasenna Raj,\n\nA passionate problem solver, programmer, computer networking enthusiast, and web developer with good knowledge of frontend, backend, and APIs. I enjoy building dynamic web applications, solving DSA problems, exploring computer networking, and learning about endpoint security.\n\n💡 Tip: type "skills" to see my technical stack.\n💡 Tip: type "projects" to view my work.',
hi:"\nHow may I assist you...,\n:), just type help or /help\n...\nDon't type hacker",
hacker:"Yes, that's me \nHow do u know!!",
projects: '\n[1] Maze Finder (Shortest Path Web) | Jul 2024 - Dec 2024\n    Stack: HTML, CSS, JavaScript, Netlify\n    - Compares DFS vs BFS maze solving with animated path traversal\n    \n    Live: https://maze-finder.netlify.app/\n    GitHub: https://github.com/Prasennadd\n\n[2] NoteVault (Secure Notes Web App) | Mar 2026 - Jun 2026\n    Stack: Spring Boot, MySQL, JWT, HTML, CSS, JavaScript\n    - REST APIs to create, edit, rename and delete notes\n    - IP-based account lockout and single active-session enforcement\n    GitHub: https://github.com/Prasennadd/NoteVault\n\n[3] Exe-Sandbox (Malware Behavior Analysis Lab) | May 2025 - Jan 2026\n    Stack: VirtualBox, Kali Linux, Windows 11, Metasploit\n    - Analyzed Windows endpoint vulnerabilities in an isolated lab\n    - Tested untrusted .exe files safely to find security gaps\n    GitHub: https://github.com/Prasennadd/Endpoint-Vulnerability-Analysis',
skills: '\nLanguages : C++, Java, Python, JavaScript\nBackend   : Spring Boot, MySQL, REST APIs, JWT\nTools     : Git, GitHub, Ngrok, Kali Linux, Metasploit, Terminal\nConcepts  : Computer Networking, Endpoint Security, DSA',

experience: '\nFresher - open to internships and entry-level roles.\n\nSelf-initiated work:\n- Built 3 projects (web app, full-stack app, security lab)\n- Solved 130+ LeetCode problems',

contact: '\nEmail    : prasennadraj@gmail.com\nLinkedIn : https://linkedin.com/in/prasenna-raj/\nGitHub   : https://github.com/Prasennadd\nLocation : Chennai, India',
education: '\nB.E. Electronics and Communication Engineering | 2022 - 2026\nSathyabama Institute of Science and Technology, Chennai\n\nHigher Secondary (HSC) | 2021 - 2022\nSFS Matriculation Higher Secondary School, Chengalpattu\n\nSenior Secondary (SSLC) | 2019 - 2020\nSFS Matriculation Higher Secondary School, Chengalpattu',
date: new Date().toString(),
whoami: 'manova_prasenna_raj\nrole: Software Engineer & AI Enthusiast',
pwd: '/home/manova/portfolio',
social: '\nGitHub  : github.com/yourusername\nLinkedIn: linkedin.com/in/yourusername\nEmail   : prasennadraj@gmail.com',
ls: 'resume.img \nJust type resume.img to open the img',
'resume.img':'',
};

const mask = document.getElementById("front");
const hoverTarget = document.getElementById("f");

const speeds = [
    { name: 'SLOW', delay: 150 },
    { name: 'NORMAL', delay: 50 },
    { name: 'FAST', delay: 15 },
    { name: 'SUPER FAST', delay: 1 }
];

let currentSpeed = 1;

const speedControl = document.getElementById('speed-control');
const speedValue = document.getElementById('speed-value');

speedControl.addEventListener('click', () => {
    currentSpeed++;

    if (currentSpeed >= speeds.length) {
        currentSpeed = 0;
    }

    speedValue.textContent = speeds[currentSpeed].name;

    console.log(
        'Speed:',
        speeds[currentSpeed].name,
        'Delay:',
        speeds[currentSpeed].delay
    );
});

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

function checkScrollHint() {
    let hint = document.getElementById('scroll-hint');

    if (output.scrollHeight > output.clientHeight) {
        if (!hint) {
            hint = document.createElement('div');
            hint.id = 'scroll-hint';
            hint.textContent = "💡 Tip: type 'clear' to clear the screen";
            hint.style.color = '#888';
            hint.style.fontStyle = 'italic';
            hint.style.marginTop = '4px';
            hint.style.marginBottom = '4px';
            output.appendChild(hint);
        }
    } else if (hint) {
        hint.remove();
    }

    output.scrollTop = output.scrollHeight;
}
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

fakeInput.addEventListener('input', () => {
  if (fakeInput.innerText.trim() === '') {
    fakeInput.innerHTML = '';
  }
});
document.addEventListener('click', (e) => {
if (!inputLine.contains(e.target)) {
    setBlinking(false);
}
});
const body = document.body;
// -----------------------------terminal output-----------------------------
const use_r='user@site:~$ ';
// o.color='blue';
// console.log(o.color);
let i=0;
if(i==0)
{
  i++;
  appendOutput(use_r);
  appendOutput(`Welcome`);
  appendOutputAnimated(`Hello!, I'm Manova Prasenna Raj, a passionate fresher with a strong interest in problem-solving, programming, and computer networking. I enjoy exploring new technologies, building practical projects, and continuously improving my technical skills. I am always eager to learn, adapt, and take on new challenges in the technology field. \n💡 Tip: type 'help' to see avaiable commands. `);
  
}

fakeInput.focus();
// // ------------------- Command History -------------------
let history = [];
let historyIndex = -1;

fakeInput.addEventListener('keydown', (e) => {
  // ↑ UP ARROW (previous command)
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (history.length > 0 && historyIndex > 0) {
      historyIndex--;
      fakeInput.innerText = history[historyIndex];
    } else if (historyIndex === -1 && history.length > 0) {
      historyIndex = history.length - 1;
      fakeInput.innerText = history[historyIndex];
    }
    return;
  }

  // ↓ DOWN ARROW (next command)
  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (history.length > 0 && historyIndex < history.length - 1) {
      historyIndex++;
      fakeInput.innerText = history[historyIndex];
    } else {
      historyIndex = history.length;
      fakeInput.innerText = "";
    }
    return;
  }

  // ENTER KEY (execute command)
  if (e.key === 'Enter') {
    e.preventDefault();
    currentSpeed = 1;
    speedValue.textContent = speeds[currentSpeed].name;
    const input = fakeInput.innerText.trim();

    // save to history if not empty
    if (input) {
      history.push(input);
      historyIndex = history.length; // reset index
    }

    if (i == 1) {
      output.innerHTML = '';  
      i++;
    }

    appendOutput(use_r);
    appendOutput(`${input}`);
    const firstWord = input.split(" ")[0].toLowerCase();

    if (input.toLowerCase() === 'clear' || input.toLowerCase()==='cls') {
      fakeInput.innerText = '';
      output.innerHTML = '';
      // body.style.overflow='hidden';
    }
    else if (['hi', 'hii', 'hello'].includes(firstWord)) {
      append(`${firstWord},${commands['hi']}`);
      appendOutputAnimated(`${firstWord},${commands['hi']}`);
    }
    else if (['/help', 'help'].includes(input.toLowerCase())) {
      append(commands['help']);
      appendOutputAnimated(commands['help']);
    }
else if (input.toLowerCase() === 'resume.img') {
    const img = document.createElement('img');

    img.src = './files/resume.png?v=' + Date.now();
    img.style.maxWidth = '440px';
    img.style.maxHeight = '700px';
    img.style.borderRadius = '6px';
    img.style.display = 'block';
    img.style.marginTop = '8px';

    output.appendChild(img);

    img.onload = () => {
        output.scrollTop = 0;
    };
}
    else if (commands[input.toLowerCase()]) {
      append(commands[input.toLowerCase()]);
      appendOutputAnimated(commands[input.toLowerCase()]);
    } 
    else {
      appendOutputAnimated(`Command not found: ${input}`);
    }

    // if (['skills','projects','contact','education','certifications'].includes(input.toLowerCase())) {
    //   belowdiv(input);
    // }

    const B = document.createElement('div');
    B.style.marginBottom = '10px';
    output.appendChild(B);
    fakeInput.innerText = ''; // clear after execution
  }
});

function appendOutputAnimated(text) {

    // Progress bar goes in FIRST so it appears above the text
    const progressLine = document.createElement('div');
    const totalBars = 20;
    progressLine.textContent = `[${'-'.repeat(totalBars)}]`;
    output.appendChild(progressLine);

    // Text line goes in SECOND so it appears below the bar
    const line = document.createElement('div');
    output.appendChild(line);

    let i = 0;

    function typeNextCharacter() {

        if (i < text.length) {

            line.innerHTML += text.charAt(i);
            i++;
            if (text.substring(i, i + 5) === "Live:") {

                const live = document.createElement('span');
                live.style.color = "yellow";
                live.textContent = "Live:";
                line.appendChild(live);

                i += 5;

            }

            const filledBars = Math.floor((i / text.length) * totalBars);
            progressLine.textContent =
                `[${'#'.repeat(filledBars).padEnd(totalBars, '-')}]`;

            output.scrollTop = output.scrollHeight;

            setTimeout(typeNextCharacter, speeds[currentSpeed].delay);

        } else {

            progressLine.textContent = `[${'#'.repeat(totalBars)}]`;

            const spacer = document.createElement('div');
            spacer.style.marginBottom = '10px';
            output.appendChild(spacer);

            output.scrollTop = output.scrollHeight;
            checkScrollHint();
        }
    }

    typeNextCharacter();
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
  
  if(text==use_r)
  {
    const line = document.createElement('span');
    line.style.color='blue';
    line.textContent = text;
    line.style.marginBottom = '2px'; // Apply margin here
    output.appendChild(line);
  }
  else{
    const line = document.createElement('span');
    line.style.color='#33ff33';
    line.style.display='inline';
    line.textContent = text;
    line.style.marginBottom = '2px'; // Apply margin here
    output.appendChild(line);
    
  }

  
  
  output.scrollTop = output.scrollHeight;
}
function append(text) {
    const line = document.createElement('div');
    output.appendChild(line);

    const totalBars = 20;
    let filledBars = 0;

    const typingSpeed = speeds[currentSpeed].delay;

    // Match the progress bar duration to the text animation
    const textDuration = text.length * typingSpeed;

    // How often each # should appear
    // const intervalTime = textDuration / totalBars;

    // const interval = setInterval(() => {

    //     const progress = '#'.repeat(filledBars).padEnd(totalBars, '-');

    //     line.textContent = `[${progress}]`;

    //     filledBars++;

    //     if (filledBars > totalBars) {
    //         clearInterval(interval);
    //     }

    // }, intervalTime);
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
