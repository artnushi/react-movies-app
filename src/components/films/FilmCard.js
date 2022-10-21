import React, { Component } from 'react'
import styled from 'styled-components'
import { movies } from '../../helpers/data'

class FilmCard extends Component {
  state = {
    toggleReadMore: false,
    readMorebuttonText: 'Read more',
    searchValue: ''
  }

  toggleReadMore = () => {
    const { toggleReadMore } = this.state

    if (!toggleReadMore) {
      this.setState({
        readMorebuttonText: 'Read less',
        toggleReadMore: true
      })
    } else {
      this.setState({
        readMorebuttonText: 'Read more',
        toggleReadMore: false
      })
    }
  }

  readMoreOrLess = (description) => {
    const { toggleReadMore } = this.state

    if (!toggleReadMore && description.length > 80) {
      return description.substr(0, 80) + '...'
    } else {
      return description
    }
  }

  renderMovies = () => {
    const { readMorebuttonText } = this.state

    return movies.filter((movie) => {
      if (movie.title.toLowerCase().includes(this.state.searchValue.toLowerCase()) || movie.description.toLowerCase().includes(this.state.searchValue.toLowerCase())) {
        return true
      }

      if (this.state.searchValue === '') {
        return movie
      }

      return false
    }).map((item) => {
      return (
                <Card key={item._id} className="card col-md-3 mb-4 me-4">
                    <img src={`./${item.img}`} className="card-img-top mb-4" alt="..."/>

                    <h3>
                        {item.title}
                    </h3>
                    <div className="card-body">
                        <p className="card-text">
                            {this.readMoreOrLess(item.description)}
                            <button className={'btn btn-link pt-0 pb-0'}
                                    onClick={this.toggleReadMore}>{readMorebuttonText}</button>
                        </p>
                    </div>
                </Card>
      )
    })
  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value })
  }

  render () {
    return (
            <>

                <div className="mb-3">
                    <label htmlFor="search-movies" className="form-label">Search movies</label>
                    <input type="text" className="form-control" name="search_movies" onChange={this.handleChange} value={this.state.searchValue} aria-describedby="search-movies" />
                </div>

                <div className="row">
                    {this.renderMovies()}
                </div>
            </>
    )
  }
}

const Card = styled.div`
    img {
        width: 100%;
        max-width: 100%;
    }  
`

export default FilmCard
