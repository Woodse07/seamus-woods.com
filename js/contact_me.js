$(document).ready(function() {
    $('#bt1').click(function() {
        $('#fr1').attr('action',
                       'mailto:sewoods@tcd.ie?subject=' +
                       $('#subject').val() + '&body=' + $('#message').val());
        $('#fr1').submit();
    });
});
