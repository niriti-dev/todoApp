
import Middlewares from "./Middlewares.js";

async function goThroughMiddleware(req) {
    console.log('in function goThroughMiddleware', req)
    for (const [middlewareName, middleware] of Object.entries(Middlewares)) {
        const middlewareResponse = await middleware(req);
      if (middlewareResponse.shouldStop) {
        return middlewareResponse;
      }
      req = middlewareResponse.req || req;
      idx++
    }
    return req;
  }
  

  