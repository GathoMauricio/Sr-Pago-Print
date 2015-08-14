
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        $.post("http://sacygrestaurantes.com/pop/index.php",{},function(data){
               $("#principal").html(data);
        });
        cordova.plugins.printer.isAvailable(
            function (isAvailable) {
                //alert(isAvailable ? 'Service is available' : 'Service NOT available');

            }
        );
    },
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
function imprimir()
{
    //Tomando captura
    navigator.screenshot.URI(function(error,res){
      if(error){
        console.error(error);
      }else{
      //obteniendo url temporal
        html = '<img src="'+res.URI+'">';
        //enviando al servicio de impresión
        cordova.plugins.printer.print(html, 'Document.html', function () {
         });
      }
    },50);

}
app.initialize();