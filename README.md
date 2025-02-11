# 📆 unix-time-utils

🚀 A simple utility for calculating future **UNIX timestamps** by adding seconds, minutes, hours, or days.

🔧 **Lightweight** | ⚡ **Fast** | ✅ **Zero dependencies**

---

## 📦 Installation

Install via **npm** or **yarn**:

```sh
npm install unix-time-utils
# or
yarn add unix-time-utils
```

---

## 🚀 Usage

### **1️⃣ ES Modules (Recommended)**

If your project uses **ES Modules (`import`)**, simply:

```javascript
import {
  unixTime,
  unixTimeInSeconds,
  unixTimeInMinutes,
  unixTimeInHours,
  unixTimeInDays,
} from "unix-time-utils";

// Get UNIX timestamps for future dates
console.log(unixTimeInSeconds(30)); // 📌 30 seconds from now
console.log(unixTimeInMinutes(10)); // 📌 10 minutes from now
console.log(unixTimeInHours(1)); // 📌 1 hour from now
console.log(unixTimeInDays(7)); // 📌 7 days from now

// Custom timestamp with multiple time units
console.log(unixTime({ days: 1, hours: 2 })); // 📌 1 day & 2 hours from now
```

---

### **2️⃣ CommonJS (`require`) Support**

For **Node.js** projects using **CommonJS (`require`)**, add this to `package.json`:

```json
"exports": {
  "import": "./index.js",
  "require": "./index.cjs"
}
```

Then use:

```javascript
const { unixTime } = require("unix-time-utils");

console.log(unixTime({ days: 1, hours: 2 }));
```

---

## 🎯 API Reference

| Function                                      | Description                                                                               | Example Usage                                                       |
| --------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `unixTimeInSeconds(sec)`                      | Returns a **UNIX timestamp** `sec` seconds from now                                       | `unixTimeInSeconds(60)` → 📌 1 minute ahead                         |
| `unixTimeInMinutes(min)`                      | Returns a **UNIX timestamp** `min` minutes from now                                       | `unixTimeInMinutes(5)` → 📌 5 minutes ahead                         |
| `unixTimeInHours(hours)`                      | Returns a **UNIX timestamp** `hours` hours from now                                       | `unixTimeInHours(3)` → 📌 3 hours ahead                             |
| `unixTimeInDays(days)`                        | Returns a **UNIX timestamp** `days` days from now                                         | `unixTimeInDays(1)` → 📌 Tomorrow's timestamp                       |
| `unixTime({ days, hours, minutes, seconds })` | Returns a **UNIX timestamp** by adding a combination of days, hours, minutes, and seconds | `unixTime({ days: 1, hours: 2, minutes: 30 })` → 📌 1d 2h 30m ahead |

---

## 🛠 Running Tests

This package uses **Vitest** for unit testing.  
To run tests:

```sh
npm test
```

Or with **watch mode**:

```sh
npx vitest --watch
```

---

## 🌟 Contributing

We welcome contributions! To contribute:

1. **Fork** this repository
2. **Clone** your forked repo:
   ```sh
   git clone https://github.com/yourusername/unix-time-utils.git
   ```
3. **Navigate into the project**:
   ```sh
   cd unix-time-utils
   ```
4. **Install dependencies**:
   ```sh
   npm install
   ```
5. **Create a new branch for your feature**:
   ```sh
   git checkout -b my-new-feature
   ```
6. **Make your changes and commit**:
   ```sh
   git add .
   git commit -m "Added a new feature"
   ```
7. **Push to your fork and create a Pull Request** 🚀

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use and contribute! 🎉

---

## ⭐ Support

If this package helps you, please **🌟 Star** the repo on GitHub!

📩 **Questions or Suggestions?** Open an [issue](https://github.com/razdacoder/unix-time-utils/issues).

---

### **Happy Coding! 🎉**
