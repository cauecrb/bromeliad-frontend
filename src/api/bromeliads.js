import { apiFetch } from "./client";

export function listBromeliads() {
  return apiFetch("/bromeliads");
}

export function createBromeliad(data) {
  return apiFetch("/bromeliads", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
