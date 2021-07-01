const evilButton  = document.querySelector("#evil-button");
const OFFSET = 100;

evilButton.addEventListener("click",()=>{
    alert("Noice Try 😂");
    window.close();
})

document.addEventListener("mousemove",(e)=>{
    
    const x = e.pageX;
    const y = e.pageY;
   // console.log(x,y);
    const buttonBox = evilButton.getBoundingClientRect();
    //console.log(buttonBox);
    const hDistFrom = getDistanceFromCenter(buttonBox.x,x,buttonBox.width);
    const vDistFrom = getDistanceFromCenter(buttonBox.y,y,buttonBox.height);
   // console.log(hDistFrom,vDistFrom);
   const horizontalOffSet = buttonBox.width /2 + OFFSET;
   const verticalOffSet = buttonBox.height /2 + OFFSET;
   if(Math.abs(hDistFrom)<= horizontalOffSet && Math.abs(vDistFrom)<verticalOffSet)
   {
       setPosition(
           buttonBox.x + horizontalOffSet/hDistFrom *10,
           buttonBox.y + verticalOffSet/vDistFrom *10
       )
   }
})
function setPosition(left ,top)
{
    //console.log(left)
    const windowBox = document.body.getBoundingClientRect();
    const buttonBox = evilButton.getBoundingClientRect();
    console.log(windowBox)
    console.log(getDistanceFromCenter(left,windowBox.left,buttonBox.width))
    //getDistanceFromCenter(left,window.right,buttonBox.width)
    if(getDistanceFromCenter(left,windowBox.left,buttonBox.width)<0)
    {
        left = windowBox.right -buttonBox.width - OFFSET; 
    }
    if(getDistanceFromCenter(left,windowBox.right,buttonBox.width)>0)
    {
        left = windowBox.left+ OFFSET; 
    }
    if(getDistanceFromCenter(top,windowBox.top,buttonBox.height)<0)
    {
        top = windowBox.bottom -buttonBox.height - OFFSET; 
    }
    if(getDistanceFromCenter(top,windowBox.bottom,buttonBox.height)>0)
    {
        top = windowBox.top+ OFFSET; 
    }
    evilButton.style.left = `${left}px`
    evilButton.style.top = `${top}px`
}
function getDistanceFromCenter(a,b,c)
{
    return a -b +c/2;
}