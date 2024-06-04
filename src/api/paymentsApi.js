import nirvanaAxios from "./nirvanaAxios";

/**
 * PaymentApi class to handle API calls related to payment operations.
 */
class PaymentApi
{
    /**
    * Initializes a payment with the given payload.
    * 
    * @param {Object} payload - The payload containing payment details.
    * @returns {Promise<Object>} - The response data from the API.
    * @throws {Error} - Throws an error if the API call fails.
    */

    static async initPayment ( payload )
    {
        try
        {
            const response = await nirvanaAxios.post( '/payment', payload );
            return response.data;
        } catch ( error )
        {
            // Handling errors for axios
            if ( error.response )
            {
                // The server responded with a status other than 2xx
                console.error( 'Error en la respuesta del servidor', error.response );
                console.error( 'Datos:', error.response.data );
                console.error( 'Estado:', error.response.status );
                console.error( 'Encabezados:', error.response.headers );
                throw new Error( `Error en la respuesta del servidor: ${ error.response.status } - ${ error.response.data }` );
            } else if ( error.request )
            {
                // The request was made but no response was received
                console.error( 'No hubo respuesta del servidor', error.request );
                throw new Error( 'No hubo respuesta del servidor' );
            } else
            {
                // Something happened in setting up the request
                console.error( 'Error al configurar la solicitud', error.message );
                throw new Error( `Error al configurar la solicitud: ${ error.message }` );
            }
        }
    }

    /**
     * Convert the current currency depending on the selected country.
     * 
     * @param {Object} toCurrency - The payload containing currency details. E.g.: 'AUD'.
     * @returns {Promise<Object>} - The response data from the API.
     * @throws {Error} - Throws an error if the API call fails.
    */
    static async convertCurrency ( toCurrency, months )
    {
        console.log('CONVERSION API', toCurrency, months)
        try
        {
            const response = await nirvanaAxios.get( `/payment/currency_converter?to_currency=${ toCurrency }&months=${months}` );
            return response.data;
        } catch ( error )
        {
            // Handling errors for axios
            if ( error.response )
            {
                // The server responded with a status other than 2xx
                console.error( 'Error en la respuesta del servidor', error.response );
                console.error( 'Datos:', error.response.data );
                console.error( 'Estado:', error.response.status );
                console.error( 'Encabezados:', error.response.headers );
                throw new Error( `Error en la respuesta del servidor: ${ error.response.status } - ${ error.response.data }` );
            } else if ( error.request )
            {
                // The request was made but no response was received
                console.error( 'No hubo respuesta del servidor', error.request );
                throw new Error( 'No hubo respuesta del servidor' );
            } else
            {
                // Something happened in setting up the request
                console.error( 'Error al configurar la solicitud', error.message );
                throw new Error( `Error al configurar la solicitud: ${ error.message }` );
            }
        }
    }
}


export default PaymentApi;