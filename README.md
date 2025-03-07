# Password Generator

A simple password generator built with React that allows users to generate random passwords with customizable options. The UI includes a background particle effect for an enhanced visual experience.

## Features
- Generate random passwords with customizable length
- Options to include uppercase, lowercase, numbers, and special characters
- Copy generated password to clipboard
- Toast notifications for feedback (password generation & copy success)
- Interactive UI with particle effects

## Technologies Used
- React
- Tailwind CSS
- tsparticles (for background effects)
- react-toastify (for notifications)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/password-generator.git
   ```
2. Navigate to the project directory:
   ```sh
   cd password-generator
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and visit `http://localhost:3000`
3. Customize your password options and generate a strong password!

## Project Structure
```
password-generator/
│── src/
│   ├── components/
│   ├── data/
│   │   ├── PassChar.js  # Character sets for password generation
│   ├── utils/
│   │   ├── useParticles.js  # Particle effect configuration
│   ├── App.js  # Main application file
│   ├── index.js  # Entry point
│── public/
│── package.json
│── README.md
```

## License
This project is open-source and available under the MIT License.

