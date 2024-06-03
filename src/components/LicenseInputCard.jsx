import React from 'react';
import { useTranslation } from 'react-i18next';

const LicenseInputCard = ( { icon, title, color, onChange, licenseCode, errorLicense, onSubmit, isLoading } ) =>
{
    const [ t ] = useTranslation( "global" );
    return (
        <div className='flex flex-col gap-6 p-4 w-full dark:text-[#faf5e8] mt-4 invert-100 rounded-xl border-none  shadow-2xl hover:scale-110 duration-500 bg-[#343839] h-full glass'>
            <div className='flex items-center gap-4'>
                <div className={ `w-10 h-10 border-2  rounded-md flex justify-center items-center dark:text-[#faf5e8]` } style={ { borderColor: color } }>
                    { icon }
                </div>
                <p className={ `font-bold text-xl` }>
                    { title }
                </p>
            </div>
            <div>
                <input type="text" id="licenseCode" name={ licenseCode } onChange={ onChange } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="License-XXXX-XXXXX" required />
                { errorLicense ? <p className="text-red-500 text-sm mt-2">{ errorLicense }</p> : null }

                <button
                    onClick={ ( e ) => onSubmit( e ) }
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 mt-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    { isLoading ?
                        t( "applications.loaderMessage" ) :
                        t( "applications.titleSubmitLicenseButton" )
                    }
                </button>
            </div>
        </div>
    );
};

export default LicenseInputCard;
