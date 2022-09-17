// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: null,
  _rooms: {},
  size: 1,

  checkRooms: function() {
    Rooms.size = Object.keys(Rooms._rooms).length
    for (let i = 0; i < Rooms._data.length; i++) {
      let currentRoom = Rooms._rooms[Rooms._data[i].roomname];
      if (!currentRoom) {
        Rooms._rooms[Rooms._data[i].roomname] = [];
      }
      Rooms._rooms[Rooms._data[i].roomname].push(Rooms._data[i]);
    }
    if (Rooms.size !== Object.keys(Rooms._rooms).length) {
      RoomsView.render();
    }
  }
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
};