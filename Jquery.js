$(document).ready(function() {
    // Fade effects
    $('#out').click(function() {
        $('#pic').fadeOut(8000);
    });

    $('#in').click(function() {
        $('#pic').fadeIn(8000);
    });

    $('#toggle').click(function() {
        $('#pic').fadeToggle(8000);
    });

    $('#stop').click(function() {
        $('#pic').stop();
    });

    // Slide effects
    $('#up').click(function() {
        $('#pic').slideUp(10000);
    });

    $('#down').click(function() {
        $('#pic').slideDown(10000);
    });

    $('#toggle1').click(function() {
        $('#pic').slideToggle(10000);
    });

    // Show/Hide effects
    $('#hide').click(function() {
        $('#pic').hide(12000);
    });

    $('#show').click(function() {
        $('#pic').show(12000);
    });

    $('#toggle3').click(function() {
        $('#pic').toggle(12000);
    });

    // Shrink and reset image size
    $('#shrink').click(function() {
        $('#pic').animate({
            width: '200px',
            height: '150px'
        }, 4000);
    });

    $('#reset').click(function() {
        $('#pic').animate({
            width: '500px',
            height: '450px'
        }, 4000);
    });
});
