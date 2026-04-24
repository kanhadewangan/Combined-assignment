
create table if not exists users(
    id serial primary key,
    name varchar(255) not null,
    email varcahr(255) not null unique,
    password varchar(255) not null, 
    create_at timestamp default current_timestamp,
    update_at timestamp default current_timestamp
)

create  table if not exists courses (
    id serial primary key,
    title varchar(255) not null.   
)

create table if not exists problems (
    id serial primary key,
    title varchar(255) not null,
    description text not null,
    course_id int references courses(id)
)

create table if not exists submissions(
    id serial primary key,
    user_id int references users(id),
    problem_id int references problems(id),
    submitted_at timestamp default current_timestamp,
    status varchar(50) not null
)


create table if not exists progress(
    id serial primary key,
    user_id int references users(id),
    course_id int references courses(id),
    completed boolean default false,
    updated_at timestamp default current_timestamp
)