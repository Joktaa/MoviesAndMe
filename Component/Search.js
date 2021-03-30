import React from 'react';
import { View, Button, TextInput, StyleSheet, FlatList, ActivityIndicator, Text } from 'react-native';
import FilmItem from './FilmItem';
import { getFilmsFromApiSearchedText } from '../API/TMDBapi'

class Search extends React.Component {
    
    constructor(props) {
        super(props)
        this.page = 0;
        this.totalPages = 0;
        this.state = {
            films: [],
            isLoading: false
        }
        this.searchedText = ""
    }

    _loadFilms() {
        this.setState({isLoading: true})
        if (this.searchedText.length > 0){
            getFilmsFromApiSearchedText(this.searchedText, this.page+1).then((res) => {
                this.page = res.page;
                this.totalPages = res.total_pages
                this.setState({
                    films: this.state.films.concat(res.results),
                    isLoading: false
                })})
        }
        
    }

    _searchedTextInputChanged(text) {
        this.searchedText = text;
    }

    _displayLoading() {
        if(this.state.isLoading){
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
    }

    _searchFilms(){
        this.page = 0;
        this.totalPages = 0;
        this.setState({films: []});
        this._loadFilms();
    }

    _displayDetailForFilm = (_idFilm) => {
        this.props.navigation.navigate("FilmDetail", {idFilm: _idFilm});
    }

    render(){
        return (
            <View style={styles.main_container}>
                <TextInput onChangeText={(text) => this._searchedTextInputChanged(text)}
                    onSubmitEditing={() => this._searchFilms()}
                    style={styles.textinput}
                    placeholder="Titre du film"
                    returnKeyType={'go'}/>
                <Button style={{ height: 50 }} title="Rechercher" onPress={() => this._searchFilms()}/>
                <FlatList 
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if(this.page < this.totalPages) {
                            this._loadFilms()
                        }
                    }}
                    renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm}/>}
                />
                {this._displayLoading()}
            </View>
        )}
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },

    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Search;