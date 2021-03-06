/***
 * The goal of this file is to know about the file system functions;
 *
 *
 * How to run this example:
 * 1. node fileSys-1.js
 * 2. See the message get displayed on prompt.
 */

var fs = require('fs'),
	path = require('path'),
	filename1 = path.normalize('FixContent/email1.txt'),
	filename2 = 'message.txt',
	filename3 = path.normalize('FixContent/file-a.txt'),
	filename4 = path.normalize('FixContent/file-b.txt');

/***
 * Read a file.
 */
fs.readFile(filename1, 'utf-8', function(error, data) {
	if (error) throw error;
	console.log('Following are the file content:');
	console.log(data);
});

/***
 * Write content to a file. If file already exists, Node will remove it and write it.
 */
fs.writeFile(filename2, 'Hello World', function(error) {
	if (error) throw error;
	console.log('File is written successfully.');
});

/***
 * Append content to a file. If file already exists, Node will open it and append the content.
 */
fs.appendFile(filename2, '\nWelcome to Node.js training sessions.', function(error) {
	if (error) throw error;
	console.log('Content appended successfully.');
});

/***
 * Remove a file.
 */
fs.unlink(filename2, function(error) {
	if (error) throw error;
	console.log('%s removed successfully.', filename2);
});

/***
 * Rename a file.
 */
fs.rename(filename3, filename4, function(error) {
	if (error) throw error;
	console.log('%s renamed successfully.');
});