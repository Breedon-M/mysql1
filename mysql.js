
//1Find out how many tasks are in the task table

SELECT COUNT(id) FROM task;

//2 Find out how many tasks in the task table do not have a valid due date

USE music
SELECT task.due_date FROM task WHERE due_date IS NULL;


//3Find all the tasks that are marked as done

USE music;
SELECT task.title, task.status_id FROM task WHERE status_id = 3;

//4Find all the tasks that are not marked as done

SELECT * FROM task WHERE complete = false;

//5.Get all the tasks, sorted with the most recently created first

USE music

SELECT task.title, task.created FROM task
ORDER BY created DESC;

//6Get the single most recently created task
USE music;
SELECT MIN(created) FROM task;

//7Get the title and due date of all tasks where the title or description contains database

SELECT title, due_date FROM task WHERE title LIKE '%database%'
OR `description` LIKE '%database%';

//8 Get the title and status (as text) of all tasks

SELECT task.title, status.name FROM task
INNER JOIN status ON task.status_id = status.id;

//9 Get the name of each status, along with a count of how many tasks have that status


//10. Get the names of all statuses, sorted by the status with most tasks first




