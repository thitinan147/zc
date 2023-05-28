import { User } from "./model/user.model";

const users = await fetch("https://jsonplaceholder.typicode.com/users")
  .then(result => result.json());

if (users && users.length) {
  const app: HTMLDivElement = <HTMLDivElement>document.querySelector('#app');
  const userListElement: HTMLUListElement = <HTMLUListElement>document.createElement('el');
  app.replaceChildren(userListElement)

  users.forEach((user: User) => {
    let userElement: HTMLLIElement = <HTMLLIElement>document.createElement('li');
    userElement.innerHTML = user.email;
    userListElement.appendChild(userElement);
    
  });
}