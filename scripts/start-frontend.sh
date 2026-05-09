#!/bin/bash
set -e
cd frontend
npm install
npm run dev -- --hostname 0.0.0.0 --port 3000
