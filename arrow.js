function draw_arrow(x,y,ind,start,end,t_colour)
{
    var centerPointX = ((19 * 5) + (12*5)) * ind;
    var centerPointY = (12*5) * ind;
    
    var startPointX = 0;
    var startPointY = 0;

    var endPointX = 0;
    var endPointY = 24 * 5 * ind;
     
    var biggest_D =dist(centerPointX,centerPointY,startPointX,startPointY);
    
    
    
    
    for(var i = 0; i< 11; i++)
    {
        for(var g = 0; g< 7; g++)
        {
            if(i < 6)
            {
               var seq = i*7; 
            }
            else
            {
                var seq = (10 - i)*7;
            }
            var currentX = ((g*5) + seq) * ind;
            var currentY = (i*5)*ind;
            var currentD = dist(centerPointX,centerPointY,currentX,currentY);
            var size =map(currentD,1,biggest_D,10,5)
            
           if(t_colour == 'blue')
           {
               fill(0,map(pointer.x,start,end,50,255),map(pointer.x,start,end,100,190));
           }
            if(t_colour == 'green')
            {
                fill(map(pointer.x,start,end,100,190),map(pointer.x,start,end,50,255),0);
            }
            if(t_colour == 'red')
            {
                fill(map(pointer.x,start,end,50,255),0,map(pointer.x,start,end,100,190));
            }
            push();
   
            translate(x,y);
            noStroke();
            ellipse(((g * 8)+ seq)*ind ,(i * 8)*ind,size*ind);
            pop();
        
        }
            
    }
    
}
    
    
