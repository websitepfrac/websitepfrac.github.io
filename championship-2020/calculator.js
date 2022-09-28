function updateOutput() {
	var form = document.getElementById("calculator");
	var points = form.elements["points"];
	var yourtime = parseInt(form.elements["yourtimeS"].value) + parseInt(form.elements["yourtimeM"].value) * 60 + parseInt(form.elements["yourtimeH"].value) * 3600;
	var wintime = parseInt(form.elements["wintimeS"].value) + parseInt(form.elements["wintimeM"].value) * 60 + parseInt(form.elements["wintimeH"].value) * 3600;
	if (yourtime == 0 || wintime == 0){
		points.value = "Error: Times must not be zero";
		return;
	}
	if (wintime > yourtime) {
		points.value = "Error: Your time must not be shorter than the winning time";
		return;
	}
	points.value = String((100 - 50 * Math.log(wintime / yourtime) / Math.log(0.5)).toFixed(5)).replace("-", "−");
}
