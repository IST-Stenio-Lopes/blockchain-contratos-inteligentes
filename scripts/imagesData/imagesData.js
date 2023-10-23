const imagesUE1 = [
  {
    index: 1,
    imageAlt:
      "DescriçãoDaImagem: A imagem mostra uma rede centralizada. Ela é composta por dois computadores e um servidor. O computador da esquerda é de Anderson e o computador da direita é de Paulo. O servidor está no centro da imagem e representa o servidor centralizador da informação, o que no exemplo anterior seria o servidor do banco. Os computadores de Anderson e Paulo estão conectados por linhas ao servidor e representam os computadores que utilizam a informação centralizada.",
    imageSrc: ["images/ue/UE 1/Imagem 1 - UE1.png"],
    imageLegend:
      "Imagem 1: Rede centralizada da agência bancária. Fonte: SENAI",
  },
  {
    index: 2,
    imageAlt:
      "Descrição de Imagem: A imagem mostra seis computadores interligados entre si formando uma rede distribuída peer-to-peer. Dois computadores representam as máquinas de Paulo e Anderson do exemplo anterior. Os demais computadores representam outros integrantes da rede que, no exemplo, participam da confirmação e validação do registro.",
    imageSrc: ["images/ue/UE 1/Imagem 2 - UE1.png"],
    imageLegend: "Imagem 2: Rede distribuída peer-to-peer. Fonte: SENAI.",
  },
  {
    index: 3,
    imageAlt: "",
    imageSrc: ["images/ue/UE 1/Imagem 3 - UE1.png"],
    imageLegend:
      "Imagem 3: Representação de um bloco, cadeia de blocos e registro de informações. Fonte: SENAI.",
  },
  {
    index: 4,
    imageAlt:
      "Descrição da imagem: SOLICITAÇÃO: Você solicita a compra daquele imóvel (ou uma transação com criptomoedas, contratos, bens etc.). TRANSMISSÃO REDE DISTRIBUÍDA: A solicitação é transmitida para nós chamados mineradores, os quais irão buscar validá-la e incluí-la na Blockchain. MINERAÇÃO DE DADOS: Os nós ‘’mineram os dados’’ da transação para verificar se as suas informações, do imóvel e do vendedor estão corretas, a fim de validar a negociação. COMPETIÇÃO: Como essas informações são protegidas por chaves criptográficas, os mineradores competem para decodificá-la e disponibilizá-la na rede primeiro. SUPER COMPUTADORES: Para isso, é necessário investir em computadores com alto poder de processamento de cálculos, com rapidez e eficiência. RECOMPENSA: O trabalho da mineração é remunerado com criptomoedas. SOLUÇÃO: O primeiro computador que resolver o cálculo, disponibiliza o bloco de informações com a solução na rede, para os demais nós checarem se a solução é válida. Alguns nós da rede possuem o histórico ou cópia completa de todas as transações da Blockchain. Eles são chamados fullnodes (ou nós completos). Os demais nós se conectam aos fullnodes para obter as informações necessárias para que as transações sejam processadas. VALIDAÇÃO: Após validado pela maioria da rede, o novo bloco de dados é adicionado à cadeia de blocos, de modo permanente e inalterável. Cada novo bloco contém 2 códigos chamados hash: um que traz informações referentes ao bloco anterior e outro que representa a sua identificação, que será utilizada pelo próximo bloco. Os hashes trazem segurança às informações, pois sempre que uma solução é encontrada e validada, confirma, ao mesmo tempo, o novo bloco e todos os anteriores. Quanto mais antigo for o bloco, mais seguro ele será, pois teve mais validações. É muito difícil fraudar a rede Blockchain e adulterar um bloco de informações. Para isso, seria necessário que um hacker adulterasse as cópias de todos os blocos em toda rede, para que o bloco falso fosse validado pela maioria dos nós. CONCLUSÃO: A transação é concluída. O imóvel passa a ser seu. Este bloco de informações fica registrado e armazenado na rede Blockchain, funcionando como um ‘’livro-razão digital’’, tornando-se um histórico para a próxima negociação.",
    imageSrc: ["images/ue/UE 1/Imagem 4 - UE1.png"],
    imageLegend: "Imagem 4: fluxo da informação na Blockchain. Fonte: SENAI",
  },
];

const imagesUE2 = [
  {
    index: 1,
    imageAlt:
      "Descrição de imagem: A imagem é dividida em duas partes mostrando formas de comprar um carro: a forma tradicional e com contrato inteligente. Na imagem que mostra a forma tradicional, há um fluxograma com cinco circunferências: duas representando as pessoas relacionadas à compra e venda do carro, uma representando a instituição financeira, uma representando o DETRAN, e, a última, representando o carro. Tanto a pessoa compradora quanto a pessoa vendedora estão conectados à instituição financeira e ao DETRAN por setas bidirecionais, representando a centralização financeira e de documentação das instituições. Também há uma ligação unidirecional de instituição financeira para o DETRAN, representando que o pagamento da documentação também necessita de uma intermediação financeira. Por fim, após intermediação financeira e documental, a negociação é finalizada representada pela posse do carro à pessoa compradora. Na imagem que mostra a compra via contrato inteligente, há um fluxograma com quatro circunferências: duas representando as pessoas relacionadas a compra e venda do carro, uma representando o contrato inteligente, e, a última, representando o carro. Tanto a pessoa compradora quanto a pessoa vendedora estão conectadas por setas bidirecionais ao contrato inteligente. A negociação é feita entre as pessoas, sem intermédio de instituições ea pessoa compradora e a pessoa vendedora conseguem negociar o carro.",
    imageSrc: [
      "images/ue/UE 2/Imagem 1.1 - UE2.png",
      "images/ue/UE 2/Imagem 1.2 - UE2.png",
    ],
    imageLegend:
      "Imagem 1: Forma de registro tradicional e de contrato inteligente da compra de um carro.FONTE: SENAI, 2023",
  },
  {
    index: 2,
    imageAlt:
      "DescriçãoDaImagem: A imagem é dividida em duas colunas e entre as colunas existe a representação de uma pessoa. A coluna da esquerda representa a forma de registro tradicional e contém três círculos que apresentam os tipos de registros: documentos e bens, tratamentos médicos e vacinas, vida acadêmica. Há um destaque com a informação que esses registros ficam centralizados em órgãos públicos e/ou privados. A coluna da direita apresenta registros na blockchain.",
    imageSrc: ["images/ue/UE 2/Imagem 2 - UE2.png"],
    imageLegend:
      "Imagem 2: Forma de registro tradicional de pessoa física versus forma de registro de pessoa física na blockchain. FONTE: SENAI, 2023",
  },
  {
    index: 3,
    imageAlt:
      'DescriçãoDaImagem: A imagem é dividida em duas colunas: uma referente ao ciclo de registro tradicional e outra ao ciclo de registro na Blockchain.Entre as colunas existem quatro quadrados que representam registros de “propriedade rural”, “loteamento”, “construção”, “compra e venda". A coluna da esquerda apresenta a forma de registro tradicional e contém dois retângulos representando a “verificação da capacidade financeira para loteamento, construção, compra e venda (banco)” e “Atualização do registro da propriedade em órgãos públicos (cartório, prefeitura) cada vez que ocorre uma alteração ou negociação". A coluna da direita apresenta registros na blockchain e contém cinco retângulos interligados: “Solicitação de um novo bloco para registro na construção, por exemplo”, “Informações criptografadas e submetidas à blockchain”, “Mineração para validar registro”, “Criação do bloco com as informações da propriedade”, “Rede reconhece o novo bloco com registros validados”.',
    imageSrc: ["images/ue/UE 2/Imagem 3 - UE2.png"],
    imageLegend:
      "Imagem 3: Ciclo de registro tradicional e ciclo de registro de propriedade na rede blockchain. FONTE: SENAI, 2023",
  },
  {
    index: 4,
    imageAlt:
      "DescriçãoDaImagem: A imagem mostra um fluxograma da produção industrial tradicional do pedido até o consumidor.Há dez quadrados. Tem-se uma conexão lateral entre “Pedido” e “Planejamento e Controle de Produção”,e uma conexão linear com “Recursos”,”Produção” e “Controle de Qualidade”. Há outra conexão lateral entre “Logística”, e “Consumidor”. E novamente uma conexão linear entre “Assistência Técnica” e “engenharia” que também está conectado com  “Planejamento e Controle de Produção”. Por fim, tem-se uma conexão entre “Recursos” e “Produção” com ”Estoque, Compra e Recursos Humanos”.",
    imageSrc: ["images/ue/UE 2/Imagem 4 - UE2.png"],
    imageLegend:
      "Imagem 4: Fluxograma do modelo tradicional de produção na indústria. FONTE: SENAI, 2023.",
  },
  {
    index: 5,
    imageAlt:
      "DescriçãoDaImagem: Na imagem são mostrados o ciclo industrial tradicional e o ciclo industrial blockchain. No ciclo tradicional existem oito circunferências. Sete delas formam um ciclo, são elas: “Assistência técnica”, “Engenharia”, “Planejamento e controle de produção”,”Produção”, “Controle de qualidade”, “Venda” e “Consumidor”. No centro do ciclo, temos uma circunferência representando “Atualização do registro do produto em cada fase do processo”. As setes circunferências do ciclo estão ligadas a circunferência do centro. No ciclo industrial blockchain, temos sete circunferências. Seis delas formam um ciclo, são elas: “Solicitação de criação de novo bloco para assistência técnica, por exemplo”, “Registro submetido a rede blockchain”, “Mineração para validar registro”, “Criação do bloco para as informações”, “Rede reconhece o novo bloco com registros validados”, “Setor de engenharia implementa modificações no produto ou pede para recolher lote para análise”. Já uma sétima circunferência que representa “Conexão IOT” está fora do ciclo, mas representa uma conexão com ciclo.",
    imageSrc: ["images/ue/UE 2/Gif-1.gif", "images/ue/UE 2/Gif-2.gif"],
    imageLegend:
      "Imagem 5: Fluxograma do modelo tradicional de produção na indústria. FONTE: SENAI, 2023.",
  },
];

const imagesUE3 = [
  {
    index: 1,
    imageAlt:
      "Descrição da imagem: A imagem mostra a estrutura de uma cadeia de blocos com a representação de três blocos. O bloco mais à esquerda é identificado com “Bloco 01” e dentro dele tem o conteúdo e uma ligação feita para “Bloco 02” pela “Hash 00”. No centro está o “Bloco 02”. Dentro dele tem seu conteúdo, o “Hash 00” e uma ligação para o “Bloco 03” feito pela “Hash 01”. À direita, temos o “Bloco 03” mostrando internamente seu conteúdo e a “Hash 01”. A “Hash 02” será a conexão para um novo bloco adicionado a rede.",
    imageSrc: ["images/ue/UE 3/Imagem 1 - UE3.png"],
    imageLegend: "Imagem 1: Estrutura de cadeia de blocos. FONTE: SENAI, 2023.",
  },
  {
    index: 2,
    imageAlt:
      "DescriçãodaImagem: A imagem mostra as estruturas que formam um bloco. Internamente, existem duas estruturas maiores que são o cabeçalho e o corpo do bloco. Dentro do cabeçalho, temos as seguintes informações: “Bloco 01”, “00054551”, “000”, “15:40 10/08/2018”, “7224”, “Raiz de Merkle”. Dentro do corpo do bloco tem três representações de transações, cada uma associada a uma assinatura digital.",
    imageSrc: ["images/ue/UE 3/Imagem 2 - UE3.png"],
    imageLegend: "Imagem2. Estruturas de um bloco da blockchain Fonte: SENAI",
  },
  {
    index: 3,
    imageAlt:
      "DescriçãodaImagem: A imagem possui a representação de três blocos.Os blocos possuem representação dos campos e há um destaque para os campos de hash. O primeiro bloco, o bloco genesis, possui um único campo de hash. Os demais blocos possuem dois campos de hash: seu próprio hash e o hash do bloco anterior.",
    imageSrc: ["images/ue/UE 3/Imagem 3 - UE3.png"],
    imageLegend: "Imagem 3: Blocos em cadeia até o bloco gênesis. Fonte: SENAI",
  },
  {
    index: 4,
    imageAlt:
      'DescriçãodaImagem: A imagem mostra três blocos conectados. O primeiro bloco, é o gênesis. Ele foi chamado de“Bloco O" e contém um hash da sua informação. O segundo bloco, “Bloco1” contém um hash da sua informação junto com hash do bloco anterior. O terceiro bloco, chamado de “Bloco 2”, da mesma forma, contém um hash da sua informação junto com hash do bloco anterior. É mostrada uma alteração no Bloco 01 que imediatamente é refletida para o Bloco 02.',
    imageSrc: ["images/ue/UE 3/Imagem 4 - UE3.png"],
    imageLegend:
      "Imagem 4: Blocos antigos alterados invalidam todos os blocos posteriores. Fonte: SENAI",
  },
  {
    index: 5,
    imageAlt:
      "DescriçãodaImagem: A imagem mostra a geração de hashs de três entradas diferentes submetidas a função SHA 256. A primeira entrada é “o cachorro” e gera o hash 46238be747d9257e38ee77d6386b61abe60b5e5fc0ca0dd7e8feed1e3c2f242e. A segunda entrada é “o cachorro e o gato” e o hash gerado é b3b826ba23c9cbb9df1e35144e5f1f47f5df0c3b1a94b34210372d1d4ecaa828. A terceira entra é “o cachorro corre atrás do gato” e gera o hash 7b9a79895706b7b4ef9e97df87a7e7b9a4209bd215e55f9b19527d64f30a7032",
    imageSrc: ["images/ue/UE 3/Imagem 5 - UE3.png"],
    imageLegend:
      "Imagem 5: Representação do trabalho das funções. Fonte: SENAI",
  },
  {
    index: 6,
    imageAlt:
      "DescriçãodaImagem: A imagem mostra uma transação na blockchain.com. Há três valores em formato de hash: um id da transação, um endereço de entrada (origem) e um endereço de saída (destino). Também encontramos os valores de data e hora da transação, além da quantidade de Bitcoin envolvidos da transação, destacados em verde. Nessa transação foram transferidos 0.34978 BTC.",
    imageSrc: ["images/ue/UE 3/Imagem 6 - UE3.png"],
    imageLegend: "Imagem 6: Transação de Blockchain Fonte: SENAI",
  },
  {
    index: 7,
    imageAlt:
      "DescriçãodaImagem: A imagem mostra um computador com uma figura de uma chave na tela, representando a chave privada. Acima do computador, há o seguinte texto: “Chave privada: deve ser conhecida apenas pelo seu proprietário”.",
    imageSrc: ["images/ue/UE 3/Imagem 7 - UE3.png"],
    imageLegend:
      "Imagem 7: A chave privada deve ser conhecida apenas pela proprietário Fonte: SENAI",
  },
  {
    index: 8,
    imageAlt:
      "DescriçãodaImagem: A imagem mostra quatro computadores interconectados em rede. Nas telas dos computadores existe uma figura de uma chave representando a chave pública. Acima dos computadores, há o seguinte texto: “Chave pública: é publicada e distribuída na rede”",
    imageSrc: ["images/ue/UE 3/Imagem 8 - UE3.png"],
    imageLegend:
      "Imagem 8: A chave pública pode ser conhecida por toda a rede. Fonte: SENAI",
  },
  {
    index: 9,
    imageAlt:
      "DescriçãodaImagem: A imagem mostra o processo de criação da chave pública e endereço, partindo de uma chave privada. No início do fluxo tem-se a chave privada Na sequência, é indicado que ela é submetida a um algoritmo criptográfico e origina a chave pública. Logo após, a chave pública é submetida ao Hash SHA-256 criando um endereço.",
    imageSrc: ["images/ue/UE 3/Imagem 9 - UE3.png"],
    imageLegend:
      "Imagem 9: Processo de criação da chave pública e endereço. Fonte: SENAI",
  },
  {
    index: 10,
    imageAlt:
      "DescriçãodaImagem: A imagem representa a transmissão de uma mensagem do emissor para um destinatário. O emissor deseja transmitir a mensagem “Olá, tudo bem?”. Usando a chave pública do destinatário é gerado um arquivo encriptado da mensagem, representado na figura por “$*%#”. Logo após, o destinatário desencripta o arquivo com sua chave privada e tem acesso a mensagem “Olá, tudo bem?”.",
    imageSrc: ["images/ue/UE 3/Imagem 10 - UE3.png"],
    imageLegend:
      "Imagem 10: Funcionamento da chave pública e chave privada na transmissão de mensagens encriptadas. Fonte: SENAI",
  },
  {
    index: 11,
    imageAlt:
      "DescriçãodaImagem: A imagem mostra características dos dois tipos de carteiras virtuais: hot wallets e cold wallets. Para as hot wallets são colocados os seguintes pontos: (1) São conectadas à Internet ,(2) São mais vulneráveis à ataques virtuais e (3) Exemplos:Mobile, Web e Desktop. Para Cold Wallets: (1) Não são conectadas a internet, (2) São mais seguras e (3) Exemplo: Hardware Wallet e Paper Wallet)",
    imageSrc: ["images/ue/UE 3/Imagem 11 - UE3.png"],
    imageLegend:
      "Imagem 11: Características das hot wallets e cold wallets. Fonte: SENAI",
  },
];

const imagesUE4 = [
  {
    index: 1,
    imageAlt:
      "Descrição da Imagem: A imagem mostra 4 registros de transações. O primeiro registro mostra que Alice recebeu 25 moedas digitais. O campo “Entrada” ou Inputs aponta para a origem das criptomoedas a serem utilizadas pela transação. Em computação, normalmente 0 representa o primeiro item ou saída do bloco anterior.Na segunda transação, há saída de 17 criptomoedas para Bob, restando 8 para a Alice (25-17= 8, ou seja, o troco). A transação é assinada digitalmente por Alice, de modo que os demais nós da rede podem validar a autenticidade da transação. Em seguida, Bob transfere 8 criptomoedas para Carol, restando-lhe 9 moedas (17-8= 9) e assina digitalmente a transação.Na quarta transação, Alice transfere mais 6 moedas para Davi, restando-lhe 2 moedas ( 8-6=2) e novamente assina digitalmente a transação. O número 1 indica que Alice já assinou realizou/assinou uma transação anterior.",
    imageSrc: ["images/ue/UE 4/Imagem 1 - UE4.jpg"],
    imageLegend:
      "Imagem 1: Conjunto de transações de um livro-razão. Fonte: SENAI",
  },
  {
    index: 2,
    imageAlt:
      "DescriçãodaImagem: Há 3 imagens mostrando o processo de inserção de uma transação em uma rede com quatro nós interconectados. Na primeira imagem, a transação mostra a entrada da transmissão por um dos nós. A segunda imagem, a transação é transmitida aos outros nós e fica pendente aguardando o consenso. E na terceira imagem, após o consenso, a transação é registrada no livro razão de cada um dos nós.",
    imageSrc: [
      "images/ue/UE 4/Imagem 2 - UE4 1.jpg",
      "images/ue/UE 4/Imagem 2 - UE4 2.jpg",
      "images/ue/UE 4/Imagem 2 - UE4 3.jpg",
    ],
    imageLegend: "",
  },
  {
    index: 3,
    imageAlt:
      "Descrição da imagem: A imagem mostra o bloco inicial de um blockchain que possui a maioria dos campos de um bloco comum, mas não possui registros de transações e hash do bloco anterior.",
    imageSrc: ["images/ue/UE 4/Imagem 3 - UE4.jpg"],
    imageLegend: "Imagem 3: Estrutura de um bloco gênesis. Fonte: SENAI",
  },
  {
    index: 4,
    imageAlt:
      "Descrição da imagem: A imagem mostra um valor de hash para as informações número de bloco, hash anterior, marcação do tempo, dados e nonce. Os 4 primeiros bits do hash são indicados como a dificuldade alvo.",
    imageSrc: ["images/ue/UE 4/Imagem 4 - UE4.jpg"],
    imageLegend:
      "Imagem 4: Hash do bloco e dificuldade alvo definida pelos 4 primeiros bits. Fonte: SENAI",
  },
];

const imagesUE5 = [
  {
    index: 1,
    imageAlt:
      "Descrição da Imagem: A imagem mostra o símbolo do Ethereum. O símbolo são duas pirâmides espelhadas, unidas pela base.",
    imageSrc: ["images/ue/UE 5/Imagem 1 - UE5.png"],
    imageLegend: "Imagem 1: Símbolo do Ethereum. Fonte:ethereum.org.",
  },
  {
    index: 2,
    imageAlt:
      "Descrição da Imagem: A imagem é dividida em duas colunas, uma para DeFi e outra NFTs. Na coluna de DeFi, há uma imagem com a palavra DeFi e o texto “ DeFi proporciona um serviço financeiro sem a presença de uma instituição centralizadora.” Na coluna relacionada a NFT, há uma imagem representando um NFT e o texto “NFTs são ativos digitais que garantem origem e autenticidade a arquivos, muito usados para manutenção e transação de direitos autorais.”",
    imageSrc: ["images/ue/UE 5/Imagem 2 - UE5.jpg"],
    imageLegend:
      "Imagem 2: Mecanismo de DefI e NFT proporcionado pela plataforma Ethereum. Fonte: SENAI",
  },
  {
    index: 3,
    imageAlt:
      "Descrição da Imagem: A imagem mostra um conjunto de dispositivos interconectados. Ao centro, há uma representação da EVM. Todos os dispositivos se conectam a ela.",
    imageSrc: ["images/ue/UE 5/Imagem 3 - UE5.jpg"],
    imageLegend:
      "Imagem 3: Uma representação da EVM como máquina virtual descentralizada. Fonte:",
  },
  {
    index: 4,
    imageAlt:
      "Descrição da Imagem: A imagem é dividida em duas colunas, uma para turing incompleto e outra para turing completo. Na coluna turing incompleto há uma imagem de uma calculadora simples e o texto “Realiza, apenas, alguns tipos de cálculos”. Na coluna turing completo há uma imagem de uma calculadora científica programável e o texto “Pode resolver qualquer problema computacional.”",
    imageSrc: ["images/ue/UE 5/Imagem 4 - UE5.jpg"],
    imageLegend:
      "Imagem 4: Dispositivos turing incompletos e turing completos. Fonte: SENAI",
  },
  {
    index: 5,
    imageAlt:
      "Descrição da Imagem: A imagem é dividida em duas colunas, uma para blockchain turing incompleta e outra para blockchain turing completa. Na coluna blockchain turing incompleta há uma imagem representando o Bitcoin e o texto “Decisão intencional para manter a simplicidade da plataforma”. Na coluna blockchain turing completa há uma imagem representando o Ethereum e o texto “Capaz de usar sua base de código para resolver, praticamente, qualquer problema.”",
    imageSrc: ["images/ue/UE 5/Imagem 5 - UE5.jpg"],
    imageLegend:
      "Imagem 5: Blockchains turing incompletos e turing completos. Fonte: SENAI",
  },
  {
    index: 6,
    imageAlt:
      "Descrição da Imagem: A imagem possui duas colunas, uma para conta de propriedade externa e outra para conta contrato. Na coluna de conta de propriedade externa há uma imagem de chave e os textos: “A criação da conta não envolve custos.”, “É possível iniciar transações a partir dessa conta.”, “As únicas transações possíveis são de transferência de ETH/TOKEN”. Na coluna de conta contrato há uma imagem de um arquivo e os textos: “A criação dos contratos envolve um custo, pois você estará usando capacidade de armazenamento da rede blockchain”,”Só é possível criar transações em resposta ao recebimento de outras transações”, “Transações de uma conta externa para uma conta contrato podem acionar um código, como também, podem gerar muitas ações, como transferir tokens ou gerar um contrato.",
    imageSrc: ["images/ue/UE 5/Imagem 6 - UE5.jpg"],
    imageLegend:
      "Imagem 6: Conta de propriedade externa e conta contrato. Fonte: SENAI.",
  },
  {
    index: 7,
    imageAlt:
      "Descrição da Imagem: A imagem mostra os campos dos dois tipos de conta. São ele: nonce, balance, armazenamento da hash e código hash. Os campos são associados há um Endereço.",
    imageSrc: ["images/ue/UE 5/Imagem 7 - UE5.jpg"],
    imageLegend: "Imagem 7: Uma conta Ethereum. Fonte: SENAI",
  },
  {
    index: 8,
    imageAlt:
      "Descrição de imagem: A imagem mostra a tela principal da carteira MetaMask. No topo, há um campo “Account1”, onde é exibido o valor da conta. Logo abaixo, a indicação da quantidade de ETHs e a equivalência em USD, nesse caso “0 ETH e 0.00USD”. Após essas informações, têm-se três botões Comprar, Enviar e Trocar. Por fim, duas abas com: ativos e atividades.",
    imageSrc: ["images/ue/UE 5/Imagem 8 - UE5.png"],
    imageLegend:
      "imagem 8: Tela inicial da cartateira MetaMask. Fonte: metamask.io",
  },
  {
    index: 9,
    imageAlt:
      "Descrição de imagem: A imagem mostra a tela de detalhes da conta. De cima para baixo, temos: o número da conta, o QR code do endereço da conta, o endereço da conta alfanumérico, um botão “Ver no Etherscan” e um botão “Exportar chave privada”",
    imageSrc: ["images/ue/UE 5/Imagem 9 - UE5.png"],
    imageLegend: "imagem 9: Tela de detalhes da conta. Fonte: metamask.io",
  },
];

const imagesUE6 = [
  {
    index: 1,
    imageAlt:
      "Descrição de Imagem: A imagem mostra um fluxograma relacionado ao pagamento de gás da rede Ethereum. No topo da imagem, há o texto “Como o gás Ethereum alimenta a transação”. O fluxograma indica: Para um usuário enviar 1 ETH para outro usuário, ele deve pagar uma taxa de gás que é utilizada para usar poder computacional e o consenso da rede.",
    imageSrc: ["images/ue/UE 6/Imagem 1 - UE6.png"],
    imageLegend:
      "Imagem 1: O gás de um transação na rede Ethereum. Fonte: SENAI",
  },
  {
    index: 2,
    imageAlt:
      "Descrição: Contrato Inteligente. Ilustração sobre o tema de Tecnologias de Negócios de Tecnologias Financeiras.",
    imageSrc: ["images/ue/UE 6/Imagem 2 - UE6.png"],
    imageLegend:
      "Imagem 2: Um contrato inteligente proporciona uma negociação sem intermediários. Fonte: SENAI",
  },
  {
    index: 3,
    imageAlt:
      "Descrição de Imagem: A imagem tem duas colunas com características do proof of work e proof of stake. Na coluna de proof of work há as seguintes características: poder computacional é usado na tentativa de resolver um problema matemática que confirma o bloco; quanto mais participantes na rede, mais difícil o problema; mineradores competem para ver que será o primeiro a resolver o problema e ganhar a recompensa; alto consumo de energia elétrica; bloco são minerados. Já na coluna proof of stake, tem-se: um grupo de validadores se compromete a tentar resolver o bloco; a chance de cada validador resolver o bloco é proporcional a sua participação na aposta; mais ecológico; mais rápido e blocos são construídos.",
    imageSrc: ["images/ue/UE 6/Imagem 3 - UE6.png"],
    imageLegend: "Imagem 3: Proof of Work e Proof of Stake. Fonte: SENAI",
  },
  {
    index: 4,
    imageAlt: "",
    imageSrc: ["images/ue/UE 6/PoS.gif"],
    imageLegend: "",
  },
];

const imagesUE7 = [
  {
    index: 1,
    imageAlt:
      "Descrição de Imagem:O gif mostra uma rede distribuindo mensagens entre os computadores para entrar em consenso. Ao receber as mensagens, os computadores recebem um símbolo verde, representando que verificaram e validaram a mensagem.",
    imageSrc: ["images/ue/UE 7/Imagem 1 - UE7.gif"],
    imageLegend:
      "Imagem 1: Representação de uma rede entrando em consenso. Fonte: SENAI",
  },
  {
    index: 2,
    imageAlt:
      "Descrição de Imagem: Mineração de moedas de criptomoeda staking prova de trabalho.",
    imageSrc: ["images/ue/UE 7/Imagem 2 - UE7.png"],
    imageLegend:
      "Imagem 2: Exemplo de Proof of Work (PoW) ou prova de trabalho. Fonte: SENAI",
  },
  {
    index: 3,
    imageAlt: "",
    imageSrc: ["images/ue/UE 7/Imagem 3 - UE7.png"],
    imageLegend:
      "Imagem 3: Exemplo de Proof of Stake (PoS) ou prova de participação. Fonte: SENAI",
  },
  {
    index: 4,
    imageAlt:
      "Descrição de Imagem: A imagem contém dois quadros. Acima, o quadro mostra um ataque uníssono, onde todos atacam ao mesmo tempo de forma coordenada, levando à vitória. Abaixo, o quadro mostra um ataque com traidores de forma descoordenada, levando à derrota.",
    imageSrc: [
      "images/ue/UE 7/Imagem 4 - UE7 1.png",
      "images/ue/UE 7/Imagem 4 - UE7 2.png",
    ],
    imageLegend:
      "Imagem 4: Cenários de um ataque da tolerância à falha bizantina. Fonte: SENAI",
  },
  {
    index: 5,
    imageAlt:
      "Descrição: A imagem mostra a geração de hashs de três entradas diferentes submetidas a função SHA 256. A primeira entrada é “o cachorro” e gera o hash 46238be747d9257e38ee77d6386b61abe60b5e5fc0ca0dd7e8feed1e3c2f242e. A segunda entrada é “o cachorro e o gato” e o hash gerado é b3b826ba23c9cbb9df1e35144e5f1f47f5df0c3b1a94b34210372d1d4ecaa828. A terceira entra é “o cachorro corre atrás do gato” e gera o hash 7b9a79895706b7b4ef9e97df87a7e7b9a4209bd215e55f9b19527d64f30a7032",
    imageSrc: ["images/ue/UE 7/Imagem 5 - UE7.png"],
    imageLegend:
      "Imagem 5: Função hash criptografada transformando a mensagem de entrada em uma saída de hash. Fonte: SENAI.",
  },
  {
    index: 6,
    imageAlt:
      "Descrição da imagem 1°- Versão: número da versão do software Bitcoin, 2°- Hash do bloco anterior: referência ao hash do bloco anterior,3°- Raiz de Merkle: um hash representativo das transações incluídas no bloco,4°- Registro de data e hora: o horário em que o bloco foi criado, 5°- Target: algoritimo de prova de trabalho para o bloco, 6°- Nonce: a variável usada no processo de prova de trabalho.",
    imageSrc: ["images/ue/UE 7/Imagem 6 - UE7.png"],
    imageLegend: "Imagem 6: Estruturas do cabeçalho de um bloco. Fonte: SENAI.",
  },
  {
    index: 7,
    imageAlt:
      "Descrição de Imagem:A imagem mostra a estrutura de uma cadeia de blocos com a representação de três blocos. O bloco mais à esquerda é identificado com “Bloco 01” e dentro dele tem o conteúdo e uma ligação feita para “Bloco 02” pela “Hash 00”. No centro está o “Bloco 02”. Dentro dele tem seu conteúdo, o “Hash 00” e uma ligação para o “Bloco 03” feito pela “Hash 01”. À direita, temos o “Bloco 03” mostrando internamente seu conteúdo e a “Hash 01”. A “Hash 02” será a conexão para um novo bloco adicionado a rede.",
    imageSrc: ["images/ue/UE 7/Imagem 7 - UE7.png"],
    imageLegend:
      "Imagem 7: Blocos da Blockchain conectados pelo hash. Fonte: SENAI",
  },
  {
    index: 8,
    imageAlt:
      "Descrição : A imagem mostra um retângulo com a palavra “Integridade” englobando dois outros retângulos. O primeiro tem o texto “Algoritmo de consenso: garante que as regras do sistema estejam sendo seguidas e que todas as partes envolvidas concordem com o estado atual da rede.” O outro retângulo possui “Imutabilidade: garante a integridade dos registros de dados e transações após cada novo bloco de dados ser confirmado como válido.”",
    imageSrc: ["images/ue/UE 7/Imagem 8 - UE7.png"],
    imageLegend:
      "Imagem 8: A função dos algoritmos de consenso e imutabilidade na integridade da Blockchain. Fonte: SENAI.",
  },
];

const imagesUE8 = [
  {
    index: 1,
    imageAlt:
      "Descrição de imagem: Página inicial do remix-project.org, na parte superior logotipo da página seguido por três respectivos botões: chat with us; book a workshop e remix IDE (com uma seta indicando que deve-se clicar nele). Abaixo dos botões (da esquerda para direita) informações sobre transações de blockchain e campo para simular testes de programação.",
    imageSrc: ["images/ue/UE 8/Imagem 1 - UE8.png"],
    imageLegend:
      "Imagem 1: Página inicial do remix-project.org. Fonte: remix-project.org",
  },
  {
    index: 2,
    imageAlt:
      "Descrição de Imagem: Página Remix IDE para programação de contrato à esquerda, há uma caixa chamada File Explorer. Há um diretório, algumas pastas e alguns arquivos que a princípio não vamos explorar, exceto pela pasta chamada contracts. Dentro dela ficam os contratos inteligentes (arquivos com extensão .sol).",
    imageSrc: ["images/ue/UE 8/Imagem 2 - UE8.png"],
    imageLegend:
      "Imagem 2: Início de uso da IDE Remix. Fonte: remix-project.org",
  },
  {
    index: 3,
    imageAlt:
      "Descrição de Imagem: Página Remix IDE para programação de contrato à esquerda, há uma caixa chamada File Explorer. Há um diretório, algumas pastas e alguns arquivos que a princípio não vamos explorar, exceto pela pasta chamada contracts. Dentro dela ficam os contratos inteligentes (arquivos com extensão .sol).",
    imageSrc: ["images/ue/UE 8/Imagem 3 - UE8.png"],
    imageLegend:
      "Imagem 3: Criação de um arquivo de contrato inteligente no File Explorer. Fonte:remix-project.org",
  },
  {
    index: 4,
    imageAlt:
      "Descricaodaimagem: Contém o código: - linha 1: // SPDX-License-Identifier: GPL - 3.0 - linha 2: pragma solidity >=0.7.0 <0.9.0;",
    imageSrc: ["images/ue/UE 8/Imagem 4 - UE8.png"],
    imageLegend:
      "Imagem 4: Especificação da licença do código fonte e versão do compilador Solidity. Fonte: SENAI",
  },
  {
    index: 5,
    imageAlt:
      "Descricaodaimagem: Contém o código: - linha 1: contract OlaMundo{ - linha 2 linha -linha3: }",
    imageSrc: ["images/ue/UE 8/Imagem 5 - UE8.png"],
    imageLegend:
      "Imagem 5: Definição de um contrato com a palavra reservada contract. Fonte: SENAI",
  },
  {
    index: 6,
    imageAlt:
      "Descrição de imagem: Começa da linha 4 e contém o código: - linha 4: contract OlaMundo{ - linha 5: //Propriedades -linha 6: linha -linha 7: //Construtor - linha 8: linha -linha 9: //Funções -linha 10: linha - linha 11: }",
    imageSrc: ["images/ue/UE 8/Imagem 6 - UE8.png"],
    imageLegend:
      "Imagem 6: Sugestão de estrutura do escopo do contrato. Fonte: SENAI",
  },
  {
    index: 7,
    imageAlt:
      "Descrição de imagem: Começa da linha 4 e contém o código: - linha 4: contract OlaMundo{ - linha 5: //Propriedades -linha 6: string mensagem; -linha 7: linha - linha 8: //Construtor - linha 9: linha -linha 10: //Funções -linha 11: linha - linha 12: }",
    imageSrc: ["images/ue/UE 8/Imagem 7 - UE8.png"],
    imageLegend: "Imagem 7: Declaração de uma variável. Fonte: SENAI",
  },
  {
    index: 8,
    imageAlt:
      "Descrição de imagem: Começa da linha 4 e contém o código: - linha 4: contract OlaMundo{ - linha 5: //Propriedades -linha 6: string mensagem; -linha 7: linha - linha 8: //Construtor -linha9: constructor(){ - linha 10: mensagem = “Ola mundo SENAI”; - linha 11: } - linha 12: linha -linha 13: //Funções -linha 14: linha - linha 15: }",
    imageSrc: ["images/ue/UE 8/Imagem 8 - UE8.png"],
    imageLegend:
      "Imagem 8: Inicialização da variável no construtor. Fonte: SENAI",
  },
  {
    index: 9,
    imageAlt:
      "Descrição de imagem: Começa da linha 4 e contém o código: - linha 4: contract OlaMundo{ - linha 5: //Propriedades -linha 6: string mensagem; -linha 7: linha - linha 8: //Construtor -linha9: constructor(){ - linha 10: mensagem = “Ola mundo SENAI”; - linha 11: } - linha 12: linha -linha 13: //Funções - linha 14: function olaMundo( ) public view returns(string memory) { - linha 15: returns mensagem; -linha 16: } - linha 17: }",
    imageSrc: ["images/ue/UE 8/Imagem 9 - UE8.png"],
    imageLegend:
      "Imagem 9: Definição de uma função para retornar a mensagem. Fonte: SENAI",
  },
  {
    index: 10,
    imageAlt:
      "Descrição de imagem: Contém o código: -linha1: //SPDX-License-Identifier: GPL - 3.0 - linha 2: pragma solidity >=0.7.0 <0.9. 0; - linha 3: linha - linha 4: contract OlaMundo{ - linha 5: //Propriedades -linha 6: string mensagem; -linha 7: linha - linha 8: //Construtor -linha 9: constructor(){ - linha 10: mensagem = “Ola mundo SENAI”; - linha 11: } - linha 12: linha -linha 13: //Funções - linha 14: function olaMundo( ) public view returns(string memory) { - linha 15: returns mensagem; -linha 16: } - linha 17: }",
    imageSrc: ["images/ue/UE 8/Imagem 10 - UE8.png"],
    imageLegend:
      "Imagem 10: Implementação do contrato inteligente 'olaMundo'. Fonte: SENAI",
  },
  {
    index: 11,
    imageAlt:
      "Descrição de Imagem: A imagem está dividida em duas colunas. Na esquerda, mostra-se o menu lateral esquerdo com a opção “Solidity Compile”. Na direita, mostra-se a tela exibida após acessar a opção do menu. Há uma seta vermelha apontando para um botão “Compile AloMundo,Sol”, indicando que o botão deve ser pressionado para compilar o contrato.",
    imageSrc: ["images/ue/UE 8/Imagem 11 - UE8.png"],
    imageLegend:
      "Imagem 11: Seleção no menu e compilação do contrato inteligente. Fonte: remix-project.org",
  },
  {
    index: 12,
    imageAlt: "",
    imageSrc: ["images/ue/UE 8/Imagem 12 - UE8.png"],
    imageLegend:
      "Imagem 12: Fazendo e deploy do contrato inteligente. Fonte: remix-project.org",
  },
  {
    index: 13,
    imageAlt:
      "Descrição de Imagem: A imagem está dividida em duas colunas. Na esquerda, mostra-se o menu lateral esquerdo com a opção “Deploy e run transactions”. Na direita, mostra-se a tela exibida após acessar a opção do menu. Há uma seta vermelha apontando para um botão “Deploy”, no canto inferior esquerdo. O botão deve ser pressionado para realizar o deploy do contrato.",
    imageSrc: ["images/ue/UE 8/Imagem 13 - UE8.png"],
    imageLegend:
      "Imagem 13: A implantação do contrato é uma transação. Fonte: remix-project.org",
  },
  {
    index: 14,
    imageAlt:
      "Descrição de Imagem: Na parte superior da imagem, há as informações do console relacionadas à transação de implantação do contrato. Na parte inferior, há um destaque no campo relacionado ao saldo de ETH, indicando que houve um decréscimo devido ao uso de gás para a implantação do contrato.",
    imageSrc: ["images/ue/UE 8/Imagem 14 - UE8.png"],
    imageLegend:
      "Imagem 14: Contrato implantado na rede e função pública. Fonte: remix-project.org",
  },
  {
    index: 15,
    imageAlt:
      "Descrição de Imagem: Na imagem à esquerda, há um destaque para o espaço dos contratos implantados, localizado na parte inferior da aba “DEPLOY & RUN TRANSACTIONS”. Na imagem à direita, mostra o acesso ao contrato implantado. Neste caso, há uma função pública chamada “olaMundo” representada por um botão.",
    imageSrc: ["images/ue/UE 8/QRCode.png"],
    imageLegend: "",
  },
  {
    index: 16,
    imageAlt: "",
    imageSrc: ["images/ue/UE 8/remix9.png"],
    imageLegend: "",
  },
];

const imagesUE9 = [
  {
    index: 1,
    imageAlt:
      "descricaodaimagem: A imagem mostra a estrutura básica de uma função em Solidity, Contém o código: - linha 1: function nome da funcao(tipo do parametro x) returns(tipo do retorno){ ; - linha 2 //corpo da função; -linha3: }",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 1.png"],
    imageLegend:
      "Imagem 1: Estrutura básica de uma função em Solidity. Fonte: SENAI",
  },
  {
    index: 2,
    imageAlt:
      "Descrição de Imagem: contém o seguinte código: -linha 1 - function nome_da_funcqao(tipo_do_parametro x) visibilidade estado returns(tipo_do_retorno){ -linha 2: //corpo da função e -linha 3: }",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 2.png"],
    imageLegend:
      "Imagem 2: Estrutura geral de uma função no Solidity. Fonte:SENAI",
  },
  {
    index: 3,
    imageAlt:
      "Descrição de Imagem: Contém o código: -linha 1: function soma(unit x, uint y) external pure returns(unit){ -linha 2: returns x + y; -linha 3: }",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 3.png"],
    imageLegend:
      "Imagem 3: Uma função que recebe dois parâmetros do tipo inteiro chamadas de 'x' e 'y'. Fonte: SENAI",
  },
  {
    index: 4,
    imageAlt:
      "Descrição de imagem: uso de returns e return em Solidity, Contém o código: - linha 1: function consultar () external view returns ( uint) { -linha 2 return saldo [msg.sender]; -linha3: }",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 4.png"],
    imageLegend: "Imagem 4: Exemplo de uso de returns e return. Fonte: SENAI",
  },
  {
    index: 5,
    imageAlt:
      "Descrição de imagem:Contém o código: - linha 1: string nome = “SENAI”; - linha 2: function verNome() external returns (string memory) { - linha 3: return nome; -linha 4 }",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 5.png"],
    imageLegend: "Imagem 5: Função do tipo transaction. Fonte: SENAI",
  },
  {
    index: 6,
    imageAlt:
      "Descrição de imagem:Contém o código: - linha 1: string nome = “SENAI”; - linha 2: function verNome() external view returns (string memory) { - linha 3: return nome; -linha 4 }",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 6.png"],
    imageLegend: "Imagem 6: Função do tipo view. Fonte: SENAI",
  },
  {
    index: 7,
    imageAlt:
      "Descrição de imagem:Contém o código: - linha 1: function multiplicacao (uint a, uint b) external pure returns (uint){; - linha 2: return a*b; -linha 3 }",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 7.png"],
    imageLegend: "Imagem 7: Função do tipo pure. Fonte: SENAI",
  },
  {
    index: 8,
    imageAlt:
      "Descrição de imagem:Contém o código: - linha 1: uint fundo = 0; - linha 2: function investir() public payable { - linha 3: fundo += msg.value; -linha 4 }",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 8.png"],
    imageLegend: "Imagem 8: Função do tipo payable. Fonte: SENAI",
  },
  {
    index: 9,
    imageAlt:
      "Descrição de imagem:Contém o código: - linha 1: function enviarEth (address payable destino) public{ - linha 2://envia Ether para o destino; - linha 3 }",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 9.png"],
    imageLegend:
      "Imagem 9: Função para enviar fundos com parâmetro endereço do tipo pagável. Fonte: SENAI",
  },
  {
    index: 10,
    imageAlt:
      "Descrição de imagem:Contém o código: - linha 1: // SPDX-License-Identifier: GPL - 3.0, -linha 2: pragma solidity >=0.7.0 <0.9.0; -linha 3: -linha 4: -linha 5: contract caixa { -linha 6: - linha 7: uint numero; // declaracao de variável que vai guardar o numero - linha8: - linha 9: -linha 10: function guardar (uint num) public { - linha 11: numero - num; linha 12: } -linha13: linha 14: linha 15: function consultar ( ) public view returns (uint){ linha16: return numero; linha 17: } linha18: }",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 10.png"],
    imageLegend:
      "Imagem 10: Contrato Caixa para guardar e consultar um número. Fonte: SENAI",
  },
  {
    index: 11,
    imageAlt:
      "Descrição de Imagem: A imagem mostra a tela exibida pelo Remix após o deploy. Acima é exibido o endereço do contrato e o saldo (Balance) As funções guardar e consultar são exibidas como botões. A função “guardar” recebe parâmetro, então há um campo de entrada no lado direito do botão para inserir os dados.",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 11.png"],
    imageLegend: "Imagem 11: Contrato Caixa após deploy no Remix. Fonte: SENAI",
  },
  {
    index: 12,
    imageAlt:
      "Descrição de Imagem: A imagem mostra a execução da função guardar(234). O parâmetro 234 é inserido no campo ao lado direito do botão Guardar. É indicado com uma seta que o botão deve ser pressionado. Logo após, uma transação é gerada no console e mostrada na parte inferior da imagem.",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 12.png"],
    imageLegend:
      "Imagem 12: Execução da função guardar(234) no Remix. Fonte: SENAI",
  },
  {
    index: 13,
    imageAlt:
      "Descrição de Imagem: A imagem mostra a execução da função consultar( ). Uma seta indica que o botão deve ser pressionado. Logo após, é impresso o retorno da função abaixo do botão e tem valor “0:uint256:234”. Uma transação é criada e impressa no console, mostrado na parte inferior da imagem.",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 13.png"],
    imageLegend:
      "Imagem 13: Execução da função consultar( ) no Remix. Fonte:SENAI",
  },
  {
    index: 14,
    imageAlt:
      "Descrição de Imagem: Descrição de imagem:Contém o código: - linha 1: contract Exemplo { - linha 2: linha - linha 3: address private proprietario; - linha 4: linha - linha 5: constructor( ) { - linha 6: proprietario = msg.sender; - linha 7: } - linha 8: }",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 14.png"],
    imageLegend:
      "Imagem 14: Definição de construtor de um contrato. Fonte: SENAI",
  },
  {
    index: 15,
    imageAlt:
      "Descrição de Imagem:Descrição de imagem:Contém o código: Inicia da linha 6: contract Proprietario { - linha 7: linha - linha 8: address private proprietario; - linha 9: linha - linha 10: modifier ehProprietario() { - linha 11: require(msg.sender == proprietario); - linha 12: ; - linha 13: } - linha 14: linha - linha 15: constructor( ) { - linha 16: proprietario = msg.sender; - linha 17: } - linha 18: linha - linha 19: function mudaProprietario(address novoProprietario) public ehProprietario { -linha 20: proprietario = novoProprietario; - linha 21: } - linha 22:}",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 15.png"],
    imageLegend:
      "Imagem 15: Utilização de um modificador de função. Fonte: SENAI",
  },

  /* Info Visibility Images */

  {
    index: 16,
    imageAlt: "",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 16.png"],
    imageLegend: "",
  },
  {
    index: 17,
    imageAlt: "",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 17.png"],
    imageLegend: "",
  },
  {
    index: 18,
    imageAlt: "",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 18.png"],
    imageLegend: "",
  },
  {
    index: 19,
    imageAlt: "",
    imageSrc: ["images/ue/UE 9/UE9_Imagem - 19.png"],
    imageLegend: "",
  },
];

const imagesUE10 = [
  {
    index: 1,
    imageAlt:
      "Descrição de imagem: A imagem contém o seguinte código: -linha 1: uint idade = 15; -linha 2: uint ano_atual = 2022; -linha 3: uint ano_nasc = ano_atual - idade;",
    imageSrc: ["images/ue/UE 10/Imagem 1.png"],
    imageLegend: "Imagem 1: Exemplo de uso do int. Fonte: SENAI",
  },
  {
    index: 2,
    imageAlt:
      "Descrição de imagem: A imagem contém o seguinte código: -linha 1: bool ehValido = true;",
    imageSrc: ["images/ue/UE 10/Imagem 2.png"],
    imageLegend:
      "Imagem 2: Declaração e atribuição de um tipo booleano. Fonte: SENAI",
  },
  {
    index: 3,
    imageAlt:
      "Descrição de imagem: A imagem contém o seguinte código: -linha 1: address usuario = address owner = 0xc0ffee254729296a45a3885639AC7E10F9d54979;",
    imageSrc: ["images/ue/UE 10/Imagem 3.png"],
    imageLegend:
      "Imagem 3: Declaração e atribuição de um tipo address. Fonte: SENAI",
  },
  {
    index: 4,
    imageAlt:
      "Descrição da imagem: -linha 1: address payable x = payable (0x123); - linha 2: address myAddress = address(this);",
    imageSrc: ["images/ue/UE 10/Imagem 4.png"],
    imageLegend:
      "Imagem 4: Diferença entre o address e address payable. Fonte: SENAI",
  },
  {
    index: 5,
    imageAlt:
      "Descrição da Imagem: A imagem contém o seguinte código: -linha1: address payable destino = payable(0x123); - linha2:address(this); -linha 3: if(destino.balance < 0 && origem.balance >=10) destino.transfer(10);",
    imageSrc: ["images/ue/UE 10/Imagem 5.png"],
    imageLegend: "Imagem 5 : Uso dos membros balance e transfer. Fonte: SENAI",
  },
  {
    index: 6,
    imageAlt:
      "Descrição da Imagem: A imagem contém o código a seguite: -linha1: bytes5 x = “SENAI”;, -linha2: int tamanho = x.length;.",
    imageSrc: ["images/ue/UE 10/Imagem 6.png"],
    imageLegend:
      "Imagem 6: Uso do array de bytes de tamanho fixo. Fonte: SENAI",
  },
  {
    index: 7,
    imageAlt:
      "Descrição da imagem: A imagem contém o seguinte código: linha 1: enum Coordenada{NORTE, SUL, LESTE, OESTE}; linha 2: Coordenada direcao; linha 3: Coordenada constant direcaoDefault = Coordenada.NORTE;.",
    imageSrc: ["images/ue/UE 10/Imagem 7.png"],
    imageLegend: "Imagem 7: Definição e uso de um enum. Fonte: SENAI",
  },
  {
    index: 8,
    imageAlt:
      "DescricaodaImagem: A imagem contém o seguinte código: - linha01: unit x = 42; - linha02: string y = “Olá, mundo!”; - linha 03: bool z = true;",
    imageSrc: ["images/ue/UE 10/Imagem 8.png"],
    imageLegend: "Imagem 8: Uso de literais. Fonte: SENAI",
  },
  {
    index: 9,
    imageAlt:
      "DescricaodaImagem: A imagem contém o seguinte código: - linha02 unit[10] numeros;; - linha03: linha; linha 4: //Atribui valores aos elementos do array; -linha05: numeros[0] = 1; - linha 06: numeros[1] = 2; - linha 07: //…; -linha08: numeros[9] = 10;",
    imageSrc: ["images/ue/UE 10/Imagem 9.png"],
    imageLegend: "Imagem 9: Uso de array de tamanho fixo. Fonte: SENAI",
  },
  {
    index: 10,
    imageAlt:
      "DescricaodaImagem: A imagem contém o seguinte código: - linha02 unit[ ] numeros;; - linha03: linha; linha 4: //Adiciona elementos ao array; -linha05: numeros.push(1); - linha 06: numeros.push(2);",
    imageSrc: ["images/ue/UE 10/Imagem 10.png"],
    imageLegend: "Imagem 10: Uso de array de tamanho dinâmico. Fonte: SENAI",
  },
  {
    index: 11,
    imageAlt:
      "DescricaodaImagem: A imagem contém o seguinte código: - linha01 string public nome;; - linha02: linha; linha 03: function definirNome(string memory _nome) public { -linha04: nome = _nome; - linha 05: }",
    imageSrc: ["images/ue/UE 10/Imagem 11.png"],
    imageLegend: "Imagem 11: Definição e uso do tipo string. Fonte: SENAI",
  },
  {
    index: 12,
    imageAlt:
      "DescricaodaImagem: A imagem contém o seguinte código: - linha01: struct Pessoa{ - linha02: string nome; - linha 3: string endereco; -linha04: string telefone; linha05: }; linha06: linha; linha07: Pessoa pessoa; - linha08: linha; linha09: pessoa.nome = “Rafael”; linha10: pessoa.endereco = “Rua do Rafael”; -linha11: pessoa.telefone = “99999-9999”.",
    imageSrc: ["images/ue/UE 10/Imagem 12.png"],
    imageLegend: "Imagem 12: Definição e uso de um struct Pessoa. Fonte: SENAI",
  },
  {
    index: 13,
    imageAlt:
      "DescricaodaImagem: A imagem contém o seguinte código: - linha 2: mapping(address => uint) saldos; linha 3 saldos[msg.sender] = 300;",
    imageSrc: ["images/ue/UE 10/Imagem 13.png"],
    imageLegend: "Imagem 13: Definição e uso de um mapping. Fonte: SENAI",
  },
  {
    index: 14,
    imageAlt:
      "DescricaodaImagem: A imagem contém o seguinte código: - linha 1: if (saldo > 0) { - linha 2: //Executar ação A - linha 3: } else { -linha 4: // Executar ação B - linha 5: }",
    imageSrc: ["images/ue/UE 10/Imagem 14.png"],
    imageLegend: "Imagem 14: Uso do if/else. Fonte: SENAI",
  },
  {
    index: 15,
    imageAlt:
      "DescricaodaImagem: A imagem contém o seguinte código: - linha01: //Loop “for” - linha02: for (unit i=0; i <10; i++) { - linha 3: //Executar ação -linha04: } linha05: linha linha06: //Loop ‘while’ linha07: uint j = 0; - linha08: while ( j< 10) { linha09: //Executar ação linha10: j++; -linha11: } - linha 12: linha -linha 13://Loop “do-while” -linha 14: unit k=0; -linha 15: do {; -linha 16: //Executar ação - linha 17: k++; - linha 18: } while (k < 10);.",
    imageSrc: ["images/ue/UE 10/Imagem 15.png"],
    imageLegend: "Imagem 15: Uso do for, while e do/while. Fonte: SENAI",
  },
];

const imagesUE11 = [
  {
    index: 1,
    imageAlt:
      "DescriçãodaImagem: A imagem contém o código: -linha 1: contract A{ - linha 2: linha - linha 3: //conteúdo do contato - linha 4: linha - linha 5: } - linha 6: linha - linha 7: contract B is A{ - linha 8: linha - linha 9: //B herda as características de A - linha 10: linha - linha 11: }",
    imageSrc: ["images/ue/UE 11/Imagem 1.png"],
    imageLegend:
      "Imagem 1: Uso da palavra reservada is para que B herde as características de A. Fonte: SENAI",
  },
  {
    index: 2,
    imageAlt:
      "DescriçãodaImagem: A imagem contém o código: -linha 1: //SPDX-License-Identifier: GPL-3.0 -linha 2: pragma solidity >=0.7.0 <0.9.0; - linha 3: linha - linha 4: contract Pai{ - linha 5: linha - linha 6: uint internal dobro; -linha 7: linha - linha 8: function dobrarValor(uint numero) external { - linha 9: dobro = 2*numero; - linha 10: } - linha 11: } linha 12: linha - linha 13: contract Filho is Pai{ - linha 14: linha - linha 15: function consultar( ) external view returns(unit) { - linha 16: return dobro; linha 17: } - linha 18: }",
    imageSrc: ["images/ue/UE 11/Imagem 2.png"],
    imageLegend:
      "Imagem 2: Definição de um contrato Pai (base) e um contrato Filho (derivado) que herda o pai. Fonte: SENAI",
  },
  {
    index: 3,
    imageAlt:
      "DescriçãodaImagem: A imagem contém o código que inicia na linha 20: -linha 20:contract Teste { -linha 21:linha- linha 22: Filho cf = new Filho ( ); - linha 23: linha - linha 24: function testaHeranca() public returns(unit) { - linha 25: cf.dobrarValor(20); - linha 26: return cf.consultar(); - linha 27: linha - linha 28: }; -linha 29: }",
    imageSrc: ["images/ue/UE 11/Imagem 3.png"],
    imageLegend:
      "Imagem 3: Contrato para testar o funcionamento da herança única. Fonte: SENAI",
  },
  {
    index: 4,
    imageAlt:
      "DescriçãodaImagem: A imagem contém o código: -linha 1: //SPDX-License-Identifier: GPL-3.0 -linha 2: pragma solidity >=0.7.0 <0.9.0; - linha 3: contract A { - linha 4: string internal tituloA; - linha 5: function defineTituloA(string memory título) external { - linha 6: tituloA = titulo; -linha 7: } - linha 8: } - linha 9: linha - linha 10: contract B is A{ - linha 11: string internal tituloB; linha 12: function defineTituloB(string memory titulo) external { - linha 13: tituloB = string(abi.encodePacked(tituloA, titulo)) - linha 14: } - linha 15: } - linha 16: linha -linha 17: contract C is B { - linha 18: function get() external view returns(string memory){ - linha 19: return tituloB; - linha 20: } - linha 21:}",
    imageSrc: ["images/ue/UE 11/Imagem 4.png"],
    imageLegend:
      "Imagem 4: Definição de contratos com herança multinível. Fonte: SENAI",
  },
  {
    index: 5,
    imageAlt:
      "DescriçãodaImagem: A imagem contém o código que inicia na linha 24: -linha 24:contract Teste { -linha 25:linha- linha 26: C cc = new C(); - linha 27: linha - linha 28: function testaHeranca() public returns(string memory) { - linha 29: cc.defineTituloA(“Heranca em Solidity”); ; - linha 30: cc.defineTituloB(“ no SENAI”); - linha 31: returns cc.getC(); - linha 32: linha - linha 33: }: -linha 34: }",
    imageSrc: ["images/ue/UE 11/Imagem 5.png"],
    imageLegend:
      "Imagem 5: Contratos para testar a herança multinível. Fonte: SENAI",
  },
  {
    index: 6,
    imageAlt:
      "DescriçãodaImagem: A imagem contém o código: -linha 1: //SPDX-License-Identifier: GPL-3.0 -linha 2: pragma solidity >=0.7.0 <0.9.0; - linha 3: contract A { - linha 4: string internal tituloA; - linha 5: function defineTituloA(string memory título) external { - linha 6: tituloA = titulo; -linha 7: } - linha 8: } - linha 9: linha - linha 10: contract B { - linha 11: string internal tituloB; linha 12: function defineTituloB(string memory titulo) external { - linha 13: tituloB = string(abi.encodePacked(tituloA, titulo)) - linha 14: } - linha 15: } - linha 16: linha -linha 17: contract C is A,B { - linha 18: function get() external view returns(string memory){ - linha 19: return string(abi.encondePacked(tituloA,tituloB)); - linha 20: } - linha 21:}",
    imageSrc: ["images/ue/UE 11/Imagem 6.png"],
    imageLegend:
      "Imagem 6: Definição de contratos com herança múltipla. Fonte: SENAI",
  },
  {
    index: 7,
    imageAlt:
      "Descrição de Imagem:: A imagem contém o código: - linha 24: contract Teste { -linha 25: - liha 26: C cc = new C (); - linha 27: - linha 28: function testaHeranca() public returns (string memory) { - linha 29: cc.defineTituloA(“Heranca em Solidity”) ; - linha 30: cc.defineTituloB(“ no SENAI”); - linha 31: return cc.getC(); - linha 32: - linha 33:} (obs. alinhado com function da linha 28) - linha 34: } (obs. alinhado com contract da linha 24).",
    imageSrc: ["images/ue/UE 11/Imagem 7.png"],
    imageLegend:
      "Imagem 7: Contratos para testar a herança múltipla. Fonte: SENAI",
  },
  {
    index: 8,
    imageAlt:
      "Descrrição de Imagem: A imagem contém o código: - linha 1: //SPDX-License-Identifier: GPL-3.0 - linha 2: pragma solidity >=0.7.0 <0.9.0; - linha 3: contract A { - linha 4: function impriirMsg() public pure virtual returns (string memory) { - linha5: return “a”;- linha 6: } (obs: alinhado com a palavra function da linha 4) - linha 7: } (obs. alinhado com a palavra contract da linha 3) - linha 8: contract Bis A { - linha 9: -linha 10: function imprimirMsg() public pure override returns (string memory) { - linha 11: return “b”; - linha 12: } (obs. alinhado com a palavra function da linha 10) - linha 13: } (obs. alinhado com a palavra contract da linha 8) - linha 14: - linha 15: contract C is A { - linha 16: - linha 17: function imprimirMsg() public pure override returns (string memory) { - linha 18: return “C”; - linha 19 : } (obs. alinhado com a palavra function da linha 17) - linha 20: } (obs. alinhado com a palavra contract da linha 15)",
    imageSrc: ["images/ue/UE 11/Imagem 8.png"],
    imageLegend:
      "Imagem 8: Polimorfismo entre contratos usando os marcadores virtual e override. Fonte: SENAI",
  },
  {
    index: 9,
    imageAlt:
      "Descrição de Imagem: A imagem da esquerda para direito possui: Um retângulo com o texto dentro “CONTRATO EVENT(	parametro1, parametro2)”. Depois, há um seta da esquerda para direita com o texto interno “EMIT(valor1, valor2)”. Ao lado da seta, há um retângulo com o texto “LOGS[{...”args”:{ “0” : valor1, “1” : valor2, “parametro1”: valor1, “parametro2”: valor2}...}]. Após, existe um seta da direita para esquerda com o texto “Acessa dados”. Por fim, há um retângulo com a palavra “Aplicação” dentro.",
    imageSrc: ["images/ue/UE 11/Imagem 9.png"],
    imageLegend:
      "Imagem 9: Eventos e logging para comunicação com agente externos. Fonte: SENAI",
  },
  {
    index: 10,
    imageAlt:
      "Descrição de imagem: A imagem contém o código: - linha 1: // SPDX-License-Identifier: GPL -3.0 - linha 2 : pragma solidity >=0.7.0 <0.9.0; - linha 3: linha 4: contract Evento { - linha 5: event MandarMensagem(adress indexed sender, string message) ; - linha 6: - linha 7: - linha 8: function test () public { - linha 9: emit MandarMensagem (msg.sender, “SENAI Blockchain”); - linha 10: emir MandarMensagem(msg.sender, “SENAI Contratos Inteligentes”); - linha 11: } (observação alinhado com a palavra function da linha 8) - linha 12: } (obs. alinhado com a palavra contract da linha 4).",
    imageSrc: ["images/ue/UE 11/Imagem 10.png"],
    imageLegend:
      "Imagem 10: Utilização de event e emit em um contrato. Fonte: SENAI",
  },
  {
    index: 11,
    imageAlt:
      "Descrição de Imagem: A imagem mostra um log com os dados relacionados a um evento.Da primeira parte, tem-se: { from: endereço de rementente, event: “MandarMensagem”, args:{ “0”: endereço do emissor, “1”: “SENAI Blockchain”, “sender”: endereço do emissor, “message”: SENAI Blockchain}. Na segunda parte, temos: { from: endereço de rementente, event: “MandarMensagem”, args:{ “0”: endereço do emissor, “1”: “SENAI Contratos Inteligentes”, “sender”: endereço do emissor, “message”: SENAI Contratos Inteligentes}",
    imageSrc: ["images/ue/UE 11/Imagem 11.png"],
    imageLegend:
      "Imagem 11: Log gerado pela transação que emitiu o evento. Fonte: SENAI",
  },
  {
    index: 12,
    imageAlt:
      'Descrição de Imagem: A imagem mostra o seguinte trecho de código de programação: -linha6: function checaEntrada(uint _entrada) public view returns(string memory){ -linha7: require(_entrada <=0,"uint inválido"); -linha8: require(_entrada >=255,"uint inválido"); -linha9: linha -linha10: return "Entrada é um unit8"; -linha11: }',
    imageSrc: ["images/ue/UE 11/Imagem 12.png"],
    imageLegend: "Imagem 12: Uso do require. Fonte: SENAI",
  },
  {
    index: 13,
    imageAlt:
      "Descrição de Imagem: A imagem mostra a execução da função com uma entrada de valor 300, logo após a sinalizado que houve uma reversão e é impresso a mensagem “uint8 inválido”, indicando o motivo.",
    imageSrc: ["images/ue/UE 11/Imagem 13.png"],
    imageLegend:
      "Imagem 13: Reversão da transação ocasionado pelo require. Fonte: SENAI",
  },
  {
    index: 14,
    imageAlt:
      "Descrição de Imagem: A imagem contém o código: - linha 6: bool result; - linha 7: - linha 8: function checkOver(uint _num1, uint8 _num2) public { - linha 9: uint8 sum = _num1 + _num2; - linha 10 asser(sum<=255); - linha 11: result = true; - linha 12: } (observação alinhado com a palavra function da linha 8).",
    imageSrc: ["images/ue/UE 11/Imagem 14.png"],
    imageLegend: "Imagem 14: Uso do assert. Fonte: SENAI",
  },
  {
    index: 15,
    imageAlt:
      "Descrição de Imagem: A imagem mostra a execução da função com uma entrada de valor 300 e 100, logo após a sinalizado que houve uma reversão",
    imageSrc: ["images/ue/UE 11/Imagem 15.png"],
    imageLegend:
      "Imagem 15: Reversão da transação ocasionado pelo assert. Fonte: SENAI",
  },
  {
    index: 16,
    imageAlt:
      "Descrição de imagem: A imagem contém o código: - linha 6: function checkOver(uint _num1, uint _num2) public view returns (string memory, uint) {{ - linha 7: uint sum = _num1 + _num2; - linha 8: if (sum < 0) || sum > 255) { - linha 9: revert(“ Aconteceu Overflow “); - linha 10: } (observação alinhado com a palavra if da linha 8) - linha 11: else{ - linha 12: return (“ nao aconteceu Overlow “, sum); - linha 13: } (observação alinhado com a palavra if da linha 8) - linha 14: } (observação alinhado com a palavra function da linha 6)",
    imageSrc: ["images/ue/UE 11/Imagem 16.png"],
    imageLegend: "Imagem 16: Uso do revert. Fonte: SENAI",
  },
  {
    index: 17,
    imageAlt:
      "Descrição de Imagem: A imagem mostra a execução da função com uma entrada de valor 200 e 100, logo após a sinalizado que houve uma reversão.",
    imageSrc: ["images/ue/UE 11/Imagem 17.png"],
    imageLegend:
      "Imagem 17: Reversão da transação ocasionado pelo revert. Fonte: SENAI",
  },
];

const imagesUE12 = [
  {
    index: 1,
    imageAlt:
      "Descrição de Imagem: Contém o código: -linha 1// SPDX-License-Identifier: GPL-3.0 -linha 2: linha - linha 3: pragma solidity >=0.7.0 <0.9.0;-linha 4: linha - linha 5: contract ContratoCadastroEstudantes{ - linha 6: linha -linha 7: }",
    imageSrc: ["images/ue/UE 12/Imagem 1.png"],
    imageLegend: "Imagem 1. Estrutura inicial do contrato. Fonte: SENAI",
  },
  {
    index: 2,
    imageAlt:
      "descricaodaImagem: Contém o código iniciando na linha 7: - linha 7: struct Estudante { - linha 8: string nomeEstudante; - linha 9: uint idade; - linha 10:bool preRequisito; -linha 11: }",
    imageSrc: ["images/ue/UE 12/Imagem 2.png"],
    imageLegend: "Imagem 2: Definição do struct Estudante. Fonte: SENAI",
  },
  {
    index: 2.2,
    imageAlt: "",
    imageSrc: ["images/ue/UE 12/Gif 1.gif"],
    imageLegend: "",
  },
  {
    index: 3,
    imageAlt:
      "descriçãodaImagem: Contém o código: - linha 13: mapping(address => Estudante) private _estudantesMatriculados;",
    imageSrc: ["images/ue/UE 12/Imagem 3.png"],
    imageLegend:
      "Imagem 3: Definição do mapping _estudantesMatriculados. Fonte: SENAI",
  },
  {
    index: 4,
    imageAlt:
      "descriçãoDaImagem: Contém o código iniciado na linha 15: - linha 15: function getEstudanteMatriculado(address _estudanteAddress) public view returns(Estudante memory){ - linha 16: return_estudantesMatriculados[_estudanteAddress]; - linha 17: }",
    imageSrc: ["images/ue/UE 12/Imagem 4.png"],
    imageLegend:
      "Imagem 4: Definição da função que retorna o Estudante a partir da matrícula. Fonte: SENAI",
  },
  {
    index: 5,
    imageAlt:
      "#descriçãoDaimagem: Contém o código iniciado a linha 28: - linha 28: function ehEstudanteValido(Estudante memory _estudante) private pure returns(bool){ - linha 29: return ehIdadeValida(_estudante.idade) && ehNomeValido(_estudante.nomeEstudante) - linha 30: && _estudante.preRequisito; - linha 31:}",
    imageSrc: ["images/ue/UE 12/Imagem 5.png"],
    imageLegend:
      "Imagem 5: Definição da função que valida o Estudante. Fonte: SENAI",
  },
  {
    index: 6,
    imageAlt:
      "#descriçãoDaimagem: Contém o código iniciado a linha 33: - linha 33: function matricularEstudante(string memory _nomeEstudante, uint _idade, bool _preRequisito) public{ - linha 34: linha -linha 35:}",
    imageSrc: ["images/ue/UE 12/Imagem 6.png"],
    imageLegend:
      "Imagem 6: Definição da função para realizar matrícula um estudante. Fonte: SENAI",
  },
  {
    index: 7,
    imageAlt:
      '#descriçãoDaimagem: Contém o código iniciado a linha 35: - linha 35: require(ehNomeValido(_nomeEstudante), "O nome precisa ser informado"); - linha 36: require(ehIdadeValida(_idade), "A idade precisa ser informada"); - linha 37: require(_preRequisito, "O estudante precisa ter o pre requisito."); - linha 38: require(!ehEstudanteValido(getEstudanteMatriculado(msg.sender)), "Estudante já matriculado");',
    imageSrc: ["images/ue/UE 12/Imagem 7.png"],
    imageLegend: "Imagem 7: Realizando validações com require. Fonte: SENAI",
  },
  {
    index: 8,
    imageAlt:
      "#descriçãoDaimagem: Contém o código iniciado a linha 41: - linha 41: Estudante memory estudante; - linha 42: estudante.nomeEstudante = _nomeEstudante; - linha 43: estudante.idade = _idade; - linha 44: estudante.preRequisito = _preRequisito;",
    imageSrc: ["images/ue/UE 12/Imagem 8.png"],
    imageLegend: "Imagem 8: Realizando validações com require. Fonte: SENAI",
  },
  {
    index: 9,
    imageAlt:
      "#descriçãoDaimagem: Contém o código: assert(ehEstudanteValido(estudante));",
    imageSrc: ["images/ue/UE 12/Imagem 9.png"],
    imageLegend:
      "Imagem 9: Realizando validações do estudante com assert. Fonte: SENAI",
  },
  {
    index: 10,
    imageAlt:
      "#descriçãoDaimagem: Contém o código: _estudantesMatriculados[msg.sender] = estudante;",
    imageSrc: ["images/ue/UE 12/Imagem 10.png"],
    imageLegend:
      "Imagem 10: Inserção no mapping de um estudante associado ao endereço. Fonte: SENAI",
  },
  {
    index: 11,
    imageAlt:
      "Descrição da imagem: Contém o código - linha 33: function matricularEStudante(string memory _nomeEstudante, uint _idade, bool _preRequisito) public{ - linha 34: - linha 35: require(ehNomeValido(_nomeEstudante), “O nome precisa ser informado”); - linha 36: require(ehIdadeValida(_idade), “A idade precisa ser informada”); - linha 37: require(_prerequisito, “O estudante precisa ter o pre requisito.”); - linha 38: require(!ehEstudanteValido(getEstudanteMatriculado(msg.sender)), “Estudante já matriculado”); - linha 39: - linha 40: Estudante memory estudante; - linha 41: estudante.nomeEstudante = _nomeEstudante; - linha 42: estudante.idade = idade; - linha 43: estudante.preRequisito = _preRequisito; - linha 44: - linha 45: assert(ehEstudanteValido(estudante)); - linha 46: - linha 47: _estudantesMatriculados[msg.sender] = estudante; - linha 48: - linha 49: } (alinhado com a palavra function da linha 33).",
    imageSrc: ["images/ue/UE 12/Imagem 11.png"],
    imageLegend:
      "Imagem 11: Implementação da função matricularEstudante. Fonte: SENAI",
  },
  {
    index: 12,
    imageAlt:
      "#descriçãoDaImagem: A imagem mostra a tela de teste do contrato na plataforma Remix. Na parte superior há o texto “Contrato Cadastro Estudante”. Logo abaixo, tem -se “Balance: 0 ETH”.Na parte central, há dois botões representando as funções públicas: matricularEstudante e getEstudanteMatriculado. Ao lado dos botões, há campos de entrada de texto para inserção dos parâmetros. Na parte inferior, há os textos (“Low level interactions” e “calldata”) e o botão “Transact”.",
    imageSrc: ["images/ue/UE 12/Imagem 12.png"],
    imageLegend:
      "Imagem 12: Funções disponíveis após o deploy do contrato. Fonte: SENAI",
  },
  {
    index: 13,
    imageAlt:
      "Descrição de Imagem: A imagem mostra a tela de teste do contrato na plataforma Remix. Na parte superior há o texto “Contrato Cadastro Estudante”. Logo abaixo, tem -se “Balance: 0 ETH”.Na parte central, há dois botões representando as funções públicas: matricularEstudante e getEstudanteMatriculado. Ao lado dos botão matricularEstudante há o campo de entrada de texto para inserção dos parâmetros com os valores “Rafael,18, true”. Na parte inferior, há os textos (“Low level interactions” e “calldata”) e o botão “Transact”.",
    imageSrc: ["images/ue/UE 12/Imagem 13.png"],
    imageLegend:
      "Imagem 13: Implementação da função matricularEstudante. Fonte: SENAI",
  },
  {
    index: 14,
    imageAlt:
      "Descrição de Imagem: A imagem mostra a tela de console do remix com informações da trasanção. Há os campos de: status, transaction hash, from, to, gas e transaction cost.",
    imageSrc: ["images/ue/UE 12/Gif 2 (14).gif"],
    imageLegend:
      "Imagem 14: Implementação da função matricularEstudante. Fonte: SENAIFonte: SENAI",
  },
  {
    index: 15,
    imageAlt:
      "Descrição de Imagem: A imagem mostra a tela de teste do contrato na plataforma Remix. Na parte superior há o texto “Contrato Cadastro Estudante”. Logo abaixo, tem -se “Balance: 0 ETH”.Na parte central, há dois botões representando as funções públicas: matricularEstudante e getEstudanteMatriculado. Ao lado dos botão getEstudanteMatriculado há o campo de entrada de texto para inserção dos parâmetros com o valor “0x5B38Da6a701c568545dCfcB03FcB875f56beddC4”. Abaixo do botão, é apresentado o retorno “0:tuple(string,uint256,bool):Rafael,18,true” Na parte inferior, há os textos (“Low level interactions” e “calldata”) e o botão “Transact”.",
    imageSrc: ["images/ue/UE 12/Imagem 15.png"],
    imageLegend:
      "Imagem 15: Implementação da função matricularEstudante. Fonte: SENAI",
  },
];

const imagesUE13 = [
  {
    index: 1,
    imageAlt:
      "Descrição da Imagem: A imagem contém o seguinte código: -linha1: // SPDX-License-Identifier: GPL-3.0 - linha2: linha - linha3: pragma solidity >=0.7.0 <0.9.0; - linha4: linha - linha5: contract ContratoEmpresaCartao{ - linha6: linha - linha7: struct Cliente{ -linha8: string nomeCliente; - linha9: uint saldoCliente; -linha10: } - linha11: linha -linha12: mapping (address=>Cliente) private _clienteInscrito;",
    imageSrc: ["images/ue/UE 13/UE13_Imagem - 1.png"],
    imageLegend:
      "Imagem 1: Início do contrato e definição do struct Cliente e do mapping _clienteInscrito. Fonte: SENAI",
  },
  {
    index: 2,
    imageAlt:
      'Descrição da Imagem: A imagem contém o seguinte código:-linha14: function inscreveCliente(string memory _nomeCliente) public { -linha15: require(ehNomeClienteValido(_nomeCliente), "O nome deve ser informado"); linha16: require(!ehClienteValido(getClienteInscritoByAddress(msg.sender)), "Cliente já inscrito"); -linha17 Cliente memory cliente; -linha18: cliente.nomeCliente = _nomeCliente; -linha19: cliente.saldoCliente = 0; -linha20: assert(ehClienteValido(cliente)); -linha21: _clienteInscrito[msg.sender] = cliente; -linha22: }',
    imageSrc: ["images/ue/UE 13/UE13_Imagem - 2.png"],
    imageLegend: "Imagem 2: Código da função inscreveCliente. Fonte: SENAI",
  },
  {
    index: 3,
    imageAlt:
      "Descrição da Imagem: A imagem contém o seguinte código: -linha24: function getClienteInscritoByAddress(address _addressCliente)) public view returns(Cliente memory){ -linha25: return _clienteInscrito[_addressCliente]; -linha26: }",
    imageSrc: ["images/ue/UE 13/UE13_Imagem - 3.png"],
    imageLegend:
      "Imagem 3: Código da função getClienteInscritoByAddress. Fonte: SENAI",
  },
  {
    index: 4,
    imageAlt:
      "Descrição da Imagem: A imagem contém o seguinte código: - linha 65: function getClienteInscritoByAddress(address _addressCliente) public view returns(Cliente memory) { - linha66: return _clienteInscrito[_addressCliente]; -linha67: } - linha68: linha -linha69: function ehClienteValido(Cliente memory _cliente) private pure returns(bool){ -linha70: return ehNomeClienteValido(_cliente.nomeCliente) && ehSaldoClienteValido(_cliente.saldoCliente); -linha71: } -linha72: linha -linha73: function ehSaldoClienteValido(uint _saldoCliente) private pure returns(bool){ -linha74: return _saldoCliente >= 0; -linha75: } -linha76: linha -linha77: function ehNomeClienteValido(string memory _nomeCliente) private pure returns(bool){ linha78: bytes memory tempString = bytes(_nomeCliente); -linha79: return tempString>0; -linha80: }",
    imageSrc: ["images/ue/UE 13/UE13_Imagem - 4.png"],
    imageLegend:
      "Imagem 4: Código das funções que validam o cliente, o saldo do cliente e o nome do cliente. Fonte: SENAI",
  },
  {
    index: 5,
    imageAlt:
      "Descrição da Imagem: A imagem contém o seguinte código: -linha7: event ProdutoTrocado(- linha8: address indexed_cliente, - linha9: uint _indiceProduto, -linha10: uint256 _dataEHora -linha11: );",
    imageSrc: ["images/ue/UE 13/UE13_Imagem - 5.png"],
    imageLegend:
      "Imagem 5: Evento que será lançado quando o produto for trocado. Fonte: SENAI",
  },
  {
    index: 6,
    imageAlt:
      "Descrição da Imagem: A imagem contém o seguinte código: -linha13: struct Produto{ -linha14: string nomeProduto; -linha15: uint Pontosproduto; -linha16: uint quantidadeTrocada; -linha17: } -linha18: linha -linha19: address private _enderecoProprietario; -linha20: Produto[] public produtos;",
    imageSrc: ["images/ue/UE 13/UE13_Imagem - 6.png"],
    imageLegend:
      "Imagem 6: Definição da estrutura produto, variável _enderecoProprietario e o array de Produto. Fonte: SENAI",
  },
  {
    index: 7,
    imageAlt:
      'descricaodaImagem: -linha 29: constructor(){ -linha 30: _enderecoProprietario = msg.sender; -linha 31 : linha -linha 32: Product memory tablet = Product({nomeProduto = "Tablet", -linha 33: pontosProduto = 10, -linha 34: quantidadeTrocada = 0 -linha 35: }); -linha 36: linha -linha 37: Product memory perfume = Product({nomeProduto = "Perfume", -linha 38: pontosProduto = 7, -linha 39: quantidadeTrocada = 0 -linha 40: }); -linha 41: linha -linha 42:Product memory passagemAerea = Product({nomeProduto = "Passagem area nacional", -linha 43: pontosProduto = 25, -linha 44:quantidadeTrocada = 0 -linha 45:}); -linha 46: linha -linha 47: produtos.push(tablet); -linha 48:produtos.push(perfume); -linha 49: produtos.push(passagemAerea); -linha 50: linha -linha 51:}',
    imageSrc: ["images/ue/UE 13/UE13_Imagem - 7.png"],
    imageLegend: "Imagem 7: Função construtora do contrato. Fonte: SENAI",
  },
  {
    index: 8,
    imageAlt:
      'descricaodaImagem:  -linha 81: function pagamento(uint _valorTotal) public payable{ -linha 82: require(msg.value == _valorTotal,  "O valor de pagamento total é inválido"); -linha 83: Cliente storage _cliente = _clienteInscrito[msg.sender]; -linha 84:    require(ehClienteValido(_cliente), "Cliente não inscrito"); -linha 85:    _cliente.saldoCliente +=1; -linha 86: }',
    imageSrc: ["images/ue/UE 13/UE13_Imagem - 8.png"],
    imageLegend: "Imagem 8: Código da função pagamento. Fonte: SENAI",
  },
  {
    index: 9,
    imageAlt:
      'descricaodaImagem:  -linha 88: function trocaPontoPorProdutos(uint _indiceProduto) public{  -linha 89: require(_indiceProduto <= produtos.length -1, "O índice não é válido");  -linha 90: Cliente storage cliente = _clienteInscrito[msg.sender];  -linha 91:    require(ehClienteValido(cliente), "Cliente não inscrito");  -linha 92:  Produto storage produto = produtos[_indiceProduto];  -linha 93: require(cliente.saldoCliente >= produto.pontosProduto, "Não há pontos suficiente para serem usados.");  -linha 94:    cliente.saldoCliente -= produto.pontosProduto;  -linha 95:    produto.quantidadeTrocada += 1;  -linha 96:  assert(cliente.saldoCliente >=0);  -linha 97: emit ProdutoTrocado(msg.sender, _indiceProduto, block.timestamp);  -linha 98: linha  -linha 99: }',
    imageSrc: ["images/ue/UE 13/UE13_Imagem - 9.png"],
    imageLegend:
      "Imagem 9: Código da função para realizar a troca dos pontos do cliente por produto. Fonte: SENAI",
  },
  {
    index: 10,
    imageAlt:
      "descricaoImagem: A imagem contém o código: -linha 101: modifier apenasProprietario(){ -linha 102: require(msg.sender == _enderecoProprietario); -linha 103:  _; -linha 104: }",
    imageSrc: ["images/ue/UE 13/UE13_Imagem - 10.png"],
    imageLegend:
      "Imagem 10: Modificador para restrição de acesso. Fonte: SENAI",
  },
  {
    index: 11,
    imageAlt:
      "descricaodaImagem: A imagem contém o código: -linha 107: function getSaldoConta() public view apenasProprietario returns(uint){ -linha 108: return address(this).saldoCliente; -linha 109: }",
    imageSrc: ["images/ue/UE 13/UE13_Imagem - 11.png"],
    imageLegend:
      "Imagem 11: Função para retornar os fundos da conta. Fonte: SENAI",
  },
  {
    index: 11.1,
    imageAlt: "",
    imageSrc: ["images/ue/UE 13/UE13_Imagem - 11_1.jpg"],
    imageLegend: "",
  },
];

const imagesUE14 = [
  {
    index: 1,
    imageAlt:
      'descricaoImagem: -linha1: contract Coin { -linha 2: string public name; -linha3: string public symbol; -linha4: uint256 public totalSupply; -linha5: mapping(address => uint256) public balanceOf; -linha 6: linha -linha 7: event Transfer(address indexed from, address indexed to, uint256 value); - linha 8: linha - linha 9: constructor(string memory _name, string memory _symbol, uint256 _totalSupply) { -linha 10: name = _name; -linha 11: symbol = _symbol; -linha 12: totalSupply = _totalSupply; -linha 13: balanceOf[msg.sender] = _totalSupply;  -linha 14: } -linha 15: linha -linha 16: function transfer(address _to, uint256 _value) public returns (bool success) { -linha 17: require(_value <= balanceOf[msg.sender], "Insufficient balance"); -linha 18: balanceOf[msg.sender] -= _value; -linha 19: balanceOf[_to] += _value; -linha 20: emit Transfer(msg.sender, _to, _value); -linha 21: return true; -linha 22: } -linha 23: }',
    imageSrc: ["images/ue/UE 14/UE14_Imagem - 1.png"],
    imageLegend: "Imagem 1: Contrato coin demo. Fonte: SENAI",
  },
  {
    index: 2,
    imageAlt:
      "descriçãodaImagem: -linha 1: contract NonFungible { -linha 2: struct Asset { -linha 3: uint256 id;  linha 4: string name; -linha 5: string description; -linha 6: address owner; - linha 7: } -linha 8: linha -linha 9: Asset[] public assets; -linha 10: linha -linha 11: mapping(uint256 => address) public assetToOwner; -linha 12: linha -linha13: event AssetCreated(uint256 id, string name, string description, address owner); -linha 14: event AssetTransferred(uint256 id, address from, address to); -linha 15: linha -linha 16: function createAsset(string memory _name, string memory _description) public returns (uint256) { -linha 17: uint256 newAssetId = assets.length; -linha 18: assets.push(Asset(newAssetId, _name, _description, msg.sender)); -linha 19: assetToOwner[newAssetId] = msg.sender;-linha 20: emit AssetCreated(newAssetId, _name, _description, msg.sender); -linha 21: return newAssetId; -linha 22:  } -linha 23: linha -linha 24: function transferAsset(uint256 _assetId, address _to) public { -linha 25: require(msg.sender == assetToOwner[_assetId]); -linha 26: assetToOwner[_assetId] = _to; -linha 27: emit AssetTransferred(_assetId, msg.sender, _to); -linha 28:  } -linha 29:}",
    imageSrc: ["images/ue/UE 14/UE14_Imagem - 2.png"],
    imageLegend: "Imagem 2: Código do contrato não-fungível. Fonte: SENAI",
  },
];

const imagesUE15 = [
  {
    index: 0,
    imageAlt: "",
    imageSrc: ["images/ue/UE 15/acesso ao contrato.gif"],
    imageLegend: "",
  },
  {
    index: 1,
    imageAlt:
      'Descrição da Imagem: A imagem contém o seguinte código: -linha1:contract Licitacao { -linha2:  address public administrador; -linha3: mapping(address => uint) public lances; -linha4: bool public encerrado; -linha5: linha; -linha6: constructor() public { -linha7: administrador = msg.sender; - linha8: } - linha9: linha; -linha10: modifier autoridade() { - linha11:   require(msg.sender == administrador, "Apenas o administrador tem autoridade para realizar essa ação."); - linha12: _; -linha13: } -linha14: linha; -linha15: function darLance(uint valor) public autoridade { -linha16: require(!encerrado, "O leilão já foi encerrado."); -linha17:  lances[msg.sender] = valor; -linha18: } -linha19: linha; linha20: function encerrar() public autoridade { -linha21: encerrado = true; -linha22: } -linha23: }',
    imageSrc: ["images/ue/UE 15/Imagem 1.png"],
    imageLegend:
      "Imagem 1: Contrato licitação usando padrão de autoridade. Fonte: SENAI",
  },
  {
    index: 2,
    imageAlt:
      'Descrição da Imagem: A imagem contém o seguinte código: -linha1:function transferir(address _destinatario, uint _valor) public { -linha2: require(verificarSaldoSuficiente(_valor), "Saldo insuficiente para transferência."); -linha3: require(verificarEnderecoValido(_destinatario), "Endereço destinatário inválido."); -linha4: saldo[msg.sender] -= _valor; -linha5: saldo[_destinatario] += _valor; -linha6: emit TransferenciaRealizada(_destinatario, _valor);   -linha7: } -linha8: linha -linha9: function verificarSaldoSuficiente(uint _valor) private view returns (bool) { -linha10: return saldo[msg.sender] >= _valor; -linha11: } -linha12:linha -linha13:function verificarEnderecoValido(address _endereco) private pure returns (bool) { -linha14: return address(_endereco).isContract() || address(_endereco).isUser(); -linha15: }',
    imageSrc: ["images/ue/UE 15/Imagem 2.png"],
    imageLegend:
      "Imagem 2: Uso de funções de verificação em um contrato. Fonte: SENAI",
  },
  {
    index: 3,
    imageAlt:
      'Descrição da Imagem: A imagem contém o seguinte código: -linha1: contract Seguro { -linha2:  address public seguradora; -linha3: address public beneficiario; -linha4: uint public valorSeguro;   -linha5: bytes32 private senha; -linha6: linha -linha7: function solicitarSeguro(address _beneficiario, uint _valorSeguro, bytes32 _senha) public { - linha8: require(msg.sender == seguradora, "Apenas a seguradora pode solicitar seguro."); -linha9: beneficiario = _beneficiario;  -linha10: valorSeguro = _valorSeguro; - linha11; senha = _senha; -linha12: } -linha13:linha; -linha14: linha; -linha15: function resgatarSeguro(bytes32 _senha) public { -linha16:   require(msg.sender == seguradora, "Apenas a seguradora pode resgatar o seguro."); -linha17:    require(senha == _senha, "Senha incorreta."); -linha18: } -linha19: linha; -linha20: }',
    imageSrc: ["images/ue/UE 15/Imagem 3.png"],
    imageLegend: "Imagem 3: Uso da variável privada senha. Fonte: SENAI",
  },
  {
    index: 4,
    imageAlt:
      'Descrição da Imagem: A imagem contém o seguinte código: -linha1: contract Proprietario { -linha2: address public dono; -linha3: mapping(address => bool) public acessoPermitido; -linha4: linha; -linha5: constructor() public { -linha6: dono = msg.sender; -linha7: } -linha8: linha -linha9: function permitirAcesso(address _usuario) public { -linha10: require(msg.sender == dono, "Apenas o dono pode permitir acesso."); linha11: acessoPermitido[_usuario] = true; linha12: } linha13: linha linha14: function modificarDados() public { linha15:   require(acessoPermitido[msg.sender], "Acesso não permitido."); linha16: // código para modificar os dados linha17: } linha18: }',
    imageSrc: ["images/ue/UE 15/Imagem 4.png"],
    imageLegend: "Imagem 4: Uso de funções de acesso. Fonte: SENAI",
  },
  {
    index: 5,
    imageAlt:
      'Descrição da Imagem: A imagem contém o seguinte código: -linha1:contract AssinaturaDigital { -linha2: mapping(address => bool) public assinaturasValidadas; -linha3: linha; -linha4: function assinarTransacao(bytes calldata _dados) public { -linha5: bytes32 hashDados = keccak256(_dados); -linha6: require(msg.sender.sign(hashDados), "Assinatura inválida."); -linha7: assinaturasValidadas[msg.sender] = true; -linha8: } -linha9: linha -linha10: function executarTransacao(bytes calldata _dados) public { -linha11:require(assinaturasValidadas[msg.sender], "Assinatura não validada."); -linha12: // código para executar a transação -linha13: } -linha14: }',
    imageSrc: ["images/ue/UE 15/Imagem 5.png"],
    imageLegend: "Imagem 5: Uso de assinaturas digitais. Fonte: SENAI",
  },
  {
    index: 6,
    imageAlt:
      'Descrição da Imagem: A imagem contém o seguinte código: -linha1:contract MeuContrato{ -linha2: address public implementacao; -linha3: linha -linha4: function upgradeTo(address _novaImplementacao) public { -linha5: require(msg.sender == owner, "Apenas o dono pode atualizar o contrato."); -linha6: implementacao = _novaImplementacao; -linha7: } -linha8: // outras funções e variáveis aqui -linha9: }',
    imageSrc: ["images/ue/UE 15/Imagem 6.png"],
    imageLegend:
      "Imagem 6: Definição da estrutura produto, variável _enderecoProprietario e o array de Produto. Fonte: SENAI",
  },
  {
    index: 7,
    imageAlt:
      'Descrição da Imagem: A imagem contém o seguinte código: -linha1 contract LicitacaoSimples { -linha2  address public owner; -linha3: uint public maiorLance; -linha4: address public maiorApostador; -linha5: linha -linh6: constructor() public { -linha7: owner = msg.sender; linha8:  } linha9: linha -linha10: function lance() public payable { -linha11: equire(msg.value > maiorLance, "O lance deve ser maior do que o lance mais alto atual"); -linha12: require(msg.sender != maiorApostador, "Você não pode licitar em seu próprio leilão"); -linha13: require(maiorLance + msg.value >= maiorLance, "Estouro no cálculo do lance"); -linha14: linha -linha15:    maiorApostador.transfer(maiorLance); -linha16: maiorLance = msg.value; -linha17:    maiorApostador = msg.sender; -linha18: } -linha19: linha -linha20: function cancelarLeilao() public { linha21: require(msg.sender == owner, "Somente o proprietário pode cancelar o leilão"); -linha22: linha - linha23: maiorApostador.transfer(melhorLance); -linha24: } -linha25: }',
    imageSrc: ["images/ue/UE 15/Imagem 7.png"],
    imageLegend:
      "Imagem 7: Contrato utilizando padrão de controle. Fonte: SENAI",
  },
  {
    index: 8,
    imageAlt:
      "Descrição da Imagem: A imagem contém o seguinte código: -linha1:// Armazenando o resultado da operação em uma variável de estado -linha2: // Isso irá consumir mais gás do que o exemplo acima.-linha3: contract ContraExemploGas { -linha4: uint public soma; -linha5: linha -linha6: function contraExemploEconomiaGas(uint[] memory valores) public { -linha7: for (uint i = 0; i < valores.length; i++) { -linha8: soma += valores[i]; -linha9: } -linha10: } -linha11: }",
    imageSrc: ["images/ue/UE 15/Imagem 8.png"],
    imageLegend:
      "Imagem 8: Contrato utilizando variável de estado consome mais gás. Fonte: SENAI",
  },
  {
    index: 9,
    imageAlt:
      "Descrição da Imagem: A imagem contém o seguinte código: -linha1:// Utilizando uma variável local para armazenar o resultado de uma operação -linha2: function exemploEconomiaGas(uint[] memory valores) public view returns (uint soma) { -linha3: for (uint i = 0; i < valores.length; i++) { -linha4: soma += valores[i]; -linha5: } -linha6: return soma; -linha7: }",
    imageSrc: ["images/ue/UE 15/Imagem 9.png"],
    imageLegend:
      "Imagem 9: Implementação com variável local economiza gás. Fonte: SENAI",
  },
];

const imagesUE16 = [
  {
    index: 0,
    imageAlt: "",
    imageSrc: ["images/ue/UE 16/Gif 1-Componentes de um dApp.gif"],
    imageLegend: "",
  },
  {
    index: 1,
    imageAlt:
      "descricaodaImagem: DApps vs app. Aplicativos descentralizados explicados. Comparação de dois tipos. Infográfico ou diagrama sobre blocos de transações, verificação de descentralização, contrato inteligente de fintech e solicitação de criptografia.",
    imageSrc: ["images/ue/UE 16/UE16_Imagem - 1.png"],
    imageLegend:
      "Imagem 1: Diferença de execução e controle entre Apps e DApps. Fonte: shutterstock",
  },
  {
    index: 2,
    imageAlt:
      "descricaodaImagem: 	A imagem contém o código: -linha1: contract EmprestimoDeFi { -linha02: linha -linha03: address public mutuante; -linha04: address public mutuario;-linha05: uint public valorEmprestimo; -linha06: uint public valorGarantia; -linha07: uint public taxaDeJuros; - linha08: uint public prazoDePagamento; -linha09: bool public pago; -linha10: linha - linha11: event EmprestimoCriado(); -linha12: event EmprestimoPago(); -linha13: linha -linha 14:  constructor(address _mutuante, uint _valorEmprestimo, uint _valorGarantia, uint _taxaDeJuros,    -linha15: uint _prazoDePagamento) public { -linha16: mutuante = _mutuante; -linha17:   valorEmprestimo = _valorEmprestimo; -linha18: valorGarantia = _valorGarantia; -linha19:    taxaDeJuros = _taxaDeJuros; -linha20: prazoDePagamento = _prazoDePagamento; -linha21:    pago = false; -linha22:  EmprestimoCriado(); -linha23: }",
    imageSrc: ["images/ue/UE 16/UE16_Imagem - 2.png"],
    imageLegend:
      "Imagem 2: Variáveis de estado e contrato do contrato EmprestimoDeFI. Fonte: SENAI",
  },
  {
    index: 3,
    imageAlt:
      "descricacaodaImagem: A imagem contém o código: -linha 25: function pagarEmprestimo() public { -linha26: require(msg.sender == mutuario); -linha27:require(block.timestamp <= prazoDePagamento); -linha28: require(!pago); -linha 29:    mutuante.transfer(valorEmprestimo + (valorEmprestimo * taxaDeJuros / 100)); -linha 30:    pago = true; -linha 31:  EmprestimoPago(); -linha 32: } linha33: linha   -linha34: function dev3olverGarantia() public { -linha 35: require(msg.sender == mutuante); -linha 36: require(pago); -linha 37: mutuario.transfer(valorGarantia); -linha38: } -linha 39: }",
    imageSrc: ["images/ue/UE 16/UE16_Imagem - 3.png"],
    imageLegend:
      "Imagem 3: Funções pagarEmprestimo() e devolverGarantia() do contrato EmprestimoDeFI. Fonte: SENAI",
  },
  {
    index: 3.1,
    imageAlt: "",
    imageSrc: ["images/ue/UE 16/Gif 2-protocolo DeFi.gif"],
    imageLegend: "",
  },
  {
    index: 4,
    imageAlt:
      "descricaodaImagem: Palavra Blockchain cercada por cubos ou blocos dispostos em cadeia, símbolos bitcoin. Registro de transação digital distribuído.",
    imageSrc: ["images/ue/UE 16/UE16_Imagem - 4.png"],
    imageLegend:
      "Imagem 4: Rede distribuída da blockchain. Fonte: Shutterstock",
  },
];

const imagesUE17 = [
  {
    index: 1,
    imageAlt:
      "descricaodaImagem: DApps vs app. Aplicativos descentralizados explicados. Comparação de dois tipos. Infográfico ou diagrama sobre blocos de transações, verificação de descentralização, contrato inteligente de fintech e solicitação de criptografia.",
    imageSrc: ["images/ue/UE 17/UE17_Imagem - 1.jpg"],
    imageLegend: "Imagem 1: Metodologia Agile. Fonte: Shutterstock",
  },
  {
    index: 2,
    imageAlt:
      "descriçãoImagem: -linha 01: contract MeuContrato { -linha02: function somar(int a, int b) public pure returns (int) { -linha03: return a + b; -linha4: } -linha05: }",
    imageSrc: ["images/ue/UE 17/UE17_Imagem - 2.png"],
    imageLegend:
      "Imagem 2: Contrato inteligentes com função para somar dois números inteiros. Fonte: SENAI",
  },
  {
    index: 3,
    imageAlt:
      'descricaoImagem: -linha 01: import "./MeuContrato.sol"; - linha 02: linha - linha 03: contract TesteMeuContrato{ - linha 04:  MeuContrato contrato = MeuContrato(0x0); -linha 05: linha - linha06: function testarSomar() public { -linha 07: int a = 2; -linha 08: int b = 3; -linha09:   int resultadoEsperado = 5; -linha10: int resultadoAtual = contrato.somar(a, b); -linha11:   assert(resultadoAtual == resultadoEsperado, "O teste falhou"); -linha12: } -linha13: }',
    imageSrc: ["images/ue/UE 17/UE17_Imagem - 3.png"],
    imageLegend:
      "Imagem 3: Contrato teste com teste unitário da função somar. Fonte: SENAI",
  },
  {
    index: 4,
    imageAlt:
      'descricaoImagem: A imagem contém o código: -linha 01: contract Votacao { -linha 02:  mapping (bytes32 => uint) public votos; -linha 03: bytes32[] public opcoes; -linha 04: linha -linha 05: constructor(bytes32[] memory _opcoes) { -linha 06: opcoes = _opcoes; -linha 07: } -linha 08: linha -linha 09: function voto(uint opcaoIndex) public { -linha 10: require(opcaoIndex < opcoes.length, "Indice de opção invalido"); -linha 11: votos[opcoes[opcaoIndex]] += 1; -linha 12:  } - linha 13: }',
    imageSrc: ["images/ue/UE 17/UE17_Imagem - 4.png"],
    imageLegend:
      "Imagem 4: Contrato inteligente para realizar votação. Fonte: SENAI",
  },
  {
    index: 5,
    imageAlt:
      'descricaoImagem: A imagem contém o código: - linha 16: contract VotacaoTest { -linha 17:  Votacao votacao; - linha 18: linha -linha19: function preparacaoCenario() public { - linha 20:    bytes32[] memory optcoes = new bytes32[](2); -linha 21: opcoes[0] = "Opcao A"; -linha 22:    opcoes[1] = "Opcao B"; -linha23: votacao = new Votacao(opcoes); -linha 24: } -linha 25: linha -linha 26: function testVoto() public { -linha 27: uint opcaoIndex = 0; - linha 28:   votacao.voto(opcaonIndex); - linha 29: Assert.equal(votacao.votos("Opcao A"), 1, "Opcao A deve ter um voto"); - linha 30: } - linha 31: linha; -linha 32: function testOpcaInvalida() public - linha 33: uint opcaoIndex = 2; -linha 34: (bool successo, ) = address(votacao).call(abi.encodeWithSignature("voto(uint256)", opcaoIndex)); -linha 35:    Assert.equal(successo, false, "A votação deve falhar para opção inválida"); - liha 36: } -linha 37: }',
    imageSrc: ["images/ue/UE 17/UE17_Imagem - 5.png"],
    imageLegend:
      "Imagem 5: Teste de integração do contrato para realizar votação. Fonte: SENAI",
  },
];

const imagesUE18 = [
  {
    index: 0,
    imageAlt: "",
    imageSrc: ["images/ue/UE 18/Ética Profissional.gif"],
    imageLegend: "",
  },
  {
    index: 1,
    imageAlt:
      "Descrição de Imagem: Empresários multirraciais jovens e mais velhos, motivados e felizes, juntando os punhos, mostrando apoio e espírito de equipe juntos, comemorando conquistas corporativas ou sucesso na reunião no escritório.",
    imageSrc: ["images/ue/UE 18/UE18_Imagem - 1.jpg"],
    imageLegend:
      "Imagem 1: Equipe de trabalho com pessoas de várias características físicas. Fonte: Shutterstock",
  },
];

var images = {
  UE1: imagesUE1,
  UE2: imagesUE2,
  UE3: imagesUE3,
  UE4: imagesUE4,
  UE5: imagesUE5,
  UE6: imagesUE6,
  UE7: imagesUE7,
  UE8: imagesUE8,
  UE9: imagesUE9,
  UE10: imagesUE10,
  UE11: imagesUE11,
  UE12: imagesUE12,
  UE13: imagesUE13,
  UE14: imagesUE14,
  UE15: imagesUE15,
  UE16: imagesUE16,
  UE17: imagesUE17,
  UE18: imagesUE18,
};

function getPics(ue, index) {
  const ueImages = images[ue];

  const image = ueImages.find((value) => value.index == index);

  return image || null;
}

function createLegend(gallery, image) {
  const legend = document.createElement("span");

  const classNames =
    "text-sm font-normal text-gray-200 dark:text-gray-900 mt-0.625";

  classNames.split(" ").forEach((className) => {
    legend.classList.add(className);
  });

  legend.innerHTML = image.imageLegend;

  gallery.appendChild(legend);
}

function createImg(fullPage, gallery, src, alt) {
  const imgElement = document.createElement("img");

  imgElement.src = src;
  imgElement.alt = alt;
  imgElement.classList.add("cursor-pointer");

  imgElement.addEventListener("click", function () {
    fullPage.style.backgroundImage = "url('" + src + "')";
    fullPage.classList.add("block");
    fullPage.classList.remove("hidden");
    console.log(fullPage);
  });

  gallery.appendChild(imgElement);
}

function createImages() {
  const galleries = document.getElementsByClassName("gallery");
  const fullPage = document.querySelector("#fullpage");

  for (gallery of galleries) {
    const ue = gallery.getAttribute("ue");
    const index = gallery.getAttribute("index");

    const image = getPics(ue, index);

    image.imageSrc.forEach((img) => {
      createImg(fullPage, gallery, img, image.imageAlt);
    });

    if (image.imageLegend !== "") {
      createLegend(gallery, image);
    }
  }
}
