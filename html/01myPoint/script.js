const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];
let counter = 0;

function animate() {
  context.clearRect(0,0,width,height);
  requestAnimationFrame(animate);
  let color = "rgba(" + getRandom(255) + "," + getRandom(255) + "," + getRandom(255) + "," + 1 + ")";
  let A = new Point(new Vector2d(getRandom(width),getRandom(height)),10,color,"");
  counter++;
  points.push(A);

  for(let i = 0; i<points.length; i++){
    points[i].radius+= 2;
    points[i].draw(context);
    if(points[i].radius > 900){
      points.splice(i,1);
    }
  }
}

animate()

function getRandom(max){
    let ans = Math.floor(Math.random()*max);
    return ans;
}

