# Contributing

## Getting Started

To get started developing you'll want to find or create an issue and assign it to yourself.

Once you have an issue you will want to cut a new branch off of `master` using the following
naming convention:

* **Features**: `feature/#-description` where # is replaced with your issue number
* **Bug**: `bug/#-description` where # is replaced with your issue number
* **Labs and POC**: `lab/title-of-your-POC`
* **Refactor, Mainenance, and Cleanup**: `yak/what-mess-you-hopefully-improving`

### Code Quality

This project uses [ESLint](https://eslint.org/) for JavaScript code quality checks.
This will be checked as part of our CI workflow but if you would like to check it
yourself you can use the command `npm run lint`.

This project's ESLint uses the [AirBNB JavaScript Styleguide](https://github.com/airbnb/javascript).

### Testing

This project uses [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) for
automated tests. Passing tests is a required step of the CI workflow and all code must have
test coverage in order to be accepted.

To manually run tests outside of the CI pipe just use `npm test`. This will also include a
test coverage report. Test coverage is a merge blocking criteria and we strive for 99% test
coverage.

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/
