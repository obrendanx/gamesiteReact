import React from 'react'
import AnimeCard from './AnimeCard'
import styled from '@emotion/styled'
import { css } from '@emotion/css'
import SearchBar from '../Form/SearchBar'

const AnimeContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
`

const AnimeGroup = styled.div`
    width:25%;
    margin:4.16%;
    text-align:center;
    @media screen and (max-width: 1200px){
        width:40%;
        margin:5% !important;
    }
    @media screen and (max-width: 770px){
        width:100%;
    }
`

function MainContent(props) {
  return (
    <div className={css`
        width:100%;
    `}>
        <main>
            <div>
                {/* 
                    Input for the anime search bar 
                    Search bar is used to send a query to the api 
                    which sends back a set of results
                */}
                <form onSubmit={props.HandleSearch} >
                     <SearchBar
                        type="search"
                        placeholder="Search: "
                        value={props.search}
                        onValueChange={props.setSearch}
                        />
                </form>
            </div>
            <AnimeContainer>
                {props.animeList.map(anime => (
                    <AnimeGroup key={anime.mal_id}>
                        {/* Results of query search stored in the prop 'anime' for the anime card to use */}
                        <AnimeCard anime={anime}/>
                    </AnimeGroup>
                ))}
            </AnimeContainer>
        </main>
    </div>
  )
}

export default MainContent