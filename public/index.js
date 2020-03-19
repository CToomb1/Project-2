// var $shift = $(".note-title");
// var $noteText = $(".note-textarea");
const $saveemployeeBtn = $(".save-emp");
const $newshiftBtn = $(".new-shift");
const $noteList = $(".list-container .list-group");

// activeNote is used to keep track of the note in the textarea
const activeShifts = {};
const activeEmp = {};

// A function for getting all notes from the db
const getEmp = function() {
  return $.ajax({
    url: "/api/emp",
    method: "GET"
  });
};
const getShifts = function() {
    return $.ajax({
      url: "/api/shifts",
      method: "GET"
  });
};

// A function for saving a note to the db
const saveShift = function (shift) {
  return $.ajax({
    url: "/api/shifts",
    data: shift,
    method: "POST"
  });
};
const saveEmp = function (emp) {
  return $.ajax({
    url: "/api/emp",
    data: emp,
    method: "POST"
  });
};

// A function for deleting a note from the db
const deleteShifts = function (id) {
  return $.ajax({
    url: "api/Shifts/" + id,
    method: "DELETE"
  });
};
var deleteEmp = function (id) {
  return $.ajax({
    url: "api/emp/" + id,
    method: "DELETE"
  });
  };

// If there is an activeNote, display it, otherwise render empty inputs
var renderActiveShifts = function() {
  $saveShifteBtn.hide();
console.log 
  if (activeShift.id) {
    $shiftDate.attr("readonly", true);
    $shitTime.attr("readonly", true);
    $shiftDate.val(activeNote.title);
    $shiftTime.val(activeNote.text);
  } else {
    $shiftDate.attr("readonly", false);
    $shitTime.attr("readonly", false);
    $shiftDate.val("");
    $shiftTime.val("");
  }
};

var renderActiveEmp = function() {
    $saveEmpBtn.hide();
  console.log 
    if (activeEmp.id) {
    $empTitle.attr("readonly", true);
    $empName.attr("readonly", true);
    $empTitle.val(activeNote.title);
    $empName.val(activeNote.text);
  } else {
    $nempTitle.attr("readonly", false);
    $empName.attr("readonly", false);
    $empTitle.val("");
    $empName.val("");
  }
  };

// Get the employee data from the inputs, save it to the db and update the view
var handleEmpSave = function() {
  var newEmp= {
    title: $empTitle.val(),
    name: $empName.val()
  };

  saveEmp(newEmp).then(function(data) {
    getAndRenderEmp();
    renderActiveEmp();
  });
};
var handleShiftSave = function() {
    var newShift= {
      Date: $shiftDate.val(),
      Time: $shiftTime.val()
    };
  
    saveShift(newShift).then(function(data) {
      getAndRenderShifts();
      renderActiveShifts();
    });
};
  

// Delete the clicked note
var handleEmpDelete = function(event) {
  // prevents the click listener for the list from being called when the button inside of it is clicked
  event.stopPropagation();

  var emp = $(this)
    // .parent(".list-group-item")
    .data();

  if (activeEmp.id === emp.id) {
    activeEmp = {};
  }

  deleteEmp(emp.id).then(function() {
    console.log('hi')
    getAndRenderEmp();
    renderActiveEmp();
  });
};

var handleShiftDelete = function(event) {
    // prevents the click listener for the list from being called when the button inside of it is clicked
    event.stopPropagation();
  
  var shift = $(this)
    //   .parent(".list-group-item")
    .data();

  if (activeShift.id === shift.id) {
      activeShifts = {};
    }
  
    deleteNote(shift.id).then(function() {
      console.log('hi')
      getAndRenderShifts();
      renderActiveShifts();
  });
  };

// display employees 
var handleEmpView = function() {
  activeEmp = $(this).data();
  renderActiveEmp();
};

// display shifts 
var handleShiftsView = function() {
    activeShifts = $(this).data();
    renderActiveShifts();
  };


// // Sets the activeNote to and empty object and allows the user to enter a new note
// var handleNewNoteView = function() {
//   activeNote = {};
//   renderActiveNote();
// };
// var handleNewNoteView = function() {
//     activeNote = {};
//     renderActiveNote();
//   };

// If a note's title or text are empty, hide the save button
// // Or else show it
// var handleRenderSaveBtn = function() {
//   if (!$noteTitle.val().trim() || !$noteText.val().trim()) {  
//     $saveNoteBtn.hide();
//   } else {
//     $saveNoteBtn.show();
//   }
// };

// Render's the list of employees and Shifts 
// var renderNoteList = function(notes) {
//   $noteList.empty();
//   console.log(notes);

//   var noteListItems = [];

//   for (var i = 0; i < notes.length; i++) {
//     var note = notes[i];

//     var $li = $("<li class='list-group-item'>").data(note);
//     var $span = $("<span>").text(note.title);
//     var $delBtn = $(
//       "<i class='fas fa-trash-alt float-right text-danger delete-note'>"
//     );
//     $li.append($span, $delBtn);
//     noteListItems.push($li);
//   }

//   $noteList.append(noteListItems);
// };


var getAndRenderEmp = function () {
  return getEmp().then(function (data) {
    // renderEmpList(data);
  });
};
var getAndRenderShifts = function () {
  return getShifts().then(function (data) {
    notess.val(data.name);
    //   renderShiftList(data);
  });
};

// $saveEmpBtn.on("click", handleEmpSave);
// $empList.on("click", ".list-group-item", handleNoteView);
// $newEmpBtn.on("click", handleNewEmpView);
// $empList.on("click", ".delete-emp", handleEmpDelete);

// $saveShiftBtn.on("click", handleShiftSave);
// $shiftList.on("click", ".list-group-item", handleshiftView);
// $newShiftBtn.on("click", handleNewNoteView);
// $shiftList.on("click", ".delete-shift", handleShiftDelete);


// getAndRenderEmp();
//getAndRenderShifts();








//another way to get the data


// $('#emp-form').on('submit', function(event) {
//     event.preventDefault();

//     // collect emp name as objects 
//     const empData = {
//       emp_name: $('[name=emp-name]')
//         .val()
//         .trim()
//     };

//     $.ajax({
//       url: '/api/emps',
//       method: 'POST',
//       data: empData
//     }).then(response => {
//       console.log(response);
//       location.reload();
//     });
//   });

//   $('#shift-form').on('submit', function(event) {
//     event.preventDefault();

//     // collect form data as an object
//     const shiftData = {
//       shift_name: $('[shift=shift-name]')
//         .val()
//         .trim()
//     };

//     $.ajax({
//       url: '/api/shifts',
//       method: 'POST',
//       data: ShiftData
//     }).then(response => {
//       console.log(response);
//       location.reload();
//     });
//   });

//   $('.adoptCat').on('click', function() {
//     // get id of cat we are adopting
//     const catId = $(this).attr('data-catid');

//     $.ajax({
//       url: `/api/cats/${catId}`,
//       method: 'PUT',
//       data: {
//         adopted: 1
//       }
//     }).then(response => {
//       console.log(response);
//       location.reload();
//     });
//   });

  // $('.deleteEmp').on('click', function() {

  //   const empId = $(this).attr('data-empid');

  //   // delete emp
  //   $.ajax({
  //     url: `/api/emp/${empId}`,
  //     method: 'DELETE'
  //   }).then(response => {
  //     console.log(response);
  //     location.reload();
  //   });
  // });

  // $('.deleteShift').on('click', function() {

  //   const shiftId = $(this).attr('data-shiftid');

  //   // delete shift
  //   $.ajax({
  //     url: `/api/emp/${shiftId}`,
  //     method: 'DELETE'
  //   }).then(response => {
  //     console.log(response);
  //     location.reload();
  //   });
  // });
