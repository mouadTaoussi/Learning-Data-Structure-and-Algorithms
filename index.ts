import { file } from "./main";


const myfile: unknown = file;

type myFun = ((name:string,age: number) => string);


function myFuncion() : myFun  {
	return 'Fuck'
}


interface Mouad {
	name : string | number,
	age : number;
	major? : number
	isEnglishSpeaker: (()=> boolean);
}

enum Direction {
	UP = 'up',
	RIGHT = 'right',
	BUTTON = 'button',
	LEFT = 'left'
}