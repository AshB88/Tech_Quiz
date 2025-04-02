# Tech_Quiz

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## **Description**

Tech Quiz is an interactive web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to test their knowledge by taking a quiz of ten random questions. Users can view their score at the end of the quiz and restart the quiz to try again. This project emphasizes the importance of testing by incorporating Cypress for both component and end-to-end tests.

## **Table of Contents**

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Walkthrough](#walkthrough)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)


## **Features**

- Start a quiz with ten random questions.
- Answer multiple-choice questions.
- View the final score upon quiz completion.
- Restart the quiz to try again.
- Fully tested with Cypress for both component and end-to-end functionality.

---

## **Technologies Used**

- **Frontend**: React, TypeScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Testing**: Cypress (Component and End-to-End Testing)

---

## **Installation**

To run the application locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AshB88/Tech_Quiz.git
   cd Tech_Quiz
   ```

2. **Install Dependencies**:

     ```bash
     npm install
     ```

3. **Set Up Environment Variables**:

   - **Server**:
   - Create a `.env` file in the `server` directory with the following variables:
     ```
     # Use the local MongoDB URI for development
     MONGODB_URI='mongodb://127.0.0.1:27017/techquiz'
     ```

4. **Start the Application**:

     ```bash
     npm run start:dev
     ```


5. **Access the Application**:

   - Navigate to the url provided in the terminal.  

---

## **Usage**

1. Click the "Start Quiz" button to begin.
2. Answer the queestions by selecting the number of one of the given options.
3. View your score at the end of the quiz.
4. Restart the quiz by clicking "Take New Quiz".

---

## **Tests**

This project uses Cypress for testing. Both component and end-to-end tests are included. 

**Running Tests From Command Line**

     ```bash
     npm run start:dev
     npm run test
     ```

**Running Tests within cypress**

     ```bash
     npm run start:dev
     npm run cypress
     ```

    - Choose either E2E Testing or Component Testing, then choose your browser.

---

## **Walkthrough**

[Walkthrough link](#)

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Contributing**

Contributions are welcome! If you’d like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **Questions**

If you have any questions or feedback, feel free to reach out:

- **GitHub**: [AshB88](https://github.com/AshB88)
- **Email**: ashleighb.jjd@gmail.com

---

## Acknowledgements

This project was made possible with the help of various resources and contributions. The instructor provided the initial scaffolding code, including predefined test cases, which I implemented as part of the project. Additional assistance was provided by GitHub Copilot. Special thanks to the following:

- **Instructor**: For providing the initial project files and guidance.
- **GitHub Copilot**: For offering code suggestions and improvements throughout the development process.