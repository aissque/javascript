# Airedu Frontend (Angular)

Production-ready Angular frontend scaffold for an AI-powered education platform with real-time classrooms, onboarding, dashboards, and mocked payments. All data is sourced from local JSON files under `src/assets/data` to simulate a backend.

## ✨ Highlights
- **Enterprise Angular architecture** with core, shared, and feature modules.
- **Mock realtime** with RxJS streams.
- **AI teacher simulation** with prompt templates and streamed responses.
- **Pricing engine** that adjusts by subject, level, mode, and class type.
- **Responsive UI** with Tailwind-friendly utility classes.

## 📁 Project Structure
```
src/app/
├── core/
│   ├── services/
│   ├── guards/
│   ├── interceptors/
│   └── core.module.ts
├── shared/
│   ├── components/
│   └── shared.module.ts
├── features/
│   ├── auth/
│   ├── onboarding/
│   ├── student-dashboard/
│   ├── classroom/
│   ├── teacher-dashboard/
│   ├── admin/
│   └── payments/
├── state/
├── app-routing.module.ts
├── app.component.*
└── app.module.ts
```

## 🧠 Data Layer (JSON)
Mock data lives under `src/assets/data`:
- `users.json`
- `students.json`
- `teachers.json`
- `subjects.json`
- `courses.json`
- `lessons.json`
- `enrollments.json`
- `sessions.json`
- `messages.json`
- `subscriptions.json`
- `payments.json`

The `DataService` loads these collections, caches them in-memory, and simulates latency for CRUD-like flows.

## 🔌 Mock Realtime
`RealtimeService` uses RxJS `BehaviorSubject`s to simulate session connection, message streaming, and attendance events.

## 🤖 AI Teacher Simulation
`AiService` exposes:
- Base prompt + subject-specific templates.
- `streamResponse()` to emit response chunks via RxJS.

## 💳 Pricing & Subscription Logic
`PaymentService.calculatePrice()` uses:
- Class type (group/private)
- Mode (text/audio/video/hybrid)
- Teacher type (AI/human)
- Level (primary → professional)
- Subject-based multipliers
- Hours per day × days per week

## 🚀 Getting Started
1. Install dependencies (Angular CLI required).
2. Run the dev server:
   ```bash
   npm install
   npm start
   ```
3. Visit `http://localhost:4200`.

## 🧪 Testing
Example test commands:
```bash
npm test
```

## ♻️ Extending
- Replace JSON data with API calls in `DataService`.
- Add WebSocket integration in `RealtimeService`.
- Hook AI responses to real inference endpoints in `AiService`.

---
Built for future backend integration and real-time scale.
