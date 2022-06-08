const shippingOptions = {
    "collect": {
        "label": 'Collect',
        "value": '$0.00',
    },
    "nextDay": {
        "label": 'Next Day',
        "value": '$50.00',
    },
    "nextDayAir": {
        "label": 'Next Day Air',
        "value": '$300.00',
    }
}

$log(shippingOptions);

function UPSCharges(options) {
    Object.values(options).forEach(option => {
        console.log(option.label, option.value);
        let list = document.getElementById('UPS');
        let el = document.createElement('li');
        el.innerHTML = `${option.labe}: ${option.value}`;
        list.appendChild(el)
    })
}

UPSCharges(shippingOptions);