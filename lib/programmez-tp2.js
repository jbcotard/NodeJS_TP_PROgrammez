export class Programmez extends require('events') {
	constructor(){
		super()
		setInterval(()=> this.emit('pro'), 1000);
	}
}