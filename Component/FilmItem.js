import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class FilmItem extends React.Component {
    render(){
        const film = this.props.film
        return (
            <View style={styles.global}>
                <Image style={styles.image}/>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.titre}>{film.title}</Text>
                        <Text style={styles.vote}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
                    </View>
                </View>
            </View>
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
        backgroundColor: 'grey',
        margin: 5,
        width: 120,
        height: 180
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