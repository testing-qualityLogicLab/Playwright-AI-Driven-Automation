# 🤖 Playwright AI-Driven Automation

AI-Driven Browser Automation using **Playwright + LLM Agents** to convert natural language instructions into real browser test execution.

This project demonstrates how **AI agents can autonomously generate, execute, and validate browser automation workflows** using Playwright, Retrieval-Augmented Generation (RAG), and intelligent DOM analysis.

Instead of writing automation scripts manually, users can simply describe the test in **plain English**, and the system plans and executes the browser actions automatically. ([Gist][1])

---

# 🚀 Key Features

### 🧠 Natural Language Test Execution

Write test instructions in plain English:

```
Open app.vwo.com → attempt invalid login → verify error message
```

The AI agent will:

1. Understand the intent
2. Plan browser actions
3. Execute steps in Playwright
4. Capture DOM state
5. Validate expected behavior automatically

---

### 🤖 AI-Powered Automation Agent

The framework includes an intelligent automation agent that can:

* Interpret natural language instructions
* Generate browser interaction steps
* Perform DOM analysis
* Validate UI states
* Stream execution results in real time

---

### 🌐 End-to-End Browser Automation

Powered by **Playwright**, which enables automation across multiple browsers:

* Chromium
* Firefox
* WebKit

Playwright provides APIs to automate user interactions and test web applications across browsers using a single framework. ([GitHub][2])

---

# 🏗 Architecture

The framework combines multiple modern technologies to enable AI-driven testing.

```
User Instruction
        │
        ▼
AI Planning Agent (LLM)
        │
        ▼
Execution Layer (Playwright)
        │
        ▼
DOM Capture + Diff Engine
        │
        ▼
RAG Validation Engine
        │
        ▼
Results + Streaming UI
```

---

# 🧰 Tech Stack

| Layer           | Technology                |
| --------------- | ------------------------- |
| Automation      | Playwright                |
| Backend         | Python + FastAPI          |
| AI Agent        | LLM (via Ollama / OpenAI) |
| Retrieval       | RAG                       |
| Vector DB       | Chroma                    |
| Frontend        | React + TailwindCSS       |
| Communication   | WebSockets                |
| Browser Control | Playwright                |

---

# 📂 Project Structure

```
Playwright-AI-Driven-Automation
│
├── app/
│   ├── agents/            # AI planning and reasoning agents
│   ├── playwright/        # Browser execution layer
│   ├── rag/               # Retrieval Augmented Generation logic
│   └── main.py            # FastAPI server
│
├── frontend/              # React UI for chat-based execution
│
├── chroma/                # Vector database storage
│
├── assets/                # Screenshots and diagrams
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone the repository

```bash
git clone https://github.com/testing-qualityLogicLab/Playwright-AI-Driven-Automation.git
cd Playwright-AI-Driven-Automation
```

---

## 2️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

---

## 3️⃣ Install Playwright browsers

```bash
playwright install
```

---

## 4️⃣ Configure environment variables

Create a `.env` file:

```
LLM_PROVIDER=ollama
OLLAMA_HOST=http://localhost:11434
CHROMA_PERSIST_DIR=./chroma
PLAYWRIGHT_HEADLESS=false
```

---

# ▶️ Running the Project

## Start the backend

```bash
uvicorn app.main:app --reload --port 8080
```

---

## Start the frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Open the UI

```
http://localhost:5173
```

---

# 💡 Example Test Instruction

Example input to the AI automation agent:

```
1. Open https://example.com
2. Click login
3. Enter invalid credentials
4. Verify error message appears
```

The system will automatically:

* Navigate to the page
* Perform interactions
* Capture DOM snapshots
* Validate UI behavior

---

# 📸 Screenshots

*(Add screenshots here once available)*

```
/assets/chat-ui.png
/assets/test-run.png
/assets/dom-verify.png
```

---

# 🛣 Roadmap

### Phase 1 — Advanced Verification

* Screenshot visual diff
* Network/XHR validation
* Automatic locator healing

### Phase 2 — Multi-Agent Architecture

* Planner agent
* Execution agent
* Locator agent
* Verification agent

### Phase 3 — AI Test Generation

* Test recording
* Natural language test creation
* Self-healing test flows

### Phase 4 — Reporting & Observability

* Visual reports
* Allure integration
* Failure heatmaps

### Phase 5 — SaaS Platform

* Cloud test dashboard
* Test history
* Team collaboration
* API integrations

---

# 🤝 Contributing

Contributions are welcome!

Ways to contribute:

* Improve AI planning logic
* Enhance DOM verification
* Add new agents
* Improve UI experience
* Extend RAG capabilities

Steps:

```
Fork → Create Branch → Commit → Pull Request
```

---

# 📜 License

MIT License

---

# ⭐ Acknowledgements

Built using:

* Playwright
* FastAPI
* React
* Chroma Vector DB
* Large Language Models

---

[1]: https://gist.github.com/PramodDutta/22ce283346b573cea1c709fe016edc50?utm_source=chatgpt.com "autoqa.md · GitHub"
[2]: https://github.com/topics/playwright?utm_source=chatgpt.com "playwright · GitHub Topics · GitHub"
