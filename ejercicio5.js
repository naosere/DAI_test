import url from 'url';

function parsearUrl(adr)
    {
        
        let r = url.parse(adr, true);
        const devolver = {
        "host" : r.host,

        "pathname" : r.pathname,

        "parametros" : r.query
        }
        return devolver;
    }
export {parsearUrl};