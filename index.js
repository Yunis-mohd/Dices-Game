let random1=Math.floor(Math.random()*6)+1;
console.log(random1);
let random2=Math.floor(Math.random()*6)+1;
console.log(random2);
if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 Win!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Win!";
}
if(random1===random2){
    document.querySelector("h1").innerHTML="Draw!   ";
}
switch(random1){
    case 1:
        document.querySelector(".one").src="one.png";
        break;
        case 2:
            document.querySelector(".one").src="two.png";
            break;
            case 3:
                document.querySelector(".one").src="three.png";
                break;
                case 4:
                    document.querySelector(".one").src="four.png";
                    break;
                    case 5:
                        document.querySelector(".one").src="five.png";
                        break;
                        case 6:
                            document.querySelector(".one").src="six.png";
                            break;
}
switch(random2){
    case 1:
        document.querySelector(".two").src="one.png";
        break;
        case 2:
            document.querySelector(".two").src="two.png";
            break;
            case 3:
                document.querySelector(".two").src="three.png";
                break;
                case 4:
                    document.querySelector(".two").src="four.png";
                    break;
                    case 5:
                        document.querySelector(".two").src="five.png";
                        break;
                        case 6:
                            document.querySelector(".two").src="six.png";
                            break;
}