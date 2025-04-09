const color= "\x1b[1;35m";
const underline= "\x1b[94;4m";
const normal= "\x1b[0m";
export const introMessage = [
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"|                                                                             |",
	"| 欢迎使用大羊实验室提供的公益在线Linux环境，基于开源项目WebVM搭建！                    |",
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"",
	"   你可以用下面的命令在linux上运行代码:",
	"",
	"     python3 examples/python3/fibonacci.py ",
	"     gcc -o helloworld examples/c/helloworld.c && ./helloworld",
	"     objdump -d ./helloworld | less -M",
	"     vim examples/c/helloworld.c",
	"     curl --max-time 15 parrot.live  # requires networking",
	""
];
export const errorMessage = [
	color + "CheerpX could not start" + normal,
	"",
	"Check the DevTools console for more information",
	"",
	"CheerpX is expected to work with recent desktop versions of Chrome, Edge, Firefox and Safari",
	"",
	"Give it a try from a desktop version / another browser!",
	"",
	"CheerpX internal error message is:",
	""
];
export const unexpectedErrorMessage = [
	color + "WebVM encountered an unexpected error" + normal,
	"",
	"Check the DevTools console for further information",
	"",
	"Please consider reporting a bug!",
	"",
	"CheerpX internal error message is:",
	""
];
