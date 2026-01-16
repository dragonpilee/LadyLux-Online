# LadyLux Online

![React](https://img.shields.io/badge/Frontend-React-blue)
![Express](https://img.shields.io/badge/Backend-Express.js-lightgrey)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue)
![React Router](https://img.shields.io/badge/Router-React%20Router-red)
![dotenv](https://img.shields.io/badge/Env-dotenv-9cf)
![UUID](https://img.shields.io/badge/ID-UUID-yellow)
![CORS](https://img.shields.io/badge/API%20Access-CORS-brightgreen)
![Testing](https://img.shields.io/badge/Testing-Jest%20%26%20RTL-red)
![Performance](https://img.shields.io/badge/Monitoring-Web%20Vitals-purple)

LadyLux Online is a premier online destination for women's luxury clothing. Discover the latest trends and timeless classics from top designers in the fashion industry. This repository contains the source code for the LadyLux Online web application.

> **Developed by Alan Cyril Sunny**  
> If you like this project, please ⭐ the repo on GitHub — your support means a lot!

## Features

- **Extensive Collection**: Explore a curated collection of women's luxury clothing, including dresses, tops, bottoms, outerwear, and accessories.
- **User Authentication**: Enjoy a personalized shopping experience with secure user authentication.
- **Responsive Design**: Seamlessly browse and shop on any device with our responsive web design.

## Technologies Used

- **React**: Frontend library for building dynamic user interfaces.
- **Express**: Web application framework for Node.js, providing robust backend support.
- **MySQL**: Reliable relational database management system for storing product and user data.
- **React Router**: Declarative routing for creating dynamic, single-page applications.
- **dotenv**: Module for loading environment variables from a `.env` file, ensuring secure configuration.
- **UUID**: Library for generating unique identifiers to track orders and user sessions.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing, facilitating seamless API communication.
- **Testing Libraries**: Jest, React Testing Library, and user-event for comprehensive component testing.
- **Web Vitals**: Tool for monitoring and optimizing real user metrics to enhance web performance.

## Deployment

### 🐳 Docker (Recommended)

LadyLux Online is fully containerized for easy deployment.

1.  **Build and Run**:
    ```bash
    docker-compose up --build -d
    ```
2.  **Access**: Open your browser and visit `http://localhost`.

### 🚀 Netlify

The project is configured for seamless deployment on Netlify.

1.  **Connect Repository**: Connect your GitHub repository to Netlify.
2.  **Build Settings**:
    - **Build Command**: `npm run build`
    - **Publish Directory**: `build`
3.  **Automatic Deployment**: Netlify will automatically detect the `netlify.toml` and handle SPA routing.

## Local Development

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start Development Server**:
    ```bash
    npm start
    ```
3.  **Access**: Visit `http://localhost:3000`.

## Technologies Used

- **React 18**: Modern UI development.
- **React Router 6**: Robust SPA routing with URL parameters.
- **Docker**: Containerization for consistent environments.
- **Nginx**: High-performance production web serving.
- **Netlify**: Optimized static hosting.

## Contributing

We welcome contributions! Please fork the repo and create a pull request.

## License

LadyLux Online is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
