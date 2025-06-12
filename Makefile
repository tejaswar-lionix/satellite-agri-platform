build:
	docker build -t satellite-agri .

test:
	pytest -q

run:
	python manage.py runserver 0.0.0.0:8000
