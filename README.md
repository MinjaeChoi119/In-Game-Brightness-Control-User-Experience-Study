# In-Game Brightness Control: A User Experience Study

Games ask you to set screen brightness before you have ever seen the game, and they do it in several different ways. This study compares four of them on three measures: how satisfied players were, how close they landed to the brightness they actually wanted, and how long it took them.

## The four controls

| Method | What the player sees |
| --- | --- |
| **Logo** | A logo image; drag until it looks right |
| **Sample image** | A reference game still; drag until it looks right |
| **Preset** | Three fixed levels to choose between — no slider |
| **Settings panel** | A plain brightness slider in a settings screen |

Every slider is calibrated so that the 50% position is the intended brightness. Presets are the one method without a slider.

A fifth task comes last, and it is not an image: a small scene rendered live in Three.js — a ground plane, trees built from cylinders and spheres, and a point light whose intensity the slider drives directly (`light.intensity = brightness / 50`). The brightness a participant settles on there is treated as the brightness they really wanted, and every method is scored against it.

## Design

- **Order is randomized per participant.** An earlier adjustment biases later ones, so the four methods are shuffled (Fisher–Yates) before the session starts. The live-scene calibration is always last, so it cannot anchor the others.
- **No going back.** Progress cannot be reversed — otherwise a later method would contaminate an earlier answer. A progress bar is shown instead, tracking position across the eleven steps of the session.
- **Survey immediately after each method**, not all at the end, so the experience is still fresh.
- **Per-session random key.** Each session gets a key the participant never sees. Several people can take the study at once from different places and their responses still separate cleanly in the sheet.

Each submitted row is: session key, method index, the brightness the participant set, and the survey answers.

## Participants

35 people started the study and 33 finished it. Because the method a participant sees *first* is the strongest source of order bias, the sample was balanced on it: of those who finished, 8 started on Logo, 7 on Sample image, 9 on Preset and 9 on Settings panel, and **7 were drawn at random from each group** — 28 participants, evenly split across first-method conditions.

## Results

**Satisfaction** — survey rating, higher is better.

| Method | Score |
| --- | --- |
| Sample image | **4.39** |
| Settings panel | 4.21 |
| Logo | 3.93 |
| Preset | 2.86 |

**Effectiveness** — distance between the brightness set with each method and the brightness set on the live scene, on a 1–100 brightness scale. Lower is better.

| Method | Deviation |
| --- | --- |
| Sample image | **9.07** |
| Preset | 13.64 |
| Logo | 24.82 |
| Settings panel | 28.29 |

**Convenience** — time taken to settle on a value. Participants differ in overall pace, so times are mean-normalized per participant. Lower is faster.

| Method | Normalized time |
| --- | --- |
| Preset | **−0.3001** |
| Sample image | −0.0232 |
| Logo | 0.1141 |
| Settings panel | 0.2092 |

## What the three measures show

Only **Sample image** ranks well on all three: highest satisfaction, smallest deviation from the wanted brightness, second fastest.

The other three disagree with themselves. **Settings panel** is second in satisfaction but last in both accuracy and speed — players liked it while landing furthest from the brightness they actually wanted. **Preset** is the reverse: last in satisfaction by a wide margin, yet the fastest method and second most accurate.

So a method that feels good is not necessarily a method that works, and asking users which control they prefer would have picked a different winner than measuring what they did with it.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The instrument — the four image-based methods, the Three.js calibration scene, shuffling, progress tracking, and the survey |
| `Code.gs` | Google Apps Script web app that serves the page, receives each submission and appends it to a Google Sheet |

The page is served by the Apps Script project itself and submits through `google.script.run`, so no endpoint URL or credential is stored here.

## Context

Human-Computer Interaction coursework, Hanyang University, 2024. Participant responses are not included in this repository.
