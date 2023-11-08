const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
    const gm = true;
    const ball_speed = 8;
    let xspeed = 0;
    let yspeed = 0;
    let com_score = 0;
    let player_score = 0;
    const x_min=15;
    const x_max=230;
    const y_min=15;
    const y_max=300;
    
/*
    var background = new Image();
background.src = "ugly.jpg";

// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
    ctx.drawImage(background,300,300);   
}
*/

/*----------------------------------test ----------------------------- */



/* **************************************************************** */






    document.addEventListener("mousemove", mouseMoveHandler, false);

    //ligne interieur
    function draw_rect(x,y,w,h,b)
    {
        ctx.beginPath();
        if(b)
        {
            ctx.strokeStyle = "green"; // couleur contour
            ctx.lineWidth = 10;
        }
        else
        {
            ctx.strokeStyle = "green"; // couleur intérieur
            ctx.lineWidth = 2;
        }    
        ctx.strokeRect(x,y,w,h);
        ctx.closePath();
    }  
    //cage/but, demi-cercle
    function draw_goal(x,y,r,s)
    {
        ctx.beginPath();
        ctx.lineWidth=2; 
        if(s)
          ctx.arc(x, y, r, 0, Math.PI, false);
        else
          ctx.arc(x, y, r, Math.PI, 0, false);

        ctx.strokeStyle = "blue"; // couleur demi-cercle
        ctx.stroke();
        ctx.closePath();
    }

    //ligne milieu
    function draw_circle(x,y,r,w)
    {
        ctx.beginPath();
        ctx.lineWidth=w;
        ctx.arc(x, y, r, 0, Math.PI*2, false);
        ctx.strokeStyle = "red"; // ligne milieu
        ctx.stroke();
        ctx.closePath();
    }

    
    function draw_filled_circle(x,y,r,d)
    {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI*2);
        if(d==1)
        {
         ctx.fillStyle = "red"; //joueur
         ctx.strokeStyle = "red"; //joueur
        }
        else if(d==2)
        {
         ctx.fillStyle = "green"; //adversaire
         ctx.strokeStyle = "green"; // adversaire
        }
        else
        {
         ctx.fillStyle = "blue"; //pad
         ctx.strokeStyle = "yellow"; // pad
        }    
        
        ctx.fill();
        ctx.lineWidth = 2; //bordure pad
        
        ctx.stroke();
        ctx.closePath();
    }

    function draw_board()
    {
        draw_rect(0,0,260,330,1); //contour ext
        draw_rect(15,15,230,300,0); // contour int
        draw_goal(130,15,35,1); // demi cercle int. adverse
        draw_goal(130,15,75,1); // demi cercle ext. adverse
        draw_goal(130,315,35,0); // demi cercle int. joueur
        draw_goal(130,315,75,0); // demi cercle ext. joueur
        draw_circle(130,165,20,2); // cercle centre
        draw_circle(130,165,3,2); // petit cercle interieur
        
        ctx.beginPath();
        ctx.moveTo(15, 165); // trait milieu 
        ctx.lineTo(245, 165); // trait milieu 
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(95, 15); // longueur but adv
        ctx.lineTo(165, 15); // longueur but adv
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#000"; //couleur but adv.
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(95, 315); // longueur but joueur
        ctx.lineTo(165, 315); // longueur but joueur
        //ctx.strokeStyle("#FFFFFF");
        ctx.stroke();
        ctx.closePath();

        ctx.font = "25px Arial"; // taille score
        ctx.lineWidth = 2
        ctx.strokeText(com_score,220,150);
        ctx.strokeText(player_score,220,190);
    }

    function distance(x1,y1,x2,y2)
    {
        let tempx = x2-x1;
        let tempy = y2-y1;
        tempx*=tempx;
        tempy*=tempy;
        return Math.sqrt(tempx+tempy);
    }


    var Mallet = function(x,y,r)
    {

        this.x = x;
        this.y = y;
        this.radius = r;
    }
    // Player's object
    var pMallet = new Mallet(130,canvas.height-50,15);
    
    var cMallet = new Mallet(130,50,15);

    // Ball class
    var Ball = function (x,y,r) {
        this.x = x;
        this.y = y;
        this.radius = r;
    }
    // ball object
    var ball = new Ball(canvas.width/2,canvas.height-100,8); 


    // function to control the mallet according to cursor
    function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    var relativeY = e.clientY -canvas.offsetTop;

       if(relativeX > 30 && relativeX < canvas.width-30) {
            pMallet.x = relativeX;
        }
        //360
       if(relativeY > 0 && relativeY < 300){
            pMallet.y = relativeY;
        }    
    }

   
        function play()
        {

           ctx.clearRect(0, 0, canvas.width, canvas.height);
           // draw draw the board
           draw_board();
           // drawing player's mallet
           draw_filled_circle(pMallet.x,pMallet.y,pMallet.radius,1);   
           // drawing computer's mallet
           draw_filled_circle(cMallet.x,cMallet.y,cMallet.radius,2);   
           // drawing the ball
           draw_filled_circle(ball.x,ball.y,ball.radius,0);

           // condition to counce the ball off the left-right walls
           if(ball.x + xspeed > canvas.width-ball.radius-15 || ball.x + xspeed < ball.radius + 15) {
                 xspeed *= -1;
            }
           
           // condition to bounce the ball off the top-botom walls and goal logic
           if(ball.x>95 && ball.x<165){
            if(ball.y + yspeed > canvas.height+ball.radius-15){
                console.log("Computer Score");
                ball.x = canvas.width/2;
                ball.y = canvas.height/2+50;
                xspeed = 0;
                yspeed = 0 ;
                com_score = com_score + 1;
            }
            else if(ball.y + yspeed < 15-ball.radius ){
                console.log("you Score");
                ball.x = canvas.width/2;
                ball.y = canvas.height/2-50;
                xspeed = 0;
                yspeed = 0;
                player_score = player_score + 1; 
            }
           }
           else{
            if(ball.y + yspeed > canvas.height-ball.radius-15  || ball.y + yspeed  < 15+ball.radius){
                yspeed *= -1;
            }
           }
          
        
        var ed = false; // enemy difficulty
        var er = 1;//Used in AI. This is so CPU doesn't just hit it down all the time.
        var p2s;//The speed CPU moves side to side
        if(ed){er=5;}//If hard, Make er larger so CPU hits it diagonally.

   

          if((Math.abs(xspeed)+Math.abs(yspeed))<10&&ball.y<=canvas.height/2){
              if(ball.y-10>cMallet.y){
                  cMallet.y+=2;
              }
              else{
                  cMallet.y-=2;
              }
          }
          else if(cMallet.y>50){
                  cMallet.y-=2;
          }
          else if(cMallet.y<50){
                  cMallet.y+=2;
          }


    //Make sure You or CPU doesn't go past the line or go off screen.
   if(cMallet.x<x_min)
      {cMallet.x=x_min;}
    if(cMallet.x>x_max)
      {cMallet.x=x_max;}
    if(cMallet.y<y_min)
      {cMallet.y=y_min;}
    if(cMallet.y>y_max)
      {cMallet.y=y_max;}
    
    //set CPU's speed depending on difficulty
    if(!ed){p2s = 2;}
    else{p2s=3;}
    
    //If the ball is behind CPU, it moves out of the way.
    if(ball.y<cMallet.y&&ball.x>cMallet.x-15&&ball.x<cMallet.x+15){p2s = -2;}
    //Make CPU move towards the ball's x coord
    if(cMallet.x<ball.x+er){cMallet.x+=p2s;}if(cMallet.x>ball.x-er){cMallet.x-=p2s;}
    
           


          var pDist = distance(pMallet.x,pMallet.y,ball.x,ball.y);
          
          var cDist = distance(cMallet.x,cMallet.y,ball.x,ball.y);          
          

          // Function to hit the ball for player
          if(pDist<23)
          {
           /* console.log("Mallet x : "+pMallet.x+" y : "+pMallet.y);
            console.log("Ball x : "+ball.x+" y : "+ball.y);
            console.log("Distance is : "+dist);
            console.log("dist<30"); */
            var dx = ball.x - pMallet.x;
            var dy = ball.y - pMallet.y;
            //console.log("dx  : " + dx);
            //console.log("dy  : " + dy);
            dx/=15;
            dy/=15;
            xspeed = dx*ball_speed;
            yspeed = dy*ball_speed;
          }  

          // Function to hit the ball when computer is playing
          if(cDist<23)
          {
            var cdx = ball.x - cMallet.x;
            var cdy = ball.y- cMallet.y;
            cdx/=23;
            cdy/=23;
            xspeed = cdx*ball_speed;
            yspeed = cdy*ball_speed;
          }

         // Adjustments in the x and y coordianate of  the ball
           ball.x += xspeed;
           ball.y += yspeed;

           xspeed *=0.99;
           yspeed *=0.99;

          
            
            
            
           /*
           const img = new Image();
           //je lui donne sa source :
           img.src = "image.png";
           
         
           img.onload = () => {
                 
               ctx.drawImage(img, 100, 250, 50, 50)
           }
           
*/
            ctx.font = "15px serif";
            ctx.fillText("Grinch", 200, 120);
            ctx.fillText("Père-Noël", 180, 210);
           
        }
         
        setInterval(play,10);   