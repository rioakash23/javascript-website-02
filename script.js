// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
 }

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});



//slider//

var carousel=document.querySelector("img");
var image=["img/photo-1495745966610-2a67f2297e5e.avif" ,"img/photo-1552168324-d612d77725e3.avif","img/photo-1581591524425-c7e0978865fc.avif"  ]
var num=3;


function next(){
    num++;
   console.log("step1");
   console.log( "num=",num);
    if(num>=image.length){
        num=0;
       console.log("step2");
       console.log("num",num);
       carousel.src=image[num]
        console.log("num",num);  
    }
    else{
       console.log("step3");
       carousel.src=image[num]
        console.log("num",num);

    }
                    
};
function back(){
    num--;
    if(num<0){
        num=image.length-1;
        carousel.src=image[num]
            }
            else{
              carousel.src=image[num]
            }

};





// card- section

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});





// carousel-section





let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
},
},
});



var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  
  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  
  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});








// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}




//service//

const form = document.getElementById('form')  
const username = document.getElementById('username') 
const email = document.getElementById('email') 
const password = document.getElementById('password')
const password2 = document.getElementById('password2');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});    
function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	  


	// username validation

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	
	}
	

	// email validation

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	

	// password validation

	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	// confirm password


	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}


// error function


function setErrorFor(input, message) {

	// assign all input  elements  to formControl
	const formControl = input.parentElement;
	
	const small = formControl.querySelector('small');
    //  formControl property asign to form-control error
	formControl.className = 'form-control error';
	small.innerText = message;
}

// success function

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

 //  email function
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}