import PaymentApi from "../api/paymentsApi";
import { COUNTRIES } from "./CONSTANTS";

export const getCountryCurrency = async ( periodMonths, country, setCurrency, setSubtotal, setTotal, savings ) =>
{
    const selectedCountry = COUNTRIES.find( ( c ) => c.label === country );
    console.log( 'selectedCountry', selectedCountry );
    if ( selectedCountry && selectedCountry.label != 'Chile' )
    {
        const months = periodMonths === 'yearly' ? 12 : 1;
        const response = await PaymentApi.convertCurrency( selectedCountry.currency, months ); // Pass the currency
        setSubtotal( response.rate );
        setTotal( response.rate - savings );
        setCurrency( selectedCountry.currency );
        return;
    }
};