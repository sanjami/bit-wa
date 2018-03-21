
class User {
    constructor (user) {
        this.firstName = user.name.first;
        this.surname = user.name.last;
        this.email = user.email;
<<<<<<< HEAD
        this.dateOfBirth = user.dob;
        this.picture = user.picture.medium;
        this.gender = user.gender
=======
        this.dateOfBirth = user.dob,
        this.picture = user.picture.medium
>>>>>>> 909225afd69677b1dc1cc52da14f53851854ffe7
    }
}

export default User