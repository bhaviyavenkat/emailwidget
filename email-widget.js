// email-widget.js

// Create the popup HTML structure dynamically


(function () {
    // Create the email popup button
    const emailButton = document.createElement('button');
    emailButton.innerText = 'Contact via Email';
    emailButton.classList.add('email-popup-btn');

    
    const popupOverlay = document.createElement('div');
    popupOverlay.id = 'email-popup';
    popupOverlay.classList.add('popup-overlay');

   
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popupContent.innerHTML = `
        <button class="close-popup" id="close-popup">&times;</button>
        <h2>Contact Us</h2>
        <form id="email-form">
            <label for="email">Your Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
            <button type="submit">Send Email</button>
        </form>
    `;

    popupOverlay.appendChild(popupContent);

    
    document.body.appendChild(emailButton);
    document.body.appendChild(popupOverlay);

    const styles = `
        .email-popup-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: #007bff;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease;
        }
        .email-popup-btn:hover {
            background-color: green;
        }
        .popup-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            z-index: 1000;
        }
        .popup-content {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            width: 400px;
            max-width: 90%;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            z-index: 1001;
        }
        .popup-content h2 {
            margin-top: 0;
        }
        .popup-content input[type="email"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .popup-content button {
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
        }
        .popup-content button:hover {
            background-color: #218838;
        }
        .close-popup {
            position: absolute;
            top: -36px;
            right: 0px;
            background: #f44336;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 50%;
        }
    `;

    // Create a style element and append styles
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // JavaScript to handle the popup functionality
    emailButton.addEventListener('click', function () {
        popupOverlay.style.display = 'block';
    });

    document.getElementById('close-popup').addEventListener('click', function () {
        popupOverlay.style.display = 'none';
    });

    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });

    document.getElementById('email-form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Email sent successfully!');
        popupOverlay.style.display = 'none';
    });
})();
