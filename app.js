const temp = document.querySelector("form")

temp.addEventListener("submit", cvt_cel)

function cvt_cel(event){
    event.preventDefault()

    let temp_in_celsius = document.querySelector(".temp").value 

    if(temp_in_celsius === ""){
        alert("oops! Temp in celsius cannot be empty!")
    }else {
        let farenheit =  Number((temp_in_celsius) * 1.8 + 32 )
        let celsius = Number(temp_in_celsius)

      document.querySelector(".faren").innerHTML = farenheit.toFixed(1) + "F"
      document.querySelector(".celsius").innerHTML = celsius.toFixed(1) + "C"

    }


}
