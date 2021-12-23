---
title: Hacking an Asus router to run regular shell scripts on boot
date: "2021-12-23"
description: Asus routers let you SSH in to them for remote management. You'll learn how to write a shell script in flash memory to run any scripts you want, when you want.
---

Asus routers let you SSH in to them for remote management. In this post you'll learn how to run a shell command to run any scripts you want (e.g. routine backup scripts).

I wanted to backup some files on an external disk attached to the router, and store them in DropBox. It's possible by SSH'ing in to the router, writing the script to flash memory (so it isn't erased on reboot), and configuring it to run when a USB device is connected.

First, navigate to your router admin page, go to the Administration Settings and enable login via SSH. It will look something like this:
![Router SSH Config](./router-ssh-config.png "Router SSH Config")

Then SSH in to it. The router is running BusyBox which is a very lightweight Linux executable used for embedded systems. It gives you some very basic utilities [1] (sorry, don't even expect nano!).

The filesystem is running in RAM, which obviously resets on reboot. However, if we write to the `/jffs` path, it will be written to flash memory - this is perfect to persist a script that could run on boot.

There is one problem, if this is the only area we can persist data, how do we actually run a script on boot? Well, we can write to NVRAM (non-volatile RAM). NVRAM is stores key/value pairs, such as your WiFi password, public SSH keys, SSID, etc. but we can use it to set a small command that runs when a USB device is mounted (e.g. on boot) [2].  

Here are some of the WiFi settings if you grep the `nvram show` command:
![nvram show](./wifi-settings.png "nvram show")

The magic parameter we want to set is `script_usbmount` to run a command when a USB device is mounted.

So, putting it altogether, this is what it would look like:
```bash
cd /jffs # Change directory to flash memory
echo "#!/bin/sh" >> ./my-script.sh # Append shell shebang to .my-script.sh in flash memory
echo 'while :; do echo "do something"; sleep 86400; done' >> ./my-script.sh # append command
chmod +x ./my-script.sh # make the script executable
nvram set script_usbmount="sh /jffs/my-script.sh" # set the parameter to execute when a USB device is mounted
nvram commit # commit the parameter to non-volatile memory
service reboot # reboot the router
```

I'm using echo with output redirection to write to a file called `my-script.sh`. I'm terrible with Vim (which _is_ available) so this works well enough for me, but feel free to use Vim if you're comfortable with it. I've excluded the actual backup script as that's worthy of an entire blog post. In a nutshell, when a usb device is mounted the command in `script_usbmount` is executed.  It indefinitely loops, and echo's `"do something"` then sleeps for 24 hours (`86400`s). Obviously this script could contain any code you wanted to reasonably run.

That's it!

Sources:
1. https://www.busybox.net/downloads/BusyBox.html#commands
2. https://www.snbforums.com/threads/how-to-run-cron-and-other-scripts-on-startup.69063/#post-648945