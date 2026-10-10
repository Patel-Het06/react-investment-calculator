# 💰 React Investment Calculator

A modern and interactive **Investment Calculator** built with React.
Calculate how your investments could grow over time based on your
initial investment, annual contributions, expected annual return, and
investment duration.

## ✨ Features

-   💵 **Initial Investment** --- Enter your starting investment amount.
-   📈 **Annual Investment** --- Set the amount you plan to invest each
    year.
-   🎯 **Expected Return** --- Specify your expected annual rate of
    return.
-   📅 **Investment Duration** --- Choose how many years you want to
    invest.
-   🧮 **Investment Growth Calculation** --- Calculate projected
    investment values year by year.
-   💹 **Interest Tracking** --- View annual interest, total interest
    earned, and total invested amount.
-   🇮🇳 **Indian Currency Formatting** --- Display monetary values in
    Indian Rupees (INR).
-   ⚡ **Dynamic Updates** --- See the results update when you change
    your inputs.
-   🎨 **Custom UI** --- A finance-inspired interface with a dark
    background and emerald-green and gold accents.

## 🛠️ Technologies Used

-   **React** --- Building reusable UI components and managing state.
-   **JavaScript (ES6+)** --- Investment calculations and application
    logic.
-   **CSS3** --- Styling and responsive interface design.
-   **Vite** --- Development server and build tool.
-   **Intl.NumberFormat** --- Formatting monetary values in Indian
    Rupees.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

-   [Node.js](https://nodejs.org/)
-   npm (included with Node.js)
-   Git

### Installation

**1. Clone the repository**

Replace `YOUR-USERNAME` with your GitHub username.

``` bash
git clone https://github.com/YOUR-USERNAME/react-investment-calculator.git
```

**2. Navigate to the project directory**

``` bash
cd react-investment-calculator
```

**3. Install dependencies**

``` bash
npm install
```

**4. Start the development server**

``` bash
npm run dev
```

**5. Open the application**

Open the local URL displayed in your terminal, usually
`http://localhost:5173/`.

## 📂 Project Structure

``` text
react-investment-calculator/
├── public/
├── src/
│   ├── assets/
│   │   └── investment-calculator-logo.png
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Result.jsx
│   │   └── UserInput.jsx
│   ├── util/
│   │   └── investment.js
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

*Note: Adjust this structure if your actual project folders or filenames
differ.*

## 🧠 React Concepts Practiced

-   Functional components and reusable UI.
-   JSX and component composition.
-   Props and passing data between components.
-   `useState` for managing user input.
-   Event handling with `onChange`.
-   Conditional rendering and input validation.
-   Rendering lists with `.map()` and using unique keys.
-   JavaScript functions and object destructuring.
-   Currency formatting with the browser's `Intl` API.

## 📊 How It Works

1.  Enter your initial investment.
2.  Enter your planned annual investment.
3.  Set your expected annual return percentage.
4.  Choose your investment duration in years.
5.  Review the yearly investment projections, including investment
    value, annual interest, total interest, and total invested amount.

**Note:** These are illustrative projections, not guaranteed returns.
Actual investment performance may differ, and the calculation does not
account for taxes, fees, or market fluctuations.

## 🎯 Project Goal

This project was built as part of my journey to learn React from the
ground up. It focuses on applying React fundamentals to a practical
application with interactive inputs, calculated results, reusable
components, and custom styling.

## 👨‍💻 Author

**Your Name**

-   GitHub: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)

------------------------------------------------------------------------

⭐ If you find this project useful, consider giving the repository a
star!

**Built with ❤️ using React and JavaScript.**
