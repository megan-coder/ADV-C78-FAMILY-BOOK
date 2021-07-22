var names = ["Kwesi Thompson", "Eunice Thompson", "Megan Thomspon", "Ekua Thompson", "Kelsi Thompson"];
var images = ["Dad.jpg", "Mom.jpg", "Megan.jpg", "Ekua.jpg", "Kelsi.jpg"];



var i = 0;

function update() {
	document.getElementById("family_member_name").innerHTML = names[i];
	document.getElementById("family_member_image").src = images[i];
	i++;
}
