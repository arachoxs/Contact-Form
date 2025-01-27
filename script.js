//obtencion de los elementos del dom
const form = document.getElementById("mainForm");
const succesMessage = document.getElementById("succes-message");

const textMessage = "This Field is required";
const emailMessage = "Please enter a valid email addres";
const radioMessage = "please select a query type";
const checkboxMessage = "To submit this form, please consent to being contacted";
let validForm;

succesMessage.style.display="none";

function messageAdder(div,message){
    validForm=false;
    div.innerHTML+=`
    <div class="errorMessage" >
        <p>${message}</p>
    </div>
    `;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validForm=true;
    const divElements= document.querySelectorAll(".form-group,#radioPair,.row-group");
    console.log(divElements);
    for(div of divElements){
        let input = div.querySelector("input") || div.querySelector("textarea");
        console.log(div);
        if(input && !input.validity.valid){
            if(!div.querySelector(".errorMessage")){
                if(input.type === "text" || input.type === "textarea"){
                    messageAdder(div,textMessage);
                }else if(input.type === "email"){
                    messageAdder(div,emailMessage);
                }else if(input.type === "radio"){
                    messageAdder(div,radioMessage);
                }else if(input.type === "checkbox"){
                    messageAdder(div,checkboxMessage);
                }

                if(input.type !== "radio"){
                    div.classList.add("red-border");
                }

            }
            
        }else{
            const element = div.querySelector(".errorMessage");
            if(element){
                element.remove();
                div.classList.remove("red-border"); 
            }
        }
    }

    if(validForm){
        succesMessage.style.display="flex";

        setTimeout(function() {
            location.reload(); // Recarga la página
        }, 5000); // 5000 milisegundos = 5 segundos
    }

    
})