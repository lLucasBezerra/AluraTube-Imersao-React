import { createClient } from '@supabase/supabase-js';
import React from 'react'
import { StyledRegisterVideo } from "./style";

function getThumb(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}

//utilizaando supabase service
const PROJECT_URL = "https://rwwmbrpffqnkmofwaoio.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3d21icnBmZnFua21vZndhb2lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzODE1MDQsImV4cCI6MTk4NDk1NzUwNH0._MHzadHBgqVaHHkfwYLdVbD0TYzCjbiHwzpkt1SU4zg"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export default function RegisterVideo() {
    const [formVisivel, setFormVisivel] = React.useState(false);
    const [cadastroValue, setCadastroValue] = React.useState({
        titulo: "",
        url: ""
    })
    const { titulo, url } = cadastroValue;
    const mostrarModal = () => {
        setFormVisivel(!formVisivel)
    }

    function pegarValores(e){
        setCadastroValue({...cadastroValue, [e.target.name]: e.target.value})
    }

  return (
    <StyledRegisterVideo>
        <button type="button" className="add-video" onClick={mostrarModal}>
            +
        </button>

        {formVisivel
            ?(
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setFormVisivel(false);
                    setCadastroValue({})
                    
                    supabase.from("video").insert({
                        title: titulo,
                        url: url,
                        thumb: getThumb(url),
                        playlist: "Lo-fi",
                    }).then((oqveio)=>{
                        console.log(oqveio);
                    }).catch((err)=>{
                        console.log(err);
                    })
                    
                }}>
            <div>
                <button type="button" className="close-modal" onClick={mostrarModal}>
                    X
                </button>
                <input name="titulo" value={titulo} placeholder="Título do Vídeo" 
                onChange={(e) => pegarValores(e)}/>
                <input name="url" value={url} placeholder="URL" 
                onChange={(e) => pegarValores(e)}/>
                <button type="submit">
                    Cadastrar
                </button>
            </div>
            
        </form>
            ) : null
            }
        
    </StyledRegisterVideo>
  )
}
