// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {
  _data: null,
  topMessageId: null,
  checkDifferent: function(topMessageId, newMessageId) {
    if (topMessageId !== newMessageId) {
      MessagesView.render(Messages._data);
    }
  }

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
};