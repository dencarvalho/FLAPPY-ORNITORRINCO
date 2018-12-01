
function Arveres() {
	
	this.gap = 100;
	this.cima = random(90, 300);
	this.baixo = height - (this.cima + this.gap);
	this.x = width+20;
	this.y = - 1;
	this.w = 50;
	this.veldasArveres = 5;
	this.passa = false;
	this.highlight = false;

//BATEU, MORREU!!!
	this.colide = function(ornitorrinco) {
		
		if(ornitorrinco.y < this.cima || ornitorrinco.y > height - this.baixo){
			if (ornitorrinco.x > this.x && ornitorrinco.x < this.x + this.w) {
				this.highlight = true;
				this.passa = true;
				return true;
			}
		}
		this.highlight = false;
		return false;

	}
//FATIOOOOOU.... PASSOU! VAI ZERO NOVE!!!
	this.passa = function(ornitorrinco) {
		
		if (ornitorrinco.x > this.x && !this.passou) {
			this.passou = true;
			return true;
		} else {
		return false; }
	}

//SHOW, MAS NÃO DO GUNS N' ROSES
	this.show = function() {
		rect(this.x, this.y, this.w, this.cima);
		rect(this.x, height-this.baixo, this.w, this.baixo);
	}
//ATUALIZA AS ARVERES NO CANVAS, SÓ DE SACANAGEM PRA MATAR O NOSSO HEROI
	this.atualiza = function() {

		this.x -= this.veldasArveres; 
	}

	this.offscreen = function(){
		return (this.x < -this.w)
	}

}