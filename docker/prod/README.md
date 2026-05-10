# Production Docker Compose

This directory contains a production-ready Docker Compose sample for AI-Agent-Cloud.

## Files

- `docker-compose.yml` — production compose file with Nginx, frontend, and backend services.
- `nginx.conf` — reverse proxy configuration for routing frontend and API traffic.
- `.env.prod.example` — environment template for production secrets and service URLs.

## Usage

1. Copy the environment template:

   ```bash
   cp .env.prod.example .env.prod
   ```

2. Update the environment values with production credentials.

3. Start the production stack:

   ```bash
   docker compose up -d
   ```

4. Verify services are running:

   ```bash
   docker compose ps
   ```

## Notes

- Replace the SSL directory with your certificate files if using HTTPS.
- This configuration is a baseline for local production simulation.
- For cloud deployment, use a managed reverse proxy or Kubernetes ingress.
