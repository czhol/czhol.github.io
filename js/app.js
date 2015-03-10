var parseID = "XbBMwuGt3JYTCV5FMb5g35RbM2hYEuidQBGi0SCa",  //APP KEY
    parseKey = "LA9ZaNSIZ4I0CSZY7aZViLEGwv5WNiQckMfeqKx3"; //REST API KEY

$(document).ready(function () {
    getMessages();

    $('#send').click(function () {
        var date = $("input[name=date]").val();
        var message  = $("textarea[name=message]").val();
        var verify = $("input[name=verify]").val();

        console.log(date);
        console.log(message);
        console.log(verify);

        if( verify === '209') {
            $.ajax({
                url: 'https://api.parse.com/1/classes/Saying',
                headers: {
                    'X-Parse-Application-Id': parseID,
                    'X-Parse-REST-API-Key': parseKey
                },
                contentType: 'application/json',
                dataType: 'json',
                processData: false,
                data: JSON.stringify({
                    'date': date,
                    'message': message
                }),
                type: 'POST',
                success: function () {
                    console.log('sent');
                    getMessages();
                },
                error: function () {
                    console.log('error');
                }
            });
        } else {
            alert('Please input a valid lab number');
        }


    });
});

function getMessages() {
    $.ajax({
        url: 'https://api.parse.com/1/classes/Saying',
        headers: {
            'X-Parse-Application-Id': parseID,
            'X-Parse-REST-API-Key': parseKey
        },
        contentType: 'application/json',
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            console.log('get');
            updateView(data);
        },
        error: function () {
            console.log('error');
        }
    })
}

function updateView(messages) {
    var table = $('.table tbody');
    table.html(''); // Clean all the innerHTML of that element firstly

    $.each(messages.results, function (index, value) {
        var trEl = $('<tr><td>' + value.date + '</td><td>' + value.message + '</td></tr>');
        table.append(trEl);
    });
    console.log(messages);
}