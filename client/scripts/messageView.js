// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div class="username"> <%= name %> </div>
        <div class="message"> <%= message %> </div>
      </div>
    `)
};

// var value = 4
// var str = `this is a string with a value of ${value}`