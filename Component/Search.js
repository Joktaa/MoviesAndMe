import React from 'react';
import { View, Button, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import FilmItem from './FilmItem';
import { getFilmsFromApiSearchedText } from '../API/TMDBapi'

class Search extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            films: []
        }
        this.searchedText = ""
    }

    _loadFilms() {
        if (this.searchedText.length > 0){
            getFilmsFromApiSearchedText(this.searchedText).then((res) => this.setState({films: res.results}))
        }
    }

    _searchedTextInputChanged(text) {
        this.searchedText = text;
    }

    render(){
        return (
            <View style={styles.main_container}>
                <TextInput onChangeText={(text) => this._searchedTextInputChanged(text)} style={styles.textinput} placeholder="Titre du film"/>
                <Button style={{ height: 50 }} title="Rechercher" onPress={() => this._loadFilms()}/>
                <FlatList 
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )}
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        flex: 1
    },

    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search;