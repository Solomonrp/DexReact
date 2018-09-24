# teste-dexter-server

API para o teste de desenvolvedor Dexter

Este projeto foi criado com o objetivo de testar as habilidade técnicas, capacidades de aprendizado e como um candidato a Dexter lida com os desafios propostos! 

VAMOS POR PARTES: Aqui na DEX dividimos nossos problemas em 

Queremos que você clone este projeto, rode ele localmente e se comunique com a API para coletar os dados e compor as páginas. Quando você conseguir mostrar no front, os dados vindos da API estará bem perto de cumprir a parte de integração do nosso teste! 

Tá, mas como usar a API? Como ela foi feita? E o banco de dados? 

    Como citamos no arquivo que mandamos com o teste, a API foi desenvolvida em Node.Js utilizando o parse-server, por isso a tarefa de criar um usuário e realizar login ficará mais fácil! Dê uma olhada na documentação do parse-server e no que dizem nos fórums de dúvida por ai. 
    
    Já que utilizamos Node, você vai precisar tê-lo instalado em sua máquina também! 
    
    Para rodar o servidor você vai precisar:
        - abrir o terminal na pasta onde você clonou a API;
        - rodar o comando 'npm install';
        - rodar o comando 'node app.js';
        - se tudo deu certo, você deve ver no console: 'Teste Dexter API running on port 1337.'

    Na API você pode encontrar os métodos getAllFoods, getAllPeople e getAllPlaces, que retornam arrays em json, sendo que cada objeto representa um item que deve aparecer na lista. 
    Os objetos estarão no formato:
        {
            name: "",
            link: ""
        } 
    O campo 'name' é o dado a ser colocado sobre a imagem nos itens das listas. O campo 'link" é um link (avá) para a imagem que deve ficar no background do card daquele item na lista. Estes link só funcionarão caso o servidor esteja rodando. Você pode ver as imagens na pasta
    

