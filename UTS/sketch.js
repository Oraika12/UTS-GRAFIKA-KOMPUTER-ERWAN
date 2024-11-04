let isNight = false;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  
  if (isNight) {
    background(25, 25, 112); 
  } else {
    background(135, 206, 235); 
  }

  // Matahari atau Bulan
  if (isNight) {
    fill(255); // Moon color
  } else {
    fill(255, 223, 0); // Sun color
  }
  noStroke();
  ellipse(426, 120, 80, 80);

  // Gunung kiri 
  fill(34, 139, 34);
  triangle(-50, 300, 300, 30, 600, 300);

  // Gunung kanan 
  triangle(200, 300, 550, 50, 900, 300);

  // Rumput
  fill(0, 255, 0);
  rect(0, 300, width, 50); // Rumput di bawah gunung

  // Tanah
  fill(139, 69, 19);
  rect(0, 350, width, 50); // Tanah di bawah rumput

  // Jalan
  fill(105, 105, 105);
  beginShape();
  vertex(290, 300);
  vertex(430, 300);
  vertex(420, height);
  vertex(210, height);
  endShape(CLOSE);

  // Burung 
  if (!isNight) {
    drawBird(120, 100);
    drawBird(150, 80);
    drawBird(200, 120);
    drawBird(600, 100);
    drawBird(650, 120);
    drawBird(700, 90);
  }

  // Awan 
  if (!isNight) {
    drawCloud(100, 80);
    drawCloud(300, 60);
    drawCloud(500, 100);
  }
}

function drawBird(x, y) {
  stroke(0);
  line(x, y, x + 16, y - 10);
  line(x + 15, y - 10, x + 30, y);
}

function drawCloud(x, y) {
  noStroke();
  fill(255);
  ellipse(x, y, 50, 30);
  ellipse(x + 20, y, 50, 30);
  ellipse(x - 20, y, 50, 30);
  ellipse(x + 10, y - 10, 50, 30);
  ellipse(x - 10, y - 10, 50, 30);
}

// Function to toggle between day and night
function mousePressed() {
  isNight = !isNight;
}
