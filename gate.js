const penLockToggles = document.querySelectorAll(".lock-toggle-container input[type='checkbox']");
const masterToggle = document.getElementById("lockUnlockAllSwitch");
const lockAllLabel = document.getElementById("lockAllLabel");

//Funtion to lock/unlock individually
penLockToggles.forEach((penLockToggle) => {
    penLockToggle.addEventListener("change", function () {
        const allPensLocked = Array.from(penLockToggles).every((toggle) => toggle.checked);
        masterToggle.checked = allPensLocked;
            if (allPensLocked) {
                lockAllLabel.textContent = "UnLock All";
            } else {
                lockAllLabel.textContent = "Lock All";
            }
    });
});
//For the Master Lock
masterToggle.addEventListener("change", function () {
    const isMasterChecked = masterToggle.checked;
    penLockToggles.forEach((toggle) => {
        toggle.checked = isMasterChecked;
    });
    if (isMasterChecked) {
        lockAllLabel.textContent = "UnLock All";
    } else {
        lockAllLabel.textContent = "Lock All";
    }
});






