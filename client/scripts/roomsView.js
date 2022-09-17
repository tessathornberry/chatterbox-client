// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'), // add room
  $select: $('#rooms select'), // should display list of unique room names
  // have an input; roomname input
    // can we have our input directly inside of select? or do we need a separate input field like we in our post message input

  initialize: function() {
    RoomsView.render();
    // FormView.$form.on('submit', FormView.handleSubmit);
    // RoomsView.$select.select(RoomsView.handleChange);

    $(document).on('click', '.room', RoomsView.handleChange);


    //  $(document).on('click', '.username', handleUsernameClick);
    // Attach a directly bound event handler
    // $( "#list a" ).on( "click", function( event ) {
    //   event.preventDefault();
    //   console.log( $( this ).text() );
    // });


    //$( "#target" ).select(function
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    console.log('Rooms._rooms',Rooms._rooms.Carson);
    // for(let i = 0; i < Object.keys(Rooms._rooms).length; i++){
    //   console.log(i)
    // }
    for (let key in Rooms._rooms) {
      console.log(key)
      RoomsView.$select.append(`<option class="room">${key}</option>`)
    }
    // TODO: Render out the list of rooms.
    // lobby has all messages
    // individual rooms only house messages specific to room
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    console.log('clicked')
    // RoomsView.renderRoom(roomname);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
