export const login = (nome: string):any => {
    if (!nome || nome === 'undefined' || nome === null ) {
        alert('A propriedade nome deve ser preenchida');
    }
    alert(`Seja bem vinda ${nome}`)
    
};