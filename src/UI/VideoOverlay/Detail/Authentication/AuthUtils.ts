import { Environments } from "Global/EBS/ebs";
import EBS from 'Global/EBS/ebs';
import { Localizer } from "Global/Localizer/Localizer";
import ViewerStateDataStore from '../../../../Global/DataStore/ViewerStateDataStore';
import PubSubDataStore from '../../../../Global/DataStore/PubSubDataStore';

export class AuthUtils
{

    private static connectUrl = `${Environments[EBS.env + "Bnet"]}/${Localizer.CurrentCultureName}/twitch-ext/link`;

    public static onLinkingClosed = (isConfig: boolean = false) =>
    {
        ViewerStateDataStore.refresh();
        PubSubDataStore.refreshStreamerState(isConfig);
    };
    
    public static openAuthLinkWindow = (isConfig: boolean = false) =>
    {
        const height = 790;
        const width = 627;
        const left = (window.screen.availWidth / 2) - (width / 2);
        const top = (window.screen.availHeight / 2) - (height / 2);
        const child = window.open(AuthUtils.connectUrl, "connect", `height=${height},width=${width},left=${left},top=${top},menubar=no,location=no,resizable=no,scrollbars=yes,status=no,toolbar=no`);
        const waitForClose = setInterval(() =>
        {
            if (child?.closed)
            {
                AuthUtils.onLinkingClosed(isConfig);
                clearInterval(waitForClose);
            }
        }, 100);
    }
}