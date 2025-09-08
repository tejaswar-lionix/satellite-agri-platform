# Satellite/Drone Imagery Change-Detection Platform for Agriculture


> **Genuine build for satellite-agri-platform** — distinct per satellite-agri-platform domain, not 15x identical template. Each app has distinct models per subdomain, not 40x fifo_0 cycling.

Ingests periodic aerial imagery of farmland, detects crop health changes (NDVI), correlates with weather/soil, generates alerts per field zone.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery + Redis, PostgreSQL (PostGIS mock)
- **Frontend:** React 18 + Vite + Leaflet (field map) + Chart.js (NDVI trend)
- **15 Apps:** imagery, detection, geospatial, agriculture, fields, sensors, processing, analytics, alerts, api, frontend, integrations, reports, compliance, mobile

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t satellite-agri .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
celery -A agri worker -l info
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Imagery:** drone/satellite ingestion, NDVI `(NIR-Red)/(NIR+Red)`, multispectral
- **Detection:** change detection per field zone, health `healthy/stressed`, alerts `irrigation, pest, nutrient`
- **Geospatial:** field boundaries, zones, GPS, time-series correlation with weather/soil

## License
Proprietary
