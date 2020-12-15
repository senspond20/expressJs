import dotenv from 'dotenv'
dotenv.config();

export default{
    PORT : process.env.PORT,
    CSP : {
        directives: {
           defaultSrc: ["'self'"],
           styleSrc: ["'self'",`https://netdna.bootstrapcdn.com https://cdnjs.cloudflare.com 'unsafe-inline'`],
           scriptSrc: ["'self'",`https://netdna.bootstrapcdn.com https://cdnjs.cloudflare.com 'unsafe-inline'`],        
           imgSrc: ["'self'"],
           fontSrc: ["'self'",`https://netdna.bootstrapcdn.com https://cdnjs.cloudflare.com` ]
        }
      }
}