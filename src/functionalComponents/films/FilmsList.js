import React, { useState } from "react"
import { movies } from '../../helpers/data'
import styled from "styled-components";

const Card = styled.div`
    img {
        width: 100%;
        max-width: 100%;
    }  
`

const FilmsList = (props) => {
    const [openedDescription, setOpenedDescription] = useState(null)

    const toggleReadMore = (id) => {
        setOpenedDescription(id)
    }

    const getShortDescription = (description) => {
        return description.substr(0, 80) + '...'
    }

    return (
        <>
            {
                movies.filter((movie) => {
                    if (movie.title.toLowerCase().includes(props.searchValue.toLowerCase()) || movie.description.toLowerCase().includes(props.searchValue.toLowerCase())) {
                        return true
                    }
                    if (props.searchValue === '') {
                        return movie
                    }
                    return false
                }).map((item) => {
                    return (
                        <Card key={item._id} className="card col-md-3 mb-4 me-4">
                            <img src={`./${item.img}`} className="card-img-top mb-4" alt="..." />
                            <h3>
                                {item.title}
                            </h3>
                            <div className="card-body">
                                <p className="card-text">
                                    {(openedDescription == item._id) ? item.description : getShortDescription(item.description)}
                                    <button className={'btn btn-link pt-0 pb-0'}
                                        onClick={() => toggleReadMore(item._id)}>{openedDescription == item._id ? 'Read less' : 'Read more'}</button>
                                </p>
                            </div>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default FilmsList

