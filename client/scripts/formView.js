// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),
  $message: $('#message'),
  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form

    event.preventDefault();
    var newMessage = {
      username: App.username,
      text: FormView.$message.val(),
      roomname: 'lobby'
    };

    Parse.create(newMessage);
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    console.log('$message', FormView.$message.val());
    // console.log(event);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

// Parse.readAll((data) => {
//   // examine the response from the server request:
//   Messages._data = data;
//   MessagesView.render();
//   // MessagesView.renderMessage(data[0]);

//   callback()
//   setTimeout(Parse.readAll(data), 5000);
//   // TODO: Use the data to update Messages and Rooms
//   // and re-render the corresponding views.
// });

// it('should send the message along with the request as a stringified object', function(done) {
//   var message = {
//     username: 'Mel Brooks',
//     text: 'It\'s good to be the king',
//     roomname: 'lobby'
//   };

//   Parse.create(message);
//   ajaxOptions = typeof $.ajax.args[0][0] === 'object' ? $.ajax.args[0][0] : $.ajax.args[0][1];
//   expect(ajaxOptions.data).to.be.a('string');
//   expect(ajaxOptions.contentType).to.equal('application/json');
//   done();
// });