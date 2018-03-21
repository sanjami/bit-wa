import User from '../Entities/User'

class UserRequest {
   UserFunction = () => {
    return fetch('https://randomuser.me/api/?results=15') 
        .then((response) => response.json())
        .then((result) => result.results)
        .then((userList) => {
            return userList.map((user, i) => {
                return new User(user)
            })
        })
   } 
}

export const usersService = new UserRequest(); 