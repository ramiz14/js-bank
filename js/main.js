var value= document.getElementById('ay')
var btn=document.getElementById('btn')
var result=document.getElementById('result')
value.onchange = () =>{
    btn.onclick=function calc() {
        var mny = document.getElementById('mny').value
        var prc= document.getElementById('prc').value  
        var cem=(Number(mny)*Number(prc)/100)+Number(mny)
        console.log(value.value);
        switch (Number(value.value)) {
            case 1:
                result.innerHTML=(cem/6)
                break;
            case 2:
                result.innerHTML=(cem/12)
            break;
            case 3:
                result.innerHTML=(cem/18)
            break;
            case 4:
                result.innerHTML=(cem/24)
            break;
            case 5:
                result.innerHTML=(cem/36)
            break;
        
            default:
            break;
        }
    }
    
}
