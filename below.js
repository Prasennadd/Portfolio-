export function belowdiv(input) {

    below.innerText="";
    // Style the below container
    below.style.display = 'flex';
    below.style.justifyContent = 'center';
    below.style.alignItems = 'center';
    below.style.width = '100vw';
    below.style.height = '100vh';
    below.style.background = '#21354dff';
    below.style.position = 'relative';

    // Set body overflow styles
    document.body.style.overflowX = 'hidden'; 
    document.body.style.overflowY = 'auto';

    // Create and style the centered div
    const centerDiv = document.createElement('div');
    centerDiv.textContent = `This is the ${input} section`;
    centerDiv.style.color = 'white';
    centerDiv.style.fontSize = '24px';
    centerDiv.style.fontFamily = 'Arial, sans-serif';
    centerDiv.style.textAlign = 'center';

    // Append the centered div to the "below" container
    below.appendChild(centerDiv);

below.addEventListener("mouseenter", () => {
    style.textContent = `
    body::-webkit-scrollbar-thumb {
        background: transparent;
    }
    `;
    document.head.appendChild(style);
    // console.log("testing");
});

below.addEventListener("mouseleave", () => {
    if (document.head.contains(style)) {
        document.head.removeChild(style);
    }
});
}


/**
 * Display a full-screen section based on input
 * @param {string} input - The section name (Skills, Projects, Experience, Contact, Education, Certifications)
 * @param {HTMLElement} container - The container element to render the section in
 */
// export function belowdiv(input) {
//     // Clear container
//     container.innerText = "";
    
//     // Style the container
//     container.style.display = 'flex';
//     container.style.justifyContent = 'center';
//     container.style.alignItems = 'center';
//     container.style.width = '100vw';
//     container.style.height = '100vh';
//     container.style.background = '#21354dff';
//     container.style.position = 'relative';
//     container.style.overflow = 'hidden';

//     // Set body overflow styles
//     document.body.style.overflowX = 'hidden'; 
//     document.body.style.overflowY = 'auto';

//     // Create decorative background elements
//     const bgElement1 = document.createElement('div');
//     bgElement1.style.position = 'absolute';
//     bgElement1.style.top = '25%';
//     bgElement1.style.left = '25%';
//     bgElement1.style.width = '256px';
//     bgElement1.style.height = '256px';
//     bgElement1.style.borderRadius = '50%';
//     bgElement1.style.background = 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(96, 165, 250, 0) 70%)';
//     bgElement1.style.filter = 'blur(60px)';
//     bgElement1.style.opacity = '0.15';
//     bgElement1.style.pointerEvents = 'none';
//     container.appendChild(bgElement1);

//     const bgElement2 = document.createElement('div');
//     bgElement2.style.position = 'absolute';
//     bgElement2.style.bottom = '25%';
//     bgElement2.style.right = '25%';
//     bgElement2.style.width = '384px';
//     bgElement2.style.height = '384px';
//     bgElement2.style.borderRadius = '50%';
//     bgElement2.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0) 70%)';
//     bgElement2.style.filter = 'blur(60px)';
//     bgElement2.style.opacity = '0.1';
//     bgElement2.style.pointerEvents = 'none';
//     container.appendChild(bgElement2);

//     // Create main content container
//     const contentDiv = document.createElement('div');
//     contentDiv.style.position = 'relative';
//     contentDiv.style.zIndex = '10';
//     contentDiv.style.textAlign = 'center';
//     contentDiv.style.padding = '0 2rem';

//     // Create top divider
//     const topDivider = document.createElement('div');
//     topDivider.style.width = '96px';
//     topDivider.style.height = '1px';
//     topDivider.style.background = 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)';
//     topDivider.style.margin = '0 auto 3rem auto';
//     contentDiv.appendChild(topDivider);

//     // Create heading
//     const heading = document.createElement('h1');
//     heading.textContent = input;
//     heading.style.color = '#ffffff';
//     heading.style.fontSize = 'clamp(32px, 5vw, 48px)';
//     heading.style.fontWeight = 'bold';
//     heading.style.marginBottom = '1rem';
//     heading.style.position = 'relative';
//     heading.style.display = 'inline-block';
//     contentDiv.appendChild(heading);

//     // Create glowing underline
//     const underline = document.createElement('div');
//     underline.style.width = '64px';
//     underline.style.height = '4px';
//     underline.style.borderRadius = '9999px';
//     underline.style.background = 'linear-gradient(90deg, rgba(96, 165, 250, 0.8), rgba(139, 92, 246, 0.8))';
//     underline.style.boxShadow = '0 0 20px rgba(96, 165, 250, 0.6), 0 0 40px rgba(139, 92, 246, 0.4)';
//     underline.style.margin = '1rem auto 0 auto';
//     contentDiv.appendChild(underline);

//     // Create bottom divider
//     const bottomDivider = document.createElement('div');
//     bottomDivider.style.width = '96px';
//     bottomDivider.style.height = '1px';
//     bottomDivider.style.background = 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)';
//     bottomDivider.style.margin = '3rem auto 0 auto';
//     contentDiv.appendChild(bottomDivider);

//     // Create section-specific content
//     const sectionContent = createSectionContent(input);
//     if (sectionContent) {
//         sectionContent.style.marginTop = '4rem';
//         contentDiv.appendChild(sectionContent);
//     }

//     container.appendChild(contentDiv);

//     // Create section indicator
//     const indicator = document.createElement('div');
//     indicator.style.position = 'absolute';
//     indicator.style.bottom = '2rem';
//     indicator.style.right = '2rem';
//     indicator.style.color = 'rgba(255, 255, 255, 0.4)';
//     indicator.style.fontSize = '0.875rem';
//     const sectionIndex = ['Skills', 'Projects', 'Experience', 'Contact', 'Education', 'Certifications'].indexOf(input) + 1;
//     indicator.textContent = `0${sectionIndex}`;
//     container.appendChild(indicator);


// container.addEventListener("mouseenter", () => {
//     style.textContent = `
//     body::-webkit-scrollbar-thumb {
//         background: transparent;
//     }
//     `;
//     document.head.appendChild(style);
//     // console.log("testing");
// });

// container.addEventListener("mouseleave", () => {
//     if (document.head.contains(style)) {
//         document.head.removeChild(style);
//     }
// });
// }


// /**
//  * Create section-specific content
//  * @param {string} section - The section name
//  * @returns {HTMLElement|null} - The content element
//  */
// function createSectionContent(section) {
//     const contentDiv = document.createElement('div');
//     contentDiv.style.color = 'rgba(255, 255, 255, 0.7)';
//     contentDiv.style.maxWidth = '800px';
//     contentDiv.style.margin = '0 auto';

//     switch (section) {
//         case 'Skills':
//             contentDiv.innerHTML = `
//                 <p style="margin-bottom: 1rem;">Proficient in modern web technologies and frameworks</p>
//                 <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center;">
//                     <span style="padding: 0.5rem 1rem; background: rgba(96, 165, 250, 0.2); border: 1px solid rgba(96, 165, 250, 0.3); border-radius: 9999px; font-size: 0.875rem; color: rgba(96, 165, 250, 1);">React</span>
//                     <span style="padding: 0.5rem 1rem; background: rgba(96, 165, 250, 0.2); border: 1px solid rgba(96, 165, 250, 0.3); border-radius: 9999px; font-size: 0.875rem; color: rgba(96, 165, 250, 1);">TypeScript</span>
//                     <span style="padding: 0.5rem 1rem; background: rgba(96, 165, 250, 0.2); border: 1px solid rgba(96, 165, 250, 0.3); border-radius: 9999px; font-size: 0.875rem; color: rgba(96, 165, 250, 1);">Node.js</span>
//                     <span style="padding: 0.5rem 1rem; background: rgba(96, 165, 250, 0.2); border: 1px solid rgba(96, 165, 250, 0.3); border-radius: 9999px; font-size: 0.875rem; color: rgba(96, 165, 250, 1);">Python</span>
//                 </div>
//             `;
//             break;
//         case 'Projects':
//             contentDiv.innerHTML = `
//                 <p style="margin-bottom: 1rem;">Showcasing innovative solutions and creative implementations</p>
//                 <p style="font-size: 0.875rem;">E-Commerce Platform • Task Manager • AI Tools</p>
//             `;
//             break;
//         case 'Experience':
//             contentDiv.innerHTML = `
//                 <p style="margin-bottom: 1rem;">Professional journey in software development</p>
//                 <p style="font-size: 0.875rem;">5+ years of experience building scalable applications</p>
//             `;
//             break;
//         case 'Contact':
//             contentDiv.innerHTML = `
//                 <p style="margin-bottom: 1rem;">Let's connect and collaborate</p>
//                 <p style="font-size: 0.875rem;">contact@portfolio.com • +1 (555) 123-4567</p>
//             `;
//             break;
//         case 'Education':
//             contentDiv.innerHTML = `
//                 <p style="margin-bottom: 1rem;">Academic background and achievements</p>
//                 <p style="font-size: 0.875rem;">Master of Science in Software Engineering</p>
//             `;
//             break;
//         case 'Certifications':
//             contentDiv.innerHTML = `
//                 <p style="margin-bottom: 1rem;">Professional certifications and credentials</p>
//                 <p style="font-size: 0.875rem;">AWS Certified • Google Cloud Professional</p>
//             `;
//             break;
//         default:
//             contentDiv.innerHTML = `<p>This is the ${section} section</p>`;
//     }

//     return contentDiv;
// }

// /**
//  * Initialize the section display system
//  * @param {HTMLInputElement} inputElement - The input element
//  * @param {HTMLElement} displayContainer - The container to display sections
//  * @param {string[]} validSections - Array of valid section names
//  */
// export function initializeSectionDisplay(inputElement, displayContainer, validSections) {
//     // Hide display container initially
//     displayContainer.style.display = 'none';

//     // Handle form submission
//     inputElement.addEventListener('keypress', function(e) {
//         if (e.key === 'Enter') {
//             e.preventDefault();
//             const inputValue = inputElement.value.trim();

//             if (inputValue) {
//                 // Check if input matches valid section (case-insensitive)
//                 const matchedSection = validSections.find(
//                     section => section.toLowerCase() === inputValue.toLowerCase()
//                 );

//                 if (matchedSection) {
//                     // Hide input
//                     inputElement.parentElement.style.display = 'none';
                    
//                     // Show and populate display container
//                     displayContainer.style.display = 'flex';
//                     belowdiv(matchedSection, displayContainer);
                    
//                     // Clear input
//                     inputElement.value = '';
//                 } else {
//                     alert('Invalid command! Please enter one of: ' + validSections.join(', '));
//                 }
//             }
//         }
//     });
// }
