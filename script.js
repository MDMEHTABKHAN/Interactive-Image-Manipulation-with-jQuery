// Apply global styles
const applyGlobalStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
        body {
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 120vh;
        }
    `;
    document.head.appendChild(style);
};

// Apply styles to elements
const applyStyles = () => {
    // Apply container styles
    const container = document.querySelector('.container');
    if (container) {
        container.style.textAlign = 'center';
        container.style.backgroundColor = '#fff';
        container.style.padding = '10px';
        container.style.borderRadius = '10px';
        container.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.1)';
    }

    // Apply h2 styles
    const h2 = document.querySelector('h2');
    if (h2) {
        h2.style.color = 'rgb(65, 3, 28)';
        h2.style.marginBottom = '10px';
    }

    // Apply button styles
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.margin = '5px';
        button.style.padding = '10px 20px';
        button.style.background = 'linear-gradient(to right, #e6741e, #2ecc71)';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.color = '#fff';
        button.style.cursor = 'pointer';
        button.style.transition = 'background 0.3s ease';

        button.addEventListener('mouseover', () => {
            button.style.background = 'linear-gradient(to right, #2ecc71, #e6741e)';
        });
        button.addEventListener('mouseout', () => {
            button.style.background = 'linear-gradient(to right, #e6741e, #2ecc71)';
        });
    });

    // Apply special button styles
    const specialButton = document.querySelector('.special');
    if (specialButton) {
        specialButton.style.fontSize = '20px';
        specialButton.style.color = 'lightgoldenrodyellow';
    }

    // Apply image-container styles
    const imageContainer = document.querySelector('.image-container');
    if (imageContainer) {
        imageContainer.style.display = 'flex';
        imageContainer.style.justifyContent = 'center';
        imageContainer.style.alignItems = 'center';
        imageContainer.style.marginTop = '20px';
    }

    // Apply #pic styles
    const pic = document.querySelector('#pic');
    if (pic) {
        pic.style.height = '450px';
        pic.style.width = '500px';
        pic.style.borderRadius = '50%';
        pic.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
    }
};

// Call the functions to apply styles
applyGlobalStyles();
applyStyles();
