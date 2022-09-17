// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: null,
  checkDifferent: function(data) {
    if (data.length !== Messages._data.length) {
      Messages._data = data;
      MessagesView.render(data);
    }
  }

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
// invoke a method inside of fetch to update data when there is new data
// MessagesView.render();
};