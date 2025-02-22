  // Middleware that handles redirects

const Middlewares = {
    m1: async function(req) {
        if (req.shouldRedirect) {
          // If a redirect condition is met, return a response and stop the chain.
          return { res: { location: 'some_new_path' }, shouldStop: true };
        } else {
          req.header.push('m1');
          return { req, shouldStop: false };
        }
      }, 
    
    m2: async function(req) {
        req.header.push('m2');
        return { req, shouldStop: false };
    }
    
}

export default Middlewares