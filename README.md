# Delivery Burguer

Um sistema de cardápio digital para hamburguerias, construído com um stack de tecnologias web padrão (HTML, CSS, JavaScript), focado em proporcionar uma experiência de usuário (UX) fluida e otimizar o processo de pedido através da integração com a API do WhatsApp.

### 1. Visão Geral do Projeto

O "Delivery Burguer" é uma Single Page Application (SPA) que serve como uma vitrine digital interativa para uma hamburgueria. Seu objetivo principal é modernizar o processo de pedido, substituindo cardápios impressos por uma interface web responsiva e acessível. A arquitetura do projeto prioriza a simplicidade e a eficiência, garantindo que o cliente possa navegar pelos produtos, gerenciar seu carrinho de compras e finalizar o pedido com um mínimo de atrito, culminando na comunicação direta via WhatsApp.

### 2. Funcionalidades Chave
   
* Renderização Dinâmica do Cardápio: Os produtos (hambúrgueres e bebidas) são apresentados de forma clara, com imagens de alta qualidade, descrições detalhadas e valores monetários explícitos. Esta seção pode ser facilmente estendida para carregar dados de um backend ou um arquivo JSON para maior escalabilidade.

* Mecanismo de Carrinho de Compras (Client-Side): Implementação de lógica JavaScript para adição, remoção e atualização de itens no carrinho. O estado do carrinho é mantido no frontend, com cálculos de subtotal e total em tempo real, proporcionando uma experiência de compra dinâmica.

* Modal de Checkout Interativo: Um componente modal (pop-up) é acionado para exibir o resumo do carrinho, permitindo ao usuário revisar os itens selecionados, ajustar quantidades ou remover produtos antes da conclusão do pedido.

* Validação de Entrada (Endereço): Um campo de entrada dedicado permite ao cliente fornecer seu endereço de entrega completo, fundamental para a logística do estabelecimento.

* Integração com WhatsApp API: A funcionalidade de "Finalizar Pedido" constrói dinamicamente uma URL formatada para a API do WhatsApp (wa.me/) contendo o resumo do pedido (itens, quantidades, total e endereço de entrega). Isso facilita a comunicação direta entre o cliente e a equipe da hamburgueria, agilizando o processamento do pedido.

* Exibição Dinâmica do Status de Funcionamento: Com base na hora local do cliente e nos horários de operação configurados, o sistema exibe de forma clara se o estabelecimento está "Aberto" ou "Fechado", aumentando a transparência e melhorando a experiência do usuário.

* Design Responsivo (Mobile-First Approach): A interface é projetada para se adaptar fluidamente a diversas resoluções de tela, garantindo usabilidade em dispositivos móveis, tablets e desktops.


### 3. Tecnologias Empregadas

#### HTML5: 
Linguagem de marcação para a estruturação semântica do conteúdo da página web.

#### CSS3: 
Linguagem de folha de estilos para o design visual, layout responsivo e animações da interface. Utiliza seletores, flexbox/grid para organização e propriedades de styling.

#### JavaScript (Vanilla JS): 
Linguagem de programação para a lógica de frontend, manipulação do Document Object Model (DOM), gerenciamento do estado do carrinho, validações, cálculos e a integração com a API externa do WhatsApp.
