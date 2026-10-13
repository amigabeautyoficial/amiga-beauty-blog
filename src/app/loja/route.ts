import { proxyLojaRequest } from "@/lib/lojaProxy";

export async function GET(request: Request) {
  return proxyLojaRequest(request, []);
}
