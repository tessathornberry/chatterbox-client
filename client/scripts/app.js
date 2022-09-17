// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(App.fetch, 3000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      Messages._data = data;
      if (Messages.topMessageId === null) {
        Messages.topMessageId = data[0].message_id;
        MessagesView.render(Messages._data);
      } else {
        Messages.checkDifferent(Messages.topMessageId, data[0].message_id);
        Messages.topMessageId = data[0].message_id;
      }
      Rooms._data = data;
      Rooms.checkRooms();

      console.log('in fetch', Rooms._rooms)

      callback()
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  // Allow users to create rooms and enter existing rooms - Rooms are defined by the .roomname property of messages, so you'll need to filter them somehow.

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }


};

