import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { unstable_dev } from "wrangler";
import type { UnstableDevWorker } from "wrangler";

describe("Worker", () => {
	let worker: UnstableDevWorker;

	beforeAll(async () => {
		worker = await unstable_dev("src/index.ts", {
			experimental: { disableExperimentalWarning: true },
		});
	});

	afterAll(async () => {
		await worker.stop();
	});

	it("should return a baller", async () => {
		const response = await worker.fetch("https://example.com/baller/1");
		const json = await response.json();
		expect(json).toEqual({
			id: "1",
			name: "Baller 1",
			team: "Team 1",
		});
	}
	);
});
