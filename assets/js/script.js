/*=============== PRELOADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReaveal({
    distance:"60px",
    duration:2000,
    delay:100
});
sr.reveal(`.contact-headline, .projects-headline`,{
    delay:500,
});
sr.reveal(`.nav, .footer-home, .footer-social, .skill-item, .project-item`,{
    origin:"top",
    interval:100,
});
sr.reveal(`.contact-description, .contact-form`,{
    origin:"left",
    interval:100,
});
sr.reveal(`.hero-image`,{origin:"top"});
sr.reveal(`.hero-text`);

/*=============== SHOW SCROLL UP ===============*/


/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById("contact-Form"), 
contactMessage=document.getElementById("contact-message"),
sendButton=document.querySelector("#contact-form button");

const sendEmail =async(e)=>{
    e.preventDefault();

    sendButton.disabled=true;
    sendButton.textContent="sending...";
    try{
        await emailjs.sendForm(
        "service_2i89wog",
        "template_6h3r8p1",
        "#contact-form",
        "3CnDDh4-ZZewa-vRZ"
    );
    contactMessage.textContent="message sent successfully";
    setTimeout(()=>{
        contactMessage.textContent="";

    },4000);
    contactForm.requestFullscreen();
}
catch(error){
    contactMessage.textContent="Message not sent(service error)";
}
finally{
    sendButton.disabled=false;
    sendButton.textContent="send message";
}
};
contactForm.addEventListener("submit",sendEmail);


