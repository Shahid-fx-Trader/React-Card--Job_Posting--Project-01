# ⚛️ React Job Cards — Props Project

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> 🚀 My first React project — Built in just **2 days** of learning React!

---

## 📌 About The Project

A **Job Listing Card UI** built with React where a single reusable `Card` component renders **8 different job listings** dynamically using **Props**.

Instead of writing the same HTML 8 times — I created **ONE component** and passed different data through Props.

> One component. Eight cards. Zero repetition. That's the power of React Props. ⚡

---

## 🖥️ Preview

| Company   | Role               | Salary  | Location         |
| --------- | ------------------ | ------- | ---------------- |
| Amazon    | Frontend Developer | $40/hr  | Mumbai, India    |
| Google    | UI/UX Designer     | $80/hr  | Bangalore, India |
| Meta      | React Developer    | $90/hr  | Hyderabad, India |
| Apple     | iOS Developer      | $85/hr  | Delhi, India     |
| Netflix   | Backend Engineer   | $100/hr | Remote           |
| Microsoft | Software Engineer  | $50/hr  | Noida, India     |
| Tesla     | AI Engineer        | $120/hr | Remote           |
| Adobe     | Product Designer   | $70/hr  | Pune, India      |

---

## 🛠️ Tech Stack

| Technology  | Use                     |
| ----------- | ----------------------- |
| ⚛️ React JS | Component-based UI      |
| ⚡ Vite     | Fast dev build tool     |
| 🎨 CSS3     | Flexbox & Grid layout   |
| 🧩 Props    | Dynamic data passing    |
| 📝 JSX      | HTML inside JavaScript  |
| 💻 VS Code  | Development environment |

---

## ✨ Features

- ✅ Single reusable `Card` component renders all 8 job listings
- ✅ Real company logos — Amazon, Google, Meta, Apple, Netflix, Microsoft, Tesla, Adobe
- ✅ Dynamic data — job title, salary, location, tags passed via **Props**
- ✅ Clean **4-column responsive grid** layout
- ✅ **Save & Apply** buttons on each card
- ✅ Posted date tag on every card

---

## 🚀 How To Run

```bash
# 1. Clone the repository
git clone https://github.com/your-username/react-job-cards.git

# 2. Go into the project folder
cd react-job-cards

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
# Opens at http://localhost:5173
```

---

## 📁 Project Structure

```
card-project/
├── public/
├── src/
│   ├── assets/
│   │   └── component/
│   │       └── Card.jsx       ← Reusable Card component
│   ├── App.jsx                ← All 8 cards rendered here
│   ├── index.css              ← Global styles
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧩 How Props Work Here

```jsx
// Card.jsx — One reusable component
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.logo} alt="" />
      <h3>{props.companyName}</h3>
      <h2>{props.title}</h2>
      <h4>{props.tag1}</h4>
      <h4>{props.tag2}</h4>
      <h3>{props.salary}</h3>
      <p>{props.location}</p>
    </div>
  );
};

// App.jsx — Different data passed each time
<Card companyName="Amazon" title="Frontend Developer" salary="$40/hr" location="Mumbai, India" tag1="Full-Time" tag2="Junior Level" logo={amazonLogo} />
<Card companyName="Google" title="UI/UX Designer" salary="$80/hr" location="Bangalore, India" tag1="Part-Time" tag2="Senior Level" logo={googleLogo} />
```

---

## 📚 What I Learned

- ⚛️ **React Components** — Breaking UI into small, reusable pieces
- 🧩 **Props System** — Passing data from parent to child components
- 📝 **JSX Syntax** — Writing HTML-like code inside JavaScript
- ⚡ **Vite Setup** — Setting up a modern React dev environment
- 🎨 **CSS Grid** — Building responsive multi-column layouts
- 📁 **File Structure** — Organizing a React project properly

---

## 🎓 Credit

Learned from **Sharttak** at [Sheryians Coding School](https://www.youtube.com/@SheryiansCodingSchool) on YouTube.
Amazing teacher — highly recommend for Hindi + English React tutorials! 🙏

---

## 👋 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shahid-khan-trader/)

I'm actively learning React and sharing my journey.
Feel free to give feedback, star the repo ⭐ or just say hi!

---

<p align="center">Built with ❤️ by <strong>Shahid Khan</strong> &nbsp;•&nbsp; Day 2 of React 🚀</p>
<p align="center">#ReactJS #100DaysOfCode #WebDevelopment #JavaScript #Frontend #OpenSource</p>
