window.onload = function() {
 var canvasW =900;
 var canvasH =600;
 var ctx; 
 var xCoord = 0;
 var yCoord = 0 ;
 var delay = 100; 
 init();
    function init() {
       var canvas = document.createElement('canvas');
        canvas.width = canvasW;
        canvas.height = canvasH;
        canvas.style.border = "1px solid";
        document.body.appendChild (canvas);
        ctx = canvas.getContext('2d');
        refreshCanvas();
        
    }
    function refreshCanvas() {
        xCoord+=5;
        yCoord+=5;
        ctx.clearRect(0,0,canvasW,canvasH);
        ctx.fillStyle="#ff0000";
        ctx.fillRect(xCoord,yCoord,100,50);
        setTimeout(refreshCanvas,delay);
    }

}