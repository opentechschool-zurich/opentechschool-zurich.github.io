# Jekyll for opentechschool-zurich

## Setup

- correctly install ruby and bundle (`apt`...)
- create the project's directory
- create a `Gemfile`: `bundle init`
- `bundle config set --local path 'vendor/bundle'`
- `bundle add jekyll`
- `bundle exec jekyll new --force --skip-bundle .`
- uncomment the support for Github pages in the Gemfile

## Run

```sh
bundle exec jekyll serve
```
