(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    interface Movie{
        cast:string[];
        description:string;
        rating:number;
        title:string;
    }

    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName(fullName:string){

        console.log({fullName});

        return true;
    }

    function createActor( fullName: string, birthDate: Date ): boolean {
       
        if ( checkFullName(fullName)) return false;

        console.log('Crear actor', birthDate);
        return true;        

    }


    //Continuacion
     
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {
       
        if ( isDead ) return 1500;
        
        if ( isSeparated ) return 2500;

        /* if (isRetired) return 3000;
        return 4000;*/

        return (isRetired) ? 300:4000;   
    }


})();