import countryToCurrency from "country-to-currency";
function convertirMoneda(nombrePais)
{
    let moneda = countryToCurrency[nombrePais];
    return moneda;

}

export {convertirMoneda};
