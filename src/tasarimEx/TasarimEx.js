import * as React from "react";
import {
    StyleSheet,
    FlatList,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image
} from "react-native";
import {useState} from "react";


const TasarimEx = props => {

    const [promotion, setPromotion] = useState([
        {id:1, title:'January Offer', description:'Get cashback up to 30% for all transaction'},
        {id:2, title:'February Offer', description:'Get cashback up to 30% for all transaction'},
        {id:3, title:'March Offer', description:'Get cashback up to 30% for all transaction'}
    ])

    const renderItem = ({item}) => {
        return <View style={styles.promotionItem}>
            <Text style={styles.promotionItemTitle}>{item.title}</Text>
            <Text style={styles.promotionItemDescription}>{item.description}</Text>
        </View>
    }

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View>
                    <Text style={{color:'#535353', fontSize:18, fontWeight:'500', marginBottom:3}}>Hi, Sanjeev</Text>
                    <Text style={{color:'#FBA346', fontSize:15}}>Sarjapur, Banglore</Text>
                </View>
                <View>
                    <Image source={{uri: "https://images.unsplash.com/photo-1625635284498-f5744e059a71"}} style={styles.avatar}/>
                </View>
            </View>
            <View style={styles.banner}>
                <Text style={styles.bannerText}>Best Safety Standarts amid Covid -19</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.searchArea}>
                    <View style={styles.searchInputContainer}>
                        <TextInput
                            placeholder={"Search"}
                            placeholderTextColor={"#BBBBBB"}
                            style={styles.searchInput}></TextInput>
                    </View>
                    <View style={styles.searchButtonContainer}>
                        <TouchableOpacity style={styles.searchButton}><Text>ara</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.promotion}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={promotion}
                        renderItem={renderItem}
                    />
                </View>
            </View>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 40,
        alignItems: 'center'
    },
    avatar:{
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#373A3D'
    },
    banner:{
        backgroundColor: '#FBA346',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bannerText:{
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 14
    },
    content:{
        paddingHorizontal: 20
    },
    searchArea:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15
    },
    searchInput:{
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#E3E3E3"
    },
    searchButton: {

    },
    searchInputContainer:{
        flex:1,
        borderRadius: 10,
        shadowColor: "#E3E3E3",
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'white'
    },
    searchButtonContainer:{
        marginLeft: 15,
        borderRadius: 10,
        padding: 15,
        shadowColor: "#E3E3E3",
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
    },
    promotion: {
        marginTop: 20
    },
    promotionItem:{
        backgroundColor: 'red',
        padding: 20,
        flex: 1,
        width: 280,
        marginRight: 5,
        marginLeft: 5,
        height: 152,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    promotionItemTitle: {
        color: '#A44200',
        fontSize: 25,
        fontWeight: '500'
    },
    promotionItemDescription: {
        color: 'white',
        marginTop: 20,
        fontSize: 18,
        fontWeight: '500'
    }
});


export default TasarimEx;