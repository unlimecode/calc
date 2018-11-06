var clear = 0, a =0, b = 0, res = 0, oper;

	function getVal(value) {
				val = document.getElementsByTagName("h1")[0].innerHTML;
				document.getElementById("smoll").innerHTML += value;
				if ((val == 0) || (clear == 1)) {
						document.getElementsByTagName("h1")[0].innerHTML = value;
						clear = 0;
													}
				else {
					document.getElementsByTagName("h1")[0].innerHTML += value;
						}

				var len = document.getElementsByTagName("h1")[0].innerHTML;
				if (len.length < 7){
						document.getElementById("disp").style.fontSize = '26px';
						}
						else document.getElementById("disp").style.fontSize = '12px';

							}

	function getoper(value) {
 			a = document.getElementsByTagName("h1")[0].innerHTML;
 			oper = value;
 			document.getElementById("smoll").innerHTML += oper;
 			document.getElementsByTagName("h1")[0].innerHTML += oper;
 			clear = 1;
 								}

 	function getres(){
			b = document.getElementsByTagName("h1")[0].innerHTML;
			
			// console.log(a, b, oper);
				if (oper == "+") 	 {res = +a + +b;}
				else if(oper == "-") {res = a - b;}
				else if(oper == "*") {res = +a * +b;}
				else if(oper == "/") {res = a / b;}
				
				if (res.toString().length > 6){
					document.getElementById("disp").style.fontSize = '12px';	
										}
				document.getElementById("smoll").innerHTML += "=" + res + "&nbsp; ";
				document.getElementsByTagName("h1")[0].innerHTML = res;

				if (b == 0) {res = "ouh fuck!!!";
					document.getElementById("smoll").innerHTML = res + " &nbsp; " + " &nbsp; "+
					" &nbsp; "+ " &nbsp; "+ " &nbsp; "+ " &nbsp; "+ " &nbsp; "+ " &nbsp; "+
					" &nbsp; ";
					document.getElementsByTagName("h1")[0].style.textAlign = "center";
					document.getElementsByTagName("h1")[0].innerHTML = '<img src="smile.png">';

								}

				console.log(res);
				oper = undefined;
				clear =1;
 						}

function getclear(value) {
					document.getElementsByTagName("h1")[0].style.textAlign = "right";
					document.getElementsByTagName("h1")[0].innerHTML = 0;
					document.getElementById("disp").style.fontSize = '26px';
					document.getElementById("smoll").innerHTML += " &nbsp; &nbsp; ";

					if (res == "ouh fuck!!!"){
						document.getElementById("smoll").innerHTML = "";
					}
		}

function memory(){
	mem = document.getElementsByTagName("h1")[0].innerHTML;
	console.log(mem);
}