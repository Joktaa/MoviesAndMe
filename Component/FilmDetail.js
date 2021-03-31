import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image } from 'react-native';
import { getFilmDetailFromApi, getBackgroundFromApi } from '../API/TMDBapi'
import moment from 'moment'
import numeral from 'numeral'

class FilmDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            film: undefined,
            isLoading: true
        }
    }

    componentDidMount(){
        getFilmDetailFromApi(this.props.route.params.idFilm).then(data => {
            this.setState({
                film:data,
                isLoading: false
            })
        })
    }

    _displayGenre(film){
        let res = ""
        let first = true
        film.genres.forEach(genre => {
            res += first ? "" : " / "
            res += genre.name
            first = false
        });
        return res;
    }

    _displayCompagnie(film){
        let res = ""
        let first = true
        film.production_companies.forEach(genre => {
            res += first ? "" : " / "
            res += genre.name
            first = false
        });
        return res;
    }

    _formatDate(date){
        return moment(date).format('D/MM/YYYY')
    }

    _formatMoney(money){
        return numeral(money).format('0,0[.]00 $')
    }

    _displayFilm() {
        const film = this.state.film
        if(film != undefined){
            console.log(getBackgroundFromApi(film.backdrop_path))
            console.log(film)
            console.log('-------------------------------------------------------')
            return(
                <ScrollView style={styles.scrollview_container}>
                    <Image
                    style={styles.image}
                    source={{ uri: getBackgroundFromApi(film.backdrop_path) }}/>
                    <Text style={styles.title}>{film.title}</Text>
                    <Text style={styles.overview}>{film.overview}</Text>
                    <Text style={styles.details}>Sorti le {this._formatDate(film.release_date)}</Text>
                    <Text style={styles.details}>Note: {film.vote_average} / 10</Text>
                    <Text style={styles.details}>Budget: {this._formatMoney(film.budget)}</Text>
                    <Text style={styles.details}>Genre(s): {this._displayGenre(film)}</Text>
                    <Text style={styles.details}>Compagnie(s): {this._displayCompagnie(film)}</Text>
                </ScrollView>
            )
        }
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


    render(){
        const idFilm = this.props.route.params.idFilm
        return(
          <View style={styles.main_container}>
              {this._displayFilm()}
              {this._displayLoading()}
          </View>  
        )}
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview_container: {
        flex: 1
    },

    // AUTRE //
    image: {
        margin: 5,
        height: 169
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        margin: 5

    },
    overview: {
        fontSize: 15,
        lineHeight: 20,
        color: 'grey',
        margin: 5,
        fontStyle: 'italic',
        marginBottom: 10
    },
    details: {
        fontSize: 15,
        margin: 2
    }
})

export default FilmDetail