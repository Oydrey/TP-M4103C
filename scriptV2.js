$( document ).ready(function() {
  var Calendar = FullCalendar.Calendar;
  var Draggable = FullCalendarInteraction.Draggable;
  var containerEl = document.getElementById('external-events');
  var calendarEl = document.getElementById('calendar');
  var checkbox = document.getElementById('drop-remove');

  var calendar = new Calendar(calendarEl, {
    plugins: ['interaction', 'dayGrid', 'timeGrid'],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    droppable: true,
    drop: function(info) {
      // console.log(info);
      if (checkbox.checked) {
        info.draggedEl.parentNode.removeChild(info.draggedEl);
      }
    },


    eventClick:function(event){
      var cmdFullVal = $('span').text();
      const words = cmdFullVal.split(' ');
      cmdVal = words[2];
      event.event.remove();
      // AJOUTER ICI OPTION Commande
      $('.cmd').append('<option value='+cmdVal+'><p>Commande n° '+cmdVal+'</p></option>');

    }

  }); // INITIALISATION DU CALENDRIER --------
  calendar.setOption('locale', 'fr'); // traduction du calendrier
  calendar.render(); //RENDU CALENDRIER

  new Draggable(containerEl, {
    itemSelector: '.fc-event',
    eventData: function(eventEl) {
      return {
        title: eventEl.innerText
      };
    }
  }); // RENDRE LES EVENTS DRAGGABLES


  $.getJSON("http://vps.e-mingo.net/coopagri/app/index.php?c=api&x=1&o=data&name=commande",function(data){
    $.each(data,function(key,val){
      $('.cmd').append('<option value='+val.id+'><p>Commande n° '+val.id+'</p></option>');
      //$('.cmd').append('<option><p>Commande n° '+val.id+' '+val.client.raisonSociale+'</p></option>');
    });
  }); //RECUPERER COMMANDES

  $.getJSON("http://vps.e-mingo.net/coopagri/app/index.php?c=api&x=1&o=data&name=personne",function(data){
    $.each(data,function(key,val){
      if(val.categorie.id==3){
        $('.livr').append('<option><p>'+val.nom+' '+val.prenom+'</p></option>');
      }
    });
  }); //RECUPERER LIVREURS


});
