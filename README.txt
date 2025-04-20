Game Price Finder
A web application that allows users to search for video game information, including titles, availability, prices, platforms, and release dates, using the NEXARDA API. The project features a responsive design with a Ghibli-style background, built with Express, EJS, and CSS.
Features
Search for video games by name using the NEXARDA API.

Display game details including title, availability, game ID, lowest price, platforms, and release date.

Responsive design for mobile, tablet, and desktop devices.

Ghibli-style background with a cyberpunk twist for an immersive visual experience.

User-friendly form with a semi-transparent background for readability.

Prerequisites
Before running the project, ensure you have the following installed:
Node.js (v14 or later recommended)

npm (comes with Node.js)

Setup Instructions
Follow these steps to set up and run the project locally:
Clone the Repository
bash

git clone https://github.com/<your-username>/game-price-finder.git
cd game-price-finder

Install Dependencies
Install the required Node.js packages using npm:
bash

npm install

This will install the following dependencies listed in package.json:
express: Web framework for Node.js

axios: For making HTTP requests to the NEXARDA API

body-parser: To parse form data

ejs: Template engine for rendering dynamic HTML

Add the Background Image
Place your background image in the public/images/ folder.

The default image path in the CSS is public/images/background.jpg. If your image has a different name, update the background-image URL in public/styles/main.css:
css

background-image: url('/images/<your-image-name>.jpg');

Run the Application
Start the server using Node.js:
bash

node index.js

The server will run on http://localhost:3000.

Access the Application
Open your browser and navigate to:

http://localhost:3000

Usage
Check API Status
When you first visit http://localhost:3000, the app checks the NEXARDA API status.

If the API is online, a form will appear to search for a game.

If the API is down, you’ll see a message: "API server is down."

If the API cannot be reached, you’ll see: "Could not reach API."

Search for a Game
Enter the exact name of a video game in the form (e.g., "Destiny").

Click the "Search" button.

If the search is successful, you’ll see a list of results with details like:
Title

Availability

Game ID

Lowest Price

Platforms

Release Date

If no games are found, you’ll see: "No game found or invalid search."

Responsive Design
The website is fully responsive and works on mobile, tablet, and desktop devices.

On smaller screens, the form and search results adjust for better readability and usability.

Project Structure

game-price-finder/
├── public/
│   ├── images/
│   │   └── background.jpg       # Place your background image here
│   └── styles/
│       └── main.css             # CSS styles for the app
├── views/
│   └── index.ejs                # EJS template for rendering the webpage
├── index.js                     # Main Express server file
├── package.json                 # Project metadata and dependencies
└── README.md                    # This file

Dependencies
express: Web framework for Node.js

axios: For making API requests

body-parser: To parse form data

ejs: Template engine for rendering HTML

API
This project uses the NEXARDA API to fetch game data. Specifically:
Status Check: GET https://www.nexarda.com/api/v3/status

Game Search: GET https://www.nexarda.com/api/v3/search?type=games&q=<gameName>

Ensure you have an active internet connection, as the app relies on the NEXARDA API.
Contributing
Contributions are welcome! To contribute:
Fork the repository.

Create a new branch: git checkout -b feature/your-feature-name.

Make your changes and commit: git commit -m "Add your feature".

Push to your branch: git push origin feature/your-feature-name.

Open a pull request on GitHub.

Troubleshooting
Background Image Not Loading:
Ensure the image is in public/images/ and the path in main.css is correct.

Check for 404 errors in the browser’s developer tools (F12 → Network tab).

API Errors:
If you see "Could not reach API" or "API server is down," check your internet connection or the NEXARDA API status.

Text Not Readable:
Adjust the background-color opacity of .formContainer in main.css (e.g., rgba(0, 0, 0, 0.5)).

Modify the text-shadow or color for better contrast.

Not Responsive:
Verify that the viewport meta tag is present in index.ejs.

Check the media queries in main.css for your device’s screen size.

License
This project is licensed under the MIT License. See the LICENSE file for details (you can create this file if needed).
Acknowledgments
Background image inspired by Studio Ghibli.

Built with Express and EJS.

Game data provided by the NEXARDA API.

