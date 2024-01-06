import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-27c46-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const billsListInDB = ref(database,"billsList" )

const BillEl = document.getElementById("bill")
const deadlineEl = document.getElementById("deadline")
const addButtonEl = document.getElementById("add-button")
const billsListEl = document.getElementById("billsList")

    function billconstructor(bill,deadline){
        this.bill = bill
        this.deadline = deadline
    }

    addButtonEl.addEventListener("click", function() {

        let bill = new billconstructor(BillEl.value,deadlineEl.value)
    
        push(billsListInDB, bill)

        cleardeadlineEl()
        clearBillEl()
    })

onValue(billsListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let billsArray = Object.entries(snapshot.val())
        console.log(billsArray)
        
        dateConvertor(billsArray)
        clearbillsListEl()
        
        sort(billsArray,0,billsArray.length-1)
        
        for (let i = 0; i < billsArray.length; i++) {
             appendItemTobillsListEl(billsArray[i])
         }    
     } else {
        billsListEl.innerHTML = "No items here... yet"
     }
})

function clearbillsListEl() {
    billsListEl.innerHTML = ""
}

function cleardeadlineEl(){
    deadlineEl.value=""
}

function clearBillEl() {
    BillEl.value = ""
}

function appendItemTobillsListEl(item) {
    let itemID = item[0]
    let itemValue = item[1].bill
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `billsList/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    newEl.addEventListener("onmouseover",function() {
        newEl.style.background= "#FF0000"
    })
    billsListEl.append(newEl)
}

function dateConvertor(bills){
    for(let i=0;i<bills.length;i++){
        bills[i][1].deadline=(new Date(bills[i][1].deadline)).getTime()
        console.log(bills[i][1].deadline)
    }
}

function partition(arr, low, high) {
	let pivot = arr[high][1].deadline;

	let i = low - 1;

	for (let j = low; j <= high - 1; j++) {
		if (arr[j][1].deadline < pivot) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}

	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; 
	return i + 1; 
}

function sort(arr, low, high) {
	if (low < high) {
		let pi = partition(arr, low, high);
		sort(arr, low, pi - 1);
		sort(arr, pi + 1, high);
	}
}

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