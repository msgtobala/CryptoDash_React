import React from "react";

import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButon';
import Page from '../Shared/Pages';
import CoinGrid from './CoinGrid';

const Settings = () => {
    return (
        <Page name="Settings">
            <WelcomeMessage />
            <ConfirmButton btnName={"Confirm Favorites"}/>
            <CoinGrid />
        </Page>
    )
}

export default  Settings;