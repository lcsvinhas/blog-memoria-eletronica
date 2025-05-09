//Solicitar foto de perfil da API do github

document.addEventListener("DOMContentLoaded", () => {
    const imgElements = document.querySelectorAll("img[id]");

    imgElements.forEach(img => {
        const username = img.getAttribute("id");
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                if (data.avatar_url) {
                    img.src = data.avatar_url;
                } else {
                    img.alt = "Imagem não encontrada";
                }
            })
            .catch(err => {
                console.log("Erro ao buscar perfil do github:", err);
                img.alt = "Erro ao carregar imagem";
            });
    });
});