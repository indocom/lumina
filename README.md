# guide.pi-nus.org

An unofficial informational website targeted for NUS freshmen coming from
Indonesia. Data in the website are curated and updated by Perhimpunan Indonesia
NUS.

## Contributing

We really love your contribution for the site's content. There are several steps
to contribute

1. Please fork this repository.
2. do `git remote add upstream git@github.com:indocom/lumina.git`.
3. Before you start making changes, pls do `git pull upstream master` to sync
   changes
4. After making changes, pls make a Pull Request to the master branch detailing
   changes made.

## Deployment

Currently, our deployment repository is located at
<https://github.com/pinus-tech/lumina>. This might change in the future.

To deploy, you must have read-access from this repo and write-access to the
deployment repo. But do check that all merge conflicts are resolved and it is
running okay in your local machine.

To deploy,
1. `git remote add deploy git@github.com:pinus-tech/lumina.git`
2. `git pull origin master`
3. `git push deploy master`

