import appleimg from "../image/apple.jpg";
import milkimg from "../image/milk.jpg";
import chesseimg from "../image/chesse.jpg";
import meatimg from "../image/meat.jpg";
import sec_appleimg from "../image/sec-apple-img.jpg";
import sec_milkimg from "../image/sec-milk-img.jpg";
import sec_chesseimg from "../image/sec-cheese-img.jpg";
import sec_meatimg from "../image/sec-meat-img.jpg";

const data = [{
  id: 0,
  title: "Apple",
  amount: 5.9,
  img: appleimg,
  sec_img: sec_appleimg,
  store: "shokishok",
  desc: "Big red apple",
},
{
  id: 1,
  title: "Milk",
  amount: 6.5,
  img: milkimg,
  sec_img: sec_milkimg,
  store: "shokishok-Rom",
  desc: "5% Oat Milk",
},
{
  id: 2,
  title: "Cheese",
  amount: 12.0,
  img: chesseimg,
  sec_img: sec_chesseimg,
  store: "shokishok-Maya",
  desc: "American Cheese",
},
{
  id: 3,
  title: "Meat",
  amount: 55.6,
  img: meatimg,
  sec_img: sec_meatimg,
  store: "shokishok-Rom&Maya",
  desc: "Fresh ground beef",
}]

  export default data;