import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getImageFromApi } from '../API/TMDBapi'
import moment from 'moment'

class FilmItem extends React.Component {
    _formatDate(date){
        return moment(date).format('D/MM/YYYY')
    }

    _displayFavoriteImage() {
        if(this.props.favorite) {
            sourceImage = require('../data/ic_favorite.png')
        

            return (
                <Image
                    source={sourceImage}
                    style={styles.favorite_image}
                />
            )
        }
    }

    render(){
        const film = this.props.film
        const displayDetailForFilm = this.props.displayDetailForFilm
        const url_image = getImageFromApi(film.poster_path)
        return (
            <TouchableOpacity 
                style={styles.global}
                onPress={() => displayDetailForFilm(film.id)}>
                <Image style={styles.image} source={{ uri: url_image }}/>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.titre}>{this._displayFavoriteImage()}{film.title}</Text>
                        <Text style={styles.vote}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.date_text}>Sorti le {this._formatDate(film.release_date)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )}
}

const styles = StyleSheet.create({
    // VIEWS //
    global: {
        height: 190,
        flexDirection: 'row'
    },

    content: {
        flex: 2,
        flexDirection: 'column',
        margin: 5
    },

    header: {
        flex: 3,
        flexDirection: 'row'
    },

    description: {
        flex: 7,
    },

    date: {
        flex: 1
    },

    // AUTRES
    image: {
        flex: 1,
        margin: 5,
        width: 120,
        height: 180
    },

    favorite_image: {
        width: 30,
        height: 30,
    },

    titre: {
        flex : 1,
        fontWeight: 'bold',
        fontSize: 20,
        flexWrap: 'wrap',
        paddingRight: 5
    },

    vote: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },

    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },

    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
})

export default FilmItem