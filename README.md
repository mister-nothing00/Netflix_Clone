## Netflix Clone Project
Project Overview
This project is a Netflix clone developed with the help of ChatGPT and Blackbox AI. It utilizes The Movie Database (TMDb) API for fetching movie data and features a full user authentication system built with Firebase Authentication. The application is designed to be fully responsive, ensuring a seamless user experience on both desktop and mobile devices. It also includes a movie slider for browsing through different titles.

# Key Features
[Authentication: Users can register and log in using Firebase Authentication. Passwords must be at least 6 characters long for security.
Movie Data: Integration with The Movie Database (TMDb) API for fetching and displaying movies.
Responsive Design: The app is built to be fully responsive, adapting to various screen sizes.
Movie Slider: Users can scroll through movies with an interactive slider.
Backend: Node.js with Express and MongoDB for managing user data and their favorite movies.
State Management: Redux is used on the client-side for state management.
Testing and Debugging: Thunder Client was used for API testing and debugging.]
Technologies Used
Frontend:
React.js
Axios for making HTTP requests
Redux for state management
Chakra UI for component styling
Backend:
Node.js with Express
MongoDB for the database
Authentication:
Firebase Authentication
API Testing:
Thunder Client
Project Structure
Client Side:
React components for user interface
Redux for handling application state
Axios for API requests and data fetching
Backend:
Node.js server with Express
MongoDB for storing user data and favorite movies


Client-side: Firebase configuration.
Server-side: MongoDB connection URI.
Usage
Registration & Login: Users can create an account and log in. Ensure that passwords meet the minimum requirement of 6 characters.
Browsing: Browse movies and use the slider to scroll through them.
Favorites: Users can save movies to their list, which will be stored in MongoDB.
