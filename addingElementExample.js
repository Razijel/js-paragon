const paragrafy = Array.from(document.querySelectorAll("p"));
	console.log(paragrafy);

	const text = document.getElementById("text");
	const form = document.getElementById("form");

let i = 0;
	function addHeader(para){
		let element = document.createElement("h4");
		element.textContent = `Paragraf ${++i}`;
		para.parentElement.insertBefore(element, para);
		
		element.onClick = function(){
			this.nextElementSibling.hidden = !this.nextElementSibling.hidden;
			if(element.style.display === "none"){
				element.style.display = "block";
			} else {
				element.style.display === "none";
			}
		}
	}

for(const para of paragrafy){
		addHeader(para);
	}

	document.forms.newForm.onsubmit = function(){
		if(text.value.length > 0 ){
			let nowy = document.createElement("p");
			nowy.textContent = text.value;
			nowy.style.color = randomColor();
			nowy.title = text.value.length;
			nowy.onclick = borderOnClick;
			document.querySelector(".paragrafy").appendChild(nowy);
			paragrafy.push(nowy);
			addHeader(nowy);
		}
		return false;
	}
