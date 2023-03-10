/* Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? */


const ulEl = document.querySelector(".list_el");
console.log(ulEl);

let liEl;
const fizz = String("fizz")
console.log(fizz)
const buzz = String("buzz")
console
const fizzbuzz = String("fizzbuzz")



for (let index=1; index <= 100 ; index++){
    let listElement = `<li class="li_el py-2 px-3 rounded-3"></li>`

    if (index % 3==0 && index % 5==0){
        console.log(fizzbuzz)
        listElement = `<li class="li_el p-2 rounded-3 bg-light">${fizzbuzz}</li>`;
    }

    else if (index % 3==0){  
        console.log(fizz);
        listElement = `<li class="li_el p-2 rounded-3 bg-dark text-light">${fizz}</li>`;
    }

    else if (index % 5==0){
        console.log(buzz);
        listElement = `<li class="li_el p-2 rounded-3 bg-warning">${buzz}</li>`;
    }

    else {
    console.log(index)
    listElement = `<li class="li_el p-2 rounded-3">${index}</li>`;
    }


    
  ulEl.insertAdjacentHTML("beforeend", listElement)
}



