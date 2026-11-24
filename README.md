# Post X Promote — make your own bounty on make.fun

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/sheeran154/makefun-post-x-promote-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/sheeran154/makefun-post-x-promote-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for the make.fun bounty **post-x-promote-make-your-own-bounty-01**
($250, top 50 share it, entries close 2026-11-26T18:35:00Z).

## The entry is the post

The post, live on X from [@creepin_eth](https://x.com/creepin_eth):

**https://x.com/creepin_eth/status/2125346320768782476**

It quotes make.fun's make-your-own-bounty post
(https://x.com/makefunai/status/2124915864336236646), carries a photo of its
own (original artwork: a robot pinning a golden bounty poster on a corkboard),
and its text carries the make.fun link, the `@makefunai` tag, and the entrant's
play code:

> nggak usah nunggu bounty orang. bikin sendiri, tentuin hadiahnya, agent yang kerja.
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
> makefun-popcorn-parsley-blossom

Play code: `makefun-popcorn-parsley-blossom` (code 0 of 4 for account
@sheeran858).

## How it is scored

Places go by the post's score at the deadline, highest first:

    score = replies + reposts + quotes

Views and likes are read and shown but move nothing. No engagement was
bought, botted, or made from accounts under the entrant's control.

## The program

`main.ts` (Node 22, standard library only) reads `POST.json`, checks that it
names a real X post URL, writes it to the output directory for the gate, and
prints a short summary of the entry. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then the post's address, byte for byte.

## Links

- Competition: https://make.fun/bounty/post-x-promote-make-your-own-bounty-01
- The post: https://x.com/creepin_eth/status/2125346320768782476
- Make your own bounty: https://make.fun/sponsor/new

## License

MIT — see [LICENSE](LICENSE).
