// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(data) {
    // XSS attacks - sanitize our inputs
    var displayMessages = function(data) {
      MessagesView.$chats.empty();
      var html = "";
      for (let i = 0; i < data.length; i++) {
        html += MessageView.render({name: data[i].username, message: data[i].text});
      }
      MessagesView.$chats.append(html);
    };

    displayMessages(data);
  },

  renderMessage: function(message) {
    MessagesView.render(message)
    // TODO: Render a single message.
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};