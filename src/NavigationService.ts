import { NavigationActions } from 'react-navigation';

let _navigator:any;

function setTopLevelNavigator(navigatorRef:any) {
    _navigator = navigatorRef;
}

function navigate(routeName:any, params:any) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    )
    
}

function back() { 
    _navigator.dispatch(
        NavigationActions.back()
    );
}

export default {
    navigate,
    setTopLevelNavigator,
    back,
};