function getAdmins(map) {
    let admins = [];

    for ([key, value] of map) {
        if (value === 'admin') {
            admins.push(key);
        }
    }

    return admins;

}

let listaUsuarios = new Map();

listaUsuarios.set('Luana', 'moderador');
listaUsuarios.set('Marina', 'admin');
listaUsuarios.set('Cláudia', 'usuário');
listaUsuarios.set('Marta', 'admin');
listaUsuarios.set('Priscila', 'admin');
listaUsuarios.set('Alana', 'usuário');

console.log(getAdmins(listaUsuarios));