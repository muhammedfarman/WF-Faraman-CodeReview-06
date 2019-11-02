// ------- interfaces ------
//--location --
interface iloc{
	name:string;
	img:string;
	add:string;
	zip:number;
	city:string;

}
//--- resturant ---
interface iResturant{
	contact:number;
	wpage:string;
	type:string;
}
interface iEven{
	date:string;
	time:string;
	price:number;

}
abstract class Details{
	constructor(public name ,public img, public add , public zip , public city){

	}
	display(card) {
		$("#output").append(`<div class=" mb-4 col-lg-4 col-md-6 col-sm-12  card  [ is-collapsed ] ">
		<img class="card-img-top hidden-lg-down hidden-xs-down" src="${this.img}" width="100%">	
  <div class="card__inner [ js-expander ]">

	<span >${this.name} </span>
   
  </div>
  <div class=" card__expander">
	<i class="fa fa-close [ js-collapser ]"></i>
	<br><p > ${card} 	</p>
	

	<img class="img-thumbnail float-right ml-2 " src="${this.img}" width="20%" >
	
  </div>
</div>`)
	}

}
 
class loc extends Details implements iloc{
	constructor (name , img , add , zip , city){
		super(name ,img, add, zip , city );
	}
	display(){
		let card =`${this.add}<br>${this.zip}-${this.city}<br>`;
		super.display(card);
	}
}
class resturant extends Details implements iResturant{
	constructor(name , img , add ,zip , city , public contact , public wpage,public type){
		super(name,img,add,zip,city);
	}
	display(){
		let card= `${this.add}<br>
		${this.zip}-- ${this.city}<br>
		${this.contact}<br>
		<a href="${this.wpage}" target="_blank">${this.wpage}</a><br>
		<small>${this.type}</small>`;
		super.display(card);
	
	}
	
}
class even extends Details implements iEven{
	constructor (name , img , add , zip ,city, public date , public time , public price ){
		super(name , img , add , zip , city );
	}
	display(){
		let card =`${this.add}<br>
		${this.zip}-- ${this.city}<br>
		<strong>Event Date: ${this.date}${this.time}</strong><br>
		<span class="float-right text-danger">Price: <del>${this.price}</del></span>`;
		super.display(card);
	}
}
let Cards=[
	new loc ("Chernobyl Amusement Parkr", "./img/chernobyl.jpg", "Pryp'yat', Kyiv Oblast", "01196", "Ukraine" ),
	new loc ("The Island of the Dolls", "./img/doll.jpg", "Island in Mexico City", "6666", "Mexico" ),
	new resturant ("Heart Attack Grill", "./img/heart.jpg", "450 Fermont street ", "89101", "Las Vegas", "+43 1 286 57 60", "http://www.heart-atack.com/", "American"),
	new even ("Spooktacular Boo", "./img/event1.jpg", "Dublin Zoo <br>Phoenix park , Dublin 8", "01123", "Dublin", "30.10.2019", "@14:00", "70,00€"),
	new even ("Creepy Night", "./img/creepynight.jpg", "Landstr Haupstr 38 ", "1030", "Wien", "31.10.2019", "@22:00", "5€"),
	
	new resturant ("Eternity", "./img/eternity.jpg", "Truskavets ", "666", "Ukraine", "+111111", "https://www.atlasobscura.com/places/eternity-restaurant", "Ukrainian"),
	new loc ("Chernobyl Amusement Parkr", "./img/chernobyl.jpg", "Pryp'yat', Kyiv Oblast", "01196", "Ukraine" ),
	new loc ("The Island of the Dolls", "./img/doll.jpg", "Island in Mexico City", "6666", "Mexico" ),
	new resturant ("Heart Attack Grill", "./img/heart.jpg", "450 Fermont street ", "89101", "Las Vegas", "+43 1 286 57 60", "http://www.heart-atack.com/", "American"),
	new even ("Spooktacular Boo", "./img/event1.jpg", "Dublin Zoo <br>Phoenix park , Dublin 8", "01123", "Dublin", "30.10.2019", "@14:00", "70,00€"),
	new even ("Creepy Night", "./img/creepynight.jpg", "Landstr Haupstr 38 ", "1030", "Wien", "31.10.2019", "@22:00", "5€"),
	
	new resturant ("Eternity", "./img/eternity.jpg", "Truskavets ", "666", "Ukraine", "+111111", "https://www.atlasobscura.com/places/eternity-restaurant", "Ukrainian"),
]
function output(Cards){
for (let one of Cards){
	one.display();
}
}
output(Cards);

//-------- open and close cards -------///
var $cell = $('.card');
$cell.find('.js-expander').click(function() {

	var $thisCell = $(this).closest('.card');
  
	if ($thisCell.hasClass('is-collapsed')) {
	  $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
	  $thisCell.removeClass('is-collapsed').addClass('is-expanded');
	  
	  if ($cell.not($thisCell).hasClass('is-inactive')) {
		//do nothing
	  } else {
		$cell.not($thisCell).addClass('is-inactive');
	  }
  
	} else {
	  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
	  $cell.not($thisCell).removeClass('is-inactive');
	}
  });
  
  //close card when click on cross
  $cell.find('.js-collapser').click(function() {
  
	var $thisCell = $(this).closest('.card');
  
	$thisCell.removeClass('is-expanded').addClass('is-collapsed');
	$cell.not($thisCell).removeClass('is-inactive');
  
  });
// //-------- ADD NEW  -------///
//   function createLocationEntry() {
//     var newEntry = new loc($("#name").val(),$("#image").val(),$("#address").val(), $("#zip").val(), $("#city").val(),   new Date(), $("#output").val());
//     Cards.push(newEntry);
//     $("#output").empty();
//     output(Cards);
// }
// function createRestaurantEntry() {
//     var newEntry = new restaurant($("#name2").val(), $("#image2").val(), $("#address2").val(), $("#zip2").val(), $("#city2").val(), new Date(), $("#phone").val(), $("#website").val(), $("#typeFood").val());
//     Cards.push(newEntry);
//     $("#output").empty();
//     output(Cards);
// }
// function createEventEntry() {
//     var newEntry = new even($("#name3").val(), $("#image3").val(), $("#address3").val(), $("#zip3").val(), $("#city3").val(), new Date(), $("#date").val(), $("#time").val(), $("#price").val(),);
//     Cards.push(newEntry);
//     $("#output").empty();
// 	output(Cards);
// }

// // -------- Search -------///
// s