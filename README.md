# 🌱 EcoTracker: Carbon Footprint Awareness & Analytics Platform

EcoTracker is a high-fidelity, full-stack sustainability platform engineered to calculate, analyze, and visualize daily individual greenhouse gas emissions ($CO_2e$). Built utilizing a strict **TypeScript** and **Node.js/Express** backend engine, the application delivers precise carbon metric parsing across transportation, dietary, and utility vectors through an elegant, content-rich frontend awareness workspace.

The production infrastructure is configured for automated continuous deployment (CI/CD) and globally hosted on **Vercel Serverless Functions**.

---

## 🔗 Live Deployments & Repository Links

*   **Public GitHub Repository:** [https://github.com/adepuhasini19/carbon_footprint_tracker](https://github.com/adepuhasini19/carbon_footprint_tracker)
*   **Live Interactive Platform:** [https://carbon-footprint-tracker-five-rust.vercel.app](https://carbon-footprint-tracker-five-rust.vercel.app)

---

## 🚀 Key Platform Features

*   **Interactive Habits Simulator:** A beautiful dashboard containing user-input panels to capture daily travel distances, primary transit modes, food profiles, and utility loads.
*   **Real-time Analytics Engine:** Communicates asynchronously with custom backend routes to instantly stream itemized carbon breakdowns.
*   **Climate Awareness Corner:** Translates numerical scores into contextual, actionable carbon mitigation insights based on input scales.
*   **Strict Structural Types:** Developed completely in TypeScript to ensure data integrity, clean error handling, and separation of concerns.
*   **Automated Testing Suite:** Implements a comprehensive unit-testing suite running on **Jest** to ensure structural calculation consistency.

---

## 🛠️ Technical Architecture & Stack

### Frontend Ecosystem
*   **HTML5 / Semantic Structure:** Zero external local dependencies; fully self-contained interface.
*   **Tailwind CSS:** Integrated via content delivery network (CDN) for premium, dark-mode responsive glassmorphic interfaces.
*   **Font Awesome & Google Fonts:** Loaded dynamically to build premium typography and climate-focused iconography.

### Backend Engine
*   **Runtime Environment:** Node.js
*   **Framework:** Express.js with native Middleware routing.
*   **Language:** TypeScript (`v5.x+`) compiled via strict `tsconfig` definitions.
*   **Deployment Mapping:** Scaled down using Vercel Serverless Engine configurations (`vercel.json`).

---

## 📐 Mathematical Formulation & Emission Coefficients

The application runs a standardized environmental model mapping variable data into Carbon Dioxide Equivalents ($CO_2e$). The underlying algorithms apply the following coefficient multipliers:

$$Total\ Daily\ Emissions = Transport\ Impact + Diet\ Impact + Housing\ Impact$$

### 1. Transport Impact
Calculated based on daily commute kilometers ($d$) and vehicle engine characteristics ($C_v$):
*   **Petrol Cars:** $0.24\text{ kg CO}_2\text{e / km}$
*   **Diesel Cars:** $0.27\text{ kg CO}_2\text{e / km}$
*   **Electric Vehicles (EV):** $0.05\text{ kg CO}_2\text{e / km}$
*   **Hybrid Engines:** $0.12\text{ kg CO}_2\text{e / km}$
*   **Public Transport:** $0.08\text{ kg CO}_2\text{e / km}$

$$\text{Transport Score} = d \times C_v$$

### 2. Dietary Footprint
Static baseline daily load values matching production methane indicators ($C_d$):
*   **Omnivore:** $3.50\text{ kg CO}_2\text{e / day}$
*   **Vegetarian:** $2.10\text{ kg CO}_2\text{e / day}$
*   **Vegan:** $1.20\text{ kg CO}_2\text{e / day}$

### 3. Residential Utilities
Processes monthly electricity consumption in kilowatt-hours ($E_m$), normalized down to a 30-day daily axis using a standard grid emission constant ($0.85\text{ kg / kWh}$):

$$\text{Housing Score} = \left(\frac{E_m}{30}\right) \times 0.85$$

---

## 📂 Repository File Tree Structure

```text
carbon_footprint_tracker/
├── node_modules/         # Local project dependencies
├── src/
│   ├── app.ts            # Core Express application server initialization
│   └── controller/       # Calculation route request handlers
├── index.html            # Premium, responsive frontend dashboard 
├── vercel.json           # Vercel Serverless multi-route build configuration
├── package.json          # Node scripts and explicit package configuration
├── tsconfig.json         # Strict TypeScript compiler options
└── README.md             # Platform documentation manuals
