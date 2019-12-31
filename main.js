

/*
*
*
*		R B X  - F A M I L Y
*		Creator: izzatalharist@gmail.com
*
*
*
*/



const txt = document.querySelector(".rbx-text");
const txtStr = txt.textContent;
const splitText = txtStr.split("");

txt.textContent = "";

for(let i=0; i < splitText.length; i++)
{
	txt.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick()
{
	const span = txt.querySelectorAll("span")[char];
	span.classList.add("fade");
	char++
	if(char === splitText.length)
	{
		complete();
		return;
	}
}

function complete()
{
	clearInterval(timer);
	timer = null;
}