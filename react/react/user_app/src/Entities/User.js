
class User {
    constructor (user) {
        this.firstName = user.name.first;
        this.surname = user.name.last;
        this.email = user.email;
        this.dateOfBirth = user.dob,
        this.picture = user.picture.medium
    }
}

export default User