(() =>
{

    //No aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F';

    interface PersonProps
    {
        birthdate: Date
        gender: Gender;
        name: string;
    }

    interface UserProps
    {
        birthdate: Date
        email:string,
        gender: Gender;
        name: string;
        role:string,

    }

    interface UserSettingsProps
    {
        birthdate: Date;
        email:string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role:string;
        workingDirectory: string;
    }

    class Person{
        public birthdate: Date
        public gender: Gender;
        public name: string;
    
        constructor({name, gender,birthdate}: PersonProps)
        {
            this.birthdate=birthdate;
            this.gender=gender;
            this.name=name;
        }
    
    }

    class User extends Person
    {
        private lastAccess:Date;
        public email:string;
        public role:string;

        constructor({email,role,birthdate, gender,name}:UserProps)
        {
            super({name,gender,birthdate});
            this.lastAccess=new Date();
            this.email=email;
            this.role=role;

        }

        checkCredentials()
        {
            return true;
        }

    }

    class UserSeetings extends User
    {
        public workingDirectory:string;
        public lastOpenFolder:string;
        constructor(
            {
            birthdate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workingDirectory
            }: UserSettingsProps)
            {
            super( {email,role, name,gender,birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;

            };
        
    }

    const userSettings = new UserSeetings({
        birthdate:new Date('2000-05-06'),
        email:'email@gmail.com',
        gender:'F',
        lastOpenFolder:'/home',
        name:'Administrador',
        role:'Admin',
        workingDirectory:'/usr/home'}
    )

    console.log({userSettings});



})();