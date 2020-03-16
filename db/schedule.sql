CREATE TABLE employees
(
    id INT NOT NULL
    AUTO_INCREMENT,
  burger_name VARCHAR
    (255) NOT NULL,
  devoured BOOLEAN DEFAULT false NOT NULL,
  PRIMARY KEY
    (id)
);
    INSERT INTO employees
        (employee_name)
    VALUES
    ('Housekeeping', 3, 000.00, 1);
    ('Room Service', 3,000.00, 2);
    ('Customer Service', 2,500, 3);
    SELECT *
    FROM employees 
