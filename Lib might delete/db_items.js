const consola = require('consola');
const connection = require('../config/connection');



const createEmp = empDataObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO employee SET ?', empDataObj, (err, empData) => {
      if (err) {
        consola.log(err);
        reject(err);
        return;
      }

      resolve(empData);
    });


  });
};

const createShift = ShiftDataObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO shift SET ?', ShiftDataObj, (err, shiftData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      return (shiftData);
    });

  });
};

const viewShifts = (callBack) => {

  return connection.query('SELECT * FROM shift', (err, Data) => {
    if (err) {
      consola.error(err);
      connection.end();
      //reject(err);
      return;
    }
    console.table(Data);
    var normalObj = Object.assign({}, Data[0]);
    connection.end();



    callBack(normalObj);
    //return (normalObj);

  });
};
const viewEmp = () => {

  return connection.query('SELECT * FROM employee', (err, Data) => {
    if (err) {
      consola.error(err);
      reject(err);
      return;
    }
    console.table(Data)
    return Data;

  });

};

const updateEmp = (empObj, empId) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE employee SET ? WHERE id = ?', [empObj, empId], (err, empdata) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (empdata.affectedRows === 0) {
        return resolve({ message: "Couldn't find a emp with that id!", code: 404 });
      }

      resolve({ message: 'emp updated successfully!', code: 200 });
    });
  });
};

const updateShifts = (shiftObj, shiftId) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE shift SET ? WHERE id = ?', [shiftObj, shiftId], (err, shiftdata) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (shiftdata.affectedRows === 0) {
        return resolve({ message: "Couldn't find a shift with that id!", code: 404 });
      }

      resolve({ message: 'shift updated successfully!', code: 200 });
    });
  });
};

const deleteEmp = empId => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM employee WHERE id = ?', [empId], (err, empdata) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (empdata.affectedRows === 0) {
        return resolve({ message: "Couldn't find a emp with that id!", code: 404 });
      }

      resolve({ message: 'Employee deleted successfully!', code: 200 });
    });
  });
};

const deleteShift = shiftId => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM shift WHERE id = ?', [shiftId], (err, shiftdata) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (shiftdata.affectedRows === 0) {
        return resolve({ message: "Couldn't find a shift with that id!", code: 404 });
      }

      resolve({ message: 'Shift deleted successfully!', code: 200 });
    });
  });
};




// export functions
module.exports = {

  createEmp,
  createShift,
  viewShifts,
  viewEmp,
  updateShifts,
  updateEmp,
  deleteEmp,
  deleteShift

};

