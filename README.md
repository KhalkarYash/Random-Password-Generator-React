# Password Generator

A simple password generator built with React that allows users to generate strong passwords based on selected criteria.

## Features

- Generate passwords with customizable options
- Include uppercase, lowercase, numbers, and special characters
- Copy generated password to clipboard
- Adjustable password length (default: 10, max: 20)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/password-generator.git
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
2. Open the app in the browser:
   ```
   http://localhost:3000
   ```
3. Select the desired password criteria and click the **Generate Password** button.
4. Click **Copy** to copy the generated password to the clipboard.

## Project Structure

```
password-generator/
├── src/
│   ├── components/
│   ├── data/
│   │   ├── PassChar.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
├── public/
│   ├── index.html
├── package.json
├── README.md
```

## Dependencies

- React
- Tailwind CSS

## Customization

Modify the `PassChar.js` file inside the `data` directory to customize the character sets used for password generation.

## License

This project is open-source and available under the MIT License.
