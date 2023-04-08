import fs from 'fs/promises';
import path from 'path'

let url = "https://i.imgflip.com/39t1o.jpg";

fetch(url)
	        .then(res=> res.blob())
	            .then(result => {
	            	let buffer = new ArrayBuffer(result);
	            	fs.open("images", "a", (err, fd) => {
	            		if (err) {console.log(err);} 
	            		else {
	            			fs.write('image', buffer,0,buffer.length,null,(err,written) =>{
	            				if(err){console.log('cant open file');}
	            				else{console.log(written +"characters added");}
	            			});
	            		}
	            	});
	            })
	            .catch(err => console.log(err));