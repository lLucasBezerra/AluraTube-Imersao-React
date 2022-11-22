import React from "react";
import { Menu } from "../components/Menu"
import { Timeline } from "../components/Timeline";
import { Header } from "../components/Header";

import config from "../config.json";

function HomePage(){                                    //não se esquecer do ""
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    return( 
        <>
        <div>
                    {/* prop drilling: fazer componentes se interligarem */}
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
            <Header />
            <Timeline searchValue={valorDoFiltro} playlist={config.playlists} />

        </div>
        </>
    )
}

export default HomePage;