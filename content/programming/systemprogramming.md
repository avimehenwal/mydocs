---
title: System Programming
tags:
- system
- programming
- application
---

# System Programming

<TagLinks />

::: quote Julia Evans
Let's look into the kernels soule
:::

## System Programming

1. C++
2. Rust

What is [System Programming]? How is it different from Application Programming?
:   Application Programming - Service to user, like notepad, editor

    System Programming - service to other softwares. operating system, game engines, SaaS,
    computational science software, industrial automation

    * Are performance constraint, and uses low level system calls.
    * Systems programming requires a great degree of hardware awareness.

## Linux Debugging Tools

Bugs are easy to solve with right tools, right place to look for and you can deduce whats going on?

* Just be a wizard

Magical Tools | Magical powers
--------------|-------------------
`strace`      | traces system calls, spy on your programs |
`ngrep`       | grep for network |
`netstat`     | |
`wireshark`   | |
`eBPF`        | |
`/Proc`       | |
`perf`        | |
`ps`          | |
`dstat`, `pcp` | disk, network, cpu|
`perf top`    | which fucntions inside a program are running slowly |

* Hey which files did my porgram open?
* The case if missing configuration file
* the case of slow program. Reasons?
  * CPU time
  * too many writes to disk
  * waiting for a slow server
* the case of french website

* Operating System is the owner of all resources
  * Your program is like a gentleman, Hey sire, can you please `open` this file for me?
  * And `read` 4097 bytes from it?
    * our programs knows nothing about RAM, hard disk etc.
* `strace` can make your program run `50x` times slower
  * Tell us all the commands you ran?
  * `opensnoop`

```bash
strace -f -e open bash
strace -e open bash
```

### System Calls

1. socket
2. open
3. read
4. write
5. execve
6. sendto
7. recvfrom

How to figure out the reason for slow program? Not by reading the code, but by being wizards

```bash
time python mystery_1.py
```

* `5% CPU` and what are doing rest of the time? What are you waiting for?
* What is the linux kernel stack, right now for this process?
  * `sudo cat /proc/${PID}/stack`

```py
// slow server
@app.route('/')
def slow():
    time.sleep(2)
    return "Hi!"
app.run()

// cpu intensive - 99%CPU in ~3 secs
// use python profiler
total = 0
for i in xrange(14000000):
    total += i
```

* Program is spending too much time in system space and not user space? What is happening?
* Writing something to home directory
  * And home directory is encrypted
  * its a lot of work to write
* Change HTTP header to request side on other languages
* `perg` can tell you which `java` or `node` functions are actually running on your computer

### perf

* Hardware counter
* sampling profiler
  * gets a general picture, not everything. its periodic snapshots
  * profiler can miss some data
* trace system call
  * captures everything

Difference b/w sampling and tracing?

* CPU to L1 cache `0.5 nano sec`
* CPU to RAM 200x times slower
* How many times your cache was used?

> Latency numbers every programmer should know.

Hey per tell me how many L1 load misses ls had when it ran?
```bash
sudo perf stat -e L1-dcache-load-misses ls

// hey find whats going on there man
sudo perf record -g find /
// creates perf.data file
sudo perf report
```

* How to make it more redable?
  * [Flamegraphs](http://www.brendangregg.com/flamegraphs.html)
* Events you can trace
  * system Calls
  * page faults
  * scheduling events
* You can debug any language if you know system tools


## Related

* [Graphics programming](/programming/graphics.md)

[System Programming]: https://en.wikipedia.org/wiki/System_programming_language

## Useful Github Repos

* https://github.com/danistefanovic/build-your-own-x
* https://github.com/donnemartin/system-design-primer
* https://github.com/public-apis/public-apis
* https://github.com/jlevy/the-art-of-command-line
* https://github.com/trekhleb/javascript-algorithms
* https://github.com/kamranahmedse/developer-roadmap


## References

* https://github.com/iovisor/bcc

<Footer />
