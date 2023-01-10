function animateColor(el, property, start, end, duration) {
    lerp = function(a, b, u) {
        return (1 - u) * a + u * b;
    };
    var interval = 10;
    var steps = duration / interval;
    var step_u = 1.0 / steps;
    var u = 0.0;
    var theInterval = setInterval(function() {
        if (u >= 1.0) { clearInterval(theInterval) }
        var r = parseInt(lerp(start.r, end.r, u));
        var g = parseInt(lerp(start.g, end.g, u));
        var b = parseInt(lerp(start.b, end.b, u));
        var colorname = 'rgb(' + r + ',' + g + ',' + b + ')';
        el.style.setProperty(property, colorname);
        u += step_u;
    }, interval);
}