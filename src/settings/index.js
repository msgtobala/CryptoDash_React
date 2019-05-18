import React from "react";

import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButon';

const Settings = () => {
    return (
        <div>
            <WelcomeMessage />
            <ConfirmButton btnName={"Confirm Favorites"}/>
        </div>
    )
}

export default  Settings;