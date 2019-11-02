var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Details = /** @class */ (function () {
    function Details(name, img, add, zip, city) {
        this.name = name;
        this.img = img;
        this.add = add;
        this.zip = zip;
        this.city = city;
    }
    Details.prototype.display = function (card) {
        $("#output").append("<div class=\" mb-4 col-lg-4 col-md-6 col-sm-12  card  [ is-collapsed ] \">\n\t\t<img class=\"card-img-top hidden-lg-down hidden-xs-down\" src=\"" + this.img + "\" width=\"100%\">\t\n  <div class=\"card__inner [ js-expander ]\">\n\n\t<span >" + this.name + " </span>\n   \n  </div>\n  <div class=\" card__expander\">\n\t<i class=\"fa fa-close [ js-collapser ]\"></i>\n\t<br><p > " + card + " \t</p>\n\t\n\n\t<img class=\"img-thumbnail float-right ml-2 \" src=\"" + this.img + "\" width=\"20%\" >\n\t\n  </div>\n</div>");
    };
    return Details;
}());
var loc = /** @class */ (function (_super) {
    __extends(loc, _super);
    function loc(name, img, add, zip, city) {
        return _super.call(this, name, img, add, zip, city) || this;
    }
    loc.prototype.display = function () {
        var card = this.add + "<br>" + this.zip + "-" + this.city + "<br>";
        _super.prototype.display.call(this, card);
    };
    return loc;
}(Details));
var resturant = /** @class */ (function (_super) {
    __extends(resturant, _super);
    function resturant(name, img, add, zip, city, contact, wpage, type) {
        var _this = _super.call(this, name, img, add, zip, city) || this;
        _this.contact = contact;
        _this.wpage = wpage;
        _this.type = type;
        return _this;
    }
    resturant.prototype.display = function () {
        var card = this.add + "<br>\n\t\t" + this.zip + "-- " + this.city + "<br>\n\t\t" + this.contact + "<br>\n\t\t<a href=\"" + this.wpage + "\" target=\"_blank\">" + this.wpage + "</a><br>\n\t\t<small>" + this.type + "</small>";
        _super.prototype.display.call(this, card);
    };
    return resturant;
}(Details));
var even = /** @class */ (function (_super) {
    __extends(even, _super);
    function even(name, img, add, zip, city, date, time, price) {
        var _this = _super.call(this, name, img, add, zip, city) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    even.prototype.display = function () {
        var card = this.add + "<br>\n\t\t" + this.zip + "-- " + this.city + "<br>\n\t\t<strong>Event Date: " + this.date + this.time + "</strong><br>\n\t\t<span class=\"float-right text-danger\">Price: <del>" + this.price + "</del></span>";
        _super.prototype.display.call(this, card);
    };
    return even;
}(Details));
var Cards = [
    new loc("Chernobyl Amusement Parkr", "./img/chernobyl.jpg", "Pryp'yat', Kyiv Oblast", "01196", "Ukraine"),
    new loc("The Island of the Dolls", "./img/doll.jpg", "Island in Mexico City", "6666", "Mexico"),
    new resturant("Heart Attack Grill", "./img/heart.jpg", "450 Fermont street ", "89101", "Las Vegas", "+43 1 286 57 60", "http://www.heart-atack.com/", "American"),
    new even("Spooktacular Boo", "./img/event1.jpg", "Dublin Zoo <br>Phoenix park , Dublin 8", "01123", "Dublin", "30.10.2019", "@14:00", "70,00€"),
    new even("Creepy Night", "./img/creepynight.jpg", "Landstr Haupstr 38 ", "1030", "Wien", "31.10.2019", "@22:00", "5€"),
    new resturant("Eternity", "./img/eternity.jpg", "Truskavets ", "666", "Ukraine", "+111111", "https://www.atlasobscura.com/places/eternity-restaurant", "Ukrainian"),
    new loc("Chernobyl Amusement Parkr", "./img/chernobyl.jpg", "Pryp'yat', Kyiv Oblast", "01196", "Ukraine"),
    new loc("The Island of the Dolls", "./img/doll.jpg", "Island in Mexico City", "6666", "Mexico"),
    new resturant("Heart Attack Grill", "./img/heart.jpg", "450 Fermont street ", "89101", "Las Vegas", "+43 1 286 57 60", "http://www.heart-atack.com/", "American"),
    new even("Spooktacular Boo", "./img/event1.jpg", "Dublin Zoo <br>Phoenix park , Dublin 8", "01123", "Dublin", "30.10.2019", "@14:00", "70,00€"),
    new even("Creepy Night", "./img/creepynight.jpg", "Landstr Haupstr 38 ", "1030", "Wien", "31.10.2019", "@22:00", "5€"),
    new resturant("Eternity", "./img/eternity.jpg", "Truskavets ", "666", "Ukraine", "+111111", "https://www.atlasobscura.com/places/eternity-restaurant", "Ukrainian"),
];
function output(Cards) {
    for (var _i = 0, Cards_1 = Cards; _i < Cards_1.length; _i++) {
        var one = Cards_1[_i];
        one.display();
    }
}
output(Cards);
//-------- open and close cards -------///
var $cell = $('.card');
$cell.find('.js-expander').click(function () {
    var $thisCell = $(this).closest('.card');
    if ($thisCell.hasClass('is-collapsed')) {
        $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
        $thisCell.removeClass('is-collapsed').addClass('is-expanded');
        if ($cell.not($thisCell).hasClass('is-inactive')) {
            //do nothing
        }
        else {
            $cell.not($thisCell).addClass('is-inactive');
        }
    }
    else {
        $thisCell.removeClass('is-expanded').addClass('is-collapsed');
        $cell.not($thisCell).removeClass('is-inactive');
    }
});
//close card when click on cross
$cell.find('.js-collapser').click(function () {
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
//# sourceMappingURL=script.js.map