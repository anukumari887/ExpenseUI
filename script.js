

let cal = document.querySelector(".cal p")
let select = document.querySelector(".select")
let bttn = document.querySelector(".bttn")
let money = document.querySelector(".money h2")
let total = 0;



function addrow() {
        let table = document.querySelector(".myTable");
        let name = document.querySelector("#name").value;
         let amt = document.querySelector("#amt").value;
            total += Number(amt);
            console.log(total);
            cal.innerHTML = total;
            money.innerHTML = total;
          let list = document.querySelector(".list").value;
           let date = document.querySelector("#date").value;
         

        let row = table.insertRow();


        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = amt;
         row.insertCell(2).textContent = list;
         row.insertCell(3).textContent = date;

            let action = row.insertCell(4);

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    action.appendChild(editBtn);
    action.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
        row.remove();
         total -= Number(amt);
          cal.innerHTML = total;
          money.innerHTML = total;
    });
     
         document.querySelector("name").value = "";
         document.querySelector("amt").value = "";
         document.querySelector("list").value = "";
         document.querySelector("date").value = "";

 

}

bttn.addEventListener("click", () =>{
        addrow();
})



