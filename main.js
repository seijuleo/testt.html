
function check(){
 
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var correct = 0;


	if (question1 == "organ") {
		correct++;
}
	if (question2 == "Excretory") {
		correct++;
}	
	if (question3 == "tissues") {
		correct++;
}
	if (question4 == "blood cells") {
		correct++;
}	
	if (question5 == "involuntary") {
		correct++;
}	
	if (question6 == "voluntary") {
		correct++;
    }
	var pictures = ["wni.gif", "ok.gif", "sad.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	
    var range;
	
	if (correct < 2) {
		range = 2;
	}

	if (correct > 2 && correct < 5) {
		range = 1;
	}

	if (correct > 5) {
		range = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[range];
	}