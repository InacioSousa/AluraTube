
import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu/components/index.js";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {
    const  estiloHomePage = {
        //backgroundColor: "red"
        
    };
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    //const valorDoFiltro = "Angular";
    //console.log(config.playlists);
    return (
     <>
     <CSSReset />
    <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
    }}>
    <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
    <Header />
    <TimeLine searchValue={valorDoFiltro}playlists={config.playlists}/>
    </div>
    </>
    );
}



/*function Menu (){
    return (
        <div>
            Menu
        </div>
    )
}*/


const StyledHeader= styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%; 
    }
    .user-info{
        
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
const StyledBanner= styled.div`
background-color: blue;
background-image: url(${config.bg});
height: 230px;



`;

function Header (){
    return (
        <StyledHeader>
         <StyledBanner />
         <section className="user-info">
            <img src={`https://github.com/${config.github}.png`} />
            <div>
                <h2>
                {config.nome}
                </h2>
                <p>
                {config.cargo}
                </p>
            </div>
            </section>    
            </StyledHeader>
    )
}
function TimeLine ({searchValue, ...props}){
    //console.log("dentro do componente", props.playlists);
    const playlistsNames = Object.keys(props.playlists);
    return (

        <StyledTimeline>
            {playlistsNames.map((playlistsName) =>{
                const videos = props.playlists[playlistsName];
                return (
                <section key={playlistsName}>
                    <h2>{playlistsName}</h2>
                    <div>
                    {videos.filter((video) =>{
                        const titleNormalized = video.title.toLowerCase();
                        const searchValueNormalized = searchValue.toLowerCase();
                        return titleNormalized.includes(searchValueNormalized)
                    }).map((video) => {
                    return(
                        <a key={video.url} href={video.url}>
                        <img src={video.thumb} />
                        <span>
                            {video.title}
                        </span>
                        </a>
                )
                })}
                    </div>
                </section>
                )
            })}
        </StyledTimeline>
    )
}
export default HomePage
