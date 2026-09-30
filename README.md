# 🚀 Next.js 15 & NestJS BFF: Enterprise Search POC

This repository is a technical showcase of a high-performance product search implementation. It demonstrates a **Production-Ready Product Search Shelf** integrated with the **VTEX Intelligent Search API**, utilizing a modern decoupled architecture.

---

## 🏗️ Architecture: The "Resilient Shelf" Pattern

To handle the complexities of enterprise e-commerce APIs (latency, inconsistent data, and instability), we implemented a decoupled orchestration layer.

### The Request Pipeline

`User Interface (Next.js)` $\rightarrow$ `BFF Layer (NestJS)` $\rightarrow$ `VTEX Intelligent Search API`

![Search Shelf Preview](https://github.com/user-attachments/assets/93e0457b-d1d1-43e9-b8bc-160ea3b9cd32)

### 🛡️ Backend: The Resilience Engine (NestJS)

The BFF is not a simple proxy; it is a stability layer that ensures the frontend never crashes due to external API failures.

- **Circuit Breaker (Opossum)**: Implemented a circuit breaker pattern to prevent cascading failures. If the VTEX API exceeds error thresholds or timeouts, the breaker opens, immediately returning cached data or a graceful fallback instead of hanging the request.
- **Hybrid Caching Strategy**:
  - **L1 (Redis)**: Distributed cache for fast, shared responses.
  - **L2 (In-Memory)**: Local fallback cache to ensure availability even if Redis is unavailable.
- **Data Normalization**: Transforms complex, deeply nested VTEX JSON into a flat, type-safe GraphQL schema. It solves the "Image Ambiguity" by checking both product-level and SKU-level images.
- **Type Precision**: Fixed critical price rounding issues by implementing `Float` scalars for BRL currency support.

### ⚡ Frontend: The Performance Layer (Next.js 15)

Focused on **Core Web Vitals** and a seamless user experience.

- **Next.js 15 Streaming**: Implemented the new `async searchParams` pattern. By wrapping the content in `<Suspense>`, the page shell (header/layout) renders instantly, while the product grid "streams" in as soon as the BFF responds.
- **URL as State**: Leveraged Server Actions to synchronize search terms with the URL. This ensures:
  - **Deep-linking**: Share specific search results via URL.
  - **Persistence**: Search state survives page reloads.
- **BRL-First UI**: Integrated `Intl.NumberFormat` for professional Brazilian currency formatting.
- **Graceful Degradation**: Built-in image fallback logic to prevent "broken image" icons in the UI.

---

## 🛠️ Setup & Execution

### 1. Start the BFF (The Brain)

```bash
cd ../poc-bff-vtex
pnpm install
pnpm dev
```

_API running at `http://localhost:4000/graphql`_

### 2. Start the Frontend (The Face)

```bash
pnpm install
pnpm dev
```

_App running at `http://localhost:3000`_

👉 **Navigate to `/search` to experience the implementation.**

---

## ⚙️ Technical Stack

- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS.
- **BFF**: NestJS, GraphQL (Apollo), Redis.
- **Resilience**: Opossum (Circuit Breaker), Cache-Manager.
- **API**: VTEX Intelligent Search.
