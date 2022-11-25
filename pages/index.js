import React from "react";
import { Menu } from "../components/Menu"
import { Timeline } from "../components/Timeline";
import { Header } from "../components/Header";


import { createClient } from "@supabase/supabase-js";

//utilizaando supabase service
const PROJECT_URL = "https://rwwmbrpffqnkmofwaoio.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3d21icnBmZnFua21vZndhb2lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzODE1MDQsImV4cCI6MTk4NDk1NzUwNH0._MHzadHBgqVaHHkfwYLdVbD0TYzCjbiHwzpkt1SU4zg"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

function HomePage(){                                    //não se esquecer do ""
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [playlist, setPlaylist] = React.useState({});
    React.useEffect(() => {
        supabase.from("video")
        .select("*")
        .then((dados)=>{ 
            console.log(dados);
            const novasPlaylists = {...playlist}
            dados.data.forEach((video)=>{
                if(!novasPlaylists[video.playlist]){
                    novasPlaylists[video.playlist] = [];
                }
                novasPlaylists[video.playlist].push(video);
            })
            setPlaylist(novasPlaylists);
        });
    },[])
    
    return( 
        <>
        <div>
                    {/* prop drilling: fazer componentes se interligarem */}
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
            <Header />
            <Timeline searchValue={valorDoFiltro} playlist={playlist} />

        </div>
        </>
    )
}

export default HomePage;