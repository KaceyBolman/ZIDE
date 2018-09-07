# ZIDE
> "Open source cloud & desktop IDE."
ZIDE is a complete and modular Cloud IDE. It can run on any unix-like machine (Linux, Mac OS X). It is an open source component of [zide.io](https://www.zide.io) (Cloud IDE as a Service).

The IDE can run on your desktop (Linux or Mac), on your server or the cloud. You can use the [zide.io](https://www.zide.io) service to host and manage IDE instances.

ZIDE is built with web technologies: `node.js`, `javascript`, `html` and `less`. The IDE possesses a very modular and extensible architecture, that allows you to build your own features with through add-ons. ZIDE is the first open and modular IDE capable of running both on the Desktop and in the cloud (with offline support).

## How to install and run ZIDE

#### Desktop Applications

Installers for the latest stable build for **Mac** and **Linux** can be downloaded on the [release page](https://github.com/FriendCode/zide/releases).

Instructions on how to install it can be found for each release.

#### Install from NPM

ZIDE can be installed as a Node package and use programatically or from the command line.

Install ZIDE globally using NPM:
```
$ npm install -g zide
```

And start the IDE from the command line:
```
$ zide run ./myworkspace --open
```

Use this command to run and open ZIDE IDE. By default, ZIDE uses GIT to identify you, you can use the option ```--email=john.doe@gmail.com``` to define the email you want to use during GIT operations.

Others comand line options are available and can be list with: ```zide --help```. For deeper configuration, take a look at the documentation about [environment variables](http://help.zide.io/ide/env.html).

#### Command line options

```
-h, --help              output usage information
-V, --version           output the version number
-r, --root [path]       Root folder for the workspace, default is current directory
-t, --templates [list]  Configuration templates, separated by commas
-p, --port [port]       HTTP port
```

#### Need help?

The IDE's documentation can be found at [help.zide.io](http://help.zide.io). Feel free to ask any questions or signal problems by adding issues.

