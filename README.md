# teste-dexter-server

API para o teste de desenvolvedor Dexter!

    Este projeto foi criado com o objetivo de testar as habilidade técnicas, capacidades de aprendizado
    e como um candidato a Dex lida com os desafios propostos! 

    Queremos que você clone este projeto, rode ele localmente e se comunique com a API para coletar os
    dados e compor as páginas. 

Tá, mas como usar a API? Como ela foi feita? E o banco de dados? 

    Como citamos no arquivo que mandamos com o teste, a API foi desenvolvida em Node.Js utilizando o
    Parse-server, por isso a tarefa de criar um usuário e realizar login ficará mais fácil! 
    Dê uma olhada na documentação do Parse-server e no que dizem nos fórums de dúvida por ai. 

    Já que utilizamos Node, você vai precisar tê-lo instalado em sua máquina também! 
    
    Para executar o servidor você vai precisar:
        - abrir o terminal na pasta onde você clonou a API;
        - rodar o comando 'npm install';
        - rodar o comando 'node app.js';
        - se tudo deu certo, você deve ver no console: 'Teste Dexter API running on port 1337.' e ai boa,
        a API está rodando na sua máquina!

    Na API você pode encontrar os métodos getAllFoods, getAllPeople e getAllPlaces, que retornam arrays
    em json, sendo que cada objeto representa um item que deve aparecer na lista. 
    Os objetos estarão no formato:
        {
            name: "",
            link: ""
        } 
    O campo 'name' é o dado a ser colocado sobre a imagem nos itens das listas. O campo 'link" é um link
    (avá) para a imagem que deve ficar no background do card daquele item na lista. Estes links só
    funcionarão caso o servidor esteja rodando. 

    Estes dados estão todos salvos em um banco no Mlab e a API já se comunica com ele, portanto você não
    precisa se preocupar com essa parte. Cuidado com o atributo databaseURI, pois ele indica onde está o
    banco de dados.

    O banco já possui também um usuário cadastrado com as seguintes credenciais:
        user: dexter@dex.company
        senha: 1234

    Se você travar, lembre-se que outras pessoas já passaram pelo mesmo problema que você, deve ter algo
    la nos fóruns/stackoverflow que te ajude a resolver a treta, não desista! You can do this!


ESPECIFICAÇÕES DE LAYOUT:

    Layout do protótipo para o teste: https://marvelapp.com/35gh79g 

    Dentro da pasta "imgs" você encontra todos os arquivos que servirão de imagem de fundo para os cards
    das páginas de lista. Encontra também uma pasta nomeada "assets" e essa você deve copiar para o seu
    projeto do front para ter a imagem de fundo que usamos no layout e alguns ícones também. 

    Os códigos em hexa das cores que usamos no layout:
        #4A4A4A
        #AE23A9
        #DC4E1B
        #9B9B9B
        #FFFFFF
        #F9F9F9
    
    A fonte usada no layout (repare que existem textos usando a versão Light, Semibold e Bold):
    
    https://fonts.google.com/specimen/Open+Sans

 
