-- Database: todo

-- DROP DATABASE todo;

CREATE DATABASE todo
    WITH 
    OWNER = todoowner
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


-- Role: todoowner
-- DROP ROLE todoowner;

CREATE ROLE todoowner WITH
  LOGIN
  SUPERUSER
  INHERIT
  CREATEDB
  CREATEROLE
  NOREPLICATION
  ENCRYPTED PASSWORD 'md54a2dea59390b7437d58cb747abda942e';

  
-- Table: public.todos

-- DROP TABLE public.todos;

CREATE TABLE public.todos
(
    id integer NOT NULL,
    name character varying(50)[] COLLATE pg_catalog."default" NOT NULL,
    description character varying(300)[] COLLATE pg_catalog."default",
    "targetDate" date NOT NULL,
    completed boolean,
    "user" character varying(50)[] COLLATE pg_catalog."default" NOT NULL,
    "createdDate" date NOT NULL,
    CONSTRAINT todos_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.todos
    OWNER to todoowner;