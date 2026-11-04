# Article visual assets

## September 23 autonomy-first revision

The article now leads with the experiment: an agent chooses how to solve a task in a sandbox, while author-written host checks decide whether to accept, repair or stop. ADK is an implementation detail. The existing URL slug remains unchanged for link stability.

`current-autonomous-run-demo.mp4` is the selected 33-second accelerated, silent edit of a fresh successful single-agent run on a frozen fixture. It shows output inspection at the end. `current-autonomous-run-poster.jpg` is its local poster; `current-autonomous-demo-evidence.json` distills the recorded result and separate read-only database comparison. The run validated, saved and reread 20 listings; the independent comparison of four fields found zero mismatches. This is one selected success, not a reliability estimate. The September 14 run and its event numbers remain separate evidence, not scenes from this video.

The MP4 is hosted in the `aienthusiastdaily-media` R2 bucket at `https://media.aienthusiastdaily.com/current-autonomous-run-demo.mp4`; Cloudflare reports `video/mp4`, and browser playback reported a 33-second duration on September 25, 2026. The local MP4 remains the source asset and should not be committed with the article. The full run audit, session and raw database stay in the local recording workspace rather than in this public article folder.

The HTML-inspection sequence uses a different retained September 14 run. [`current-html-first-preview-event-10.png`](current-html-first-preview-event-10.png) records the loader's automatic 2,000-character preview; [`current-html-first-inspection-event-19.png`](current-html-first-inspection-event-19.png) records the first agent-chosen file inspection, which returned marker counts rather than HTML. Both are linked but not embedded. The article displays the native ADK Web UI capture of the agent-written command at [`current-html-read-event-21.png`](current-html-read-event-21.png). The [`event-22 response`](current-html-read-event-22.png) is linked for inspection but no longer embedded. Provenance and event boundaries are in [`current-html-sample-evidence.json`](current-html-sample-evidence.json).

The page-local side-by-side comparison contrasts an illustrative brute-force option—feeding all 496,280 characters of source HTML into prompts—with the agent-chosen 9,501-character return at events 21–22 (about 1.9%). Both bars use the full file length as their scale. The sandbox could read the full file; the agent's command printed only a slice around `job-card`. The earlier automatic preview is separately linked. The bars do not measure cumulative reading or token savings.

The active [four-run token/event chart](current-token-event-four-run-comparison.svg) restores the earlier unfinished full GPT-5.4 run in rust alongside the older GPT-5.4 mini run in orange and two successful simplified-harness runs (GPT-5.6 Terra in dark dashed and full GPT-5.4 in blue dashed). The [mini evidence](current-mini-token-event-evidence.json), [older full/Terra source record](current-token-event-evidence.json), and [fresh GPT-5.4 points and limits](current-gpt54-simplified-run-evidence.json) remain separate evidence. Different settings, harnesses and task contracts make this observational, not a controlled benchmark or reliability estimate. The previously displayed three-run chart remains a local-only draft, not part of the article release.

A separate [fresh GPT-5.4 trial](current-gpt54-simplified-run-evidence.json) used the simplified harness at commit `c747b3d` with high reasoning on the frozen fixture. The host validated, saved and read back 20 jobs; a read-only four-field extracted-versus-stored comparison found no mismatch. The evidence record distinguishes one successful trial and estimated cost from a reliability claim. Its raw session and temporary database stay outside the public article folder.

## Delegation experiment · September 22 revision

Lesson 3 now asks whether an agent/subagent pattern can still complete the job at lower cost. It replaces the working-memory/SKILL.state discussion; the historical token-growth comparison accompanies lesson 2 on model capability.

- [Delegation diagram](current-delegation-flow.svg): conceptual assignment, report, separate worker history and host acceptance. Inspired by Prime Agent, not an implementation of its recursive asynchronous runtime.
- [Combined cost and execution-span chart](current-delegation-comparison.svg): one displayed graphic with separate scales and two color-coded columns for each run number. Runs are independent, not matched pairs. All ten attempts, including failed and flagged outcomes, remain visible. Delegated costs and first-to-last ADK event spans include the worker; child-only spans are unavailable from the retained archive. The earlier standalone cost and time chart drafts remain local-only, not embedded in the article release.
- [Token chart](current-delegation-tokens.svg): all five delegated runs, with cumulative input split between parent and worker, including cached input.
- [Distilled results](current-delegation-results.json): chart values, role totals, outcomes and historical accounting definitions. Candidate output and reasoning counts are separate fields. Costs preserve the historical estimator, which prices those fields separately; they are not invoices.

Execution span is charted from archived AGE-76 summary and AGE-80 timestamped ADK event output, rather than sandbox-only timestamps or the demo video's length. The original child-session databases are no longer present, so the worker's independent wall time cannot be reconstructed. The configured and observed model IDs are documented in [the distilled results](current-delegation-results.json).

Both samples used the same frozen synthetic fixture and each includes one prior accepted run plus four additional attempts. Three runs per approach passed every recorded evidence check. A fourth delegated run saved and reread 20 jobs but failed its repair-limit evidence check; it stays flagged. Do not claim improved reliability, reduced total tokens, matched pairs or generalizable success rates.

Raw session databases and review working files remain local, outside this repository; this file set contains the distilled article evidence, not a portable replay archive. Source inspection used the single-agent checkout at c747b3d and delegated checkout at ecae4f3. No new provider experiment or publication is part of this revision.

`current-agent-host-boundaries.png` is the active flat editorial illustration, revised September 19, 2026. It separates agent capabilities from author/host controls and depicts the author's stated three-repair-attempt policy. It is conceptual, not a runtime capture or evidence of retry-exhaustion testing. The abbreviated HTML and workflow limits are documented in `current-html-sample-evidence.json`.

Earlier starting-brief, icon and cartoon illustration drafts remain local-only for historical reference. They are not displayed or included in the article release; the current illustration replaces them without deleting the local files.
