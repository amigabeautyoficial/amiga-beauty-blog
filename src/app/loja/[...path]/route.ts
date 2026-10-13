import { proxyLojaRequest } from "@/lib/lojaProxy";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  return proxyLojaRequest(request, path);
}
