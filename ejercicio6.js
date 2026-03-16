import url from 'url';

function parsearUrl2(adr)
    {
        try 
        { 
            const absolute = new URL(adr);
            console.log(absolute);
        } catch (e) {
            if (e instanceof TypeError) {
            console.log('ERRORRRRRRR');
        } else {
            
        const devolver = {
        "host" : absolute.host,

        "pathname" : absolute.pathname,

        "parametros" : absolute.query
        }
        return devolver;;
        }
}
        
    }
export {parsearUrl2};