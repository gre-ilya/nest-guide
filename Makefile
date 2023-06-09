all: down build up

up:
	docker compose up -d

down:
	docker compose down

build:
	docker compose build

server:
	nest start

dev: 
	npm run start:dev

shell:
	docker compose exec -it app-server bash

lint:
	npm run lint
