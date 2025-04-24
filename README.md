# LRU-Cache-Visualizer
LIVE DEMO LINK: https://harimurari27.github.io/LRU-Cache-Visualizer/


An interactive and visually engaging web-based simulator to demonstrate how an **LRU (Least Recently Used) Cache** works — built with **HTML**, **CSS**, and **JavaScript**.

---

## 🚀 Features

- 🔢 **Cache Size Configuration** – Customize the cache limit before inserting data
- 📥 **Put Operation** – Insert key-value pairs into the cache
- 🔍 **Get Operation** – Retrieve a value and push it to the most recent position
- 🔁 **Auto-Eviction** – Automatically removes the least recently used item when full
- 🎨 **Real-time UI Updates** – See the cache update instantly
- 🔔 **Toast Notifications** – Get feedback with beautiful alerts
- 🌈 **Stylish Animations & Responsive Design**

---

## 🧰 Tech Stack

| Tool        | Usage              |
|-------------|--------------------|
| 💻 HTML5     | Structure           |
| 🎨 CSS3      | Styling & Animations |
| ⚙️ JavaScript | Logic & Interactivity |

---

## 📚 How It Works

The LRU Cache uses a combination of **Map** and **Doubly Linked List** internally:

- Recently accessed items move to the **front**
- When capacity exceeds, the item at the **end is removed**
- Every `get()` and `put()` operation reorders the cache accordingly

---
