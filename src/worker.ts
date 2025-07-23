/**
 * Welcome to Cloudflare Workers!
 *
 * This is a basic worker script for Natuvital React application
 */

export default {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    // Get the URL from the request
    const url = new URL(request.url);
    
    // Handle API requests
    if (url.pathname.startsWith('/api/')) {
      return handleApiRequest(request, url);
    }
    
    // Serve static assets from the dist directory
    try {
      // This will serve the static assets from your dist directory
      // The actual implementation will be handled by Cloudflare's built-in functionality
      return env.ASSETS.fetch(request);
    } catch (e) {
      // If there's an error or the file doesn't exist, return a 404
      return new Response('Not found', { status: 404 });
    }
  },
};

/**
 * Handle API requests
 */
async function handleApiRequest(request: Request, url: URL): Promise<Response> {
  // Simple health check endpoint
  if (url.pathname === '/api/health') {
    return new Response(JSON.stringify({
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: 'production'
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  
  // Example API endpoint
  if (url.pathname === '/api/info') {
    return new Response(JSON.stringify({
      name: 'Natuvital API',
      version: '1.0.0',
      timestamp: new Date().toISOString()
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Return 404 for any other API endpoints
  return new Response(JSON.stringify({ error: 'Not Found' }), {
    status: 404,
    headers: {
      'Content-Type': 'application/json'
    }
  });
} 