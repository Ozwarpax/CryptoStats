import React from "react";
import { FlatList, SafeAreaView, StyleSheet,StatusBar} from "react-native";
import { Title } from "react-native-paper";
import CardItem from "../components/Card";
import ErrorBox from "../components/ErrorBox";
import LoadingBox from "../components/LoadingBox";
import { UseCoinCap } from "../hooks/UseCoinCap";

export const CoinCapFeed =()=>{
    
    const { isLoading, isError, data } = UseCoinCap();

  if (isLoading) {
    return <LoadingBox />;
  }
  if (isError) {
    return <ErrorBox />;
  }
 

  const renderItem = ({ item }: any) => <CardItem {...item} />;
  
 
  
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Title style={styles.titre}>Crypto Currency</Title>
      <FlatList
        data={data.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {/* <View style={styles.container}>
        <Text>{JSON.stringify(data.results[0].name)}</Text>

      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: "lightgrey",
      marginTop: StatusBar.currentHeight || 0,
    },
    container: {
      paddingHorizontal: 20,
      marginTop: 20,
    },
    card: {
      backgroundColor: "white",
      width: 200,
      height: 50,
    },
    titre: {
      paddingTop: 40,
      margin: 20,
      fontSize: 40,
    },
  });