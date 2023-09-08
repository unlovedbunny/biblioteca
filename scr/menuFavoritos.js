function abrirFavoritos(){
    document.getElementById("favoritos").classList.remove("right-[-360px]");
    document.getElementById("favoritos").classList.add("right-[0px]");
}

    function fecharFavoritos(){
        document.getElementById("favoritos").classList.remove("right-[0px]");
        document.getElementById("favoritos").classList.add("right-[-360px]");
    }   

        export function inicializarFavoritos(){
            const botaofecharFavoritos = document.getElementById("fechar-favoritos");
            const botaoabrirFavorito = document.getElementById("abrir-favoritos");

            botaofecharFavoritos.addEventListener("click", fecharFavoritos);
            botaoabrirFavorito.addEventListener("click", abrirFavoritos);
        }