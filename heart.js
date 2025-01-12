function draw_Hearts(lives)
{
    for(var i =0; i < lives; i++)
    {
        if(i == 0)
        {
            var currentHeart = 1;
        }
        else
        {
            var currentHeart = 0;
        }
         
        draw_heart( 1000-(lives*50) + (i*50), 20, 0.2, currentHeart);
    }
}


function draw_heart(x_pos,y_pos,heart_scale, t_heart)
{
    if(t_heart == 1)
    {
        var life_reduce = endurance_time;
    }
    else
    {
        var life_reduce = 100;
    }
    push();
    translate(x_pos +cam_deviation * t_heart, y_pos+ cam_deviation * t_heart);
    noStroke();
    fill(map(life_reduce,100,0,255,100),
         map(life_reduce,50,0,0,100),
         map(life_reduce,70,40,90,80));

    rect(-105* heart_scale,205* heart_scale,210* heart_scale,-(map(life_reduce,100,0,245,0)* heart_scale));
    fill('#0a3042');

    beginShape();
    vertex(0,0);
    bezierVertex(0,0,-50* heart_scale,-70* heart_scale,-90* heart_scale,0);
    bezierVertex(-90* heart_scale,0,-140* heart_scale,100* heart_scale,0,200* heart_scale);
    vertex(0,210* heart_scale);
    vertex(-110* heart_scale,210* heart_scale);
    vertex(-110* heart_scale,-45* heart_scale);
    vertex(110* heart_scale,-45* heart_scale);
    vertex(110* heart_scale,210* heart_scale);
    vertex(0,210* heart_scale);
    vertex(0,200* heart_scale);
    bezierVertex(0,200* heart_scale,120* heart_scale,110* heart_scale,90* heart_scale,0);
    bezierVertex(90* heart_scale,0,66* heart_scale,-83* heart_scale,0,0);
    endShape();

    noFill();
    stroke('white');
    strokeWeight(5*heart_scale);
    beginShape();
    vertex(0,0);
    bezierVertex(0,0,-50* heart_scale,-70* heart_scale,-90* heart_scale,0);
    bezierVertex(-90* heart_scale,0,-140* heart_scale,100* heart_scale,0,200* heart_scale);
    bezierVertex(0,200* heart_scale,120* heart_scale,110* heart_scale,90* heart_scale,0);
    bezierVertex(90* heart_scale,0,66* heart_scale,-83* heart_scale,0,0);
    endShape();
    pop();

}