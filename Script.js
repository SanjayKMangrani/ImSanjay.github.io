document.querySelector('.SideIcon').style.display='none';
document.querySelector('.SideMenu').addEventListener("click",()=>{
    document.querySelector('.navbar').classList.toggle('navbarGo')
    if(document.querySelector('.navbar').classList.contains('navbarGo')){
        document.querySelector('.SideIcon').style.display='inline';
        document.querySelector('.CrossIcon').style.display='none';
    }
    else{
        document.querySelector('.SideIcon').style.display='none';
        setTimeout(()=>{
            document.querySelector('.CrossIcon').style.display='inline';
        },300);
    }
})

const from_currencyEl = document.getElementById('from_currency');
const from_ammountEl = document.getElementById('from_ammount');
const to_currencyEl = document.getElementById('to_currency');
const to_ammountEl = document.getElementById('to_ammount');
const LastDate=document.getElementById('DateInner');
//const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');

from_currencyEl.addEventListener('change', calculate);
from_ammountEl.addEventListener('input', calculate);
to_currencyEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);

exchange.addEventListener('click', () => {
	const temp = from_currencyEl.value;
	from_currencyEl.value = to_currencyEl.value;
	to_currencyEl.value = temp;
	calculate();
});

function calculate() {

    console.log("called")
	const from_currency = from_currencyEl.value;
	const to_currency =  to_currencyEl.value;
	
	fetch(`https://floatrates.com/daily/${from_currency}.json`)
		.then(res => res.json())
		.then(res => {
            
		const rate = res[to_currency].rate;
        const date=res[to_currency].date;
        console.log(date)
		to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
        LastDate.innerHTML=date;

	})
}


calculate();