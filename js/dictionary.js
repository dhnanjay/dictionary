$(document).ready(function(){

    

    dictData={
    "row1": {
        "letters": {
            "letter1": ["A","ए","305"],
            "letter2": ["B","बी","121"],
            "letter3": ["C","सी","197"],
            "letter4": ["D","डी","164"]
        }
    },
    "row2": {
        "letters": {
            "letter1": ["E","ई","133"],
            "letter2": ["F","एफ","61"],
            "letter3": ["G","जी","115"],
            "letter4": ["H","एच","90"]
        }
    },
    "row3": {
        "letters": {
            "letter1": ["I","आई","171"],
            "letter2": ["J","जे","52"],
            "letter3": ["K","के","142"],
            "letter4": ["L","एल","61"]
        }
    },
    "row4": {
        "letters": {
            "letter1": ["M","एम","234"],
            "letter2": ["N","एन","105"],
            "letter3": ["O","ओ","46"],
            "letter4": ["P","पी","305"]
        }
    },
    "row5": {
        "letters": {
            "letter1": ["Q","क्यू","6"],
            "letter2": ["R", "आर","120"],
            "letter3": ["S","एस","510"],
            "letter4": ["T","टी","148"]
        }
    },
    "row6": {
        "letters": {
            "letter1": ["U","यू","68"],
            "letter2": ["V","वी","132"],
            "letter3": ["W","डब्ल्यू","33"],
            "letter4": ["X","एक्स","0"]
        }
    },
    "row7": {
        "letters": {
            "letter1": ["Y","वाइ","38"],
            "letter2": ["Z","जेड","3"],
            "letter3": ["Links","शृंखलें","0"],
            "letter4": ["Home","घर","0"]
        }
    }
}
    html_schema='';
    $.each(dictData, function(key,value){
        html_schema += '<div class="row">'
        $.each(value.letters, function(key,value){
            html_schema += '<div class="col-sm"><div class="card"><div class="card-header"><div class="card-title">'+value[1]+'</div></div> <div class="card-body">'
            html_schema += '<div class="card-text text-center"><a id="A_link" href="#page_b" data-transition="slidefade" class="letters">'
            html_schema += '<h1>'+value[0]+'</h1></a></div></div><div class="card-footer"><div class="card-subtitle">'+value[2]+'</div></div></div></div>'
        });
        html_schema += '</div><br>'
    });
    $('#dict_data').html(html_schema);
    

    $(".letters").click(function(e) {
        var txt = $(e.target).text();
        console.log(txt);
        $("#a_header2").html(txt);
        $("#listH").html(txt);
        var jsonData = 'data/'+txt.toLowerCase()+'.json';
        //var jsonData='https://www.himalayanacademy.com/lexicon/alpha/'+txt.toLowerCase();
        $.getJSON(jsonData,
            function(data) {
                var html='';
                $('#myList').html(html);
                html = '<li data-role="list-divider" role="heading" class="list-group-item">\n' +
                            '<h1 id="listH">'+txt+'</h1><sup id="supC"></sup>\n' + '</li>';
                $.each(data.entries, function(key, value){
                    html += '<li data-role="collapsible" data-inset="false" class="list-group-item">';
                    html +=      '<h3>'+value.word+'</h3>';
                    html +=          '<div class="card">';
                    html +=                     '<p class="wrap">'+value.definition+'</p>';
                    html +=           '</div>';
                    html += '</li>'
                });
                $("#supC").html(data.results);
                console.log(data.results);
                //$('#myList').html(html);
                $("#myList").append(html);
            });

    });


    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myList li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


});

