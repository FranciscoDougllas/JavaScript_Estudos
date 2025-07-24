//Elemento por ID
let elementoPorId = document.getElementById('paragrafo');
elementoPorId.innerHTML = 'ALTERADO PELO ID';

//Elemento por Nome
let elementoPorNome = document.getElementsByName('outro_paragrafo');
elementoPorNome[0].innerHTML = 'ALTERADO PELO NOME';

//Elementos por Nome da Tag
let elementosPorTag = document.getElementsByTagName('p');
elementosPorTag[0].innerHTML = 'ALTERADO PELA TAG';

//Elemento por Classe
let elementoPorClasse = document.getElementsByClassName('text-blue-500');
elementoPorClasse[0].innerHTML = 'ALTERADO PELA CLASSE';