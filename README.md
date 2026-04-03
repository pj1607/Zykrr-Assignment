# AI-Powered Support Ticket Triage System

## Project Overview

This project is a full-stack application that simulates a simple AI-powered support ticket triage system. It takes user-submitted support tickets, analyzes them using rule-based logic, classifies them into categories, assigns priority levels, detects urgency, and stores the results in a database.

The idea behind this project is to mimic how real-world customer support systems automatically organize and prioritize incoming tickets.

---

## Features

### Backend

* REST API for analyzing support tickets
* Rule-based NLP logic (no external AI APIs used)
* Ticket classification into:

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
* Urgency detection based on keywords (e.g., "urgent", "asap")
* Keyword extraction from the message
* Confidence score calculation based on matches
* MongoDB integration for storing tickets

---

### Frontend

* Text area to submit support tickets
* Submit button to trigger analysis
* Result panel displaying:

  * Category
  * Priority
  * Urgency
  * Keywords
  * Confidence score
* Table view showing previously analyzed tickets (latest first)
* Basic loading and error handling states

---

## Tech Stack

* Frontend: React (Vite)
* Backend: Node.js, Express
* Database: MongoDB Atlas
* Containerization: Docker, Docker Compose

---

## API Endpoints

### Analyze Ticket

POST /tickets/analyze

Request:

```json
{
  "message": "My payment failed urgently"
}
```

Response:

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

### Get All Tickets

GET /tickets

Returns a list of previously analyzed tickets (latest first).

---

## AI / NLP Logic

This project uses simple heuristic-based logic instead of any external AI services.

* Classification is done using keyword matching
* Urgency is detected using predefined terms
* Priority is assigned based on category and urgency
* Confidence score depends on how many keywords match

This approach keeps the system lightweight while still demonstrating the core idea.

---

## Custom Rule

If the ticket contains the word **"refund"**:

* Category is set to Billing
* Priority is set to P1 (High)

**Reason:**
Refund-related issues directly affect user money and usually require quicker handling, so they are treated with higher priority.

---

## How to Run (Docker)

Step 1: Clone the repository

```bash
git clone https://github.com/your-username/ai-ticket-triage.git
cd ai-ticket-triage
```

Step 2: Start the application

```bash
docker-compose up
```

Step 3: Open in browser

* Frontend: http://localhost:3000
* Backend: http://localhost:5000

---

## Testing

Basic unit tests are included for:

* Ticket classification
* Priority logic

Run tests using:

```bash
npm test
```

---

## Project Structure

The project is organized in a simple and modular way:

* backend/ contains all server-side code

  * controllers handle requests and responses
  * services contain business logic
  * analyzer includes ticket analysis logic
  * models define database schemas
  * routes define API endpoints
  * config stores configuration like database setup

* frontend/ contains the React application

  * src includes components, pages, and API calls

* docker-compose.yml is used to run the full project using Docker

* README.md contains project documentation

---

## Design Decisions

* Used a modular structure (controller -> service -> analyzer) to keep the code organized
* Chose MongoDB for flexibility and ease of integration
* Implemented keyword-based logic to stay within the "no external AI" constraint
* Used Docker to ensure the project runs consistently across environments

---

## Demo

https://youtu.be/sijWr2CCCko

---

## Final Note

This project demonstrates a practical approach to building a ticket triage system using simple logic, clean structure, and full-stack integration.
