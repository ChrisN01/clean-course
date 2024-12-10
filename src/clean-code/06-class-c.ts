(() =>
{

    //Aplicando el principio de responsabilidad unica
    //Priorizar la composicion frente a la herencia
    //Al menos que sea extremandamente necesario, hay que evitar las herencias (extends)

    type Gender = 'M'|'F';

    interface PersonProps
    {
        birthdate: Date
        gender: Gender;
        name: string;
    }

    interface UserProps
    {
        email:string,
        role:string,

    }

    interface SettingsProps
    {
        lastOpenFolder: string;
        workingDirectory: string;
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

    class User 
    {
        private lastAccess:Date;
        public email:string;
        public role:string;

        constructor({email,role}:UserProps)
        {
            this.lastAccess=new Date();
            this.email=email;
            this.role=role;

        }

        checkCredentials()
        {
            return true;
        }

    }

    class Settings 
    {
        public workingDirectory:string;
        public lastOpenFolder:string;
        constructor({
            lastOpenFolder,
            workingDirectory
            }: SettingsProps)
            {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;

            };
        
    }

    //Prioriza la composicion
    class UserSettings
    {
        public person:Person;
        public user:User;
        public settings: Settings;

        constructor({name,gender,birthdate, email, role, lastOpenFolder, workingDirectory}: UserSettingsProps)
        {
            this.person=new Person({name, gender,birthdate});
            this.user = new User({role,email});
            this.settings = new Settings({lastOpenFolder, workingDirectory});

        }

    }

    const userSettings = new UserSettings({
        birthdate:new Date('2000-05-06'),
        email:'email@gmail.com',
        gender:'F',
        lastOpenFolder:'/home',
        name:'Administrador',
        role:'Admin',
        workingDirectory:'/usr/home'}
    )

    console.log({userSettings});
    //userSettings.user.checkCredentials();


})();