import shell from 'shelljs'
export function rmF() {
	Array.prototype.slice
		.call(arguments, 0)
		.forEach(path=>
			shell.rm('-f', path))
}
