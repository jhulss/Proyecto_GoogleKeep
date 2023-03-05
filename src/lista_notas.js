let LN = new Map();

function lista_notas(titulo, descripcion) {
    LN.set(titulo, descripcion);    
}
// export default lista_notas;

lista_notas("titulo_1","hola mundo");
lista_notas("titulo_2","hola evev");
lista_notas("titulo_3","hola munefrfeo");
lista_notas("titulo_4","hola mundevo");
lista_notas("titulo_5","hola mundefo");
lista_notas("titulo_6","hola munefeefeedo");
lista_notas("titulo_7","hola mundeeeeeeeeo");


console.log(LN);

