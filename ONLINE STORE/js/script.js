var $button = $('#button');
var $button2 = $('#button2')
var $div = $('div.sosote');
var body = $('body');
body.hide().fadeIn('slow');


$button.on('click', function () {
    $div.attr('id', 'dark');
});

$button2.on('click', function () {
    $div.attr('id', 'light');
});
