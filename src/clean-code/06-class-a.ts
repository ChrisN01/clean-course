(() =>
{

    //No aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F';

    class Person{
        
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        )
        {}
    
    }

    class User extends Person
    {
        private lastAccess:Date;
        constructor(
            public email:string,
            public role:string,
            name: string,
            gender: Gender,
            birthdate: Date


        ){
            super(name, gender, birthdate);
            this.lastAccess=new Date();
        }

        checkCredentials()
        {
            return true;
        }

    }

    class UserSeetings extends User
    {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email:string,
            role:string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super( email,role, name,gender,birthdate);
        }
    }

    const userSettings = new UserSeetings(
        '/usr/home',
        '/home',
        'email@gmail.com',
        'Admin',
        'Administrador',
        'F',
        new Date('2000-05-06')
    )

    console.log({userSettings});



})();