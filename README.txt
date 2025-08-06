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


REACT IMPLEMENTATION UPDATES BELOW


---

### Key Improvements
1. **Vite Integration**:
   - Project uses Vite for faster development and build times.
   - Files use `.jsx` extension as per your preference.
   - Configured Vite to run on port 3000 to match your Express setup.

2. **Responsive Design**:
   - **Layout**: Uses Tailwind's `max-w-6xl` container for wide screens, with padding adjustments (`px-4 sm:px-6 lg:px-8`).
   - **Grid**: Results use a responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) for 1 column on mobile, 2 on tablets, 3 on desktops.
   - **Form**: Search form switches from column to row layout on larger screens (`flex-col sm:flex-row`).
   - **Typography**: Scales text sizes (`text-3xl sm:text-4xl`, `text-lg sm:text-xl`) for readability across devices.

3. **Animations with Framer Motion**:
   - **Page Load**: Main content fades in (`opacity: 0` to `1`) with a 0.5s transition.
   - **Search Form**: Slides up and fades in on load (`y: 20` to `0`, `opacity: 0` to `1`).
   - **Results Cards**: Each card slides up with a staggered delay (`delay: index * 0.1`) for a cascading effect.
   - **Button**: Scales on hover (`scale: 1.05`) and tap (`scale: 0.95`) for interactivity.
   - **Error Messages**: Slide up and fade in for smooth appearance.
   - **Loading Spinner**: Uses Tailwind's `animate-spin` for a smooth loading indicator.

4. **Card Styling**:
   - Cards use `bg-white`, `rounded-xl`, `shadow-lg`, and `border-gray-200` for a modern look.
   - Hover effect (`hover:shadow-xl`, `whileHover={{ scale: 1.02 }}`) adds subtle interactivity.
   - Consistent padding (`p-6`) and spacing (`gap-6`) for a clean layout.
   - Text hierarchy with bold titles (`font-semibold`) and muted details (`text-gray-700`).

5. **Loading State**:
   - Added `isLoading` state to show a spinning loader during API calls.
   - Animated with Framer Motion for smooth appearance.

6. **Error Prevention**:
   - Maintained robust error handling and data checks.
   - Used `key={index}` for card mapping to prevent React warnings.
   - Ensured safe API queries with `encodeURIComponent`.
   - Added `finally` blocks to reset `isLoading` state.

7. **Accessibility**:
   - Kept `aria-label` on input.
   - Used semantic HTML and high-contrast colors (`text-gray-800`, `text-red-600`).
   - Ensured animations are smooth but not overwhelming for accessibility.

---

### How to Run
1. Set up the project as described in the README.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Vite server (opens at `http://localhost:3000`).
4. Test the app:
   - Page loads with an animated search form (if API is online).
   - Enter a game name (e.g., "The Witcher 3") and submit.
   - See animated cards appear in a grid or error messages slide in.
   - Observe the loading spinner during API calls.

---

### Expected UI
- **Search Page**:
  - Dark gray heading (`text-4xl sm:text-5xl`) and lighter subheading, centered.
  - Responsive form with a wide input and animated button (scales on hover/tap).
  - Fades in and slides up on load.
- **Results Page**:
  - Heading and message, followed by a grid of cards.
  - Cards animate in with a staggered slide-up effect.
  - Each card has a white background, rounded corners, shadow, and hover scaling.
  - Responsive grid adjusts columns based on screen size.
- **Loading State**:
  - Centered blue spinner with "Loading..." text, fading in smoothly.
- **Error Page**:
  - Red, bold error message (`text-3xl sm:text-4xl`) that slides up.

---

### Potential Enhancements
- **Debouncing**: Add `lodash.debounce` for search input to reduce API calls.
- **Image Support**: If the Nexarda API provides game images, add them to cards.
- **Custom Animations**: Extend Framer Motion with more complex transitions (e.g., card flip).
- **Input Validation**: Add real-time feedback (e.g., `border-red-500` for empty input).
- **Dark Mode**: Add Tailwind's dark mode support (`dark:` classes).

---

### Notes
- **CORS**: If the Nexarda API blocks direct requests, reuse your Express server as a proxy. Update API URLs in `App.jsx` to `http://localhost:3000` and run the Express server alongside Vite.
- **Vite**: Vite's hot module replacement makes development faster than Create React App.
- **Future Reference**: Noted that you prefer Vite and `.jsx` files for React projects. I'll use this setup for any future React-related queries unless specified otherwise.
- **Tailwind Animations**: Custom `fadeIn` and `slideUp` animations are defined in `tailwind.config.js`. You can add more in the `theme.extend.animation` section.

If you need further tweaks (e.g., specific colors, additional animations, or proxy setup), let me know, and I’ll refine the code!