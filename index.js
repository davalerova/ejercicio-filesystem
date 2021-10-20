//Imports de los módulos
//fs y path

const fs = require('fs/promises');
const path = require('path');

const getUsers = async () => {
  //Leer el archivo
  //Regresar el arreglo de usuarios como objeto literal Javascript (sin notación JSON)
  try {
    const pathUser = path.resolve('users.json');
    const users = await fs.readFile(pathUser, { encoding: 'utf-8' });
    return JSON.parse(users);
  } catch (err) {
    console.log(err);
  }
};

const addUser = async (userObj) => {
  try {
    //leer el archivo
    const users = await getUsers();
    //convertir el contenido en formato JSON en un objeto JS

    //agregar el usuario en el arreglo
    users.push(userObj);
    //sobreescribir el arreglo en el archivo
    const pathUser = path.resolve('users.json');
    await fs.writeFile(pathUser, JSON.stringify(users));
    //si el proceso se realizó correctamente tendrás que regresar el objeto de usuario
    //que acabas de agregar en el arreglo
    return userObj;
  } catch (error) {
    console.log(error);
  }
};

const clearUsers = async () => {
  try {
    //Vaciar el arreglo y sobreescribir el archivo
    const pathUser = path.resolve('users.json');

    await fs.writeFile(pathUser, JSON.stringify([]));
    //Si el proceso se realizó correctamente tendrás que regresar true
    return true;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  addUser,
  clearUsers,
};

getUsers();
