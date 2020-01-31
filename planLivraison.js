$.getJSON( "jsonsUtiles/commandes.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<option value='" + key.id + "'>" + val.id + " - "+ val.date + "</option>" );
	});

  $( "<select/>", {
    "class": "Selector",
    html: items.join( "" )
  }).appendTo( "body" );
});
