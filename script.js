function showDetails(projectid){
    let details = document.getElementById(`details${projectid}`);
    if(details.style.display=='block'){
        details.style.display='none';
}else{
    details.style.display='block';
}
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("contactForm").addEventListener('submit', function(event){
        event.preventDefault();
        
        let name=
        document.getElementById('name').value.trim();
        let email=
        document.getElementById('email').value.trim();
        let message=
        document.getElementById('message').value.trim();

        if(name===""||email===""||message===""){
            alert("Please fill in all fields!");
            return;
        }

        let emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(!emailPattern.test(email)){
            alert("Invalid email address!Please try again.");
            return;
        }

        alert("Message sent!");
        document.getElementById("contactForm").reset();
    
    const secretNumber=7;
    let attempts=3;

    function checkGuess(){
        let userGuess=parseInt(document.getElementById("userGuess").value);
let message=document.getElementById("gameMessage");
        if (isNaN(userGuess)||userGuess<1||userGuess>10){
            message.textContent="please enter a number between 1 and 10!"
            return;
        }
        attemptsLeft--;

        if(userGuess===secretNumber){
            message.textContent="Congratulations! You guessed the secret number!";
            message.style.color="green";
        }else if(attemptsLeft>0){
            message.textContent=userGuess<secretNumber?
            userGuess < secretNumber ?
            `Too low! ${attemptsLeft} attempts left` :
            `Too high! ${attemptsLeft} attempts left`;
            message.style.color="red";
        }else{
            message.textContent='OOPS!Game Over! The number was ${secretNumber}.';
            message.style.color="black";
            document.getElementById("guessButton").disabled=true;
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
        anchor.addEventListener('click', function(event){
            event.preventDefault();
            let target=document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior:'smooth'
                });
            }
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior:'smooth'
            });
        }
        );
    });
});
document.getElementById("menuToggle").addEventListener("click",function(){
    document.getElementById("navMenu").classList.toggle("active");
});

