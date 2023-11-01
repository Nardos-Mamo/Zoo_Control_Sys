let feedCounts = {}; 

function feedAnimals(penNumber, warningMessageId) {
   
    if (!feedCounts[penNumber]) {
        feedCounts[penNumber] = 0;
        }
    feedCounts[penNumber]++;
    // Clicked more than twice
    if (feedCounts[penNumber] > 1) {
    const warningMessage = document.getElementById(warningMessageId);
    if (warningMessage) {
        warningMessage.style.display = 'block';
        setTimeout(function () {
        warningMessage.style.display = 'none';
    }, 3000); // 3 seconds
    }

    } else {
        const currentTime = new Date();
        const timeString = currentTime.toLocaleTimeString(); // Extract time part
        const lastFedTimeElement = document.getElementById(`pen${penNumber}-last-fed-time`);


    if (lastFedTimeElement) {
    lastFedTimeElement.textContent = timeString;
    localStorage.setItem(`pen${penNumber}-last-fed-time`, timeString); //local storge
      }
    }
    
}
    // last fed time from local storage
    for (let penNumber = 1; penNumber <= 4; penNumber++) {
        const lastFedTime = localStorage.getItem(`pen${penNumber}-last-fed-time`);
        const lastFedTimeElement = document.getElementById(`pen${penNumber}-last-fed-time`);

        if (lastFedTimeElement && lastFedTime) {
            lastFedTimeElement.textContent = lastFedTime;
        }
    }

    function activateRoutine(routineId, checkMarkId, warningMessageId) {
    const routineSelect = document.getElementById(routineId);
    const checkMark = document.getElementById(checkMarkId);
    const warningMessage = document.getElementById(warningMessageId);
    
    if (routineSelect && checkMark) {
        checkMark.style.display = 'block';
       
            setTimeout(function () {
            checkMark.style.display = 'none';
            }, 3000);
    }
 
    if (warningMessage) {
        warningMessage.style.display = 'none';
        
       }
}