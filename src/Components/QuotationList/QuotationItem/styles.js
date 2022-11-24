import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        width: "95%",
        height: "auto",
        backgroundColor: "#161717",
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyCotent: 'center'
    },
    logoBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftContent: {
        alignItems: 'flex-start',
        width: "36%",

    },
    currencyImg: {
        width: 40,
        height: 40,
        marginLeft: 2
    },
    date: {
        fontSize: 16,
        paddignLeft: 2,
        color: '#fff',
        fontWeight: 'bold'
    },
    rightContent: {
        alignItems: 'flex-end',
        width: "60%",
        
    },
    price: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})