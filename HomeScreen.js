import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Text, Button, ScrollView, Modal } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function RecipeDetailsScreen({ route }) {
  const { recipe } = route.params;

  return (
    <View style={styles.recipeDetailsContainer}>
      <Text style={styles.recipeDetailsTitle}>{recipe.title}</Text>
      <Text style={styles.recipeDetailsText}>Ingredientes:</Text>
      <Text style={styles.recipeDetailsText}>- Ingrediente 1</Text>
      <Text style={styles.recipeDetailsText}>- Ingrediente 2</Text>
      <Text style={styles.recipeDetailsText}>- Ingrediente 3</Text>
      <Text style={styles.recipeDetailsText}>Modo de preparo:</Text>
      <Text style={styles.recipeDetailsText}>1. Passo 1</Text>
      <Text style={styles.recipeDetailsText}>2. Passo 2</Text>
      <Text style={styles.recipeDetailsText}>3. Passo 3</Text>
    </View>
  );
}

function HomeScreen() {
  const navigation = useNavigation();
  const recipes = [{ id: 1, title: 'Bolo de Chocolate' },
  { id: 2, title: 'Lasanha de Frango' },
  { id: 3, title: 'Sopa de Legumes' },
  { id: 4, title: 'Pão de Queijo' },
  { id: 5, title: 'Strogonoff de Carne' },
  { id: 6, title: 'Salada Caesar' },
  { id: 7, title: 'Pudim de Leite Condensado' },
  { id: 8, title: 'Arroz de Carreteiro' },
  { id: 9, title: 'Frango Xadrez' },
  { id: 10, title: 'Empadão de Frango' },
  { id: 11, title: 'Feijoada' },
  { id: 12, title: 'Pizza Margherita' },
  { id: 13, title: 'Sushi de Salmão' },
  { id: 14, title: 'Torta de Limão' },
  { id: 15, title: 'Mousse de Maracujá' },
  { id: 16, title: 'Risoto de Cogumelos' },
  { id: 17, title: 'Macarrão à Carbonara' },
  { id: 18, title: 'Quiche Lorraine' },
  { id: 19, title: 'Coxinha' },
  { id: 20, title: 'Pastel de Queijo' },
  { id: 21, title: 'Pão de Alho' },
  { id: 22, title: 'Camarão na Moranga' },
  { id: 23, title: 'Tiramisu' },
  { id: 24, title: 'Escondidinho de Carne Seca' },
  { id: 25, title: 'Ravióli de Queijo' },
  { id: 26, title: 'Brigadeiro' },
  { id: 27, title: 'Salpicão' },
  { id: 28, title: 'Molho Pesto' },
  { id: 29, title: 'Churrasco' },
  { id: 30, title: 'Bolo de Cenoura' },
  { id: 31, title: 'Salmão Grelhado' },
  { id: 31, title: 'Pizza Margherita' },
  { id: 32, title: 'Salada de Frutas' },
  { id: 33, title: 'Sanduíche de Frango' },
  { id: 34, title: 'Biscoitos de Chocolate' },
  { id: 35, title: 'Molho Pesto' },
  { id: 36, title: 'Tacos Mexicanos' },
  { id: 37, title: 'Guisado de Carne' },
  { id: 38, title: 'Salada Caprese' },
  { id: 39, title: 'Purê de Batata' },
  { id: 40, title: 'Pudim de Leite Condensado diet'}
  ];

  const [searchText, setSearchText] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipePress = (recipe) => {
    setSelectedRecipe(recipe);
    setModalVisible(true);
  };

  const handleSearch = () => {
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const renderRecipes = () => {
    const rows = Math.ceil(filteredRecipes.length / 3);
    const recipeRows = [];

    for (let i = 0; i < rows; i++) {
      const rowRecipes = filteredRecipes.slice(i * 3, i * 3 + 3);
      const recipeRow = (
        <View key={i} style={styles.row}>
          {rowRecipes.map((recipe) => (
            <TouchableOpacity
              key={recipe.id}
              style={styles.recipeCard}
              onPress={() => handleRecipePress(recipe)}
            >
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
      recipeRows.push(recipeRow);
    }

    return recipeRows;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Recipes"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>{renderRecipes()}</View>
      </ScrollView>

      <Modal visible={modalVisible} animationType="slide">
        <RecipeDetailsScreen route={{ params: { recipe: selectedRecipe } }} />
        <Button title="Close" onPress={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  recipeCard: {
    backgroundColor: '#F5F5F5',
    width: '30%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 8,
  },
  recipeTitle: {
    fontSize: 16,
    color: '#333333',
  },
  scrollView: {
    flex: 1,
  },
  recipeDetailsContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeDetailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  recipeDetailsText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default HomeScreen;
