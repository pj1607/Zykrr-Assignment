# 🚀 AI-Powered Support Ticket Triage System

## 📌 Project Overview

This project is a full-stack application that simulates an AI-powered support ticket triage system. It analyzes user-submitted support tickets using rule-based logic, categorizes them, assigns priority, detects urgency, and stores the results in a database.

The goal is to automate ticket handling similar to real-world customer support systems used by companies.

---

## 🧠 Features

### ✅ Backend

* REST API for ticket analysis
* Rule-based NLP (no external AI APIs)
* Ticket classification:

  * Billing
  * Technical
  * Account
  * Feature Request
  * Other
* Priority assignment:

  * P0 (Critical)
  * P1 (High)
  * P2 (Medium)
  * P3 (Low)
* Urgency detection (e.g., "urgent", "asap")
* Keyword extraction
* Confidence score calculation
* MongoDB database integration

---

### ✅ Frontend

* Text area to submit tickets
* Submit button to call API
* Result panel showing:

  * Category
  * Priority
  * Urgency
  * Keywords
  * Confidence score
* Table view of previously analyzed tickets
* Loading and error handling states

---

## 🏗️ Tech Stack

* **Frontend:** React (Vite)
* **Backend:** Node.js, Express
* **Database:** MongoDB Atlas
* **Containerization:** Docker, Docker Compose

---

## ⚙️ API Endpoints

### 🔹 Analyze Ticket

```http
POST /tickets/analyze
```

**Request Body:**

```json
{
  "message": "My payment failed urgently"
}
```

**Response:**

```json
{
  "category": "Billing",
  "priority": "P1",
  "urgency": true,
  "keywords": ["payment", "failed", "urgent"],
  "confidence": 0.6
}
```

---

### 🔹 Get All Tickets

```http
GET /tickets
```

Returns list of previously analyzed tickets (latest first).

---

## 🧩 AI / NLP Logic

This project uses **heuristic-based logic** instead of external AI:

* Keyword matching for classification
* Predefined urgency words detection
* Priority scoring based on:

  * Category
  * Urgency signals
* Confidence score based on number of matched keywords

---

## ⭐ Custom Rule (Important)

### 🔥 Rule:

If the ticket contains the word **"refund"**:

* Category → Billing
* Priority → P1 (High)

### 💡 Rationale:

Refund-related issues directly impact customer money and satisfaction, so they should be handled with higher priority.

---

## 🐳 How to Run (Docker)

### Step 1: Clone Repository

```bash
git clone https://github.com/your-username/ai-ticket-triage.git
cd ai-ticket-triage
```

### Step 2: Run Project

```bash
docker-compose up
```

### Step 3: Access

* Frontend → http://localhost:3000
* Backend → http://localhost:5000

---

## 🧪 Testing

Basic unit tests are included for:

* Ticket classification
* Priority logic

Run tests:

```bash
npm test
```

---

## 📂 Project Structure

```
backend/
 ├── controllers/
 ├── services/
 ├── analyzer/
 ├── models/
 ├── routes/

frontend/
 ├── src/
 ├── components/

docker-compose.yml
README.md
```

---

## ⚖️ Design Decisions

* Used **modular architecture** (controller → service → analyzer)
* Chose **MongoDB** for flexible schema and quick setup
* Used **keyword-based NLP** for simplicity and constraint compliance
* Docker used for consistent environment setup

---

## ⚠️ Limitations

* Not a real AI model (rule-based only)
* Limited keyword coverage
* Confidence score is basic
* No authentication system

---

## 🚀 Future Improvements

* Use real NLP models (if allowed)
* Add user authentication
* Improve UI/UX
* Add more advanced scoring logic
* Deploy on cloud (AWS / Vercel)

---

## 🧠 Reflection

This project demonstrates how real-world systems can automate support workflows using simple logic. The main focus was on correctness, modular design, and usability.

Trade-offs:

* Chose simplicity over complexity (rule-based instead of ML)
* Focused more on backend logic than UI design

With more time:

* I would improve NLP accuracy
* Add analytics dashboard
* Implement real-time updates

---

## 🎥 Demo

https://youtu.be/sijWr2CCCko

---

## 📌 Final Note

This project reflects a practical implementation of a ticket triage system, showcasing backend logic, frontend integration, and containerized deployment.
