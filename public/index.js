
$('#emp-submit').on('click', function(event) {
  event.preventDefault();

  
  const newEmp = {
    first_Name: $('#fname')
      .val()
      .trim(),
      last_Name: $('#lname')
      .val()
      .trim(),
      title: $('#tittle')
      .val()
      .trim(),
    
  };

  console.log(newEmp);

  $.post('/api/new', newEmp)
  
    .then(function() {
      const row = $('<div>');
      row.addClass('emp');

      row.append(`<p>${newEmp.first_Name}</p>`);
      row.append(`<p>${newEmp.last_Name}</p>`);
      row.append(`<p>${newEmp.tittle}</p>`);
      

      $('#emp-add').prepend(row);
    });

  $('#fname').val('');
  $('#lname').val('');
  $('#title').val('');
});


$('#emp-submit').on('click', function(event) {
  event.preventDefault();

  // Make a newChirp object
  const newShift = {
    comment: $('#comment')
      .val()
      .trim(),
      time :$('#time')
      .val()
      .trim(),
      Date: $('#date')
      .val()
      .trim(),
  };

  console.log(newShift);

  $.post('/api/new', newShift)
  
    .then(function() {
      const row = $('<div>');
      row.addClass('shift');

      row.append(`<p>${newShift.time}</p>`);
      row.append(`<p>${newShift.date}</p>`);
      row.append(`<p>${newShift.comment}</p>`);
      

      $('#shift-add').prepend(row);
    });

  $('#comment').val('');
  $('#date').val('');
  $('#time').val('');
});

// // When the page loads, grab all of our chirps
// $.get('/api/all', function(data) {
//   if (data.length !== 0) {
//     for (let i = 0; i < data.length; i++) {
//       const row = $('<div>');
//       row.addClass('chirp');

//       row.append(`<p>${data[i].author} chirped.. </p>`);
//       row.append(`<p>${data[i].body}</p>`);
//       row.append(`<p>At ${moment(data[i].created_at).format('h:mma on dddd')} </p>`);

//       $('#chirp-area').prepend(row);
//     }
//   }
// });