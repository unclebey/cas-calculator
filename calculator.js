let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

innerText = 0;

buttons.map( button => {
    button.addEventListener("click", (a) => {
        switch(a.target.innerText){
            case "CE":
                display.innerText = "";
                break;
            case "=":
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case "DEL":
                if (display.innerText){
                    display.innerText = display.innerText.slice(0,-1);  
                }
                break;
            case "√":
                try{
                    display.innerText = eval(Math.sqrt(display.innerText));
                } catch{
                    display.innerText = "Math Error"
                }
                break;

                case "cos":
                    try{
                        display.innerText = eval(Math.cos(display.innerText));
                    } catch{
                        display.innerText = "Math Error"
                    }
                    break;

                case "sin":
                        try{
                            display.innerText = eval(Math.sin(display.innerText));
                        } catch{
                            display.innerText = "Math Error"
                        }
                        break;
                case "tan":
                            try{
                                display.innerText = eval(Math.tan(display.innerText));
                            } catch{
                                display.innerText = "Math Error"
                            }
                            break;
                case "e":
                                try{
                                    display.innerText = eval(Math.pow(display.innerText,2));
                                } catch{
                                    display.innerText = "Math Error"
                                }
                                break;

            default:
                display.innerText += a.target.innerText;
            
        }
    });
});
