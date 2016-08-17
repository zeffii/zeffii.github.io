// zen_cms is MIT licensed.

var script_table = {};
var items_to_list = [
    "Sverchok.markdown",
    "mesh_tiny_cad.markdown"
]

for (pidx in items_to_list){
    var item = items_to_list[pidx]
    var name = item.split('.')[0]
    script_table[name] = item
}

function read_content(myUrl) {
    
    var result = null;
    $.ajax( {   url: myUrl, 
              type: 'get', 
              dataType: 'html',
              async: false,
              success: function(data) { result = data; } 
            }
    );
    FileReady = true;

    var converter = new Showdown.converter();
    // result = result.replace(/\r\n/g,'\n');
    return converter.makeHtml(result);
    // result = markdown.toHTML( result );
    // return result;

};


// my jquery is weak :(

$(document).ready(function() {  

    for( project_id in script_table){
        var project_name = project_id.replace(/_/g,' ');

        // populate the menu one list item at a time
        $('<li></li>', {
            text: project_name,
            id: project_id
        }).appendTo('#my_menu');
        
        // attaches unique click event handler to each list item
        $('#'+ project_id).on('click', function(e) {
            var a = $(this).attr('id');
            var location = script_table[a];
            $('#project').empty();

            var content = read_content(location);
            $('#project').append(content);
            prettyPrint();
            // console.log(a);
        });

    }

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    }); 
  
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 480);
        return false;
    });


    $('#theme_switch').on('click', function(e) {
        if ($('#theme_options').is(':hidden')) {
            $('#theme_options').fadeIn(200);
            //$('#theme_closer').show();
            $('#theme_closer').fadeIn(200);
        }

    });

    $('#theme_closer').on('click', function(e) {
        $('#theme_options').hide();
        $('#theme_closer').hide();
    });



});


