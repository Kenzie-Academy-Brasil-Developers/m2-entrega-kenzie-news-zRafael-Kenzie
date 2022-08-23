class MontarNoticias{

static noticiaPrincipal(array) {
     
    const dados = array.forEach((element) => {

         const main = document.querySelector('main')
         const principal = document.createElement('div')
         const principalInfo = document.createElement('div')
         const principalCategoria = document.createElement('p')
         const principalTitulo = document.createElement('h1')
         const PrincipalLink = document.createElement('a')
         const principalNoticia = document.createElement('p')
         const principalFonte = document.createElement('cite')
         const img = document.createElement('img')

         principal.classList.add('principal')
         principalInfo.classList.add('principal-info')
         principalCategoria.classList.add('principal-categoria')
         principalTitulo.classList.add('principal-titulo')
         principalNoticia.classList.add('principal-noticia')
         principalFonte.classList.add('principal-fonte')
         img.classList.add('imagem-principal')

         if (element.id === 2) {
             principalCategoria.innerText = element.categoria
             PrincipalLink.innerText = element.titulo
             PrincipalLink.setAttribute("href", element.noticia_completa);
             principalNoticia.innerText = element.resumo
             principalFonte.innerText = element.fonte
             img.src = element.imagem
         } else {
             return
         }
         principalTitulo.appendChild(PrincipalLink)
         principalInfo.append(principalCategoria, principalTitulo, principalNoticia, principalFonte)
         principal.append(principalInfo, img)
         main.append(principal)

     })
     return dados
     
 }


 static noticiasSecundarias(array) {

      const dados =  array.forEach((element) => {

         const section = document.querySelector('section')
         const cardNoticia = document.createElement('div')
         const imagemNoticia = document.createElement('img')
         const infoNoticia = document.createElement('div')
         const categoriaNoticia = document.createElement('p')
         const tituloNoticia = document.createElement('h2')
         const linkNoticia = document.createElement('a')
         const resumoNoticia = document.createElement('p')
         const fonteNoticia = document.createElement('cite')

         cardNoticia.classList.add('card-noticia')
         imagemNoticia.classList.add('imagem-noticia')
         infoNoticia.classList.add('info-noticia')
         categoriaNoticia.classList.add('categoria-noticia')
         tituloNoticia.classList.add('titulo-noticia')
         resumoNoticia.classList.add('resumo-noticia')
         fonteNoticia.classList.add('fonte-noticia')

         if (element.id > 2) {

             imagemNoticia.src = element.imagem
             categoriaNoticia.innerText = element.categoria
             linkNoticia.innerText = element.titulo
             linkNoticia.setAttribute("href", element.noticia_completa);
             resumoNoticia.innerText = element.resumo
             fonteNoticia.innerText = element.fonte
         } else {
             return
         }
         tituloNoticia.appendChild(linkNoticia)
         infoNoticia.append(categoriaNoticia, tituloNoticia, resumoNoticia, fonteNoticia)
         cardNoticia.append(imagemNoticia, infoNoticia)
         section.append(cardNoticia)

     })
     return dados
 }
}

class Noticias {

    static baseUrl = 'https://kenzie-news-api.herokuapp.com/api/news'

    static async ChamarApi(){
     const data = await fetch(this.baseUrl, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => 
            MontarNoticias.noticiaPrincipal(res) ?? MontarNoticias.noticiasSecundarias(res)
            )
        .catch(err => console.log(err))

       return data
}
}

Noticias.ChamarApi()
//let teste = 0
