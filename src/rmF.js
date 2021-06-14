import shell from 'shelljs';
export default function rmF() {
    Array.prototype.slice.call(arguments, 0).forEach((path) => shell.rm('-f', path));
}
//# sourceMappingURL=src/rmF.js.map