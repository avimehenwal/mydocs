---
title: Configuration Files
tags:
- linux
- configuration
- files
- rc
- cron
- crontab
---

# Configuration Files

<TagLinks />


Why are configuration files named as rc files in linux?
: [Run commands](https://en.wikipedia.org/wiki/Run_commands) $rc = Run \; Command$

How to run a script on linux startup? Generic solution for linux?
: Use crontab `#crontab -e; @reboot sh $HOME/test.sh` or Add your script to `/etc/init.d/` directory, Update your rc run-levels: $ update-rc.d myScript.sh defaults NN where NN is the order in which it should be executed. 99 for example will mean it would be run after 98 and before 100.

### Cronjobs

* Leave an empty line at the end of the file, else cron ignores the file
* How to check cronjobs logs? `grep CRON /var/log/syslog`
* How do I version control them?
* crontabk file location?
  * `/tmp/crontab.RCHxxs/crontab`
  * get path of current opened file
  * `:!realpath %`
* Replace your crontab with custom crontab
* How to log application logs to syslogs
  * logger "have more fun" > /var/log/mycustomlog
* How to log timestamp with log messages?
* How to check if a package is already installed, else install it?
* Is it possible to import bash functions from shared files?
  * [Importing functions from a shell script](https://stackoverflow.com/questions/12815774/importing-functions-from-a-shell-script)
  * `--source-only`


```
# create and install new crontab
crontab /home/username/filename
crontab -u (whoami) $HOME/aviscripts/avi_crontab

@reboot   cd /home/me/  && sh myscript.sh

grep CRON /var/log/syslog
journalctl -u cron.service
journalctl -t CROND

logger "have more fun" > /var/log/mycustomlog

journalctl -u cron.service | grep -A9 -B5 HOME/aviscripts/on_startup_script.sh

May 27 13:09:07 mehenwal CRON[694]: pam_unix(cron:session): session opened for user avi by (uid=0)
May 27 13:09:07 mehenwal CRON[731]: (avi) CMD (bash $HOME/aviscripts/on_startup_script.sh)
May 27 13:09:07 mehenwal CRON[694]: (CRON) info (No MTA installed, discarding output)
May 27 13:09:07 mehenwal CRON[694]: pam_unix(cron:session): session closed for user avi

```

* [Understanding /etc/init.d](https://www.thegeekyway.com/whats-important-init-d-directory-linux/)
* [(CRON) info (No MTA installed, discarding output)](https://askubuntu.com/questions/222512/cron-info-no-mta-installed-discarding-output-error-in-the-syslog)



<Footer />
