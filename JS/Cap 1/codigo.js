
moneyCofla = prompt("How much money does Cofla haves?");
moneyRoberto = prompt("How much money does Roberto haves?");
moneyPedro = prompt("How much money does Pedro haves?");

moneyCofla = parseInt(moneyCofla);
moneyRoberto = parseInt(moneyRoberto);
moneyPedro = parseInt(moneyPedro);

if (moneyCofla >= 0.6 && moneyCofla < 1) {
    alert("Cofla, Buy the Ice lolly");
    alert("and your change is " + (moneyCofla - 0.6));
}

else if (moneyCofla >= 1 && moneyCofla < 1.6) {
    alert("Cofla, Buy the Ice Cream");
    alert("and your change is " + (moneyCofla - 1));
}

else if (moneyCofla >= 1.6 && moneyCofla < 1.7) {
    alert("Cofla, Buy the Heladix ice cream");
    alert("and your change is " + (moneyCofla - 1.6));
}

else if (moneyCofla >= 1.7 && moneyCofla < 1.8) {
    alert("Cofla, Buy the Heladovich ice cream");
    alert("and your change is " + (moneyCofla - 1.7));
}

else if (moneyCofla >= 1.8 && moneyCofla < 2.9) {
    alert("Cofla, Buy the Helardo ice cream");
    alert("and your change is " + (moneyCofla - 1.8));
}

else if (moneyCofla >= 2.9) {
    alert("Cofla, Buy the Candy ice cream or the 1/4 KG ice cream");
    alert("and your change is " + (moneyCofla - 2.9));

} else {
    alert("Cofla doesnt have enough money for ice cream");
}

if (moneyRoberto >= 0.6 && moneyRoberto < 1) {
    alert("Roberto, Buy the Ice lolly");
    alert("and your change is " + (moneyRoberto - 0.6));
}

else if (moneyRoberto >= 1 && moneyRoberto < 1.6) {
    alert("Roberto, Buy the Ice Cream");
    alert("and your change is " + (moneyRoberto - 1));
}
else if (moneyRoberto >= 1.6 && moneyRoberto < 1.7) {
    alert("Roberto, Buy the Heladix ice cream");
    alert("and your change is " + (moneyRoberto - 1.6));
}
else if (moneyRoberto >= 1.7 && moneyRoberto < 1.8) {
    alert("Roberto, Buy the Heladovich ice cream");
    alert("and your change is " + (moneyRoberto - 1.7));
}
else if (moneyRoberto >= 1.8 && moneyRoberto < 2.9) {
    alert("Roberto, Buy the Helardo ice cream");
    alert("and your change is " + (moneyRoberto - 1.8));
}

else if (moneyRoberto >= 2.9) {
    alert("Roberto, Buy the Candy ice cream or the 1/4 KG ice cream");
    alert("and your change is " + (moneyRoberto - 2.9));
} else {
    alert("Roberto doesnt have enough money for ice cream");
}

if (moneyPedro >= 0.6 && moneyPedro < 1) {
    alert("Pedro,  Buy the Ice lolly");
    alert("and your change is " + (moneyPedro - 0.6));
}

else if (moneyPedro >= 1 && moneyPedro < 1.6) {
    alert("Pedro,  Buy the Ice Cream");
    alert("and your change is " + (moneyPedro - 1));
}
else if (moneyPedro >= 1.6 && moneyPedro < 1.7) {
    alert("Pedro,  Buy the Heladix ice cream");
    alert("and your change is " + (moneyPedro - 1.6));
}
else if (moneyPedro >= 1.7 && moneyPedro < 1.8) {
    alert("Pedro,  Buy the Heladovich ice cream");
    alert("and your change is " + (moneyPedro - 1.7));
}
else if (moneyPedro >= 1.8 && moneyPedro < 2.9) {
    alert("Pedro,  Buy the Helardo ice cream");
    alert("and your change is " + (moneyPedro - 1.8));
}

else if (moneyPedro >= 2.9) {
    alert("Pedro,  Buy the Candy ice cream or the 1/4 KG ice cream");
    alert("and your change is " + (moneyPedro - 2.9));

} else {
    alert("Pedro doesnt have enough money for ice cream");
}
