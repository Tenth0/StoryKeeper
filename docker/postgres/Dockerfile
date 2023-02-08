FROM postgres:14.5-bullseye

COPY ./init/init.sql /docker-entrypoint-initdb.d/init.sql

ENV POSTGRES_USER iauimnqhuedgez
ENV POSTGRES_PASSWORD postgres


EXPOSE 5432