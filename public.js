console.log("sa communique ")
$( function() {
    $( ".card-content" ).sortable({
      connectWith: [".card-content"],
      items: '.notification',
      over: function( event, ui ) { //triggered when sortable element hovers sortable list
        $('#new-jobs').css('background-color', 'rgba(0,0,0,.1)')
      },
      out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
        $('#new-jobs').css('background-color', 'rgba(0,0,0,.0)')
      },
      receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
        $('#new-jobs').css('background-color', 'rgba(0,0,0,.0)')
      },
      revert: 100,
      start: function( event, ui ) { //event is triggered when sorting starts.

      },
      stop: function( event, ui ) { //event is triggered when sorting has stopped.

      }
    });
  });

