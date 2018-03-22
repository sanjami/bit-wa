

const email = (email) => {
    const originEmail = email;
    const firstPart = originEmail.substr(0, 3);
    const secondPart = originEmail.split('@')[0];
    const lastPart = originEmail.split('@')[1];
    const secondPartLast = secondPart.substr(-secondPart.length, 3);
    const finalEmail = `${firstPart}...${secondPartLast}@${lastPart}`
    return finalEmail;
}

const date = (dateOfBirth) => {
    const year = new Date(dateOfBirth).getFullYear();
    const month = new Date(dateOfBirth).getMonth();
    const day = new Date(dateOfBirth).getDay();
    return `Birth date: ${day+1}.${month+1}.${year}`;
}

const timeSinceRefresh = (start, stop) => {
    let interval = stop - start
    var d, h, m, s;
    s = Math.floor(interval / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    if (h < 1) {
        return `${m} minutes ago`;
    } else if (h >= 1) {
        return 'Over an hour ago';
    } else if (d >= 1) {
        return `${d} days ago`;
    } else if (d > 7) {
        return 'Over a week ago';
    } else if (d > 30) {
        return 'Over a month ago';
    }
}

export {email, date, timeSinceRefresh}