async function goThroughMiddleware(req, ...middlewares) {
    console.log('in function goThroughMiddleware', req)
    let idx = 1
    for (const middleware of middlewares) {
      console.log('going through middleware: ', idx)
      const middlewareResponse = await middleware(req);
      if (middlewareResponse.shouldStop) {
        return middlewareResponse;
      }
      req = middlewareResponse.req || req;
      idx++
    }
    return req;
  }
  
  // Middleware that handles redirects
  async function m1(req) {
    if (req.shouldRedirect) {
      // If a redirect condition is met, return a response and stop the chain.
      return { res: { location: 'some_new_path' }, shouldStop: true };
    } else {
      req.header.push('m1');
      return { req, shouldStop: false };
    }
  }
  
  async function m2(req) {
    req.header.push('m2');
    return { req, shouldStop: false };
  }
  

  const req1 = { path: '/some-path', shouldRedirect: false, header: [] };
  const req2 = { path: '/some-path', shouldRedirect: true, header: [] };
  
  goThroughMiddleware(req1, m1, m2)
    .then(result => {
      if (result.res) {
        console.log('Final response:', result.res);
      } else {
        console.log('Final request object:', result);
      }
    })
    .catch(err => console.error('Middleware error:', err));
  
  // Test with a redirecting request:
  // result is either gonna be a modified request that is now ready to hit one of the 
  // endpoints or it's going to be 
  goThroughMiddleware(req2, m1, m2)
    .then(result => {
      if (result.res) {
        console.log('Final response:', result.res);
      } else {
        console.log('Final request object:', result);
      }
    })
    .catch(err => console.error('Middleware error:', err));
  