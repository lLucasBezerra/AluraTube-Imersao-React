import React from 'react'
import { StyledRegisterVideo } from "./style";

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
