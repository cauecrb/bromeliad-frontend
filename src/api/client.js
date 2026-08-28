// Client HTTP central. Nenhuma tela deveria chamar `fetch` direto —
// tudo passa por aqui, igual o backend centraliza o acesso a dado em
// repositories/services. Trocar de backend, mudar como o token é
// guardado, ou adicionar um header novo em toda requisição: tudo fica
// concentrado neste arquivo.

const BASE_URL = import.meta.env.VITE_API_URL;
const TOKEN_KEY = "bromeliad_token";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export async function apiFetch(path, options = {}) {
  const token = getToken();

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (!response.ok) {
    // FastAPI devolve o erro em { detail: "mensagem" }
    const body = await response.json().catch(() => null);
    const message = body?.detail || `Erro ${response.status}`;
    throw new ApiError(message, response.status);
  }

  if (response.status === 204) return null; // sem corpo (ex: delete)
  return response.json();
}
