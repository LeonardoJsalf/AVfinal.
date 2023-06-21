import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

const posts = [
  {
    id: '1',
    imageUrl: 'https://oxfordporcelanas.vteximg.com.br/arquivos/ids/171275/wdt-banner-meio-categogy-Chef-Prato-Spiral.jpg?v=637505628306930000',
    caption: 'Beautiful atun',
    likes: 123,
    comments: 7,
  },
  {
    id: '2',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBL9rAcaD13VV2EmQjKCC88g6MvzWN8Gfi0EjX1b2wIZYj7YGcDqMM7lN19hzPit65m9E&usqp=CAU',
    caption: 'salmon free',
    likes: 100,
    comments: 95,
  },
  {
    id: '2',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknYxiLIfMZF0wYfktbxg_ak_CQi8SC9n0z94-UUKurwVis8fkYOHptV36graSX92BGAE&usqp=CAU',
    caption: 'Delicious Salmon',
    likes: 456,
    comments: 300,
  },
];

const UserProfileScreen = () => {
  const route = useRoute();
  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      <View style={styles.postInfo}>
        <Text style={styles.postCaption}>{item.caption}</Text>
        <View style={styles.postStats}>
          <Text style={styles.postLikes}>{item.likes} likes</Text>
          <Text style={styles.postComments}>{item.comments} comments</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://www.casaportena.com.br/wp-content/uploads/2019/01/03_chef-team_550x740.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Chef John Doe</Text>
      </View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor:'#785B48', // Marrom escuro 
  },
   
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Bege claro
  },
  postContainer: {
    marginBottom: 16,
    
   
    borderRadius: 8,
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  postInfo: {
    padding: 16,
  },
  postCaption: {
    fontSize: 16,
    marginBottom: 8,
    color: '#fff', // Marrom médio
  },
  postStats: {
    flexDirection: 'row',
  },
  postLikes: {
    marginRight: 16,
    fontWeight: 'bold',
    color: '#fff', 
  },
  postComments: {
    fontWeight: 'bold',
    color: '#fff', 
  },
});

export default UserProfileScreen;
