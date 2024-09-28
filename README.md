# ChargeNet – A Collaborative AI Platform for EV Charging Optimization

# Project Overview
ChargeNet is an AI-driven platform for optimizing the placement of EV charging stations based on user feedback, real-time energy demand, and supply balancing. The platform integrates AI algorithms, real-time data, and crowdsourced input to create a dynamic and user-friendly experience.

# Getting Started
Prerequisites
Make sure you have the following software installed:
Node.js (version 14 or higher)
npm or yarn (for managing dependencies)

# Clone the Repository

Copy code
git clone https://github.com/your-username/ChargeNet.git
cd ChargeNet

# Install Dependencies
Run the following command to install all required dependencies:


Copy code
npm install
Alternatively, if you're using yarn:


Copy code
yarn install

# Project Dependencies

# Here’s the list of all dependencies required for the project:

Core Dependencies:
# React (react, react-dom) – UI library for building the frontend.


Copy code
npm install react react-dom
Vite – A fast build tool and dev server.


Copy code
npm install vite
Material-UI (MUI) – For the user interface components.


Copy code
npm install @mui/material @emotion/react @emotion/styled
# Axios – For making HTTP requests (used to fetch EV charging station data).


Copy code
npm install axios
React Router (optional, for navigation and routing)


Copy code
npm install react-router-dom
React-Leaflet and Leaflet – For integrating maps into the UI and showing EV station markers.


Copy code
npm install react-leaflet leaflet
Leaflet CSS – Leaflet CSS file for map styles.


Copy code
npm install leaflet
Optional Dependencies:
React Icons (for icons like search, refresh, etc.)


Copy code
npm install @mui/icons-material
SWC (Speedy Web Compiler) – Integrated with Vite for faster builds.

# ESLint & Prettier (for code linting and formatting)


Copy code
npm install eslint prettier --save-dev
React-Responsive (for handling media queries and responsiveness)


Copy code
npm install react-responsive
Service Worker/PWA Support (optional, for making the app a progressive web app)


Copy code
npm install vite-plugin-pwa
Intel Libraries for AI and Performance Optimizations:
Intel® MKL (for AI performance optimizations)


Copy code
conda install -c intel mkl
Intel® DAAL (for data analytics optimizations)


Copy code
conda install -c intel daal
OpenVINO™ Toolkit (for optimized deep learning inference)

# Environment Variables
Make sure to set up the following environment variables:

NREL API Key (for fetching EV charging stations)
Sign up for an API key from NREL's Developer Network.

Create a .env file in the root of your project and add:

Copy code
REACT_APP_NREL_API_KEY=your-api-key-here
Running the Development Server
After installing the dependencies, run the following command to start the development server:


Copy code
npm run dev
This will open the app in your browser at http://localhost:3000.

# Building the App for Production
To create an optimized production build of the app:


Copy code
npm run build
The built files will be located in the dist/ folder.

# Linting and Formatting
For consistent code style, you can run the linters:


Copy code
npm run lint
To format the code:


Copy code
npm run format

# Features
Map Integration: Display nearby EV charging stations using OpenStreetMap.
Search Functionality: Users can search for specific locations to find EV stations.
Real-time Feedback: Get nearest station based on current location.
Responsive Design: Adapts to both small and large screen sizes.
Contribution
Feel free to fork this repository, submit issues, and make pull requests!

# Dependencies:
react
vite
material-ui/core
react-leaflet
leaflet
axios
react-router-dom
@vitejs/plugin-react-swc
@mui/icons-material
@emotion/react
@emotion/styled

# License
This project is licensed under the MIT License.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

