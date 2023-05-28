import React from 'react'
import styled from '@emotion/styled'
import SmallHeader from '../Headers/SmallHeader'

const AnimeSideBar = styled.div`
  height:100%;
  width:25%;
  background:#1C1C1C;
  border-radius:20px;
  padding:15px;
`

const List = styled.ul`
  list-style-type:decimal;
  width:80%;
  margin-left:10%;
  font-size:1em;
  font-family:Roboto, sans-serif;
  color:#fff;
  li{
    margin-bottom:5px;
  }
  li::marker{
    color:#F33446;
  }
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
                {/* <SubHeader>Top Anime:</SubHeader> */}
                <SmallHeader text="Top Anime:"></SmallHeader>
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