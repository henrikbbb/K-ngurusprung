let känguru, koordinatensystem
let x, y

function preload() {
	känguru = loadImage("Känguru.png")
	koordinatensystem = loadImage("Koordinatensystem.png")
}

function setup() {
	createCanvas(1400, 800)
	x = 0
	y = 0
	vx = 0
	vy = 0
}

function keyPressed() {
	if (key == 'j') {
		x = 0
		y = 0
		vx = 31
		vy = -21
	}
	if (key == 'r') {
		x = 0
		y = 0
		vx = 0
		vy = 0
	}
}

function draw() {
	push()
	scale(0.6)
	image(koordinatensystem, -100, 0)
	pop()
	push()
	scale(0.5)
	image(känguru, 300 + x, 1180 + y)
	pop()
	if (y <= 0) {
		y += vy
		vy += 1
		x += vx
		if (y > 0) {
			y = 0.0000001
		}
	}
}