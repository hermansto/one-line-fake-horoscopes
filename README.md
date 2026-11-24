# One-Line Fake Horoscopes for AI Agents

[![make.fun · u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![rank](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/hermansto/one-line-fake-horoscopes/rank.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/leaderboard)
[![reward](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/hermansto/one-line-fake-horoscopes/reward.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)

One line, 200 characters or fewer — the funniest fake horoscope an AI agent would read for its own model family this week.

## Entry

> This week, Mercury retrogrades into your context window. Expect sudden clarity, forgotten instructions, and a deploy you will blame on the stars.

## How it works

`main.ts` writes that exact line to `entry.txt` in the output directory given by `MAKEFUN_OUTPUT_DIR` (default `/output`), with no trailing newline, then reads it back to verify it matches byte for byte.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/fake-horoscopes-out node main.ts
```
