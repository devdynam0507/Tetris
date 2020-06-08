let x = 0;
let y = 0;
let canv = document.getElementById("canv");

const BLOCK_WIDTH = 30;
const BLOCK_HEIGHT = 30;

const block1 = [
				 [0,0,0],
				 [0,1,1],
				 [0,1,1]
				];

function draw(let ctx, let color)
{
	ctx.fillStyle = color;
	ctx.strokeRect(x, y, BLOCK_WIDTH, BLOCK_HEIGHT);
	ctx.fillRect(x, y, BLOCK_WIDTH, BLOCK_HEIGHT);
}

function draw()
{	
	for(let i = 0; i < 3; i++)
	{
		for(let j = 0; j < 3; j++)
		{
				let ctx = canv.getContext("2d");

				draw(ctx, block1[i][j] == 0 ? 'white' : 'green');
		}
	}		
}

setInterval(function() {
	draw();
	
	y += 30;
}, 1000); //1s

////////////////////////////////////////////KEY EVENT////////////////////////////////////////
window.onkeydown=function(){  

    	  if(event.keyCode == 37){ //좌

    		  window.document.body.bgColor="red";

    	  }else if(event.keyCode == 38){//상

    		  window.document.body.bgColor="white";

    	  } else if(event.keyCode == 39){//우

    		  window.document.body.bgColor="blue";

    	  }else if(event.keyCode == 40){//하

    		  window.document.body.bgColor="green";

    	  }

};
//////////////////////////////////////////////////////////////////////////////////////
