### Code for the "Lista Segura" Chrome extension

Lista Segura: https://chrome.google.com/webstore/detail/lista-segura/fkpfhiinfnimfpldpljanohkbjjjeobi?hl=pt-BR

Project made for Brazil, so the description will be in portuguese.

Todo ano o Procon lança a lista de sites não-recomendados para compras. Via de regra, a lista era um PDF que mal permitia a busca (como visto dentro da pasta 2013 deste repositório: https://github.com/luizfrias/lista-segura/blob/master/2013/acs_sitenaorecomendados_2013.pdf).
A minha idéia foi criar uma extensão para navegadores com a informação desta lista, que permitia ao usuário ser alertado caso acessasse um site não-recomendado.
Faz mais sentido que disponibilizar um PDF desacoplado, certo? 

A extensão era pra ser bem simples: com um arquivo estático de fácil leitura, certamente não um pdf, mas um .csv ou .json, a extensão deveria alertar o usuário através de um pop-up que o site que ele estava visitando pertencia à lista e era, portanto, não-recomendado. 

Os passos de desenvolvimento fora:
- Transformar o pdf em um csv. (fiz isso online, buscando por "convert pdf to csv" no Google)
- Transformar o csv em um json com o script que eu escrevi e está na pasta ./2013
- Fazer o código da extensão. Como era minha primeira extensão, tive que entender o processo de desenvolvimento e publicação. Isso me tomou um dia de trabalho.

Depois da publicação da extensão os jornais publicaram o app e com a popularidade ele atingiu cerca de 15.000 downloads em uma semana.

- Por que ele não é mais atualizado?

Nunca foi minha intenção ficar responsável pela manutenção desta extensão, isto é, todo ano transformar o pdf em csv e cuidar de eventuais problemas de compatibilidade para publicar uma nova extensão no Chrome.
A idéia sempre foi desenvolver e dar a extensão para o Procon, ou esperar que eles percebessem que essa era a melhor maneira de publicar a lista e que desenvolvessem a própria.
Entrei em contato insistentemente com eles para dar esse código. Depois de um tempo eles entraram em contato comigo falando que, como tratava-se de um órgão público, não podiam aceitar. Geinal, né?
Então é por isso que parei a manutenção da extensão.

