function getData() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "uSi82B0MzVHpb9L3dEAoGJPaYxwyffa9");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch("https://api.apilayer.com/exchangerates_data/latest?&base=TRY", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result); 

            const TRY = result.rates.TRY;
            const USD = TRY / result.rates.USD;
            const EUR = TRY / result.rates.EUR;
            const GBP = TRY / result.rates.GBP;
            const AZN = TRY / result.rates.AZN;

            setData(USD, EUR, GBP, AZN);
        })
        .catch(error => console.log('error', error));
}

function setData(USD,EUR,GBP, AZN) {
    const dollar = document.getElementById('dollar');
    const euro = document.getElementById('euro');
    const sterlin = document.getElementById('sterlin');
    const manat = document.getElementById('manat');

    dollar.textContent = USD.toString().slice(0,5);
    euro.textContent = EUR.toString().slice(0,5);;
    sterlin.textContent = GBP.toString().slice(0,5);;
    manat.textContent = AZN.toString().slice(0,5);;
}
getData();

setInterval(()=>{
    getData();
},30000)

