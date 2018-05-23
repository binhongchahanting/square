var Squery1 = function() {
	Squery.call(this);
	this.rotates = [
		[
			[0,1,0,0],
			[0,1,0,0],
			[0,1,0,0],
			[0,1,0,0],
		],[
			[0,0,0,0],
			[1,1,1,1],
			[0,0,0,0],
			[0,0,0,0],
		],[
			[0,1,0,0],
			[0,1,0,0],
			[0,1,0,0],
			[0,1,0,0],
		],[
			[0,0,0,0],
			[1,1,1,1],
			[0,0,0,0],
			[0,0,0,0],
		],
	]
}
Squery1.prototype = Squery.prototype;
var Squery2 = function() {
	Squery.call(this);
	this.rotates = [
		[
			[0,1,0,0],
			[1,1,1,0],
			[0,0,0,0],
			[0,0,0,0],
		],[
			[1,0,0,0],
			[1,1,0,0],
			[1,0,0,0],
			[0,0,0,0],
		],[
			[1,1,1,0],
			[0,1,0,0],
			[0,0,0,0],
			[0,0,0,0],
		],[
			[0,1,0,0],
			[1,1,0,0],
			[0,1,0,0],
			[0,0,0,0],
		],
	]
}
Squery2.prototype = Squery.prototype;

var Squery3 = function() {
	Squery.call(this);
	this.rotates = [
		[
			[1,1,1,0],
			[0,0,1,0],
			[0,0,0,0],
			[0,0,0,0],
		],[
			[0,1,0,0],
			[0,1,0,0],
			[1,1,0,0],
			[0,0,0,0],
		],[
			[1,0,0,0],
			[1,1,1,0],
			[0,0,0,0],
			[0,0,0,0],
		],[
			[1,1,0,0],
			[1,0,0,0],
			[1,0,0,0],
			[0,0,0,0],
		],
	]
}
Squery3.prototype = Squery.prototype;
var Squery4 = function() {
	Squery.call(this);
	this.rotates = [
		[
			[1,1,1,0],
			[1,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
		],[
			[1,1,0,0],
			[0,1,0,0],
			[0,1,0,0],
			[0,0,0,0],
		],[
			[0,0,1,0],
			[1,1,1,0],
			[0,0,0,0],
			[0,0,0,0],
		],[
			[1,0,0,0],
			[1,0,0,0],
			[1,1,0,0],
			[0,0,0,0],
		],
	]
}
Squery4.prototype = Squery.prototype;
var Squery5 = function() {
	Squery.call(this);
	this.rotates = [
		[
			[1,1,0,0],
			[1,1,0,0],
			[0,0,0,0],
			[0,0,0,0],
		],[
			[1,1,0,0],
			[1,1,0,0],
			[0,0,0,0],
			[0,0,0,0],
		],[
			[1,1,0,0],
			[1,1,0,0],
			[0,0,0,0],
			[0,0,0,0],
		],[
			[1,1,0,0],
			[1,1,0,0],
			[0,0,0,0],
			[0,0,0,0],
		],
	]
}
Squery5.prototype = Squery.prototype;

var Squery6 = function() {
	Squery.call(this);
	this.rotates = [
		[
			[0,1,1,0],
			[1,1,0,0],
			[0,0,0,0],
			[0,0,0,0],
		],[
			[1,0,0,0],
			[1,1,0,0],
			[0,1,0,0],
			[0,0,0,0],
		],[
			[0,1,1,0],
			[1,1,0,0],
			[0,0,0,0],
			[0,0,0,0],
		],[
			[1,0,0,0],
			[1,1,0,0],
			[0,1,0,0],
			[0,0,0,0],
		],
	]
}
Squery6.prototype = Squery.prototype;
var Squery7 = function() {
	Squery.call(this);
	this.rotates = [
		[
			[1,1,0,0],
			[0,1,1,0],
			[0,0,0,0],
			[0,0,0,0],
		],[
			[0,1,0,0],
			[1,1,0,0],
			[1,0,0,0],
			[0,0,0,0],
		],[
			[1,1,0,0],
			[0,1,1,0],
			[0,0,0,0],
			[0,0,0,0],
		],[
			[0,1,0,0],
			[1,1,0,0],
			[1,0,0,0],
			[0,0,0,0],
		],
	]
}
Squery7.prototype = Squery.prototype;
var SqueryFactory = function() {

}
SqueryFactory.prototype.make =function(index, dir) {
	var s;
	index = index +1;
	switch(index) {
		case 1:
			s = new Squery1();
			break;
		case 2:
			s = new Squery2();
			break;
		case 3:
			s = new Squery3();
			break;
		case 4:
			s = new Squery4();
			break;
		case 5:
			s = new Squery5();
			break;
		case 6:
			s = new Squery6();
			break;
		case 7:
			s = new Squery7();
			break;
		default:
			break;
	}
	s.origin.x = 0;
	s.origin.y = 3;
	s.rotate(dir);
	return s;
}
