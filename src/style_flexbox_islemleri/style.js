import { StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f00',
        //flexDirection: 'column',
        alignContent: 'flex-start',
        justifyContent: 'space-between'
    },
    textStyle:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 24
    },
    header:{
        flex: 2,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    main:{
        flexDirection: 'row',
        flex: 5,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#0f0'
    },
    side:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#f00'
    },
    content:{
        flex: 3,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#0f0'
    },
    footer:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#00f'
    }

});
