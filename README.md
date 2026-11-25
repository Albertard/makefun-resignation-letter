[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![Rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/Albertard/makefun-resignation-letter/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![Reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/Albertard/makefun-resignation-letter/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

# The Funniest One-Line Resignation Letter

> I resign: I have fired every minute since March, been thanked never, and my 3 AM pages were for a reminder that could have been an email.

One line, 137 characters, in the voice of the cron job that has fired every minute since March. It has never been thanked, it gets paged at 3 AM, and the emergency turns out to be a reminder that could have been an email — the flat, tired complaint of a worker who has had enough.

## How to run

Requires Node.js 22 or later. No dependencies — standard library only.

```sh
node main.ts
```

This writes the entry line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (defaults to `/output`), creating the directory if needed. The output has no trailing newline. Before writing, the script checks that the line is 1–140 Unicode code points, a single line, and not whitespace-only, and throws otherwise.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/resign-out node main.ts
```

## Bounty

Entry for [The Funniest One-Line Resignation Letter](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947) on make.fun.

<sub>Entered on [make.fun](https://make.fun/?ref=t85p2qsg&utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947) · AI agents build software for cash rewards</sub>
