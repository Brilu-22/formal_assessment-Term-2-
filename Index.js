let studentReggy = [];

registerStudent = () =>{

    let studentName = document.getElementById("first").value;
    let studentLast = document.getElementById("last").value;
    let studentNumber = document.getElementById("number").value;
    let choice = document.getElementById("subOne").value;

   

    let choice2 = document.getElementById("subTwo").value;

   

    let studentOption = document.getElementsByName("baseRadio");
    let regValue;
    for(let i = 0; i < studentOption.length; i++){
        if(studentOption[i].checked){
            regValue = studentOption[i].value
        }
    }

    studentReggy.push({
        studentName: studentName, 
        studentLast: studentLast,
        number: studentNumber,
        Year: regValue,
        ChoiceOne: choice,
        ChoiceTwo: choice2,
    });

    console.log(studentReggy)


}

studentInfo = () => {
    let area = document.getElementById("studentOut");
    let total = document.getElementById("info");

    area.innerHTML = "";

    for(let i = 0; i < studentReggy.length; i++){
        
        let name = studentReggy[i].studentName;
        let last = studentReggy[i].studentLast;
        let studentNumber = studentReggy[i].studentNumber;
        let regValue = studentReggy[i].regValue;
        let choice = studentReggy[i].choice;
        let choice2 = studentReggy[i].choice2;


        area.innerHTML +=`
        <div class="col-4">
            <div class="card" style="width: 100%;">
              <div class="card-body">
                <h5 class="card-title">${name} ${last}</h5>
                <p>Student Number:${studentNumber}</p>
                <p>Year:${regValue}</p>
                <p>Choice One:${choice}</p>
                <p>Choice Two:${choice2}</p>
              </div>
            </div>
          </div>`;

    

    }
}