import { Outlet } from "react-router-dom";

import React, {useEffect, useRef, useState} from 'react'


const SubscriptionPage = () =>
{


  return (
    <div className='dark:bg-darkBg bg-lightBg' style={ { backgroundSize: "cover" } }>
      
      <Outlet />
    </div>
  );
};

export default SubscriptionPage;