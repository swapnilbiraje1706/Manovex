export default async (request, context) => {
  const response = await context.next();
  const html = await response.text();

  const injected = html.replace(
    "/__SUPABASE_URL__/",
    Deno.env.get("SUPABASE_URL") ?? ""
  ).replace(
    "/__SUPABASE_KEY__/",
    Deno.env.get("SUPABASE_PUB_KEY") ?? ""
  ).replace(
    "/__RAZORPAY_KEY_ID__/",
    Deno.env.get("RAZORPAY_KEY_ID") ?? ""
  );

  return new Response(injected, response);
};

export const config = { path: "/" };
