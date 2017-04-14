$(document).ready(function(){
$("#bouton").click(function(){

  var Name = $("#nom").val();
  var Age = $("#age").val();

$("#reponse").append("bonjour " + Name);

var music = "<audio id=\"Psycho\" preload=\"auto\" src=\"./Talking Heads - Psycho Killer Remastered Hq.mp3\"></audio><audio id=\"Schubert\" preload=\"auto\" src=\"./SchubertMoments MusicalN3.mp3\"></audio>";
$("#lecteur").append(music);

var player = document.querySelector((Age < 18) ? "#Schubert" : "#Psycho");

player.play();
});
});
