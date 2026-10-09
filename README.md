# React Counter App Using useState

A simple and interactive **React Counter Application** developed using **React.js, HTML, CSS, and JavaScript**.

The application allows users to increment, decrement, and reset a counter value. The React `useState` hook is used to manage the counter state and update the displayed value dynamically whenever a button is clicked.

## Features

- Increment the counter value
- Decrement the counter value
- Reset the counter to zero
- Display the current counter value dynamically
- Show different messages based on the counter value
- Responsive design for mobile and desktop screens
- Interactive buttons with hover effects
- Update the UI without reloading the webpage

## Technologies Used

- **React.js** – For building the user interface
- **HTML5** – For application structure
- **CSS3** – For styling and responsive design
- **JavaScript** – For handling application logic
- **React useState Hook** – For state management
- **Vite** – For development and building the application
- **GitHub Pages** – For hosting the application

## Project Structure

```text
react-counter-app/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## How to Run

1. Clone or download this repository.
2. Open the project folder in your code editor.
3. Open the terminal and install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal to use the application.

## Working

The application uses the React `useState` hook to store the current counter value.

- **Increment:** Increases the counter by one.
- **Decrement:** Decreases the counter by one.
- **Reset:** Sets the counter value back to zero.

Whenever a button is clicked, the state is updated using the `setCount()` function, and React automatically re-renders the component to display the latest value.

## Concepts Demonstrated

- React functional components
- State management using `useState`
- Event handling using `onClick`
- State updates using setter functions
- Conditional rendering
- Dynamic user interface updates

## Deployment

The project is hosted using GitHub Pages.

**Live Demo:** Add your deployed GitHub Pages URL here.

## Author

**Vedant Saparia**

## License

This project is created for educational and academic purposes.