-- Use db to be provided by heroku --
USE 

-- Values to be looked into with group upon meeting time --
INSERT INTO department
  (name)
VALUES
  ('Housekeeping'),
  ('Room Service'),
  ('Customer Service')
  ;
-- roles to be looked into (manager, barista, CEO, etc) --
  INSERT INTO role
  (title, salary, department_id)
  VALUES
  ('Barista', 3,000.00, 1);
  ('CEO', 3,000.00, 2);
  ('Manager', 2,500, 3);

  INSERT INTO employee
  (first_name, last_name, role_id);
  ('Alyssa', 'Tung', 1);
  ('Catherine', 'Adegoke', 2);
  ('Conor', 'Toomb', 3);