$(document).ready(function () {
    var elem = document.getElementById('doodle');
    var two = new Two({
        fullscreen: true
    }).appendTo(elem);

    var position = new Two.Vector(two.width / 2, two.height / 2);


    var hairleft = two.makeCurve(position.x - 2, position.y - 280, position.x - 40, position.y - 340, position.x - 50, position.y - 345, position.x - 80, position.y - 350, true);
    hairleft.stroke = '#676563';
    hairleft.noFill();
    hairleft.linewidth = 20;

    var hairright = two.makeCurve(position.x + 2, position.y - 280, position.x + 40, position.y - 340, position.x + 50, position.y - 345, position.x + 80, position.y - 350, true);
    hairright.stroke = '#676563';
    hairright.noFill();
    hairright.linewidth = 20;

    var dot = two.makeCircle(position.x, position.y, 300);
    dot.fill = '#EBDB95';
    dot.noStroke();

    var cloth1 = two.makeRectangle(position.x, position.y + 275, 320, 50);
    cloth1.fill = '#3e9ce2';
    cloth1.noStroke();

    var cloth2 = two.makeRectangle(position.x, position.y + 250, 200, 60);
    cloth2.fill = '#3e9ce2';
    cloth2.noStroke();

    var mouth = two.makeLine(position.x - 100, position.y + 150, position.x + 100, position.y + 150);
    mouth.stroke = '#676563';
    mouth.linewidth = 25;

    var line = two.makeLine(position.x - 305, position.y - 50, position.x + 305, position.y - 50);
    line.stroke = '#676563';
    line.linewidth = 35;

    var eye = two.makeCircle(position.x, position.y - 50, 85);
    eye.fill = '#fefefe';
    eye.noStroke();

    var pupil = two.makeCircle(position.x, position.y - 45, 45);
    pupil.fill = '#676563';
    pupil.noStroke();

    var rect = two.makeRectangle(position.x, position.y - 100, 165, 70);
    rect.fill = '#EBDB95';
    rect.noStroke();

    var glass = two.makeCircle(position.x, position.y - 50, 100);
    glass.noFill();
    glass.stroke = '#8d8d8d';
    glass.linewidth = 35;

    var outerstroke = two.makeCurve(position.x - 240, position.y + 200, position.x - 120, position.y + 280, position.x, position.y + 300, position.x + 120, position.y + 280, position.x + 240, position.y + 200, true);
    outerstroke.noFill();
    outerstroke.stroke = '#fffaeb';
    outerstroke.linewidth = 10;

    var coverrectleft = two.makeRectangle(position.x - 165, position.y + 300, 200, 80);
    coverrectleft.rotation = Math.PI / 7.8;
    coverrectleft.noStroke();
    coverrectleft.fill = '#fffaeb';

    var coverrectright = two.makeRectangle(position.x + 165, position.y + 300, 200, 80);
    coverrectright.rotation = -Math.PI / 7.8;
    coverrectright.noStroke();
    coverrectright.fill = '#fffaeb';

    var buttonleft = two.makeCircle(position.x - 70, position.y + 240, 10);
    buttonleft.fill = 'rgb(62, 156, 226)';
    buttonleft.linewidth = 2;

    var buttonright = two.makeCircle(position.x + 70, position.y + 240, 10);
    buttonright.fill = 'rgb(62, 156, 226)';
    buttonright.linewidth = 2;



    two.update();
});