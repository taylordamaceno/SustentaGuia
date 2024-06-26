FROM postgres:13
COPY ./db_scripts /docker-entrypoint-initdb.d/
ENV POSTGRES_DB=sustentaguia
ENV POSTGRES_USER=youruser
ENV POSTGRES_PASSWORD=yourpassword
EXPOSE 5432
