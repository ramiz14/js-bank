var value= document.getElementById('ay')
var btn=document.getElementById('btn')
var result=document.getElementById('result')
var sum=document.getElementById('sum')
value.onchange = () =>{
    btn.onclick=function calc() {
        var mny = document.getElementById('mny').value
        var prc= document.getElementById('prc').value  
        var cem=(Number(mny)*Number(prc)/100)+Number(mny)
        sum.innerHTML=`Ümumi Borcunuz ${cem}`
        switch (Number(value.value)) {
            case 1:
                result.innerHTML=`Ayliq Odenis ${(cem/6) }`
                break;
            case 2:
                result.innerHTML=`Ayliq Odenis ${(cem/12) }`
            break;
            case 3:
                result.innerHTML= `Ayliq Odenis ${(cem/18)}`
            break;
            case 4:
                result.innerHTML= `Ayliq Odenis ${(cem/24)}`
            break;
            case 5:
                result.innerHTML= `Ayliq Odenis ${(cem/36)}`
            break;
        
            default:
            break;
        }
    }
    
}
