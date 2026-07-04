let cal = document.querySelector(".cal p")
let select = document.querySelector(".select")
let bttn = document.querySelector(".bttn")
let money = document.querySelector(".money h2")
let income = document.querySelector(".income input")
let used = document.querySelector(".used h1")
let total = 0;
let amount = "";

income.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
        amount = amount.slice(0, -1);
    } else if (e.key.length === 1) {
        amount += e.key;
    }

    money.innerHTML = amount;
});
 money.innerHTML = amount;




function addrow() {
        let table = document.querySelector(".myTable");
        let name = document.querySelector("#name").value;
         let amt = document.querySelector("#amt").value;
           let list = document.querySelector(".list").value;
           let date = document.querySelector("#date").value;
        
           let balance = Number(amount);
           let exp = Number(amt);

           if (
    name === "" ||
    amt <= 0 ||
    list === "Select" ||
    date === ""
) {
    alert("Don't leave fields blank.");
}

else if(balance >= exp){
            total += Number(amt);
            amount -= Number(amt);
            console.log(total);
            cal.innerHTML = total;
            used.innerHTML = total;
            money.innerHTML = amount;
            
             let row = table.insertRow();

         row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = amt;
         row.insertCell(2).textContent = list;
         row.insertCell(3).textContent = date;

           let action = row.insertCell(4);
            action.style.display = "flex";
             action.style.gap = "10px";
             action.style.paddingLeft = "40px";

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.height = "23px";
    editBtn.style.width = "50px";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.height = "23px";
    deleteBtn.style.width = "60px";
    deleteBtn.style.backgroundColor = "#b61717";
    deleteBtn.style.color ="white";
    deleteBtn.style.cursor = "pointer";

    action.appendChild(editBtn);
    action.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
        row.remove();
         total -= Number(amt);
         amount += Number(amt);
          cal.innerHTML = total;
           used.innerHTML = total;
          money.innerHTML = amount;
    });
}
               
         document.querySelector("name").value = "";
         document.querySelector("amt").value = "";
         document.querySelector("list").value = "";
         document.querySelector("date").value = "";

  console.log("run");
}

bttn.addEventListener("click", () =>{
        addrow();
      
        
})
  





