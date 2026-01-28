import { View, Text } from "react-native";

const WelcomeCard = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text>
        {" "}
        TITLE : {title} : {"\n"} {subtitle}
      </Text>
    </View>
  );
};

const styles = {
  container: {
    marginTop: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
};

export default WelcomeCard;
