# Desafio usando React Routes

Desafio proposto pelo instrutor da plataforma B7web, no curso de React.
O instrutor só mostrou o funcionamento e pediu para que replicasse o resultado, sem mostrar o código.

Se trata de consumir a fake Api do site jsonplaceholder e simular a navegação por uma galeria de fotos utilizando os recursos de albums e fotos disponibilizados.

Usei quase todo o conhecimento que venho adquirindo com o curso até agora. Usei alguns hooks padrões da biblioteca react (useEffect e useState), usei hooks personalizados baseados no useState para deixar o código mais limpo, criei componentes para diminuir a repetição no código, usei tailwindcss para estilizar.

Da biblioteca react-router-dom, utilizei o hook useRoutes para criar as rotas, o componente Link para direcionar para as páginas sem precisar renderizar todas as rotas na memória novamente, o useParams para manipular os parâmetros da url e o useNavigate para o botão de voltar as páginas.

Criei um arquivo separado só para receber as informações das apis, utilizando a biblioteca axios (defini uma baseUrl pra não ter que ficar repetindo sempre) e tratando a Promise com async/await.

Utilizei também a biblioteca uuid, com o método v4, para simular a geração de identificadores únicos para cada album e também para cada foto dos albums, evitando usar o index do método map para preencher a prop key das listas de albuns e fotos.

### Instalação

- `npm install`

### Para rodar

- `npm run dev`
