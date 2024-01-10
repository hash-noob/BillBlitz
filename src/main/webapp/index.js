


// Call the function to check deadlines every day for alerting

function checkDeadlines() {
    onValue(billsListInDB, function(snapshot) {
        if (snapshot.exists()) {
            let billsArray = Object.entries(snapshot.val());
            
            dateConvertor(billsArray);

            let currentDate = new Date().getTime();
            for (let i = 0; i < billsArray.length; i++) {
                let deadline = billsArray[i][1].deadline;
                let timeDifference = deadline - currentDate;
                let daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

                if (daysDifference <= 3) {
                    alert(`Reminder: The deadline for ${billsArray[i][1].bill} is approaching!`);
                }
            }
        }
    });
}


setInterval(checkDeadlines, 24 * 60 * 60 * 1000); 