function pesquisar() {
    let section = document.getElementById
        ("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById
        ("campo-pesquisa").value
    
    if(!campoPesquisa){ 
        section.innerHTML = "<p>Nada foi encontrado, digite um título ou gênero válido :) </p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase();
     
    let resultados = "";
    let titulo = "";
    let genero = ""; 
    let sinopse = "";
    
    for(let dado of dados) {
        titulo = dado.Titulo.toLowerCase()
        genero = dado.Genero.toLowerCase();
        sinopse = dado.Sinopse.toLowerCase(); 
            if(dado.Titulo.includes(campoPesquisa) || dado.Genero.includes(campoPesquisa) || sinopse.includes(campoPesquisa)) {
                resultados += 
            `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.Titulo}</a>
                    </h2>
                <p><strong>Ano:</strong> ${dado.Ano}</p>
                <p><strong>Diretor:</strong> ${dado.Diretor}</p>
                <p><strong>Elenco:</strong> ${dado.Elenco}</p>
                <p><strong>Sinopse:</strong> ${dado.Sinopse}</p>
                <p><strong>Gênero:</strong> ${dado.Genero}</p>
                <p><strong>IMDb Rating:</strong> ${dado.ImdbRating}</p>
                </div>
            `
            }
    }
    
    if (!resultados) {
        resultados = "<p> Nada foi Encontrado </p>"
    }
    section.innerHTML = resultados
    }