import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/Deck";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Google Car · Operate the Network — MSIS 511 Team 8" },
      {
        name: "description",
        content:
          "Consulting-grade case deck recommending Google operate an autonomous mobility service in a separated subsidiary, with capability-gated rollout and selective licensing.",
      },
    ],
  }),
  component: Deck,
});
