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
    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  // 0:
  //   campus: "rfp"
  //   created_at: "2022-08-11T04:03:35.893Z"
  //   github_handle: "aaron-bowers"
  //   message_id: 72121
  //   roomname: "lobby"
  //   text: "let's do this"
  //   updated_at: "2022-08-11T04:03:35.893Z"
  //   username: "A-A-Ron"
  //   [[Prototype]]: Object


  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages._data = data;
      console.log('data,', data);
      Messages.checkDifferent(data);
      // MessagesView.render();
      // MessagesView.renderMessage(data[0]);

      callback()
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      //if it's setTimeout with an invocation, "too many requests"
      //if it's setInterval here, it's immediate
    });
    //if it's setTimeout here, invoked, it's immediate
  },

  create: function(data) {
    Parse.create(data)
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }


};

