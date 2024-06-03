import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { COUNTRIES } from '../utils/CONSTANTS';
import PaymentCard from '../components/PaymentCard';
import { CircularProgress } from '@nextui-org/react';

const GetLicensePage = () =>
{
    const [ t ] = useTranslation( "global" );

    const [ loading, setLoading ] = useState();
    const [ rut, setRut ] = useState( "" );
    const [ name, setName ] = useState( "" );
    const [ lastname, setLastname ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ phone, setPhone ] = useState( "" );
    const [ city, setCity ] = useState( "" );
    const [ country, setCountry ] = useState( "" );
    const [ subscriptionType, setSubscriptionType ] = useState( "" );
    const [ periodMonths, setPeriodMonths ] = useState( "" );
    const [ userType, setUserType ] = useState( "open" );
    const [ formError, setFormError ] = useState( "" );
    const [ emailError, setEmailError ] = useState( "" );
    const [ subtotal, setSubtotal ] = useState( 0 );
    const [ savings, setSavings ] = useState( 0 );
    const [ total, setTotal ] = useState( 0 );
    const [currency, setCurrency] = useState("");

    useEffect(() => {
        if (currency){

            setCurrency(COUNTRIES[country].currency)
            console.log(COUNTRIES[country].currency)
        }
    }, [country])
    console.log(currency)



    const handleInputChange = ( event ) =>
    {
        const { name, value } = event.target;
        console.log( name, value );
        switch ( name )
        {
            case 'rut':
                setRut( value );
                break;
            case 'name':
                setName( value );
                break;
            case 'lastname':
                setLastname( value );
                break;
            case "email":
                if ( value.match( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ) )
                {
                    setEmail( value );
                    setEmailError( "" );
                } else
                {
                    setEmailError( t( "applications.errorEmailMessage" ) );
                }
                break;
            case 'phone':
                setPhone( value );
                break;
            case 'city':
                setCity( value );
                break;
            case 'country':
                setCountry( value );
                break;
            case 'subscriptionType':
                setSubscriptionType( value );
                break;
            case 'periodMonths':
                setPeriodMonths( value );
                break;
            case 'userType':
                setUserType( value );
                break;
            default:
                break;
        }
    };

    const handleSubmitForm = ( event ) =>
    {
        event.preventDefault();
        // /verify if a field is empty
        if (
            rut.trim() === "" ||
            name.trim() === "" ||
            lastname.trim() === "" ||
            email.trim() === "" ||
            phone.trim() === "" ||
            city.trim() === "" ||
            country.trim() === "" ||
            subscriptionType.trim() === "" ||
            periodMonths.trim() === "" ||
            userType.trim() === ""
        )
        {
            setFormError( t( "applications.errorFormMessage" ) );
            setTimeout(() => {
                setFormError( "" );
            }, 3000)
            return;
        }
        setFormError( "" );
        setLoading( true );

        const payload = {
            name: name,
            lastname: lastname,
            email: email,
            country: country,
            city: city,
            phone: phone,
            rut: rut,
            subscription_type: subscriptionType === "0" ? false : true,
            period_months: periodMonths,
            user_type: userType,
            months: periodMonths === 'yearly' ? 12 : 1,
        }
        console.log(payload)
        // Lógica para enviar el formulario
        // ...
        setLoading( false );
        console.log( "Formulario Enviado" );
    };

    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <form className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">


                    <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                        <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                            <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Checkout
                        </span>
                    </li>


                </ol>

                <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                    <div className="min-w-0 flex-1 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{ t( "applications.titleSectionPaymentForm" ) }</h2>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> { t( "applications.labelInputName" ) }* </label>
                                    <input onChange={ handleInputChange } name="name" type="text" id="name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Jhon" required />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> { t( "applications.labelInputLastname" ) }* </label>
                                    <input onChange={ handleInputChange } name="lastname" type="text" id="lastname" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Doe" required />
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> { t( "applications.labelInputEmail" ) }* </label>
                                    <input onChange={ handleInputChange } name="email" type="email" id="email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@mail.com" required />
                                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                                </div>

                                <div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-900 dark:text-white"> { t( "applications.labelInputCountry" ) }* </label>
                                    </div>

                                    <select onChange={ handleInputChange } name="country" id="country" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                        {
                                            COUNTRIES.map( ( country, index ) => (
                                                <option id={ index } value={ country.label }>{ country.label }</option>
                                            ) )
                                        }
                                    </select>
                                </div>

                                <div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <label htmlFor="select-city-input-3" className="block text-sm font-medium text-gray-900 dark:text-white"> { t( "applications.labelInputCity" ) }* </label>
                                    </div>
                                    <input onChange={ handleInputChange } name="city" type="city" id="city" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Santiago" required />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> { t( "applications.labelInputPhone" ) }* </label>
                                    <div className="flex items-center">

                                        <div className="relative w-full">
                                            <input onChange={ handleInputChange } name="phone" type="text" id="phone" className="z-20 block w-full rounded-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"  placeholder="1234567890" required />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="rut" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> { t( "applications.labelInputRut" ) }* </label>
                                    <input onChange={ handleInputChange } name="rut" type="text" id="rut" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="11111111-1" required />
                                </div>

                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{ t( "applications.titleSectionSubscriptionType" ) }</h3>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <PaymentCard
                                    title={ t( "applications.titleSubscriptionTypeBasic" ) }
                                    description={ t( "applications.descriptionSubscriptionTypeBasic" ) }
                                    onChange={ handleInputChange }
                                    name="subscriptionType"
                                    value={ "0" }
                                />
                                <PaymentCard
                                    title={ t( "applications.titleSubscriptionTypePro" ) }
                                    description={ t( "applications.descriptionSubscriptionTypePro" ) }
                                    onChange={ handleInputChange }
                                    name="subscriptionType"
                                    value={ "1" }
                                />

                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{ t( "applications.titleSectionPeriodMonths" ) }</h3>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                                <PaymentCard
                                    title={ t( "applications.titlePeriodMonthsMonthly" ) }
                                    description={ t( "applications.descriptionPeriodMonthsMonthly" ) }
                                    onChange={ handleInputChange }
                                    name="periodMonths"
                                    price={ import.meta.env.VITE_LICENSE_PRICE }
                                    value={ "monthly" }
                                />
                                <PaymentCard
                                    title={ t( "applications.titlePeriodMonthsYearly" ) }
                                    description={ t( "applications.descriptionPeriodMonthsYearly" ) }
                                    onChange={ handleInputChange }
                                    name="periodMonths"
                                    price={ import.meta.env.VITE_LICENSE_PRICE }
                                    value={ "yearly" }
                                />

                            </div>
                        </div>

                        {/* If we have a code for discounts */ }
                        {/* <div>
                            <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Enter a gift card, voucher or promotional code </label>
                            <div className="flex max-w-md items-center gap-4">
                                <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
                                <button type="button" className="flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply</button>
                            </div>
                        </div> */}
                    </div>

                    <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                        <div className="flow-root">
                            <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                                    <dd className="text-base font-medium text-gray-900 dark:text-white">$8,094.00</dd>
                                </dl>

                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                    <dd className="text-base font-medium text-green-500">0</dd>
                                </dl>

                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                    <dd className="text-base font-bold text-gray-900 dark:text-white">$8,392.00</dd>
                                </dl>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button onClick={(e) => handleSubmitForm(e)} type="button" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{ loading ? <CircularProgress /> : t( "applications.titleProceedPayment" ) }</button>
                            {formError && <p className="text-red-500">{formError}</p>}

                            {/* <p className="text-sm font-normal text-gray-500 dark:text-gray-400">One or more items in your cart require an account. <a href="#" title="" className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Sign in or create an account now.</a>.</p> */ }
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default GetLicensePage;