export const login = (email: string): void => {
    if (!email || email === 'undefined' || email === null ) {
        alert('A propriedade email deve ser preenchida');
    }
    alert(`Seja bem vinda ${email}`)
    
};