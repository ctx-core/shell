import shell from 'shelljs'
export default function rmF() {
	Array.prototype.slice.call(arguments, 0).forEach((path:string)=>
		shell.rm('-f', path)
	)
}
