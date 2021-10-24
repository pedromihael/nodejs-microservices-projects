CREATE DATABASE ms_projects;

CREATE USER ms_dev with password 'docker';

GRANT ALL PRIVILEGES ON DATABASE ms_projects TO ms_dev;
