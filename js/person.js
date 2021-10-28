personDataLog = (obj) => {
    obj.firstname = obj.firstname || 'firstname';
    obj.lastname = obj.lastname || 'lastname';
    obj.age = obj.age || 'age';
    return `My name is ${obj.firstname} ${obj.lastname}. I'm ${obj.age} years old.`
};