import {View, Text} from 'react-native';

type WelcomeCardProps = {
    title: string;
    subtitle: string;
}

const WelcomeCard = ({title, subtitle}) =>{
    return <View style = {styles.container}>
        <Text> TITLE : {title} {" "} : {"\n"} {subtitle}</Text>
    </View>;
}

const HomeScreen = () =>{
return <View>
    <WelcomeCard title="Welcome card 1" subtitle="this is card 1"/>
    <WelcomeCard title="Welcome card 2" subtitle="this is card 2"/>
    </View>
}

const styles = {
    container: {
        marginTop: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
};

export default HomeScreen;
