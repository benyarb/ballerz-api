/**
 * Ballerz API Cloudflare Workers!
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler deploy src/index.ts --name my-worker` to deploy your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	BALLER: KVNamespace;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {

		const url = new URL(request.url);
    const path = url.pathname;

    // Match the /baller/<id> pattern
    const match = path.match(/^\/baller\/(\d+)$/);
    if (!match) {
      return new Response('Not Found', { status: 404 });
    }
		
		const id = match[1];
    const kvKey = `baller-${id}`;

    try {
      // Retrieve data from KV
      const ballerData = await env.BALLER.get(kvKey);
      if (!ballerData) {
        return new Response('Baller not found', { status: 404 });
      }

      // Parse and return JSON response
      const jsonResponse = JSON.stringify({ id, ...JSON.parse(ballerData) }, null, 2);
      return new Response(jsonResponse, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error retrieving baller data:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
	},
} satisfies ExportedHandler<Env>;

