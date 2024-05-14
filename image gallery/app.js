let mainCont = document.getElementById("main-cont");
let sub1 = document.getElementById("sub-cont1")
let sub2 = document.getElementById("sub-cont2")
let sub3 = document.getElementById("sub-cont3")
let sub4 = document.getElementById("sub-cont4")
let sub5 = document.getElementById("sub-cont5")
sub1.addEventListener('mouseover', function(){
    // console.log("hello") 
    this.style.border = '2px solid black';
    mainCont.innerHTML = '<img src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">'
})
sub1.addEventListener('mouseout', function(){
    // console.log("hello") 
    this.style.border = 'none';
})

sub2.addEventListener('mouseover', function(){
    // console.log("hello") 
    this.style.border = '2px solid black';
    mainCont.innerHTML = '<img src="https://plus.unsplash.com/premium_photo-1661962510497-9505129083fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y293fGVufDB8fDB8fHww" alt="">'
})
sub2.addEventListener('mouseout', function(){
    // console.log("hello") 
    this.style.border = 'none';
})

sub3.addEventListener('mouseover', function(){
    // console.log("hello") 
    this.style.border = '2px solid black';
    mainCont.innerHTML = '<img src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y293fGVufDB8fDB8fHww" alt="">'
})
sub3.addEventListener('mouseout', function(){
    // console.log("hello") 
    this.style.border = 'none';
})

sub4.addEventListener('mouseover', function(){
    // console.log("hello") 
    this.style.border = '2px solid black';
    mainCont.innerHTML = '<img src="https://images.unsplash.com/photo-1507103011901-e954d6ec0988?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvd3xlbnwwfHwwfHx8MA%3D%3D" alt="">'
})
sub4.addEventListener('mouseout', function(){
    // console.log("hello") 
    this.style.border = 'none';
})

sub5.addEventListener('mouseover', function(){
    // console.log("hello") 
    this.style.border = '2px solid black';
    mainCont.innerHTML = '<img src="https://images.unsplash.com/photo-1567879656049-f2265f23d8f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvd3xlbnwwfHwwfHx8MA%3D%3D" alt="">'
})
sub5.addEventListener('mouseout', function(){
    // console.log("hello") 
    this.style.border = 'none';
})