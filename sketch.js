function setup() {
  createCanvas(windowWidth,windowHeight);
}
function draw() {
  background(0);  //背景顏色 
  noFill()//不充滿顏色
  stroke(255)  //線條顏色(255為白色)
  //ellipseMode(CENTER)  //以圓框中心點為座標點
  //ellipse(35,35,70)  //圓的座標
  //triangle(35,0,7,53,65,53)
  //triangle(21,30,35,53,52,30)

  for(var j=0;j<(width/50);j++)    //i++ ==>i=i+1
  for(var i=0;i<(width/50);i++) //i++ ==>i=i+1
  {
    ellipse(35+(i*70),35+(j*70),70+mouseX/10)  
    stroke('#ffdd00')
    triangle(35+(i*70),0+(j*70)+mouseX/5,7+(i*70),53+(j*70)+mouseX/5,65+(i*70),53+(j*70)+mouseX/5)
    stroke('#f0a6ca')
    triangle(21+(i*70),30+(j*70),35+(i*70),53+(j*70),52+(i*70),30+(j*70))
    stroke('#cdc1ff')
  }
}

