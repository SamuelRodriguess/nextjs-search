# Changelog

## [1.0.0] - 2026-09-26

### Added
- **Product Search Shelf UI**: Implemented the search results page and product card components.
- **BFF Integration**: Connected the frontend to the NestJS BFF using a type-safe client implementation.

### Fixed
- **Prerendering Issues**: Resolved build-time errors by implementing `<Suspense>` boundaries around the search results, ensuring compatibility with Next.js static generation.
- **Data Mapping**: Updated product card components to handle the normalized `Float` prices and unified image paths from the BFF.
