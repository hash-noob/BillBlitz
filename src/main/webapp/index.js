
const openButton = document.getElementById('add-button'); // Your button's ID
const overlay = document.getElementById('overlay');
const popup = document.getElementById('users');

openButton.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  popup.classList.remove('hidden');
});

// Add a close button or mechanism within the popup
const closeButton = document.getElementById('close');
const done = document.getElementById('done');
closeButton.addEventListener('click', () => {
  overlay.classList.add('hidden');
  popup.classList.add('hidden');
});
done.addEventListener('click', () => {
  overlay.classList.add('hidden');
  popup.classList.add('hidden');
});
// In the event listener for showing the overlay:
overlay.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from reaching the background
  });
  

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

$("li").click(
  function (event){
   document.getElementById(event.target.id).classList.toggle('selected'); 
  }
)