 let activeZones = [];
        //Selecting zones
        function toggleSelection(zoneId) {
            if (activeZones.includes(zoneId)) {
                activeZones = activeZones.filter((zone) => zone !== zoneId);
                document.getElementById(zoneId).classList.remove("selected-zone");
                document.querySelector(`[data-zone="${zoneId}"]`).style.backgroundColor = " rgba(0, 123, 255, 0.3)";
            } else {
                activeZones.push(zoneId);
                document.getElementById(zoneId).classList.add("selected-zone");
                document.querySelector(`[data-zone="${zoneId}"]`).style.backgroundColor = " rgb(149, 131, 30)";
            }
        }

        function activateRoutine() {
    const routineSelect = document.getElementById('routine-select');
    const selectedOption = routineSelect.options[routineSelect.selectedIndex];
    const hours = parseInt(selectedOption.value);

    const checkMark = document.getElementById('check-mark');
    checkMark.style.display = 'inline';

    setTimeout(function () {
    checkMark.style.display = 'none';
}, 3000); 
}