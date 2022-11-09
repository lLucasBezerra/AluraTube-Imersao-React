import { Menu } from "../components/Menu"
import { Timeline } from "../components/Timeline";
import { Header } from "../components/Header";

import config from "../config.json";
import { CSSReset } from "../assets/CSSReset_index"

function HomePage(){
    return( 
        <>
        <CSSReset />
        <div>
            <Menu />
            <Header />
            <Timeline playlist={config.playlists} />

        </div>
        </>
    )
}

export default HomePage;