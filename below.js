function belowdiv(input) {
    const below = document.getElementById('below');
    
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
}
