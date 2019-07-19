
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
var appKey = "f24f40b1c24505685fce3b8acd0fcffc";


var hotel = $('#hotel');
var airbnb = $('#airbnb');
var add = $('.add');
var link = $('.link');
var submitstay = $('#submitstay');

submitstay.on("click", onButton);

function onButton(){
  event.preventDefault();
  var result = $("input[name='stay']:checked").val();
  console.log(result);
  if (result == "hotel"){
    link.text("Click here to see the best hotels in the city!");
    link.attr("href", "https://www.nyc.com/hotels/");
   }else{
    link.text("Click here to see the airbnb's suited for you!");
    link.attr("href", "https://www.airbnb.com/stay/New_York");
  }
}

$("#quizForm").submit(function(event){
    event.preventDefault();
    var answers = $(this).serializeArray();
    console.log(answers);
    var scores = {
      A: 0,
      B: 0,
      C: 0,
      D: 0
    }

    for(var i=0; i < answers.length; i++){
      if(answers[i].value=="A")
        scores["A"]+=1;
      else if(answers[i].value=="B")
        scores["B"]+=1;
      else if(answers[i].value=="C")
        scores["C"]+=1;
      else
        scores["D"]+=1;
    }
    console.log(scores);

    var maxScore = "D";
    for (var score in scores){
      if(scores[score] > scores[maxScore])
        maxScore = score;
    }
    var printString = $(".printString");
    if (maxScore == "A"){
       printString.text( "You are looking for family friendly options in NYC! Here are some options that will make for an enjoyable trip! First be sure to visit Madame Tussauds! This wax museum will keep the whole family laughing while they pose for photos with their favorite celebrities. Next, make time for a stop at the iconic Central Park. Hosting a carousel and quads filled with soft grass, be sure to take your time relaxing in this scenic location.  Lastly, visit the Children's Museum in Manhattan. This interactive establishment is one your kids will love. Moving on to food, the Brooklyn Farmacy and Soda Fountain is a great place for family dining.The Melt Shop is also a must if you're a grilled cheese fanatic like us. Lastly, Shake Shack is a tried and true treasure, established in new york this gem of a fast food restaurant will always leave you wanting more.")
       console.log("results A");
     }
    else if (maxScore == "B"){
      printString.text(  "You are a trendy traveler! Here are some options that will be fun and be great photo ops! First, make sure to reserve a spot with sea-the-city jetski. In this once in a lifetime experience, you will view Manhattan like never before! Moreover, make sure to stop at Glossier, a trendy makeup store that is being praised for its diversity and great products. If you're a shopaholic, 5th Avenue shopping is a must, there's all kinds of stores for everyone to enjoy! Trendy people know their food has to be picture perfect- so here's a couple restaurants to help those influencers out: Cookiedo (Serves edible cookiedough with loads of toppings), The Bagel Store Rainbow bagels (they're as cute as they are delicious!) and finally, The Butcher's Daughter. The Butcher's Daughter is a popular plant-based restaurant packed with people so be sure to arrive early! However, the aesthetic and casual atmosphere make it a must visit!")
      console.log("results B");
    }
    else if (maxScore == "C"){
      printString.text( "You are the classic tourist! Here are all the things you can check off your NYC bucket list- have fun! A must-see on your NYC expedition is Times Square. Known around the world for it's bright lights, city glam, and colorful billboards, this area draws 26 million people every year. After you take in the sights of the square, head towards the Statue of Liberty, where you can be given a guided tour of this historic statue that once welcomed immigrant sto ellis island. A gift from this has become one of america's most beloved trasures. Lastly, stop by the brooklyn bridge for a beautiful view of the city and photos that will make your instagram feed! For some good eats, head to Levain Bakery where you can find delicious chocolate chip cookies and all pastries you could dream of. If you are feeling extremely touristy, you can head to Hard Rock Cafe and Bubba Gump Shrimp Company, which are tried and true classics. Enjoy your tourist adventure! ")
      console.log("results C");
      }
    else { printString.text( "You are looking for accessible options in the city! Here are some options that will accomodate your needs- have fun! Luckily, New York is very accomadating and some of the most sought-after sights are wheelchair accessible. Ellis Island, the 9/11 Memorial, and the Empire State Building all offer elevator access and are rated high for their accessibility. For dining, be sure to visit Carmine's Italian in New York City. Rated highly on yelp, it is a great place to visit. Catch NYC is also a great option and has really good cusine. Lastly, Le Cou Cou is a great bistro offering french delicacies. ")
    console.log("results D");
  }


});



var pic = $("#image");
var button = $('.genbutton');
button.on("click", showAttractions);
var attraction = ["Walk in Central Park", "Breakfast at Tiffiany's", "Take in outdoor theater at Shakespeare in the park", " Visit the Metropolitan Museum of Art", "Go see the Rockefeller Center and Top of the Rock Observation Deck","Walk on the Brooklyn Bridge and enjoy the view","Go see Lady Liberty","Go see the 9/11 Memorial and Museum and pay respects to the ones who lost their lives", "Go see the animal kingdom of NYC, at The Bronx Zoo Wildlife Conservation Society "]
function showAttractions(){
  event.preventDefault();
  var genAdd = $(".genAdd");
  var randomDec = Math.random();
  var randomNum  = randomDec * attraction.length;
  var index = Math.floor(randomNum);
  var chosen_attraction = attraction[index];
  if (index==0){
    pic.attr("src","https://upload.wikimedia.org/wikipedia/commons/0/05/Southwest_corner_of_Central_Park%2C_looking_east%2C_NYC.jpg");
  }
  else if (index == 1){
    pic.attr("src", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-blue-box-cafe-1-1510171385.jpg");
  }
  else if (index == 2){
    pic.attr("src", "https://media.timeout.com/images/102493839/1372/772/image.jpg");
  }
  else if (index == 3){
    pic.attr("src", "https://assets.newyorkbyrail.com/wp-content/uploads/2017/11/metropolotanmuseumofart_museums-NYC.jpg");
  }
  else if (index == 4){
    pic.attr("src", "https://cdn.getyourguide.com/img/tour_img-1531297-148.jpg");
  }
  else if (index == 5){
    pic.attr("src", "https://www.theobjectivestandard.com/wp-content/uploads/2018/05/Brooklyn-Bridge-1024x608.jpg");
  }
  else if (index == 6){
    pic.attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg");
  }
  else if (index == 7){
    pic.attr("src", "http://chqdaily.com/wp-content/uploads/2018/08/081718_Heritage_911_01.jpg");
  }
  else if (index == 8){
    pic.attr("src", "https://www.nycgo.com/images/venues/143/bronxzoo_christopherpostlewaite_8065__x_large.jpg");
  }
  genAdd.text(`${chosen_attraction}`);
}
