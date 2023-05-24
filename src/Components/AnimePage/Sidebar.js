import React from 'react'
import styled from '@emotion/styled'

const AnimeSideBar = styled.div`
  height:100%;
  background:#1C1C1C;
  border-radius:20px;
  padding:10px;
`

const SubHeader = styled.h3`
  font-size:1.3em; 
  font-family:Roboto, sans-serif;
  color:#fff;
  text-align:center;
`

const List = styled.ul`
  list-style-type:decimal;
  width:80%;
  margin-left:10%;
  font-size:1em;
  font-family:Roboto, sans-serif;
  color:#fff;
`

const TopLink = styled.a`
  font-size:1em;
  font-family:Roboto, sans-serif;
  color:#fff;
  display:blockl
  margin:10px;
`

function Sidebar({topAnime}) {
  return (
    <AnimeSideBar>
        <aside>
            <nav className='anime_side_nav'>
                <SubHeader>Top Anime:</SubHeader>
                <List>
                  {/* Maps the Top anime for the sidebar */}
                  {topAnime.map(anime => (
                    <li><TopLink href={anime.url} target="_blank" key={anime.mal_id} rel="noreferrer">{anime.title}</TopLink></li>
                  ))}
                </List>
                
            </nav>
        </aside>
    </AnimeSideBar>
  )
}

export default Sidebar