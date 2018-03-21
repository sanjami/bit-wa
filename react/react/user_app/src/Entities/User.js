
class User {
    constructor (user) {
        this.firstName = user.name.first;
        this.surname = user.name.last;
        this.email = user.email;
        this.dateOfBirth = user.dob;
        this.picture = user.picture.medium;
        this.gender = user.gender
    }
}

export default User