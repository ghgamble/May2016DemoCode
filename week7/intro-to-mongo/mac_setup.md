# Installfest (Mac)

## Before You Begin

1. Please check your version of OS X before your begin. (Click the Apple icon in the upper left corner and choose*About this Mac*). The following installation procedures should work for Mavericks or Yosemite. If you are running a different version of OS X, please let an instructor know.
2. Don't type any commands that begin with the word `sudo` unless they appear in this document or an instructor tells you to do so.
3. If you run into trouble or error messages that you aren't sure how to fix, grab an instructor.
4. Update software to the latest version from the app store.

## Download Xcode
Xcode(https://itunes.apple.com/us/app/xcode/id497799835?mt=12)

## XCode Command Line Tools

In Terminal:

```
xcode-select --install

```

## Homebrew

### Install Homebrew

In Terminal:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

```

### Brew Doctor

In Terminal:

```
brew doctor

```

- See what the doctor says. You may need to edit your ~/.bash_profile or make other adjustments. If you're not sure how to handle the output, flag down an instructor!


## Git

### Install

In Terminal, install the distributed version control system Git:

```
brew install git

```

Once that install is complete, type:

```
which git

```

You should see `/usr/local/bin/git`

If you see something different, please notify an instructor.

### Git Configuration

In Terminal:

```
git config --global user.name "Your Name"

```

Then, using the same email you used to sign up with Github,

```
git config --global user.email youremail@whatever.com

```

Then

```
git config --global credential.helper cache
```

And finally

```
git config --global push.default simple
```



## Install the databases MongoDB and PostgreSQL:

```
brew install mongodb

```

Next, create the directory where our Mongo databases will be stored:

```
mkdir -p /data/db

```

Now, we need to make sure that we have the permissions needed to write data to this directory:

```
sudo chown -R $USER /data

```

## Install the PostgreSQL app

- **Download and install Postgres.app (http://postgresapp.com/).** After running the downloaded file, a Finder window will open. Inside this window, drag the Postgres.app icon into the Applications folder.


```

## Install node.js

```
brew install node

```

To make sure that it was installed, run

```
node -v

```

You should see 0.12.4.

## atom text editor

- **Download and install Atom (http://atom.io/).** After running the downloaded file, a Finder window will open. Inside this window, drag the Atom icon into the Applications folder.
- **Add Atom to your dock.** Press Command-Space to open Spotlight. Type Atom, then drag the Atom icon to the dock at the bottom of your screen. This allows you to easily open Atom.


## OPTIONAL

- ***Install Mou.*** Mou allows you to edit and view Markdown files.
