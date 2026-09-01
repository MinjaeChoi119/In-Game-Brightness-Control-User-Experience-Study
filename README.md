# In-Game Brightness Control: A User Experience Study

Games ask you to set screen brightness before you have ever seen the game. They do it in several different ways, and the ways are not equally good. This study compares four of them, with 28 participants.

## The four controls

| # | Method | What the player sees |
| --- | --- | --- |
| 1 | **Logo** | A logo image; drag until it is barely visible |
| 2 | **Sample image** | A reference game still; drag until it looks right |
| 3 | **Preset** | Pick from discrete preset levels, no slider |
| 4 | **Settings panel** | A plain brightness slider in a settings screen |

A fifth task came last: adjust brightness while watching the **live game screen**. That reading is treated as the participant's ideal brightness, so every method can be scored against it.

Every slider is calibrated so that the 50% position is the intended brightness.

## Design decisions

- **Order is randomized per participant.** An earlier adjustment biases later ones, so the four methods appear in random order. The live-screen calibration is always last, so it cannot anchor the others.
- **No going back.** Progress cannot be reversed — otherwise a later method would contaminate an earlier answer. A progress bar is shown instead, so participants can see how much is left.
- **Survey immediately after each method**, not all at the end, so the experience is still fresh.
- **Per-session random key.** Each session gets a key the participant never sees. Several people can take the study at once from different places and their responses still separate cleanly in the sheet.

Each submitted row is: session key, method index, the brightness the participant set, and the survey answers.

## Results

Mean satisfaction (1–5), n = 28:

| Method | Mean satisfaction |
| --- | --- |
| Sample image | **4.39** |
| Settings panel | 4.21 |
| Logo | 3.93 |
| Preset | **2.86** |

Showing people a representative image and letting them tune against it beat every alternative. Presets were clearly the worst — about a point and a half below the best method — which is worth noting, because presets are the cheapest option to build and are common in practice.

Beyond satisfaction, each method was also scored objectively as the gap between the brightness the participant chose and the brightness they chose while watching the live game screen, so perceived quality and actual accuracy could be compared per method.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The instrument — presents each method in randomized order, blocks backtracking, collects ratings |
| `Code.gs` | Google Apps Script web app that receives each submission and appends it to a Google Sheet |

## Why Apps Script

The study needed controlled image stimuli in a randomized, non-reversible order — which a standard Google Form cannot do — while still writing straight into a spreadsheet for analysis. A static page posting to an Apps Script web app gave both, with no server to run.

## Limitations

Order was randomized per participant rather than counterbalanced across participants. With four methods there are 24 possible orders, so 28 participants do not cover the order space evenly; a counterbalanced design would separate method effects from order effects more cleanly.

The survey also leaned on subjective items. Objective measures — time taken to settle on a value, number of readjustments — would carry more weight than self-reported satisfaction alone.

## Context

Human-Computer Interaction coursework, Hanyang University, 2024. Participant responses are not included in this repository.
